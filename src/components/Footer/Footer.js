import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="navtab__line navtab__line_style_gray"></div>
        <div className="footer__link-wrapper">
          <p className="footer__copyright-text">© 2020</p>
          <ul className="footer__link">
            <li className="footer__link-item">
              <a
                className="footer__link-text"
                href="https://praktikum.yandex.ru"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__link-item">
              <a
                className="footer__link-text"
                href="https://github.com/ekatylynx"
              >
                Github
              </a>
            </li>
            <li className="footer__link-item">
              <a className="footer__link-text" href="https://facebook.com">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
