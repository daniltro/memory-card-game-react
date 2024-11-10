import React, { useEffect, useState } from 'react';
import { IWebinarsProps } from '../../types/types';
import WebinarCard from '../webinar-card/webinar-card';
import BackgroundLine from '../background-line/background-line';
import { backgroundLines } from '../../types/constants';
import useWindowWidth from '../../hooks/useWindowWidth';
import MarqueeLine from '../marqueeLine/marqueeLine';

const Webinars: React.FC<IWebinarsProps> = ({
  title,
  browseAllText,
  items,
}) => {
  const windowWidth = useWindowWidth();

  const [backgroundImage, setBackgroundImage] = useState<string>(
    '/images/sections/line-bg/webinars-line-bg.svg'
  );

  useEffect(() => {
    if (windowWidth > 1980 && windowWidth <= 3840) {
      setBackgroundImage('/images/sections/line-bg/webinars-line-bg-large.svg');
    } else {
      setBackgroundImage('/images/sections/line-bg/webinars-line-bg.svg');
    }
  }, [windowWidth]);

  return (
    <section className="webinars">
      <div className="container webinars--container">
        <div className="webinars__content">
          <h2 className="webinars__title">{title}</h2>
          <button className="button-dark-bg webinars__button">
            {browseAllText}
          </button>
          <ul className="webinars__card-list">
            {items.map((item, index) => (
              <WebinarCard
                key={index}
                cardData={item}
                index={index}
                backgroundLine={backgroundLines[index % backgroundLines.length]}
              />
            ))}
          </ul>
        </div>

        <BackgroundLine
          imageUrl={backgroundImage}
          top="35px"
          left="-70px"
          scale={1.7}
          zIndex={-1}
        />
      </div>
      {/* <MarqueeLine
        text={ticker.text}
        backgroundColor={ticker.color}
        className="marquee-line--subscribe"
      /> */}
    </section>
  );
};

export default Webinars;
