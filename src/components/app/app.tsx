import React, { useEffect, useState } from 'react';

async function fetchImage(seed: string) {
  const url = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const svgText = await response.text();
    return svgText;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
}

const svgToBase64 = (svg: string) => {
  return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svg)))}`;
};

// Если нужно чтобы карточки были рандомные каждый раз.
const generateRandomSeed = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let seed = '';
  for (let i = 0; i < 8; i += 1) {
    seed += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return seed;
};

function App() {
  const [cards, setCards] = useState<string[]>([]);

  useEffect(() => {
    const fetchAllImages = async () => {
      // const seeds = [
      //   'John',
      //   'Alice',
      //   'Charlie',
      //   'Bob',
      //   'Dany',
      //   'Martin',
      //   'Judi',
      //   'Ashley',
      // ];

      // Генерируем случайные seed
      const seeds = Array.from({ length: 8 }, () => generateRandomSeed());

      const fetchedCards = await Promise.all(
        seeds.map((seed) => fetchImage(seed)),
      );
      setCards(fetchedCards as string[]);
    };

    fetchAllImages();
  }, []);

  return (
    <div className="app">
      <h1>Memory cards</h1>
      <div className="cards-container">
        {cards.length > 0 ? (
          cards.map((svg, index) => (
            <img
              className="card"
              key={svg}
              src={svgToBase64(svg)}
              alt={`Card ${index}`}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
