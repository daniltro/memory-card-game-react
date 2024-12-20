import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IGameOverModalProps } from '../../types';

export default function GameOverModal({
  isOpen,
  onRestart,
  message,
}: IGameOverModalProps): JSX.Element | null {
  const navigate = useNavigate();
  if (!isOpen) return null;
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
