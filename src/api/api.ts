import { IMenu, ISections } from '../types/types';

// Универсальная функция для выполнения запросов к API
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

    // Проверка на наличие данных (можно добавить более сложную проверку)
    if (!data) {
      console.error(`Ответ с ${url} пустой`);
      return null;
    }

    return data as T; // Типизируем результат
  } catch (error) {
    console.error(`Ошибка запроса на ${url}:`, error);
    return null;
  }
};

// Функция для получения данных меню
export const fetchMenuData = async (): Promise<IMenu | null> => {
  return await fetchData<IMenu>('http://localhost:5000/menu');
};

// Функция для получения данных секции "main"
export const fetchSectionsData = async (): Promise<ISections | null> => {
  return await fetchData<ISections>('http://localhost:5000/sections');
};

// // Функция для получения данных секции "content"
// export const fetchContentSectionData =
//   async (): Promise<IContentSectionData | null> => {
//     return await fetchData<IContentSectionData>(
//       'http://localhost:5000/sections/content'
//     );
//   };

// // Функция для получения данных секции "proposals"
// export const fetchProposalsSectionData =
//   async (): Promise<IProposalsSectionData | null> => {
//     return await fetchData<IProposalsSectionData>(
//       'http://localhost:5000/sections/proposals'
//     );
//   };
