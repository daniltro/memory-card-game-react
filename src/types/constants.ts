import PopularArticles from '../components/articles/popular-articles';
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
    maskUrlDesktop: '/images/sections/masks/desktop/hero-mask.svg',
    maskUrlTablet: '/images/sections/masks/tablet/hero-mask-tablet.svg',
    maskUrlMobile: '/images/sections/masks/mobile/hero-mask-mobile.svg',
  },
  {
    shape: 'semi-squared-rounded',
    maskUrlDesktop: '/images/sections/masks/desktop/fashion-mask.svg',
    maskUrlTablet: '/images/sections/masks/tablet/fashion-mask-tablet.svg',
    maskUrlMobile: '/images/sections/masks/mobile/fashion-mask-mobile.svg',
  },
  {
    shape: 'semi-squared-cloud',
    maskUrlDesktop: '/images/sections/masks/desktop/design-mask.svg',
    maskUrlTablet: '/images/sections/masks/tablet/design-mask-tablet.svg',
    maskUrlMobile: '/images/sections/masks/mobile/design-mask-mobile.svg',
  },
  {
    shape: 'cloud',
    maskUrlDesktop: '/images/sections/masks/desktop/design-large-mask.svg',
    maskUrlTablet: '/images/sections/masks/tablet/design-large-mask-tablet.svg',
    maskUrlMobile: '/images/sections/masks/mobile/design-large-mask-mobile.svg',
  },
  {
    shape: 'corner-squared-cloud',
    maskUrlDesktop: '/images/sections/masks/desktop/marketing-mask.svg',
    maskUrlTablet: '/images/sections/masks/tablet/marketing-mask-tablet.svg',
    maskUrlMobile: '/images/sections/masks/mobile/marketing-mask-mobile.svg',
  },
  {
    shape: 'corner-squared-rounded',
    maskUrlDesktop: '/images/sections/masks/desktop/software-mask.svg',
    maskUrlTablet: '/images/sections/masks/tablet/software-mask-tablet.svg',
    maskUrlMobile: '/images/sections/masks/mobile/software-mask-mobile.svg',
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

export const backgroundLinesConfig = {
  hero: {
    mobile: {
      imageUrl: '/images/sections/line-bg/mobile/hero-line-bg-mobile.svg',
      top: '138px',
      left: '17px',
      scale: 5.5,
      zIndex: -1,
    },
    tablet: {
      imageUrl: '/images/sections/line-bg/tablet/hero-line-bg-tablet.svg',
      top: '-109px',
      left: '160px',
      scale: 2.2,
      zIndex: -1,
    },
    desktop: {
      imageUrl: '/images/sections/line-bg/desktop/hero-line-bg-desktop.svg',
      top: '257px',
      left: '-53px',
      scale: 1.65,
      zIndex: -1,
    },
  },
  popularArticles: {
    mobile: {
      imageUrl:
        '/images/sections/line-bg/mobile/popular-articles-line-bg-mobile.svg',
      top: '138px',
      left: '17px',
      scale: 5.5,
      zIndex: -1,
    },
    tablet: {
      imageUrl:
        '/images/sections/line-bg/tablet/popular-articles-line-bg-tablet.svg',
      top: '158px',
      left: '-131px',
      scale: 4,
      zIndex: -1,
    },
    desktop: {
      imageUrl:
        '/images/sections/line-bg/desktop/popular-articles-line-bg-desktop.svg',
      top: '283px',
      left: '236px',
      scale: 1.83,
      zIndex: -1,
    },
  },
};

export const backgroundLinesForCard: IBackgroundLineProps[] = [
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
