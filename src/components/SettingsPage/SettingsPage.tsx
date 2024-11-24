import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

import { useDifficulty } from '../DifficultContext/DifficultContext';
import CustomSelect from '../CustomSelect/CustomSelect';
import { getDifficultyTranslation } from '../../utils';

export default function SettingsPage() {
  const { difficulty, setDifficulty } = useDifficulty(); // Получаем уровень сложности и функцию для его изменения
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/new-game');
  };

  return (
    <>
      <BackButton />
      <div className="settings-page">
        <h1 className="settings-page__title">Настройки</h1>
        <div className="settings">
          <span>
            <p className="difficulty__subtitle">Выберите уровень сложности:</p>
            <CustomSelect
              selectedValue={getDifficultyTranslation(difficulty)}
              onSelect={setDifficulty}
            />
          </span>
        </div>
        <button
          type="button"
          onClick={handleStartGame}
          className="button start-game-button"
        >
          Начать игру
        </button>
      </div>
    </>
  );
}
