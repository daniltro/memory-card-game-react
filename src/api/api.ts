import { IMenu, ISections } from '../types/types';

export const fetchData = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T | null> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      console.error(`Ошибка при получении данных с ${url}`);
      return null;
    }

    const data = await response.json();

    if (!data) {
      console.error(`Ответ с ${url} пустой`);
      return null;
    }

    return data as T;
  } catch (error) {
    console.error(`Ошибка запроса на ${url}:`, error);
    return null;
  }
};

export const fetchMenuData = async (): Promise<IMenu | null> => {
  return fetchData<IMenu>('http://localhost:5000/menu');
};

export const fetchSectionsData = async (): Promise<ISections | null> => {
  return fetchData<ISections>('http://localhost:5000/sections');
};
