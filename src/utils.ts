import { ICard } from './types';

export const svgToBase64 = (svg: string) => {
  return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svg)))}`;
};

export const generateRandomSeed = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let seed = '';
  for (let i = 0; i < 8; i += 1) {
    seed += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return seed;
};

export const generateNewSeeds = () => {
  const newSeeds = [];
  for (let i = 0; i < 8; i += 1) {
    newSeeds.push(generateRandomSeed());
  }
  return newSeeds;
};

export const shuffleArray = (array: ICard[]) => {
  const arrayCopy = [...array];
  let currentIndex = arrayCopy.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arrayCopy[currentIndex];
    arrayCopy[currentIndex] = arrayCopy[randomIndex];
    arrayCopy[randomIndex] = temporaryValue;
  }
  return arrayCopy;
};
