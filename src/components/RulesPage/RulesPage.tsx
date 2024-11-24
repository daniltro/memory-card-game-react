import React from 'react';
import BackButton from '../BackButton/BackButton';

export default function RulesPage() {
  return (
    <>
      <BackButton />
      <div className="rules-container">
        <div className="rules">
          <h2 className="rules__title">Правила игры</h2>
          <p className="rules__description">
            <span>
              <span className="first-letter">Игра </span>&quot;Запомни
              пары&quot; — это тренировка памяти и внимания. Ваша задача — найти
              все пары одинаковых карт. Каждая найденная пара приносит очки, но
              за ошибки вы теряете очки. На каждом уровне сложности есть
              определенное количество безопасных ходов и ошибок.
            </span>
            <span>Игра завершается, когда:</span>
          </p>
          <ul className="rules__list">
            <li className="rules__list-item">Все пары найдены — победа.</li>
            <li className="rules__list-item">Время истекло — поражение.</li>
            <li className="rules__list-item">
              Превышено допустимое количество ошибок — поражение.
            </li>
          </ul>
        </div>
        <div className="about-difficult">
          <h2 className="about-difficult__title">Уровни сложности</h2>
          <p className="about-difficult__description">
            <span className="first-letter">Вы</span> можете выбрать один из
            нескольких уровней сложности. Сложность влияет на количество карт,
            время на игру и допустимые ошибки.
          </p>

          <div className="difficulty-levels">
            <div className="difficulty-level">
              <h3 className="difficulty-level__title">Легкий</h3>
              <p className="difficulty-level__subtitle">
                Идеально для новичков. У вас будет больше времени и минимум пар
                карт:
              </p>
              <ul className="difficulty-level__list">
                <li>Количество пар: 4</li>
                <li>Время: 60 секунд</li>
                <li>Допустимые ошибки: 1</li>
                <li>Безопасных ходов: 5</li>
              </ul>
            </div>

            <div className="difficulty-level">
              <h3 className="difficulty-level__title">Средний</h3>
              <p className="difficulty-level__subtitle">
                Подходит для игроков, знакомых с игрой:
              </p>
              <ul className="difficulty-level__list">
                <li className="difficulty-level__list-item">
                  Количество пар: 6
                </li>
                <li className="difficulty-level__list-item">
                  Время: 120 секунд
                </li>
                <li className="difficulty-level__list-item">
                  Допустимые ошибки: 9
                </li>
                <li className="difficulty-level__list-item">
                  Безопасных ходов: 5
                </li>
              </ul>
            </div>

            <div className="difficulty-level">
              <h3 className="difficulty-level__title">Сложный</h3>
              <p className="difficulty-level__subtitle">
                Испытание для тех, кто уверен в своей памяти:
              </p>
              <ul className="difficulty-level__list">
                <li className="difficulty-level__list-item">
                  Количество пар: 8
                </li>
                <li className="difficulty-level__list-item">
                  Время: 90 секунд
                </li>
                <li className="difficulty-level__list-item">
                  Допустимые ошибки: 8
                </li>
                <li className="difficulty-level__list-item">
                  Безопасных ходов: 5
                </li>
              </ul>
            </div>

            <div className="difficulty-level">
              <h3 className="difficulty-level__title">Очень сложный</h3>
              <p className="difficulty-level__subtitle">Настоящее испытание:</p>
              <ul className="difficulty-level__list">
                <li className="difficulty-level__list-item">
                  Количество пар: 10
                </li>
                <li className="difficulty-level__list-item">
                  Время: 60 секунд
                </li>
                <li className="difficulty-level__list-item">
                  Допустимые ошибки: 7
                </li>
                <li className="difficulty-level__list-item">
                  Безопасных ходов: 5
                </li>
              </ul>
            </div>

            <div className="difficulty-level">
              <h3 className="difficulty-level__title">Экстремальный</h3>
              <p className="difficulty-level__subtitle">
                Для опытных игроков, готовых к серьезным вызовам:
              </p>
              <ul className="difficulty-level__list">
                <li className="difficulty-level__list-item">
                  Количество пар: 12
                </li>
                <li className="difficulty-level__list-item">
                  Время: 45 секунд
                </li>
                <li className="difficulty-level__list-item">
                  Допустимые ошибки: 6
                </li>
                <li className="difficulty-level__list-item">
                  Безопасных ходов: 5
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
