import React, { useEffect, useState } from 'react';

import { IMenu, ISections, ITicker } from '../../types/types';
import Header from '../header/header';
import Hero from '../hero/hero';
import { fetchSectionsData, fetchMenuData } from '../../api/api';
import MarqueeLine from '../marqueeLine/marqueeLine';

const Layout: React.FC = () => {
  const [menuData, setMenuData] = useState<IMenu | null>(null);
  const [sectionsData, setSectionsData] = useState<ISections | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const menu = await fetchMenuData();
      const sections = await fetchSectionsData();

      setMenuData(menu);
      setSectionsData(sections);

      console.log('sections:', sections);
    };

    fetchData();
  }, []);

  if (menuData && sectionsData) {
    const { logo, header } = menuData;
    const { main, content, proposals, subscription } = sectionsData;

    // Извлекаем тикеры для каждой секции
    const mainTicker = main?.ticker;

    console.log('mainTicker', mainTicker);

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
            />
          )}
        </main>
      </>
    );
  }
};

export default Layout;
