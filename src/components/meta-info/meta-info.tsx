import React, { useMemo } from 'react';
import { formatDate } from '../../types/utils';
import { IMetaInfoProps } from '../../types/types';

const MetaInfo: React.FC<IMetaInfoProps> = React.memo(
  ({ date, duration, className, dateClassName, durationClassName }) => {
    const formattedDate = useMemo(() => formatDate(date), [date]);

    return (
      <div className={`meta ${className || ''}`}>
        <span className={`meta-date ${dateClassName || ''}`}>
          {formattedDate}
        </span>
        <span
          className={`meta-time ${durationClassName || ''}`}
        >{`${duration} min`}</span>
      </div>
    );
  }
);

export default MetaInfo;
