import React, { useEffect } from 'react';
import { IMarqueeLineProps } from '../../types/types';
import { TextWithIcon } from './text-with-icon';

const MarqueeLine: React.FC<IMarqueeLineProps> = ({
  text,
  backgroundColor,
  className,
}) => {
  useEffect(() => {
    const contentArr = Array.from(
      document.querySelectorAll('.marquee-line__content')
    ) as HTMLElement[];

    const screenWidth = window.innerWidth;

    contentArr.forEach((content) => {
      while (content.offsetWidth < screenWidth * 2) {
        content.innerHTML += content.innerHTML;
      }
    });
  }, []);

  return (
    <div
      className={`marquee-line ${className}`}
      style={{ background: backgroundColor }}
    >
      <div className="marquee-line__content">
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
      </div>
    </div>
  );
};

export default MarqueeLine;
