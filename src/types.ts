export interface ICard {
  id: string;
  svg: string;
}

// export interface IGameStat {
//   date: string;
//   completionTime: string;
//   errors: number;
//   difficulty: string;
//   score: number;
// }

export interface IGameStat {
  date: string;
  completionTime: string;
  errors: number;
  difficulty: string;
  score: number;
  [key: string]: string | number; // Добавление индексной сигнатуры
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
