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

  return (
    <>
      <BackButton />
      <div className="statistic-page">
        <h1>Результаты</h1>
        <ul className="statistic-page__list">
          {stats.map((stat, index) => (
            <li className="statistic-page__list-item" key={index}>
              <p>Дата: {stat.date}</p>
              <p>Время завершения: {stat.completionTime}</p>
              <p>Ошибки: {stat.errors}</p>
              <p>
                Сложность:{' '}
                {getDifficultyTranslation(stat.difficulty as TDifficultyLevel)}
              </p>

              <p>Очки: {stat.score}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
