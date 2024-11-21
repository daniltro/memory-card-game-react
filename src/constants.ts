import { generateRandomSeed } from './utils';

export const seeds = Array.from({ length: 8 }, () => generateRandomSeed());

export const difficultyLevels = {
  easy: {
    safeMoves: 5,
    pointsPerMatch: 5,
    penaltyPerError: 2,
  },
  medium: {
    safeMoves: 3,
    pointsPerMatch: 10,
    penaltyPerError: 5,
  },
  hard: {
    safeMoves: 4,
    pointsPerMatch: 20,
    penaltyPerError: 10,
  },
};
