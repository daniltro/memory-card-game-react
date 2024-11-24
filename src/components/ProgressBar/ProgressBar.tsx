import React from 'react';
import { ProgressBarProps } from '../../types';

export default function ProgressBar({ progressPercentage }: ProgressBarProps) {
  return (
    <div className="progress-container">
      <p className="progress-label">Прогресс игры:</p>
      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{ width: `${progressPercentage}%` }}
        >
          {progressPercentage > 0 && (
            <span className="progress-percentage">{progressPercentage}%</span>
          )}
        </div>
        {progressPercentage === 0 && (
          <span className="progress-percentage--outside">
            {progressPercentage}%
          </span>
        )}
      </div>
    </div>
  );
}
