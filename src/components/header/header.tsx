import React, { useEffect, useState } from 'react';
import { IHeaderProps } from '../../types/types';
import { headerLinkClasses } from '../../types/constants';
import Logo from '../logo/logo';
import SearchButton from '../search-button/search-button';

const Header: React.FC<IHeaderProps> = ({ menuData, theme }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`header ${isVisible ? 'header--visible' : 'header--hidden'}`}
    >
      <div className="container header--container">
        <Logo
          containerClassName="header__logo"
          svgClassName="header__logo-svg"
          inlineSize="109px"
          blockSize="40px"
        />
        <nav className="header__menu">
          <ul className="header__list">
            {menuData.header.map((item, index) => (
              <li
                key={index}
                className={`header__list-item ${headerLinkClasses[index]}`}
              >
                <a className="header__link" href={item.url}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__search">
          <SearchButton theme={theme} />
          <a className="header__search-link" href="#">
            EBAC
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
