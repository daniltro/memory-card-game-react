import React, { useEffect, useState } from 'react';
import { generateNewSeeds, shuffleArray, svgToBase64 } from '../../utils';
import fetchImage from '../../api/api';
import { ICard } from '../../types';
import BackButton from '../BackButton/BackButton';
import { difficultyLevels } from '../../constants';

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

  const { safeMoves, pointsPerMatch, penaltyPerError } =
    difficultyLevels[difficulty];

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
  };

  useEffect(() => {
    const seeds = generateNewSeeds();
    fetchAllImages(seeds);
  }, []);

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

  const handleRestartGame = () => {
    setCards([]);
    setOpenedCards([]);
    setMatchedCards([]);
    setSteps(0);

    const newSeeds = generateNewSeeds();
    fetchAllImages(newSeeds);
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
      <div className="playing-field__button-box">
        <BackButton />
      </div>
      <h1 className="playing-field__title">Запомни пары</h1>
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
      <div className="game-info">
        <p className="count-steps">Сделано ходов: {steps}</p>
        <p className="count-score">Набрано очков: {score}</p>
      </div>
      <button
        type="button"
        className="restart-game-button button"
        onClick={handleRestartGame}
        onKeyDown={handleRestartGameKeyDown}
        tabIndex={0}
      >
        Сыграть ещё
      </button>
    </div>
  );
}
