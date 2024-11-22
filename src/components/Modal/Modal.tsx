import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GameOverModalProps {
  isOpen: boolean;
  onRestart: () => void;
  message: string;
}

export default function GameOverModal({
  isOpen,
  onRestart,
  message,
}: GameOverModalProps): JSX.Element | null {
  if (!isOpen) return null;
  const navigate = useNavigate();
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal__title">Игра окончена</h2>
        <p className="modal__message">{message}</p>
        <div className="modal__button-box">
          <button
            type="button"
            className="button restart-button"
            onClick={onRestart}
          >
            Сыграть ещё
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="button to-main-button"
          >
            В главное меню
          </button>
        </div>
      </div>
    </div>
  );
}
