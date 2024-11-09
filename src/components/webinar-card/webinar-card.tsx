import React from 'react';
import { IWebinarCardProps } from '../../types/types';
import MetaInfo from '../meta-info/meta-info';
import { ImageWithMask } from '../image-with-mask/image-with-mask';
import BackgroundLine from '../background-line/background-line';

const WebinarCard: React.FC<IWebinarCardProps> = ({
  cardData,
  index,
  backgroundLine,
}) => {
  const imageClassModifier = `webinars__card-image--${index + 1}`;
  const liClassModifier = `webinars__card-item--${index + 1}`;

  return (
    <li
      style={{ backgroundColor: cardData.background }}
      className={`webinars__card-item ${liClassModifier}`}
    >
      <article className="webinars__card">
        <div className="webinars__card-header">
          <ImageWithMask
            src={cardData.author.img}
            maskUrl="/images/sections/masks/webinar-card-avatar-mask.svg"
            wrapperClassName="webinars__card-image-mask-wrapper"
            maskClassName="webinars__card-image-mask"
            imageClassName={`webinars__card-image ${imageClassModifier}`}
          />
          <div className="webinars__card-title">
            <h4 className="webinars__card-name">{cardData.author.name}</h4>
            <p className="webinars__card-position">
              {cardData.author.position}
            </p>
          </div>
        </div>
        <div className="webinars__card-body">
          <h5 className="webinars__card-description">{cardData.text}</h5>
        </div>
        <div className="webinars__card-footer">
          <div className="webinars__card-tags">
            {cardData.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="webinars__card-tag">
                {tag}
              </span>
            ))}
          </div>
          <MetaInfo
            date={`${cardData.date_from} ${cardData.date_to}`}
            duration={cardData.time}
            className="webinars__card-date-time"
            dateClassName="webinars__card-date"
            durationClassName="webinars__card-time"
          />
        </div>
      </article>
      {backgroundLine && (
        <BackgroundLine
          imageUrl={backgroundLine.imageUrl}
          top={backgroundLine.top}
          left={backgroundLine.left}
          scale={backgroundLine.scale}
          zIndex={backgroundLine.zIndex}
        />
      )}
    </li>
  );
};

export default WebinarCard;
