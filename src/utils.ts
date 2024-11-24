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
  return score ? parseInt(score, 10) : 0;
};

export const setMaxHistoryScore = (score: number): void => {
  localStorage.setItem('maxHistoryScore', score.toString());
};

export const getSessionBestScore = (): number => {
  const score = sessionStorage.getItem('sessionBestScore');
  return score ? parseInt(score, 10) : 0;
};

export const setSessionBestScore = (score: number): void => {
  sessionStorage.setItem('sessionBestScore', score.toString());
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

export function parseDateDDMMYYYY(dateString: string): number {
  const [day, month, year] = dateString.split('.').map(Number);
  if (!day || !month || !year) return NaN;
  return new Date(year, month - 1, day).getTime();
}

export function parseTimeToSeconds(timeString: string): number {
  const secondsMatch = timeString.match(/(\d+)\s*секунд/);
  if (secondsMatch) {
    return parseInt(secondsMatch[1], 10);
  }

  console.warn(`Unrecognized time format: ${timeString}`);
  return 0;
}

export function generateId(): string {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000);
  return `${timestamp}-${randomNum}`;
}
