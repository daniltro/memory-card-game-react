import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

import { useDifficulty } from '../DifficultContext/DifficultContext';

export default function SettingsPage() {
  const { difficulty, setDifficulty } = useDifficulty(); // Получаем уровень сложности и функцию для его изменения
  const navigate = useNavigate();

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(
      e.target.value as 'easy' | 'medium' | 'hard' | 'veryHard' | 'extreme',
    );
  };

  const handleStartGame = () => {
    navigate('/new-game'); // Переход к игре с выбранным уровнем сложности
  };

  return (
    <>
      <BackButton />
      <div className="settings-page">
        <h1>Настройки</h1>
        <div className="settings">
          <label htmlFor="difficulty">
            Выберите уровень сложности:
            <select
              className="settings__select"
              id="difficulty"
              value={difficulty}
              onChange={handleDifficultyChange}
            >
              <option value="easy">Легкий</option>
              <option value="medium">Средний</option>
              <option value="hard">Трудный</option>
              <option value="veryHard">Очень трудный</option>
              <option value="extreme">Экстремальный</option>
            </select>
          </label>
        </div>
        <button
          type="button"
          onClick={handleStartGame}
          className=" button start-game-button"
        >
          Начать игру
        </button>
      </div>
    </>
  );
}
