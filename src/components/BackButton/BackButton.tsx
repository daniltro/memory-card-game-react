import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="back-button button"
      onClick={() => navigate('/')}
    >
      Назад в меню
    </button>
  );
}
