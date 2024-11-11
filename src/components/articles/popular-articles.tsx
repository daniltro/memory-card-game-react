import React from 'react';
import ArticleCard from '../article-card/popular-article-card';
import { IArticlesProps } from '../../types/types';
import BackgroundLine from '../background-line/background-line';
import MarqueeLine from '../marqueeLine/marqueeLine';

const PopularArticles: React.FC<IArticlesProps> = ({ content }) => {
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
            />
          ))}
        </div>
      </div>
      <BackgroundLine
        imageUrl="/images/sections/line-bg/articles-line-bg.svg"
        top="280px"
        left="0px"
        scale={1}
        zIndex={-1}
      />
    </section>
  );
};

export default PopularArticles;
