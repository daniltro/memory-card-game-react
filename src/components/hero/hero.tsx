import React from 'react';
import { IHeroProps } from '../../types/types';
import { ImageWithMask } from '../image-with-mask/image-with-mask';

const Hero: React.FC<IHeroProps> = ({ mainSectionData, ticker }) => {
  const itemsData = mainSectionData.items[0]; // Берем первый элемент

  return (
    <section className="hero-section">
      <div className="container hero--container">
        <div className="hero-section__image">
          <ImageWithMask
            src={itemsData.img.url}
            maskUrl="/images/sections/hero/hero-mask-Img.png" // Маска может быть передана динамически
          />
          <div className="hero-section__sticker" />
        </div>
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
          <div className="hero-section__meta meta">
            <span className="hero-section--meta-date meta-date">
              {itemsData.date}
            </span>
            <span className="hero-section--meta-time meta-time">
              {`${itemsData.duration} min`}
            </span>
          </div>
          <button className="hero-section__button button-light-bg">
            {itemsData['browse-text']}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
