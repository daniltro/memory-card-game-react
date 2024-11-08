import React from 'react';
import { ImageWithMask } from '../image-with-mask/image-with-mask';
import MetaInfo from '../meta-info/meta-info';
import { getMaskUrl, getStickerOption } from '../../types/utils';
import { stickerOptions, tagClasses } from '../../types/constants';

interface IArticleCardProps {
  article: {
    title: string;
    text: string;
    accent: string;
    date: string;
    duration: number;
    size: string;
    tags: string[];
    img: {
      url: string;
      shape: string;
    };
    stamp: {
      word: string;
      type: string;
      position: string;
    };
  };
}

const ArticleCard: React.FC<IArticleCardProps> = ({ article }) => {
  const { title, text, accent, date, duration, size, tags, img, stamp } =
    article;
  const maskUrl = getMaskUrl(img.shape);

  const stickerOption = getStickerOption(stamp.word);
  const stickerUrl = stickerOption?.stickerUrl ?? '';
  const modifierClass = stickerOption?.modifierClass ?? '';

  const tagClass = tagClasses[stamp.word as keyof typeof tagClasses] || {};
  const { mainTagClass, tagClass: tagClassName } = tagClass;

  console.log(mainTagClass, tagClassName);

  return (
    <article className={`popular-articles__card" card--${size}`}>
      <ImageWithMask
        src={img.url}
        maskUrl={maskUrl}
        stickerUrl={stickerUrl}
        wrapperClassName="popular-article-card__image-wrapper"
        maskClassName="popular-article-card__mask"
        stickerClassName={`popular-article__sticker ${modifierClass}`}
        imageClassName="popular-article-card__image"
      />
      <div className={`popular-article__content`}>
        <div className="popular-article__tags">
          <div className="popular-article__tags-wrapper">
            <ul className="popular-article__tags-list section-tags-list">
              {/* Первый тег с основным стилем */}
              <li className="popular-article__tags-item section-tags-item">
                <a
                  href="#"
                  className={`popular-article__tag ${mainTagClass} section-tag`}
                >
                  {tags[0]}
                </a>
              </li>
              {/* Остальные теги */}
              {tags.slice(1).map((tag, index) => (
                <li
                  key={index}
                  className="popular-article__tags-item section-tags-item"
                >
                  <a
                    href="#"
                    className={`popular-article__tag ${tagClassName}`}
                  >
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="popular-article__card-title">{title}</h3>
        <p className="popular-article__card-description">{text}</p>
        <MetaInfo
          date={date}
          duration={duration}
          className="popular-articles__meta"
          dateClassName="popular-articles--meta-date"
          durationClassName="popular-articles--meta-time"
        />
      </div>
    </article>
  );
};

export default ArticleCard;
