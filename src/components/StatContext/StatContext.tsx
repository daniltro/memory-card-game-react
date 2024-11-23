import { createContext, ReactNode, useEffect, useState } from 'react';
import { IGameStat, IStatisticsContext } from '../../types';

export const StatisticsContext = createContext<IStatisticsContext | null>(null);

export const StatisticsProvider = ({ children }: { children: ReactNode }) => {
  const [stats, setStats] = useState<IGameStat[]>([]);

  // Загружаем статистику из localStorage при монтировании компонента
  useEffect(() => {
    const storedStats = localStorage.getItem('gameStats');
    if (storedStats) {
      setStats(JSON.parse(storedStats));
    }
  }, []);

  // Функция добавления статистики
  const addStat = (newStat: IGameStat) => {
    const updatedStats = [...stats, newStat];
    setStats(updatedStats);

    // Сохраняем обновленную статистику в localStorage
    localStorage.setItem('gameStats', JSON.stringify(updatedStats));
  };

  return (
    <StatisticsContext.Provider value={{ stats, addStat }}>
      {children}
    </StatisticsContext.Provider>
  );
};
