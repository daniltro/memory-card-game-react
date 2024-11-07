import React from 'react';
import { HeaderProps } from '../../types/types';
import { headerLinkClasses } from '../../types/constants';

const Header: React.FC<HeaderProps> = ({ menuData }) => {
  return (
    <header className="header">
      <div className="container header--container">
        <div className="header__logo">
          <a href="#">
            <img src={menuData.logo} alt="EBAC Logo" />
          </a>
        </div>

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
