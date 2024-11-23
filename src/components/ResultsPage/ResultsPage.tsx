import React, { createContext, ReactNode, useContext, useState } from 'react';
import BackButton from '../BackButton/BackButton';
import { StatisticsContext } from '../StatContext/StatContext';
import { getDifficultyTranslation } from '../../utils';
import { TDifficultyLevel } from '../../types';

export default function ResultPage() {
  const context = useContext(StatisticsContext);
  if (!context) {
    throw new Error(
      'StatisticsContext должен быть обернут в StatisticsProvider',
    );
  }
  const { stats } = context;

  // Количество результатов на одной странице
  const resultsPerPage = 10;

  // Состояние текущей страницы
  const [currentPage, setCurrentPage] = useState(1);

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(stats.length / resultsPerPage);

  // Определяем индексы для отображения текущей страницы
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentPageStats = stats.slice(startIndex, endIndex);

  // Обработчики для изменения страницы
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <BackButton />
      <div className="result-page">
        <h1 className="result-page__title">Результаты</h1>

        {/* Таблица с результатами */}
        <table className="result-page__table">
          <thead>
            <tr>
              <th>Дата и время</th>
              <th>Время прохождения</th>
              <th>Ошибки</th>
              <th>Сложность</th>
              <th>Очки</th>
            </tr>
          </thead>
          <tbody>
            {currentPageStats.map((stat, index) => (
              <tr key={index}>
                <td>{stat.date}</td>
                <td>{stat.completionTime}</td>
                <td>{stat.errors}</td>
                <td>
                  {getDifficultyTranslation(
                    stat.difficulty as TDifficultyLevel,
                  )}
                </td>
                <td>{stat.score}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Предыдущая
          </button>
          <span>
            Страница {currentPage} из {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Следующая
          </button>
        </div>
      </div>
    </>
  );
}
