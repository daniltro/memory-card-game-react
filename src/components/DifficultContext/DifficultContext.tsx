import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';

type Difficulty = 'easy' | 'medium' | 'hard' | 'veryHard' | 'extreme';

interface DifficultyContextType {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
}

const DifficultyContext = createContext<DifficultyContextType | undefined>(
  undefined,
);

export function DifficultyProvider({ children }: { children: ReactNode }) {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy'); // Изначально установим "easy"

  // Используем useMemo для мемоизации значения контекста
  const value = useMemo(
    () => ({ difficulty, setDifficulty }),
    [difficulty, setDifficulty],
  );

  return (
    <DifficultyContext.Provider value={value}>
      {children}
    </DifficultyContext.Provider>
  );
}

export const useDifficulty = (): DifficultyContextType => {
  const context = useContext(DifficultyContext);
  if (!context) {
    throw new Error('useDifficulty must be used within a DifficultyProvider');
  }
  return context;
};
