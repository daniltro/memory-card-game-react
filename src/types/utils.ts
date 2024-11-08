import { maskOptions, stickerOptions } from "./constants";

// Функция для выбора правильной маски
export const getMaskUrl = (shape: string): string => {
  const mask = maskOptions.find((option) => option.shape === shape);
  return mask ? mask.maskUrl : '';
};

// Вспомогательная функция для форматирования даты
export const formatDate = (dateString: string): string => {
  const [day, month, year] = dateString.split('.');
  const monthNames = [
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
  return `${parseInt(day)} de ${monthNames[parseInt(month) - 1]} de ${year}`;
};


export const getStickerOption = (stampWord: string) => {
  return stickerOptions.find(option => option.stampWord === stampWord);
};
