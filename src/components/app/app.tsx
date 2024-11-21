import React, { useEffect, useState } from 'react';
import { fetchImage } from '../../api/api';
import { generateNewSeeds, svgToBase64 } from '../../utils';
import { ICard } from '../../types';

function App() {
  const [cards, setCards] = useState<ICard[]>([]);
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  console.log(cards);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [steps, setSteps] = useState<number>(0);

  const fetchAllImages = async (seeds: string[]) => {
    const fetchedCards = await Promise.all(
      seeds.map(async (seed) => {
        const svg = await fetchImage(seed);
        return { id: seed, svg };
      }),
    );

    const pairedCards = [...fetchedCards, ...fetchedCards];

    setCards(pairedCards as ICard[]);
  };

  useEffect(() => {
    const seeds = generateNewSeeds();
    fetchAllImages(seeds);
  }, []);

  const flipCard = (index: number) => {
    setOpenedCards((opened) => [...opened, index]);
    setSteps((prevSteps) => prevSteps + 1);
  };

  useEffect(() => {
    if (openedCards.length < 2) {
      return;
    }
    const firstMatched = cards[openedCards[0]];
    const secondMatched = cards[openedCards[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatchedCards([...matchedCards, firstMatched.id]);
    }

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

  return (
    <div className="app">
      <h1 className="app-title">Запомни пары</h1>
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
      <p className="count-steps">Сделано ходов: {steps}</p>
      <button className="restart-game-button" onClick={handleRestartGame}>
        Новая игра
      </button>
    </div>
  );
}

export default App;
