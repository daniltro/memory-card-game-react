import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <div className="main-menu">
      <h1 className="playing-field__title"> Игра &quot;Запомни пары&quot;</h1>

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
            <Link className="main-menu__link" to="/results">
              Результаты
            </Link>
          </li>
          <li className="main-menu__list">
            <Link className="main-menu__link" to="/rules">
              Правила
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
