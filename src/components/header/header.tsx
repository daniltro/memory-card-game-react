import { useEffect, useState } from 'react';

export const Header = () => {
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const logoResponse = await fetch('http://localhost:5000/menu');

        if (logoResponse.ok) {
          const logoData = await logoResponse.json();
          setLogoUrl(logoData.logo);
        } else {
          console.error('Ошибка при получении данных');
        }
      } catch (error) {
        console.error('Ошибка запроса:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <header className="header">
      <div className="container header--container">
        <div className="header__logo">
          {logoUrl ? (
            <a href="#">
              <img src={logoUrl} alt="EBAC Logo" />
            </a>
          ) : (
            'Загрузка...'
          )}
        </div>
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__list-item diseno--link">
              <a className="header__link" href="#">
                Diseño
              </a>
            </li>
            <li className="header__list-item programacion--link">
              <a className="header__link" href="#">
                Programación & Data
              </a>
            </li>
            <li className="header__list-item gaming--link">
              <a className="header__link" href="#">
                Gaming
              </a>
            </li>
            <li className="header__list-item marketing--link">
              <a className="header__link" href="#">
                Marketing
              </a>
            </li>
            <li className="header__list-item software--link">
              <a className="header__link" href="#">
                Software
              </a>
            </li>
            <li className="header__list-item carrera-link">
              <a className="header__link" href="#">
                Carrera
              </a>
            </li>
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
