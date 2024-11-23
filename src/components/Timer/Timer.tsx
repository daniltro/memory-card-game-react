import React from 'react';
import { ITimerProps } from '../../types';
import './Timer.css';

export default function Timer({ timer }: ITimerProps) {
  const percentage = Math.max(0, (timer / 60) * 100);
  return (
    <div className="timer-container">
      <div className="timer-clock">
        <div
          className="timer-clock__progress"
          style={{ '--progress': `${percentage}%` } as React.CSSProperties}
        />
        <div className="timer-clock__circle">
          <span className="timer-clock__time">{timer}s</span>
        </div>
      </div>
    </div>
  );
}
