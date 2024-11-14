import useWindowWidth from '../hooks/useWindowWidth';
import {
  backgroundLinesConfig,
  maskOptions,
  stickerOptions,
  monthNames,
} from './constants';
import { IBackgroundLineProps, IBackgroundLinesForCard } from './types';

export const getMaskUrl = (shape: string): string => {
  const windowWidth = useWindowWidth();
  let maskUrl = '';

  const mask = maskOptions.find((option) => option.shape === shape);
  if (mask) {
    if (windowWidth < 768) {
      maskUrl = mask.maskUrlMobile;
    } else if (windowWidth < 1280) {
      maskUrl = mask.maskUrlTablet;
    } else {
      maskUrl = mask.maskUrlDesktop;
    }
  }

  return maskUrl;
};

export const getBackgroundLineConfig = (
  section: keyof typeof backgroundLinesConfig,
  windowWidth: number
) => {
  if (windowWidth < 768) {
    return backgroundLinesConfig[section].mobile;
  }
  if (windowWidth < 1280) {
    return backgroundLinesConfig[section].tablet;
  }
  return backgroundLinesConfig[section].desktop;
};

export const getCardBackgroundLineForCard = (
  cardIndex: number,
  windowWidth: number,
  backgroundLinesForCard: IBackgroundLinesForCard[]
): IBackgroundLineProps => {
  const cardConfig = backgroundLinesForCard[cardIndex];
  if (windowWidth < 768) {
    return cardConfig.mobile;
  }
  if (windowWidth < 1280) {
    return cardConfig.tablet;
  }
  return cardConfig.desktop;
};

export const getStickerOption = (stampWord: string) => {
  return stickerOptions.find((option) => option.stampWord === stampWord);
};

export const formatDate = (dateString: string): string => {
  // Проверка на диапазон дат
  if (dateString.includes(' ')) {
    const [dateFrom, dateTo] = dateString.split(' ');

    const [dayFrom, monthFrom, yearFrom] = dateFrom.split('.');
    const [dayTo, monthTo, yearTo] = dateTo.split('.');

    const dayFromParsed = parseInt(dayFrom);
    const dayToParsed = parseInt(dayTo);

    if (yearFrom === yearTo) {
      if (monthFrom === monthTo) {
        return `${dayFromParsed} e ${dayToParsed} de ${monthNames[parseInt(monthFrom) - 1]} de ${yearFrom}`;
      }
      return `${dayFromParsed} de ${monthNames[parseInt(monthFrom) - 1]}, ${dayToParsed} de ${monthNames[parseInt(monthTo) - 1]} de ${yearFrom}`;
    }
    return `${dayFromParsed} de ${monthNames[parseInt(monthFrom) - 1]} de ${yearFrom} - ${dayToParsed} de ${monthNames[parseInt(monthTo) - 1]} de ${yearTo}`;
  }

  const [day, month, year] = dateString.split('.');
  return `${parseInt(day)} de ${monthNames[parseInt(month) - 1]} de ${year}`;
};
