import React, { useEffect, useState } from 'react';
import { IHeaderProps } from '../../types/types';
import { headerLinkClasses } from '../../types/constants';
import Logo from '../logo/logo';
import SearchButton from '../search-button/search-button';

const Header: React.FC<IHeaderProps> = ({ menuData, theme }) => {
  const [isVisible, setIsVisible] = useState(true); // Состояние для видимости хеддера
  const [lastScrollY, setLastScrollY] = useState(0); // Хранение последней позиции прокрутки

  const handleScroll = () => {
    // Получаем текущее положение прокрутки
    const currentScrollY = window.scrollY;

    // Если мы прокручиваем вниз, скрываем хеддер, если вверх, показываем его
    if (currentScrollY > lastScrollY) {
      // Прокрутка вниз, скрыть хеддер
      setIsVisible(false);
    } else {
      // Прокрутка вверх, показать хеддер
      setIsVisible(true);
    }

    // Обновляем последнюю позицию прокрутки
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    // Добавляем обработчик события scroll при монтировании компонента
    window.addEventListener('scroll', handleScroll);

    // Убираем обработчик события при размонтировании компонента
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
