import React from 'react';
import './background-line.css';
import { IBackgroundLineProps } from '../../types/types';

const BackgroundLine: React.FC<IBackgroundLineProps> = ({
  imageUrl,
  top = '0px',
  left = '0px',
  scale = 1,
  zIndex = -1,
  theme,
}) => {
  const opacity = theme === 'dark' ? .1 : 1;
  return (
    <div
      className="background-line"
      style={{
        backgroundImage: `url(${imageUrl})`,
        top,
        left,
        transform: `scale(${scale})`,
        zIndex,
        opacity,
      }}
    />
  );
};

export default BackgroundLine;
