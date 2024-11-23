import React, { createContext, ReactNode, useContext, useState } from 'react';
import BackButton from '../BackButton/BackButton';

interface IGameStat {
  date: string;
  completionTime: string;
  errors: number;
  difficulty: string;
  score: number;
}

interface IStatisticsContext {
  stats: IGameStat[];
  addStat: (newStat: IGameStat) => void;
}

export const StatisticsContext = createContext<IStatisticsContext | null>(null);

export const StatisticsProvider = ({ children }: { children: ReactNode }) => {
  const [stats, setStats] = useState<IGameStat[]>([]);

  const addStat = (newStat: IGameStat) => {
    setStats((prevStats) => [...prevStats, newStat]);
  };

  return (
    <StatisticsContext.Provider value={{ stats, addStat }}>
      {children}
    </StatisticsContext.Provider>
  );
};

export default function StatisticsPage() {
  const context = useContext(StatisticsContext);
  if (!context) {
    throw new Error(
      'StatisticsContext должен быть обернут в StatisticsProvider',
    );
  }
  const { stats } = context;

  return (
    <>
      <BackButton />
      <div className="statistics-page">
        <h1>Статистика</h1>
        <ul>
          {stats.map((stat, index) => (
            <li key={index}>
              <p>Дата: {stat.date}</p>
              <p>Время завершения: {stat.completionTime}</p>
              <p>Ошибки: {stat.errors}</p>
              <p>Сложность: {stat.difficulty}</p>
              <p>Очки: {stat.score}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
