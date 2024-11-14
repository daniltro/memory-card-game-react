import React from 'react';
import { ImageWithMask } from '../image-with-mask/image-with-mask';
import MetaInfo from '../meta-info/meta-info';
import { getMaskUrl, getStickerOption } from '../../types/utils';
import { tagClasses } from '../../types/constants';
import { IArticleCardProps } from '../../types/types';

const ArticleCard: React.FC<IArticleCardProps> = ({ article, index }) => {
  const { title, text, accent, date, duration, size, tags, img, stamp } =
    article;
  const maskUrl = getMaskUrl(img.shape);

  const stickerOption = getStickerOption(stamp.word);
  const stickerUrl = stickerOption?.stickerUrl ?? '';
  const stickerModifierClass = stickerOption?.modifierClass ?? '';

  const imageModifierClass = `image--${index + 1}`;
  const tagClass = tagClasses[stamp.word as keyof typeof tagClasses] || {};
  const { mainTagClass, tagClass: tagClassName } = tagClass;

  return (
    <article className={`popular-articles__card card--${size}`}>
      <ImageWithMask
        src={img.url}
        maskUrl={maskUrl}
        stickerUrl={stickerUrl}
        wrapperClassName="popular-article-card__image-wrapper"
        maskClassName="popular-article-card__mask"
        stickerClassName={`popular-article__sticker ${stickerModifierClass}`}
        imageClassName={`popular-article-card__image ${imageModifierClass}`}
      />
      <div className="popular-article__content">
        <div className="popular-article__tags">
          <div className="popular-article__tags-wrapper">
            <ul className="popular-article__tags-list section-tags-list">
              <li className="popular-article__tags-item section-tags-item">
                <a
                  href="#"
                  className={`popular-article__tag ${mainTagClass} section-tag`}
                >
                  {tags[0]}
                </a>
              </li>
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
          duration={`${duration} min`}
          className="popular-articles__meta"
          dateClassName="popular-articles--meta-date"
          durationClassName="popular-articles--meta-time"
        />
      </div>
    </article>
  );
};

export default ArticleCard;
