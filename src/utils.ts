import { ICard, TDifficultyLevel } from './types';

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

export const generateNewSeeds = (numSeeds: number) => {
  const newSeeds = [];
  for (let i = 0; i < numSeeds; i += 1) {
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

export const getMaxHistoryScore = (): number => {
  const score = localStorage.getItem('maxHistoryScore');
  return score ? parseInt(score, 10) : 0; // Если в хранилище нет значения, возвращаем 0
};

export const setMaxHistoryScore = (score: number): void => {
  localStorage.setItem('maxHistoryScore', score.toString()); // Сохраняем максимальный счет за всю историю в локальном хранилище
};

export const getSessionBestScore = (): number => {
  const score = sessionStorage.getItem('sessionBestScore');
  return score ? parseInt(score, 10) : 0; // Если в sessionStorage нет значения, возвращаем 0
};

export const setSessionBestScore = (score: number): void => {
  sessionStorage.setItem('sessionBestScore', score.toString()); // Сохраняем лучший счет текущей сессии в sessionStorage
};

export const getDifficultyTranslation = (
  difficulty: TDifficultyLevel,
): string => {
  const translations: Record<TDifficultyLevel, string> = {
    easy: 'Легкий',
    medium: 'Средний',
    hard: 'Трудный',
    veryHard: 'Очень трудный',
    extreme: 'Экстремальный',
  };

  return translations[difficulty] || 'Уроввень сложности не выбран';
};
