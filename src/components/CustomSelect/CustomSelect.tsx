import React from 'react';
import { Difficulty } from '../../types';

export interface ICustomSelectProps {
  selectedValue: string;
  onSelect: (value: Difficulty) => void;
}

export default function CustomSelect({
  selectedValue,
  onSelect,
}: ICustomSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (value: Difficulty) => {
    onSelect(value);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionKeyDown = (
    event: React.KeyboardEvent,
    value: Difficulty,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSelect(value);
    }
  };

  return (
    <div className="custom-select">
      <div
        className="select-box"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <span>{selectedValue}</span>
        <i className="arrow">&#9660;</i>
      </div>
      {isOpen && (
        <div className="options">
          <div
            className="option"
            onClick={() => handleSelect('easy')}
            onKeyDown={(event) => handleOptionKeyDown(event, 'easy')}
            role="button"
            tabIndex={0}
          >
            Легкий
          </div>
          <div
            className="option"
            onClick={() => handleSelect('medium')}
            onKeyDown={(event) => handleOptionKeyDown(event, 'medium')}
            role="button"
            tabIndex={0}
          >
            Средний
          </div>
          <div
            className="option"
            onClick={() => handleSelect('hard')}
            onKeyDown={(event) => handleOptionKeyDown(event, 'hard')}
            role="button"
            tabIndex={0}
          >
            Трудный
          </div>
          <div
            className="option"
            onClick={() => handleSelect('veryHard')}
            onKeyDown={(event) => handleOptionKeyDown(event, 'veryHard')}
            role="button"
            tabIndex={0}
          >
            Очень трудный
          </div>
          <div
            className="option"
            onClick={() => handleSelect('extreme')}
            onKeyDown={(event) => handleOptionKeyDown(event, 'extreme')}
            role="button"
            tabIndex={0}
          >
            Экстремальный
          </div>
        </div>
      )}
    </div>
  );
}
