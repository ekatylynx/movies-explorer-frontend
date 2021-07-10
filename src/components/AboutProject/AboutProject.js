import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="technologies">
      <div className="technologies__wrapper">
        <h2 className="technologies__title-section">Технологии</h2>
        <div className="navtab__line"></div>

        <h3 className="technologies__title">7 технологий</h3>
        <p className="technologies__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>

        <ul className="technologies-cards">
          <li className="technologies-card__item">
            <p className="technologies-card__text">HTML</p>
          </li>
          <li className="technologies-card__item">
            <p className="technologies-card__text">CSS</p>
          </li>
          <li className="technologies-card__item">
            <p className="technologies-card__text">JS</p>
          </li>
          <li className="technologies-card__item">
            <p className="technologies-card__text">React</p>
          </li>
          <li className="technologies-card__item">
            <p className="technologies-card__text">Git</p>
          </li>
          <li className="technologies-card__item">
            <p className="technologies-card__text">Express.js</p>
          </li>
          <li className="technologies-card__item">
            <p className="technologies-card__text">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutProject;
