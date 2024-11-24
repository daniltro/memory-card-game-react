import { generateRandomSeed } from './utils';

export const seeds = Array.from({ length: 8 }, () => generateRandomSeed());

// Пресеты сложности
export const difficultyLevels = {
  easy: {
    numSeeds: 4,
    time: 60,
    maxErrors: 3,
    safeMoves: 5,
    pointsPerMatch: 5,
    penaltyPerError: 2,
  },
  medium: {
    numSeeds: 6,
    time: 120,
    maxErrors: 5,
    safeMoves: 5,
    pointsPerMatch: 7,
    penaltyPerError: 3,
  },
  hard: {
    numSeeds: 8,
    time: 90,
    maxErrors: 7,
    safeMoves: 5,
    pointsPerMatch: 9,
    penaltyPerError: 5,
  },
  veryHard: {
    numSeeds: 10,
    time: 60,
    maxErrors: 9,
    safeMoves: 5,
    pointsPerMatch: 5,
    penaltyPerError: 7,
  },
  extreme: {
    numSeeds: 12,
    time: 45,
    maxErrors: 6,
    safeMoves: 5,
    pointsPerMatch: 10,
    penaltyPerError: 10,
  },
};

export const difficultyOrder: Record<string, number> = {
  easy: 0,
  medium: 1,
  hard: 2,
  veryHard: 3,
  extreme: 4,
};
