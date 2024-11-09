import { maskOptions, stickerOptions } from './constants';
import { monthNames } from './constants';

// Функция для выбора правильной маски
export const getMaskUrl = (shape: string): string => {
  const mask = maskOptions.find((option) => option.shape === shape);
  return mask ? mask.maskUrl : '';
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
