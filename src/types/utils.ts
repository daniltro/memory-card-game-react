import useWindowWidth from '../hooks/useWindowWidth';
import {
  backgroundLinesConfig,
  maskOptions,
  stickerOptions,
} from './constants';
import { monthNames } from './constants';

export const getMaskUrl = (shape: string): string => {
  const windowWidth = useWindowWidth(); // Получаем текущую ширину экрана
  let maskUrl = '';

  // Определяем маску в зависимости от ширины экрана
  const mask = maskOptions.find((option) => option.shape === shape);
  if (mask) {
    if (windowWidth < 768) {
      // Маска для мобильных устройств
      maskUrl = mask.maskUrlMobile;
    } else if (windowWidth < 1280) {
      // Маска для планшетов
      maskUrl = mask.maskUrlTablet;
    } else {
      // Маска для десктопов
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
  } else if (windowWidth < 1280) {
    return backgroundLinesConfig[section].tablet;
  } else {
    return backgroundLinesConfig[section].desktop;
  }
};

export const getStickerOption = (stampWord: string) => {
  return stickerOptions.find((option) => option.stampWord === stampWord);
};

// Вспомогательная функция для форматирования даты
export const formatDate = (dateString: string): string => {
  // Проверка на диапазон дат
  if (dateString.includes(' ')) {
    const [dateFrom, dateTo] = dateString.split(' ');

    const [dayFrom, monthFrom, yearFrom] = dateFrom.split('.');
    const [dayTo, monthTo, yearTo] = dateTo.split('.');

    // Форматирование дат в зависимости от совпадений по году и месяцу
    const dayFromParsed = parseInt(dayFrom);
    const dayToParsed = parseInt(dayTo);

    if (yearFrom === yearTo) {
      if (monthFrom === monthTo) {
        // Если месяц и год совпадают, выводим дни и месяц, и год только в конце
        return `${dayFromParsed} e ${dayToParsed} de ${monthNames[parseInt(monthFrom) - 1]} de ${yearFrom}`;
      } else {
        // Если только год совпадает, выводим месяц и день для обеих дат, а год только один раз в конце
        return `${dayFromParsed} de ${monthNames[parseInt(monthFrom) - 1]}, ${dayToParsed} de ${monthNames[parseInt(monthTo) - 1]} de ${yearFrom}`;
      }
    } else {
      // Если год не совпадает, выводим обе даты полностью
      return `${dayFromParsed} de ${monthNames[parseInt(monthFrom) - 1]} de ${yearFrom} - ${dayToParsed} de ${monthNames[parseInt(monthTo) - 1]} de ${yearTo}`;
    }
  }

  // Если dateString содержит только одну дату
  const [day, month, year] = dateString.split('.');
  return `${parseInt(day)} de ${monthNames[parseInt(month) - 1]} de ${year}`;
};
