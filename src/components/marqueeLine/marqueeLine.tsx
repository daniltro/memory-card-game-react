import React, { useEffect, useRef } from 'react';
import { IMarqueeLineProps } from '../../types/types';

const MarqueeLine: React.FC<IMarqueeLineProps> = ({
  text,
  backgroundColor,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      const screenWidth = window.innerWidth;

      // Дублируем текст до тех пор, пока он не займет минимум в два раза больше ширины экрана
      while (content.offsetWidth < screenWidth * 2) {
        content.innerHTML += content.innerHTML;
      }
    }
  }, [text]);

  return (
    <div className="marquee-line" style={{ background: backgroundColor }}>
      <div className="marquee-line__content" ref={contentRef}>
        <span className="marquee-line__text">{text}</span>
      </div>
    </div>
  );
};

export default MarqueeLine;
