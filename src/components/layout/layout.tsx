import React, { useEffect, useState } from 'react';

import { IMenu, ISections, ITicker } from '../../types/types';
import Header from '../header/header';
import Hero from '../hero/hero';
import { fetchSectionsData, fetchMenuData } from '../../api/api';
import MarqueeLine from '../marqueeLine/marqueeLine';
import PopularArticles from '../articles/popular-articles';

const Layout: React.FC = () => {
  const [menuData, setMenuData] = useState<IMenu | null>(null);
  const [sectionsData, setSectionsData] = useState<ISections | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const menu = await fetchMenuData();
      const sections = await fetchSectionsData();

      setMenuData(menu);
      setSectionsData(sections);
    };

    fetchData();
  }, []);

  if (menuData && sectionsData) {
    const { logo, header } = menuData;
    const { main, content, proposals, subscription } = sectionsData;

    // Извлекаем тикеры для каждой секции
    const mainTicker = main?.ticker;
    console.log('content', sectionsData.content);
    const contentTicker = content?.ticker;
    const proposalsTicker = proposals?.ticker;
    const subscriptionTicker = subscription?.ticker;
    return (
      <>
        <Header menuData={{ logo, header }} />{' '}
        <main className="main">
          <Hero mainSectionData={main} ticker={mainTicker} />
          {mainTicker && (
            <MarqueeLine
              text={mainTicker.text}
              backgroundColor={mainTicker.color}
              className="marquee-line--hero"
            />
          )}
          <PopularArticles content={content} contentTicker={contentTicker} />
        </main>
      </>
    );
  }
};

export default Layout;
