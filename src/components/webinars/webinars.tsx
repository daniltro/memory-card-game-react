import React from 'react';
import { IWebinarsProps } from '../../types/types';
import WebinarCard from '../webinar-card/webinar-card';
import BackgroundLine from '../background-line/background-line';
import {
  backgroundLinesForCard,
  webinars4kBackgroundLineConfig,
} from '../../types/constants';
import useWindowWidth from '../../hooks/useWindowWidth';
import {
  getBackgroundLineConfig,
  getCardBackgroundLineForCard,
} from '../../types/utils';

const Webinars: React.FC<IWebinarsProps> = ({
  title,
  browseAllText,
  items,
}) => {
  const windowWidth = useWindowWidth();

  const backgroundLineConfig =
    windowWidth > 1980
      ? webinars4kBackgroundLineConfig
      : getBackgroundLineConfig('webinars', windowWidth);

  return (
    <section className="webinars">
      <div className="container webinars--container">
        <div className="webinars__content">
          <h2 className="webinars__title">{title}</h2>
          <button className="button-dark-bg webinars__button">
            {browseAllText}
          </button>
          <ul className="webinars__card-list">
            {items.map((item, index) => {
              const backgroundLine = getCardBackgroundLineForCard(
                index,
                windowWidth,
                backgroundLinesForCard
              );
              return (
                <WebinarCard
                  key={index}
                  cardData={item}
                  index={index}
                  backgroundLine={backgroundLine}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <BackgroundLine
        imageUrl={backgroundLineConfig.imageUrl}
        top={backgroundLineConfig.top}
        left={backgroundLineConfig.left}
        scale={backgroundLineConfig.scale}
        zIndex={backgroundLineConfig.zIndex}
      />
    </section>
  );
};

export default Webinars;
