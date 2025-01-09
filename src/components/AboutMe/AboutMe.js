import React from "react";
import "./AboutMe.css";
import avatar from "../../images/avatarstudent.jpg";

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="aboutMe__wrapper">
        <h2 className="aboutMe__title-section">Студент</h2>
        <div className="navtab__line"></div>

        <div className="aboutMe__wrapper-profile">
          <div className="aboutMe__wrapper-text">
            <h3 className="aboutMe__title">Екатерина</h3>
            <h4 className="aboutMe__title-career">
              Фронтенд-разработчик
            </h4>
            <p className="aboutMe__subtitle">
              Обо мне: Студент университета, факультета программирования.
              Я полностью посвятила себя разработке на JavaScript, 
              React и немного Python. Начала
              писать код с 2019, но только последний год активно углубляюсь
              в эту область, стремясь стать профессионалом. Я большой фанат
              литературы, особенно произведений А. Дюма и серии о Ведьмаке
              А. Сапковского. В свободное время изучаю японский язык, чтобы
              прокачать свое творческое мышление и память.
            </p>
            <a
              className="aboutMe__link-social"
              href="https://www.facebook.com/"
            >
              Facebook
            </a>
            <a
              className="aboutMe__link-social"
              href="https://github.com/ekatylynx"
            >
              Github
            </a>
          </div>
          <div>
            <img
              className="aboutMe__avatar"
              alt="avatar student"
              src={avatar}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
