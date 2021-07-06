import React from "react";
import "./AboutMe.css";
import avatar from "../../images/avatarstudent.jpg";

function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="aboutMe__wrapper">
        <h2 className="aboutMe__title-section">Студент</h2>
        <div className="navtab__line"></div>

        <div className="aboutMe__wrapper-profile">
          <div className="aboutMe__wrapper-text">
            <h3 className="aboutMe__title">Екатерина</h3>
            <h4 className="aboutMe__title-career">
              Фронтенд-разработчик, 20 лет
            </h4>
            <p className="aboutMe__subtitle">
              Я родилась в Омске, но проживаю в Москве, учусь на факультете
              информационных технологий в колледже при университете. У меня есть
              черный большой кот. Я люблю слушать музыку, а ещё увлекаюсь
              рисованием и видеоиграми. Программирую уже около 2-ух лет. На
              данный момент прохожу курс по веб-разработке, планирую заниматься
              фриланс-заказами или найти постоянную работу.
            </p>
            <a
              className="aboutMe__link-social"
              href="https://www.facebook.com/"
            >
              Facebook
            </a>
            <a
              className="aboutMe__link-social"
              href="https://github.com/Hitomizavr"
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
}

export default AboutMe;
