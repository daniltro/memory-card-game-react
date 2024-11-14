import React from 'react';
import ArticleCard from '../article-card/popular-article-card';
import { IArticlesProps } from '../../types/types';
import BackgroundLine from '../background-line/background-line';
import useWindowWidth from '../../hooks/useWindowWidth';
import { getBackgroundLineConfig } from '../../types/utils';
import { additionalMobileBackgroundConfig } from '../../types/constants';

const PopularArticles: React.FC<IArticlesProps> = ({ content, theme }) => {
  const windowWidth = useWindowWidth();
  const backgroundLineConfig = getBackgroundLineConfig(
    'popularArticles',
    windowWidth
  );

  return (
    <section className="popular-articles">
      <div className="container popular-articles--container">
        <div className="popular-articles__cards-wrapper">
          {content.items.map((item, index) => (
            <ArticleCard
              key={index}
              article={{
                title: item.title,
                text: item.text,
                accent: item.accent,
                date: item.date,
                duration: item.duration,
                size: item.size,
                tags: item.tags,
                img: item.img,
                stamp: item.stamp,
              }}
              index={index}
            />
          ))}
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
      {windowWidth < 769 && (
        <BackgroundLine
          imageUrl={additionalMobileBackgroundConfig.imageUrl}
          top={additionalMobileBackgroundConfig.top}
          left={additionalMobileBackgroundConfig.left}
          scale={additionalMobileBackgroundConfig.scale}
          zIndex={additionalMobileBackgroundConfig.zIndex}
          theme={theme}
        />
      )}
    </section>
  );
};

export default PopularArticles;
