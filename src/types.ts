export interface ICard {
  id: string;
  svg: string;
}

export interface IGameStat {
  date: string;
  completionTime: string;
  errors: number;
  difficulty: string;
  score: number;
  [key: string]: string | number;
}

export interface IStatisticsContext {
  stats: IGameStat[];
  addStat: (newStat: IGameStat) => void;
}

export type TDifficultyLevel =
  | 'easy'
  | 'medium'
  | 'hard'
  | 'veryHard'
  | 'extreme';

export interface ITimerProps {
  timer: number;
}

export interface ProgressBarProps {
  progressPercentage: number;
}

export interface IGameOverModalProps {
  isOpen: boolean;
  onRestart: () => void;
  message: string;
}

export type Difficulty = 'easy' | 'medium' | 'hard' | 'veryHard' | 'extreme';
