import React, { useEffect, useState } from 'react';

import { IMenu, ISections, ITicker } from '../../types/types';
import Header from '../header/header';
import Hero from '../hero/hero';
import { fetchSectionsData, fetchMenuData } from '../../api/api';
import MarqueeLine from '../marqueeLine/marqueeLine';
import PopularArticles from '../articles/popular-articles';
import Webinars from '../webinars/webinars';
import SubscribeSection from '../subscribe-section/subscribe-section';
import Footer from '../footer/footer';
import ThemeToggleButton from '../theme-toggle-button/theme-toggle-button';

const Layout: React.FC = () => {
  const [menuData, setMenuData] = useState<IMenu | null>(null);
  const [sectionsData, setSectionsData] = useState<ISections | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme as 'light' | 'dark');
    } else {
      setTheme(preferredTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

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
    const { logo, header, footer } = menuData;
    const { main, content, proposals, subscription } = sectionsData;

    const mainTicker = main?.ticker;
    const contentTicker = content?.ticker;
    const proposalsTicker = proposals?.ticker;
    const subscriptionTicker = subscription?.ticker;

    return (
      <>
        <Header menuData={{ logo, header }} theme={theme} />
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />

        <main className="main">
          {main && <Hero items={main.items} theme={theme} />}

          {mainTicker && (
            <MarqueeLine
              text={mainTicker.text}
              backgroundColor={mainTicker.color}
              className="marquee-line--hero"
            />
          )}

          {content && <PopularArticles content={content} theme={theme} />}

          {contentTicker && (
            <MarqueeLine
              text={contentTicker.text}
              backgroundColor={contentTicker.color}
              className="marquee-line--webinars"
            />
          )}

          {proposals && (
            <Webinars
              title={proposals.title}
              browseAllText={proposals['browse-all-text']}
              items={proposals.items}
            />
          )}

          {proposalsTicker && (
            <MarqueeLine
              text={proposalsTicker.text}
              backgroundColor={proposalsTicker.color}
              className="marquee-line--subscribe"
            />
          )}

          {subscription && (
            <SubscribeSection
              title={subscription.title}
              text={subscription.text}
              emailPlaceholder={subscription['email-placeholder']}
              submitText={subscription['submit-text']}
              agreementText={subscription['agreement-text']}
            />
          )}

          {subscriptionTicker && (
            <MarqueeLine
              text={subscriptionTicker.text}
              backgroundColor={subscriptionTicker.color}
              className="marquee-line--footer"
            />
          )}
        </main>

        {menuData && <Footer logo={logo} footer={footer} />}
      </>
    );
  }
};

export default Layout;
