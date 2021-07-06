import React from "react";
import "./Portfolio.css";
import arrowLink from "../../images/arrow-link.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__wrapper-section">
        <h3 className="aboutMe__title-portfolio">Портфолио</h3>
        <ul className="portfolio__wrapper">
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/Hitomizavr/how-to-learn"
            >
              <p className="portfolio__link-text">Статичный сайт</p>
              <img alt="arrow" src={arrowLink} />
            </a>
          </li>

          <div className="navtab__line navtab__line_style_gray"></div>

          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/Hitomizavr/russian-travel"
            >
              <p className="portfolio__link-text">Адаптивный сайт</p>
              <img alt="arrow" src={arrowLink} />
            </a>
          </li>

          <div className="navtab__line navtab__line_style_gray"></div>

          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/Hitomizavr/react-mesto-api-full"
            >
              <p className="portfolio__link-text">Одностраничное приложение</p>
              <img alt="arrow" src={arrowLink} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
