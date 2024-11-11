export interface IMenu {
  logo: string;
  header: IHeaderDataItem[];
  footer: IFooterData[];
}

export interface IHeaderDataItem {
  label: string;
  url: string;
}

export interface IFooterData {
  label: string;
  items: IHeaderDataItem[];
}

// export interface IHeaderData {
//   header: IHeaderDataItem[];
// }

// Типы данных
export interface ISections {
  main: {
    items: ISectionItem[];
    ticker: ITicker;
  };
  content: {
    items: ISectionItem[];
    ticker: ITicker;
  };
  proposals: {
    title: string;
    'browse-all-text': string;
    items: {
      background: string;
      author: {
        img: string;
        name: string;
        position: string;
      };
      text: string;
      tags: string[];
      date_from: string;
      date_to: string;
      time: string;
    }[];
    ticker: ITicker;
  };
  subscription: {
    title: string;
    text: string;
    'email-placeholder': string;
    'submit-text': string;
    'agreement-text': string;
    ticker: ITicker;
  };
}

export interface ISectionItem {
  title: string;
  text: string;
  accent: string;
  date: string;
  duration: number;
  'browse-text': string;
  size: string;
  tags: string[];
  img: IMainSectionImage;
  stamp: IMainSectionStamp;
}

export interface IMainSectionImage {
  url: string;
  shape: string;
}

export interface IMainSectionStamp {
  word: string;
  type: string;
  position: string;
}

export interface ITicker {
  text: string;
  color: string;
}

// Типы пропсов секций

export interface IHeaderProps {
  menuData: {
    logo: string;
    header: IHeaderDataItem[];
  };
}

export interface IHeroProps {
  items: ISectionItem[];
}

export interface IArticlesProps {
  content: {
    items: {
      accent: string;
      date: string;
      duration: number;
      img: {
        url: string;
        shape: string;
      };
      size: string;
      stamp: {
        word: string;
        type: string;
        position: string;
      };
      tags: string[];
      text: string;
      title: string;
    }[];
  };
}

export interface IArticleCardProps {
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

export interface IWebinarsProps {
  title: string;
  browseAllText: string;
  items: {
    background: string;
    author: {
      img: string;
      name: string;
      position: string;
    };
    text: string;
    tags: string[];
    date_from: string;
    date_to: string;
    time: string;
  }[];
}

export interface IWebinarCardProps {
  cardData: {
    background: string;
    author: {
      img: string;
      name: string;
      position: string;
    };
    text: string;
    tags: string[];
    date_from: string;
    date_to: string;
    time: string;
  };
  backgroundLine?: IBackgroundLineProps;
  index: number;
}

export interface ISubscribeSectionProps {
  title: string;
  text: string;
  emailPlaceholder: string;
  submitText: string;
  agreementText: string;
  ticker?: {
    text: string;
    color: string;
  };
}

export interface ISubscribeFormProps {
  placeholder: string;
  submitText: string;
  agreementText: string;
}

// Типы пропсов компонентов

export interface IMarqueeLineProps {
  text: string;
  backgroundColor: string;
  className: string;
  isAccent?: boolean;
}

export interface IMetaInfoProps {
  date: string;
  duration: number | string;
  className?: string;
  dateClassName?: string;
  durationClassName?: string;
}

export interface StickerOption {
  stampWord: string;
  stickerUrl: string;
  modifierClass: string;
}

export interface ImageWithMaskProps {
  src: string;
  maskUrl: string;
  stickerUrl?: string;
  wrapperClassName?: string;
  maskClassName?: string;
  stickerClassName?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}

export interface IBackgroundLineProps {
  imageUrl: string;
  top?: string;
  left?: string;
  scale?: number;
  zIndex?: number;
}

// export interface SubscriptionData {
//   title: string;
//   text: string;
//   'email-placeholder': string;
//   'submit-text': string;
//   'agreement-text': string;
//   ticker?: { text: string; color: string };
// }

// export interface SubscribeProps {
//   data: SubscriptionData;
// }
