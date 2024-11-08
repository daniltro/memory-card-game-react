import React from 'react';

interface ImageWithMaskProps {
  src: string;
  maskUrl: string;
  stickerUrl?: string; // URL изображения для стикера
  wrapperClassName?: string; // Класс для обертки
  maskClassName?: string; // Класс для маски
  stickerClassName?: string;
  imageClassName?: string; // Класс для изображения
}

export const ImageWithMask: React.FC<ImageWithMaskProps> = ({
  src,
  maskUrl,
  stickerUrl = '/images/sections/hero/hero-Stickers.png',
  wrapperClassName,
  maskClassName,
  stickerClassName,
  imageClassName,
}) => {
  return (
    <div className={`${wrapperClassName || ''}`}>
      <div
        className={`${maskClassName || ''}`}
        style={{ maskImage: `url(${maskUrl})` }}
      >
        <img
          src={src}
          alt="Image with mask"
          className={`${imageClassName || ''}`}
        />
      </div>
      {stickerUrl && (
        <div
          className={`hero-section__sticker ${stickerClassName || ''}`}
          style={{ backgroundImage: `url(${stickerUrl})` }}
        />
      )}
    </div>
  );
};
