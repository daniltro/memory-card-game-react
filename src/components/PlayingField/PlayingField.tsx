import React, { useEffect, useState } from 'react';
import { generateNewSeeds, shuffleArray, svgToBase64 } from '../../utils';
import fetchImage from '../../api/api';
import { ICard } from '../../types';
import BackButton from '../BackButton/BackButton';
import { difficultyLevels } from '../../constants';
import GameOverModal from '../Modal/Modal';
import Loader from '../Loader/Loader';

export default function PlayingField({
  difficulty,
}: {
  difficulty: 'easy' | 'medium' | 'hard';
}) {
  const [cards, setCards] = useState<ICard[]>([]);
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [steps, setSteps] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [countGame, setCountGame] = useState<number>(0);
  const [gameMessage, setGameMessage] = useState<string>(''); // Сообщение для модального окна
  // Таймер
  const [timeLeft, setTimeLeft] = useState<number>(120);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Флаг загрузки

  const { safeMoves, pointsPerMatch, penaltyPerError } =
    difficultyLevels[difficulty];

  //Запрос карточек
  useEffect(() => {
    const seeds = generateNewSeeds();
    fetchAllImages(seeds);
  }, []);

  // Проверка на победу
  useEffect(() => {
    if (matchedCards.length === cards.length / 2 && cards.length > 0) {
      setIsGameOver(true);
      setGameMessage('Поздравляем! Вы нашли все пары!');
    }
  }, [matchedCards, cards]);

  // Управление таймером
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsGameOver(true); // Игра заканчивается
      setGameMessage('Время вышло! Попробуйте ещё раз!');
      setCountGame((prevCountGame) => prevCountGame + 1);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId); // Очистка таймера
  }, [timeLeft]);

  // Логика начисления очков
  useEffect(() => {
    if (openedCards.length < 2) {
      return;
    }
    const firstMatched = cards[openedCards[0]];
    const secondMatched = cards[openedCards[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatchedCards([...matchedCards, firstMatched.id]);
      setScore((prevScore) => prevScore + pointsPerMatch); // Очки за совпадение
    } else if (steps >= safeMoves) {
      setScore((prevScore) => Math.max(prevScore - penaltyPerError, 0)); // Штраф, но не меньше 0
    }

    setSteps((prevSteps) => prevSteps + 1);

    if (openedCards.length === 2) {
      setTimeout(() => setOpenedCards([]), 1000);
    }
  }, [openedCards]);

  const fetchAllImages = async (seeds: string[]) => {
    const fetchedCards = await Promise.all(
      seeds.map(async (seed) => {
        const svg = await fetchImage(seed);
        return { id: seed, svg };
      }),
    );

    const pairedCards = [...fetchedCards, ...fetchedCards];
    const shuffledCards = shuffleArray(pairedCards as ICard[]);

    setCards(shuffledCards);
    setIsLoading(false); // Завершение загрузки
  };

  const flipCard = (index: number) => {
    if (
      openedCards[openedCards.length - 1] !== index &&
      openedCards.length < 2
    ) {
      setOpenedCards((opened) => [...opened, index]);
    }
  };

  const flipCardKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      flipCard(index);
    }
  };
  const handleRestartGame = async () => {
    setCards([]);
    setOpenedCards([]);
    setMatchedCards([]);
    setSteps(0);
    setScore(0);
    setIsGameOver(false);

    const newSeeds = generateNewSeeds();
    setIsLoading(true);
    await fetchAllImages(newSeeds);

    setTimeLeft(120); // Сброс таймера
  };

  const handleRestartGameKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleRestartGame();
    }
  };

  return (
    <div className="playing-field">
      {/* Если идет загрузка, показываем лоадер */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="playing-field__button-box">
            <BackButton />
          </div>
          <h1 className="playing-field__title">Запомни пары</h1>
          <div className="game-info">
            <p className="count-steps">Сделано ходов: {steps}</p>
            <p className="count-score">Набрано очков: {score}</p>
            <p className="timer">Оставшееся время: {timeLeft} секунд</p>
            <p className="count-game">Сыграно игр: {countGame}</p>
          </div>
          <div className="cards-container">
            {cards.length > 0 ? (
              cards.map(({ id, svg }, index) => {
                let isFlipped = false;

                if (openedCards.includes(index)) {
                  isFlipped = true;
                }

                if (matchedCards.includes(id)) {
                  isFlipped = true;
                }

                return (
                  <div
                    key={`${id}-${index + 1}`}
                    className={`card ${isFlipped ? 'card--flipped' : ''}`}
                    onClick={() => flipCard(index)}
                    onKeyDown={(e) => flipCardKeyDown(e, index)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="card__inner">
                      <div className="card__front-side">
                        <img
                          className="card-image"
                          src={svgToBase64(svg)}
                          alt="front-side-card"
                        />
                      </div>
                      <div className="card__back-side">
                        <img
                          className="card-image"
                          src="./images/question.png"
                          alt="back-side-card"
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <button
            type="button"
            className="restart-game-button button"
            onClick={handleRestartGame}
            tabIndex={0}
          >
            Сыграть ещё
          </button>

          {/* Модальное окно */}
          <GameOverModal
            isOpen={isGameOver}
            onRestart={handleRestartGame}
            message={gameMessage}
          />
        </>
      )}
    </div>
  );
}
