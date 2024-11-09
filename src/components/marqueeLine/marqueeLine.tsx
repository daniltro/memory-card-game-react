import React from 'react';
import { IMarqueeLineProps } from '../../types/types';
import { TextWithIcon } from './text-with-icon';

const MarqueeLine: React.FC<IMarqueeLineProps> = ({
  text,
  backgroundColor,
  className,
}) => {
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
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
        <TextWithIcon text={text} />
      </div>
    </div>
  );
};

export default MarqueeLine;
