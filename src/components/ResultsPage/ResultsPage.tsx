import React, { useContext, useState } from 'react';
import BackButton from '../BackButton/BackButton';
import { StatisticsContext } from '../StatContext/StatContext';
import {
  getDifficultyTranslation,
  parseDateDDMMYYYY,
  parseTimeToSeconds,
} from '../../utils';
import { IGameStat, TDifficultyLevel } from '../../types';

export default function ResultPage() {
  // Получаем данные из контекста
  const context = useContext(StatisticsContext);
  if (!context) {
    throw new Error(
      'StatisticsContext должен быть обернут в StatisticsProvider',
    );
  }
  const { stats } = context;

  // Параметры для пагинации
  const resultsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Параметры для сортировки
  const [sortColumn, setSortColumn] = useState<keyof IGameStat | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Порядок сортировки для сложности
  const difficultyOrder: Record<string, number> = {
    easy: 0,
    medium: 1,
    hard: 2,
    veryHard: 3,
    extreme: 4,
  };

  // Функция сортировки
  const sortStats = (data: typeof stats) => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      // Сортировка для числовых значений (например, очки, ошибки)
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        // Сортировка по колонке "Дата"
        if (sortColumn === 'date') {
          const dateA = parseDateDDMMYYYY(aValue) || 0;
          const dateB = parseDateDDMMYYYY(bValue) || 0;
          return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        }

        // Сортировка по колонке "Время прохождения"
        if (sortColumn === 'completionTime') {
          const timeA = parseTimeToSeconds(aValue as string) || 0;
          const timeB = parseTimeToSeconds(bValue as string) || 0;
          return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
        }

        // Сортировка по сложности
        if (sortColumn === 'difficulty') {
          const difficultyA = difficultyOrder[aValue] || 0;
          const difficultyB = difficultyOrder[bValue] || 0;
          return sortOrder === 'asc'
            ? difficultyA - difficultyB
            : difficultyB - difficultyA;
        }

        // Строковые значения: сортировка по алфавиту
        return sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return 0;
    });
  };

  // Сортированные данные
  const sortedStats = sortStats(stats);

  // Обработчик клика для сортировки
  const handleSort = (column: keyof IGameStat) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  // Пагинация: вычисление общего числа страниц и отображение текущей страницы
  const totalPages = Math.ceil(stats.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentPageStats = sortedStats.slice(startIndex, endIndex);

  // Переход на следующую страницу
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((current) => current + 1);
    }
  };

  // Переход на предыдущую страницу
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((current) => current - 1);
    }
  };

  // Функция для возврата класса сортировки
  const getSortClass = (column: keyof IGameStat) => {
    if (sortColumn === column) {
      return sortOrder === 'asc' ? 'ascending' : 'descending';
    }
    return '';
  };

  return (
    <>
      <BackButton />
      <div className="result-page">
        <h1 className="result-page__title">Результаты</h1>
        <table className="result-page__table">
          <thead>
            <tr>
              <th
                onClick={() => handleSort('date')}
                className={sortColumn === 'date' ? 'active-column' : ''}
              >
                Дата и время
                <div className={`sort-icon ${getSortClass('date')}`} />
              </th>

              <th
                onClick={() => handleSort('completionTime')}
                className={
                  sortColumn === 'completionTime' ? 'active-column' : ''
                }
              >
                Время прохождения
                <div
                  className={`sort-icon ${getSortClass('completionTime')}`}
                />
              </th>

              <th
                onClick={() => handleSort('errors')}
                className={sortColumn === 'errors' ? 'active-column' : ''}
              >
                Ошибки
                <div className={`sort-icon ${getSortClass('errors')}`} />
              </th>

              <th
                onClick={() => handleSort('difficulty')}
                className={sortColumn === 'difficulty' ? 'active-column' : ''}
              >
                Сложность
                <div className={`sort-icon ${getSortClass('difficulty')}`} />
              </th>

              <th
                onClick={() => handleSort('score')}
                className={sortColumn === 'score' ? 'active-column' : ''}
              >
                Очки
                <div className={`sort-icon ${getSortClass('score')}`} />
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Отображение отсортированных данных с пагинацией */}
            {currentPageStats.map((stat) => (
              <tr key={stat.date}>
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
          <button
            className="button pagination__button"
            onClick={prevPage}
            disabled={currentPage === 1}
            type="button"
          >
            Предыдущая
          </button>
          <span className="pagination__info">
            Страница {currentPage} из {totalPages}
          </span>
          <button
            className="button pagination__button"
            onClick={nextPage}
            disabled={currentPage === totalPages}
            type="button"
          >
            Следующая
          </button>
        </div>
      </div>
    </>
  );
}
