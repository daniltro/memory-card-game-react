import React from 'react';
import ArticleCard from '../article-card/popular-article-card';
import { IArticlesProps } from '../../types/types';

const PopularArticles: React.FC<IArticlesProps> = ({
  content,
  contentTicker,
}) => {
  console.log(content.items);
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
    </section>
  );
};

export default PopularArticles;
