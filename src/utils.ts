import { ICard } from "./types";

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
  for (let i = 0; i < 8; i++) {
    newSeeds.push(generateRandomSeed());
  }
  return newSeeds;
};

export const shuffleArray = (array: ICard[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
