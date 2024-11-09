import React from 'react';

interface BackgroundLineProps {
  imageUrl: string;
  top?: string;
  left?: string;
  scale?: number;
  zIndex?: number;
}

const BackgroundLine: React.FC<BackgroundLineProps> = ({
  imageUrl,
  top = '0px',
  left = '0px',
  scale = 1,
  zIndex = -1,
}) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    position: 'absolute' as const,
    top,
    left,
    transform: `scale(${scale})`,
    width: '100%',
    height: '100%',
    zIndex,
  };

  return <div style={style} className="background-line" />;
};

export default BackgroundLine;
