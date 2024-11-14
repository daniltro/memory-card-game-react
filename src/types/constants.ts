import { IBackgroundLinesForCard, StickerOption } from './types';

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
      top: '197px',
      left: '-46px',
      scale: 1.15,
      zIndex: -1,
    },
  },
  popularArticles: {
    mobile: {
      imageUrl:
        '/images/sections/line-bg/mobile/popular-articles-line-bg-mobile.svg',
      top: '-1035px',
      left: '111px',
      scale: 3.1,
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
      top: '250px',
      left: '236px',
      scale: 1.83,
      zIndex: -1,
    },
  },
  webinars: {
    mobile: {
      imageUrl: '/images/sections/line-bg/desktop/webinars-line-bg.svg',
      top: '35px',
      left: '-70px',
      scale: 5.5,
      zIndex: -1,
    },
    tablet: {
      imageUrl: '/images/sections/line-bg/tablet/webinars-line-bg-tablet.svg',
      top: '86px',
      left: '94px',
      scale: 1.95,
      zIndex: -1,
    },
    desktop: {
      imageUrl: '/images/sections/line-bg/desktop/webinars-line-bg-desktop.svg',
      top: '65px',
      left: '-70px',
      scale: 1.6,
      zIndex: -1,
    },
  },
  subscribe: {
    mobile: {
      imageUrl:
        '/images/sections/line-bg/mobile/subscribe-form-line-bg-mobile.svg',
      top: '-20px',
      left: '-2px',
      scale: 1,
      zIndex: 0,
    },
    tablet: {
      imageUrl:
        '/images/sections/line-bg/tablet/subscribe-form-line-bg-tablet.svg',
      top: '77px',
      left: '92px',
      scale: 1.7,
      zIndex: 0,
    },
    desktop: {
      imageUrl:
        '/images/sections/line-bg/desktop/subscribe-form-line-bg-desktop.svg',
      top: '59px',
      left: '-14px',
      scale: 1.4,
      zIndex: -1,
    },
  },
};

export const additionalMobileBackgroundConfig = {
  imageUrl:
    '/images/sections/line-bg/mobile/popular-articles-line-bg-mobile-2.svg',
  top: '883px',
  left: '-90px',
  scale: 3.05,
  zIndex: -2,
};

export const webinars4kBackgroundLineConfig = {
  imageUrl: '/images/sections/line-bg/webinars-line-bg-large.svg',
  top: '213px',
  left: '2px',
  scale: 2.38,
  zIndex: -1,
};

export const backgroundLinesForCard: IBackgroundLinesForCard[] = [
  {
    desktop: {
      imageUrl:
        '/images/sections/line-bg/desktop/webinar-card-line-1-bg-desktop.svg',
      top: '100px',
      left: '95px',
      scale: 1,
      zIndex: 0,
    },
    tablet: {
      imageUrl:
        '/images/sections/line-bg/desktop/webinar-card-line-1-bg-desktop.svg',
      top: '86px',
      left: '94px',
      scale: 1.07,
      zIndex: 0,
    },
    mobile: {
      imageUrl:
        '/images/sections/line-bg/mobile/webinar-card-line-1-bg-mobile.svg',
      top: '60px',
      left: '93px',
      scale: 1.2,
      zIndex: 0,
    },
  },
  {
    desktop: {
      imageUrl:
        '/images/sections/line-bg/desktop/webinar-card-line-2-bg-desktop.svg',
      top: '-15px',
      left: '40px',
      scale: 1.2,
      zIndex: 0,
    },
    tablet: {
      imageUrl:
        '/images/sections/line-bg/tablet/webinar-card-line-2-bg-tablet.svg',
      top: '58px',
      left: '95px',
      scale: 1.3,
      zIndex: 0,
    },
    mobile: {
      imageUrl:
        '/images/sections/line-bg/mobile/webinar-card-line-2-bg-mobile.svg',
      top: '54px',
      left: '91px',
      scale: 1.32,
      zIndex: 0,
    },
  },
  {
    desktop: {
      imageUrl:
        '/images/sections/line-bg/desktop/webinar-card-line-3-bg-desktop.svg',
      top: '-5px',
      left: '-85px',
      scale: 1,
      zIndex: 0,
    },
    tablet: {
      imageUrl:
        '/images/sections/line-bg/tablet/webinar-card-line-3-bg-tablet.svg',

      top: '-40px',
      left: '-23px',
      scale: 1.65,
      zIndex: 0,
    },
    mobile: {
      imageUrl:
        '/images/sections/line-bg/mobile/webinar-card-line-3-bg-mobile.svg',
      top: '72px',
      left: '94px',
      scale: 1.2,
      zIndex: 0,
    },
  },
];

