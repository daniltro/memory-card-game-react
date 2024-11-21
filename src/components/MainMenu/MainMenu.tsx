import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <div className="main-menu">
      <h1 className="main-menu__title">Добро пожаловать в игру!</h1>
      <nav className="main-menu__nav">
        <ul className="main-menu__list">
          <li className="main-menu__list-item">
            <Link className="main-menu__link" to="/new-game">
              Новая игра
            </Link>
          </li>
          <li className="main-menu__list">
            <Link className="main-menu__link" to="/settings">
              Настройки
            </Link>
          </li>
          <li className="main-menu__list">
            <Link className="main-menu__link" to="/statistics">
              Статистика
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
