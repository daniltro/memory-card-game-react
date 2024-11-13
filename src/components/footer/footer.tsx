import React from 'react';
import Logo from '../logo/logo';
import { IFooterProps } from '../../types/types';
import useWindowWidth from '../../hooks/useWindowWidth';

const Footer: React.FC<IFooterProps> = ({ logo, footer }) => {
  const windowWidth = useWindowWidth();

  const logoInlineSize = windowWidth < 1440 ? '174px' : '224px';
  const logoBlockSize = windowWidth < 1440 ? '64px' : '82px';

  return (
    <footer className="footer">
      <div className="container footer--container">
        <div className="footer__logo-wrapper">
          <Logo
            containerClassName="footer__logo"
            svgClassName="footer__logo-svg"
            inlineSize={logoInlineSize}
            blockSize={logoBlockSize}
          />
          <div className="footer__sertificate">
            <img
              src="/images/sections/footer/footer-sertificate.jpg"
              alt="
              certificado"
            />
          </div>
        </div>

        <form className="footer__subscribe">
          <label className="footer__subscribe-label">
            <input
              type="text"
              className="footer__subscribe-input"
              placeholder="Su correo electrónico"
            />
            <button
              type="submit"
              className="button-dark-bg footer__subscribe-button"
            >
              Suscribirse al boletín
            </button>
          </label>
        </form>

        <div className="footer__content-menu">
          {footer.map((section) => (
            <ul key={section.label} className="footer__links">
              <h4 className="footer__column-title">{section.label}</h4>
              {section.items.map((item) => (
                <li key={item.label} className="footer__links-item">
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <ul className="footer__contacts-list">
          <li className="footer__contacts-item">
            <h4 className="footer__contacts-item-title">WhatsApp</h4>
            <a
              className="footer__contacts-item-content"
              href="https://wa.me/525592252629"
              target="_blank"
            >
              +52 55 9225-2629
            </a>
          </li>
          <li className="footer__contacts-item">
            <h4 className="footer__contacts-item-title">Telefone</h4>
            <a
              className="footer__contacts-item-content"
              href="tel:+525592252629"
            >
              +52 55 9225-2629
            </a>
          </li>
          <li className="footer__contacts-item">
            <h4 className="footer__contacts-item-title">Email</h4>
            <a
              className="footer__contacts-item-content"
              href="mailto:Ebac.mx@gmail.com"
            >
              Ebac.mx@gmail.com
            </a>
          </li>
        </ul>

        <div className="footer__contacts-socials">
          <ul className="footer__contacts-social-list">
            <li className="footer__contacts-social-item">
              <a href="#" className="footer__contacts-social-link">
                <img
                  src="./images/sections/footer/footer-inst-icon.svg"
                  alt="logotipo de instagram"
                />
              </a>
            </li>
            <li className="footer__contacts-social-item">
              <a href="#" className="footer__contacts-social-link">
                <img
                  src="./images/sections/footer/footer-facebook-icon.svg"
                  alt="logotipo de facebook"
                />
              </a>
            </li>
            <li className="footer__contacts-social-item">
              <a href="#" className="footer__contacts-social-link">
                <img
                  src="./images/sections/footer/footer-youtube-icon.svg"
                  alt="logotipo de youtube"
                />
              </a>
            </li>
            <li className="footer__contacts-social-item">
              <a href="#" className="footer__contacts-social-link">
                <img
                  src="./images/sections/footer/footer-linkedin-icon.svg"
                  alt="logotipo de linkedin"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__contacts-confidentiality">
          <span className="footer__confidentiality-item">
            AVISO DE PRIVACIDAD ALUMNOS
          </span>
          <span className="footer__confidentiality-item">
            AVISO DE PRIVACIDAD PROFESORES
          </span>
          <span className="footer__confidentiality-item">
            TÉRMINOS Y CONDICIONES
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
