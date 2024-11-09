import { IBackgroundLineProps, StickerOption } from './types';

export const headerLinkClasses = [
  'diseno--link',
  'programacion--link',
  'gaming--link',
  'marketing--link',
  'software--link',
  'carrera-link',
];

export const maskOptions = [
  {
    shape: 'arch',
    maskUrl: '/images/sections/masks/hero-mask.svg',
  },
  {
    shape: 'semi-squared-rounded',
    maskUrl: '/images/sections/masks/fashion-mask.svg',
  },
  {
    shape: 'semi-squared-cloud',
    maskUrl: '/images/sections/masks/design-mask.svg',
  },
  {
    shape: 'cloud',
    maskUrl: '/images/sections/masks/design-2-mask.svg',
  },
  {
    shape: 'corner-squared-cloud',
    maskUrl: '/images/sections/masks/marketing-mask.svg',
  },
  {
    shape: 'corner-squared-rounded',
    maskUrl: '/images/sections/masks/software-mask.svg',
  },
];

export const stickerOptions: StickerOption[] = [
  {
    stampWord: 'Gaming',
    stickerUrl: '/images/sections/stickers/gaming-sticker.png',
    modifierClass: 'gaming--sticker',
  },
  {
    stampWord: 'Fashion',
    stickerUrl: '/images/sections/stickers/fashion-sticker.png',
    modifierClass: 'fashion--sticker',
  },
  {
    stampWord: 'Diseño',
    stickerUrl: '/images/sections/stickers/design-sticker.png',
    modifierClass: 'design--sticker',
  },
  {
    stampWord: 'Marketing',
    stickerUrl: '/images/sections/stickers/marketing-sticker.png',
    modifierClass: 'marketing--sticker',
  },
  {
    stampWord: 'Software',
    stickerUrl: '/images/sections/stickers/software-sticker.png',
    modifierClass: 'software--sticker',
  },
];

export const tagClasses = {
  Gaming: {
    mainTagClass: 'tag--gaming-main',
    tagClass: 'tag--gaming',
  },
  Fashion: {
    mainTagClass: 'tag--fashion-main',
    tagClass: 'tag--fashion',
  },
  Diseño: {
    mainTagClass: 'tag--design-main',
    tagClass: 'tag--design',
  },
  Marketing: {
    mainTagClass: 'tag--marketing-main',
    tagClass: 'tag--marketing',
  },
  Software: {
    mainTagClass: 'tag--software-main',
    tagClass: 'tag--software',
  },
} as const;

export const monthNames = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

// Массив настроек для фона карточек
export const backgroundLines: IBackgroundLineProps[] = [
  {
    imageUrl: '/images/sections/line-bg/webinar-card-line-1-bg.svg',
    top: '100px',
    left: '95px',
    scale: 1,
    zIndex: 0,
  },
  {
    imageUrl: '/images/sections/line-bg/webinar-card-line-2-bg.svg',
    top: '-15px',
    left: '40px',
    scale: 1.2,
    zIndex: 0,
  },
  {
    imageUrl: '/images/sections/line-bg/webinar-card-line-3-bg.svg',
    top: '-5px',
    left: '-85px',
    scale: 1,
    zIndex: 0,
  },
];
