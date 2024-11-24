import React, {
  useMemo,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { IGameStat, IStatisticsContext } from '../../types';
import { generateId } from '../../utils';

export const StatisticsContext = createContext<IStatisticsContext | null>(null);

export function StatisticsProvider({ children }: { children: ReactNode }) {
  const [stats, setStats] = useState<IGameStat[]>([]);

  useEffect(() => {
    const storedStats = localStorage.getItem('gameStats');
    if (storedStats) {
      const statsWithId = JSON.parse(storedStats).map((stat: IGameStat) => ({
        ...stat,
        id: stat.id || generateId(),
      }));
      setStats(statsWithId);
    }
  }, []);

  // Функция добавления статистики
  const addStat = (newStat: IGameStat) => {
    const updatedStats = [...stats, newStat];
    setStats(updatedStats);

    // Сохраняем обновленную статистику в localStorage
    localStorage.setItem('gameStats', JSON.stringify(updatedStats));
  };

  const value = useMemo(() => ({ stats, addStat }), [stats]);

  return (
    <StatisticsContext.Provider value={value}>
      {children}
    </StatisticsContext.Provider>
  );
}
