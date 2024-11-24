import React, { useContext, useEffect, useState } from 'react';
import {
  generateNewSeeds,
  getDifficultyTranslation,
  getMaxHistoryScore,
  getSessionBestScore,
  setMaxHistoryScore,
  setSessionBestScore,
  shuffleArray,
  svgToBase64,
} from '../../utils';
import fetchImage from '../../api/api';
import { ICard } from '../../types';
import BackButton from '../BackButton/BackButton';
import { difficultyLevels } from '../../constants';
import GameOverModal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import { StatisticsContext } from '../StatContext/StatContext';
import { useDifficulty } from '../DifficultContext/DifficultContext';
import Timer from '../Timer/Timer';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function PlayingField() {
  const { difficulty } = useDifficulty();

  const {
    pointsPerMatch,
    penaltyPerError,
    safeMoves,
    numSeeds,
    time,
    maxErrors,
  } = difficultyLevels[difficulty];

  const [cards, setCards] = useState<ICard[]>([]);
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [steps, setSteps] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const [remainingSafeMoves, setRemainingSafeMoves] =
    useState<number>(safeMoves);
  const [countGame, setCountGame] = useState<number>(0);
  const [gameMessage, setGameMessage] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(time);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [maxHistoryScore, setMaxHistoryScoreState] = useState<number>(0);
  const [sessionBestScore, setSessionBestScoreState] = useState<number>(0);

  const context = useContext(StatisticsContext);
  if (!context) {
    throw new Error(
      'StatisticsContext должен быть обернут в StatisticsProvider',
    );
  }
  const { addStat } = context;

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
    setIsLoading(false);
  };

  const handleEndGame = (reason: 'win' | 'timeout' | 'loss') => {
    // Добавляем статистику
    const newStat = {
      date: new Date().toLocaleDateString(),
      completionTime: `${120 - timeLeft} секунд`,
      errors,
      difficulty,
      score,
    };

    addStat(newStat);

    if (score > sessionBestScore) {
      setSessionBestScore(score);
      const sessionScore = getSessionBestScore();
      setSessionBestScoreState(sessionScore);
    }

    if (score > maxHistoryScore) {
      setMaxHistoryScore(score);
      setMaxHistoryScoreState(score);
    }

    if (reason === 'win') {
      setGameMessage('Поздравляем! Вы нашли все пары!');
    } else if (reason === 'timeout') {
      setGameMessage('Время вышло! Попробуйте ещё раз!');
    } else if (reason === 'loss') {
      setGameMessage('Превышено количество ошибок! Попробуйте ещё раз!');
    }

    setIsGameOver(true);
    setCountGame((prevCount) => prevCount + 1);
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
    setErrors(0);
    setRemainingSafeMoves(safeMoves);
    setIsGameOver(false);
    const newSeeds = generateNewSeeds(numSeeds);
    setIsLoading(true);
    await fetchAllImages(newSeeds);
    setTimeLeft(time);
  };

  const progressPercentage =
    cards.length > 0
      ? Math.round((matchedCards.length / (cards.length / 2)) * 100)
      : 0;

  useEffect(() => {
    const seeds = generateNewSeeds(numSeeds);

    const sessionScore = getSessionBestScore();
    setSessionBestScoreState(sessionScore);

    const maxScore = getMaxHistoryScore();
    setMaxHistoryScoreState(maxScore);
    fetchAllImages(seeds);
  }, []);

  useEffect(() => {
    if (matchedCards.length === cards.length / 2 && cards.length > 0) {
      handleEndGame('win');
    }
  }, [matchedCards, cards]);

  useEffect(() => {
    if (isLoading || isGameOver || timeLeft <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleEndGame('timeout');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isLoading, isGameOver]);

  useEffect(() => {
    if (openedCards.length < 2) {
      return;
    }
    const firstMatched = cards[openedCards[0]];
    const secondMatched = cards[openedCards[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatchedCards([...matchedCards, firstMatched.id]);
      setScore((prevScore) => prevScore + pointsPerMatch);
    } else if (remainingSafeMoves > 0) {
      setRemainingSafeMoves((prev) => prev - 1);
    } else {
      setScore((prevScore) => Math.max(prevScore - penaltyPerError, 0));
      setErrors((prevErrors) => {
        const newErrors = prevErrors + 1;
        if (newErrors > maxErrors) {
          handleEndGame('loss');
        }
        return newErrors;
      });
    }

    setSteps((prevSteps) => prevSteps + 1);

    if (openedCards.length === 2) {
      setTimeout(() => setOpenedCards([]), 1000);
    }
  }, [openedCards]);

  return (
    <div className="playing-field">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="playing-field__button-box">
            <BackButton />
          </div>
          <div className="game-info">
            <ProgressBar progressPercentage={progressPercentage} />
            <p className="count-steps">Сделано ходов: {steps}</p>
            <p className="count-errors">
              Сделано ошибок: {errors} / {maxErrors}
            </p>
            <p className="safe-moves">Безопасных ходов: {remainingSafeMoves}</p>
            <p className="count-score">Набрано очков: {score}</p>
            <p className="count-game">
              Сыграно игр в текущей сессии: {countGame}
            </p>
            <p className="session-best-score">
              Лучший счет за сессию: {sessionBestScore}
            </p>
            <p className="max-history-score">
              Лучший счет за всю историю: {maxHistoryScore}
            </p>
            <Timer timer={timeLeft} />
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
          <div className="current-difficult">
            <p>
              Текущий уровень сложности:{' '}
              <span className="current-difficult__value">
                {getDifficultyTranslation(difficulty)}
              </span>
            </p>
          </div>
          <button
            type="button"
            className="restart-game-button button"
            onClick={handleRestartGame}
            tabIndex={0}
          >
            Сыграть ещё
          </button>

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
