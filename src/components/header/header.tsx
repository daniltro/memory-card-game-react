import React from 'react';
import { IHeaderProps } from '../../types/types';
import { headerLinkClasses } from '../../types/constants';
import Logo from '../logo/logo';

const Header: React.FC<IHeaderProps> = ({ menuData }) => {
  return (
    <header className="header">
      <div className="container header--container">
        <Logo
          containerClassName="header__logo"
          svgClassName="header__logo-svg"
          inlineSize="109"
          blockSize="40"
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
          <button className="header__search-button"></button>
          <a className="header__search-link" href="#">
            EBAC
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
