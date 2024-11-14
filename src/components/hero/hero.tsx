import React from 'react';
import { IHeroProps } from '../../types/types';
import { ImageWithMask } from '../image-with-mask/image-with-mask';
import MetaInfo from '../meta-info/meta-info';
import {
  getBackgroundLineConfig,
  getMaskUrl,
  getStickerOption,
} from '../../types/utils';
import BackgroundLine from '../background-line/background-line';
import useWindowWidth from '../../hooks/useWindowWidth';

const Hero: React.FC<IHeroProps> = ({ items, theme }) => {
  console.log(theme);
  const itemsData = items[0];
  const maskUrl = getMaskUrl(itemsData.img.shape);
  const stickerOption = getStickerOption(itemsData.stamp.word);
  const stickerUrl = stickerOption?.stickerUrl ?? '';
  const modifierClass = stickerOption?.modifierClass ?? '';

  const windowWidth = useWindowWidth();
  const backgroundLineConfig = getBackgroundLineConfig('hero', windowWidth);

  return (
    <section className="hero-section">
      <div className="container hero--container">
        <ImageWithMask
          src={itemsData.img.url}
          maskUrl={maskUrl}
          stickerUrl={stickerUrl}
          wrapperClassName="hero-section__image-wrapper"
          maskClassName="hero-section__mask"
          stickerClassName={modifierClass}
          imageClassName="hero-section__image"
        />
        <div className="hero-section__content">
          <div className="hero-section__tags">
            <div className="hero-section__tags-wrapper">
              <ul className="hero-section__tags-list section-tags-list">
                <li className="hero-section__tags-item section-tags-item">
                  <a
                    href="#"
                    className="hero-section__tag main--hero-tag section-tag"
                  >
                    {itemsData.tags[0]}
                  </a>
                </li>
                {itemsData.tags.slice(1).map((tag, index) => (
                  <li
                    key={index}
                    className="hero-section__tags-item section-tags-item"
                  >
                    <a href="#" className="hero-section__tag section-tag">
                      {tag}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className="hero-section__title">{itemsData.title}</h3>
          <p className="hero-section__description">{itemsData.text}</p>

          <MetaInfo
            date={itemsData.date}
            duration={`${itemsData.duration} min`}
            className="hero-section__meta"
            dateClassName="hero-section--meta-date"
            durationClassName="hero-section--meta-time"
          />

          <button className="hero-section__button button-light-bg">
            {itemsData['browse-text']}
          </button>
        </div>
      </div>

      {backgroundLineConfig && (
        <BackgroundLine
          imageUrl={backgroundLineConfig.imageUrl}
          top={backgroundLineConfig.top}
          left={backgroundLineConfig.left}
          scale={backgroundLineConfig.scale}
          zIndex={backgroundLineConfig.zIndex}
          theme={theme}
        />
      )}
    </section>
  );
};

export default Hero;
