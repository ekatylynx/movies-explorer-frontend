import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Register.css";
import logoOne from "../../images/logotypeHeader.svg";

function Register() {
  return (
    <div>
      <form name="login" className="auth-form">
        <div className="auth-form__img-wrapper">
          <Link to="/" className="auth-form__img-wrapper-link">
            <img
              className="auth-form__logotype"
              src={logoOne}
              alt="logotype site"
            />
          </Link>
        </div>

        <h2 className="auth-form__title">Добро пожаловать!</h2>

        <label className="auth-form__label">
          Имя
          <input
            name="firstname"
            className="popup-form__input popup-form__input_type_auth"
            type="text"
            placeholder="Виталий"
            // value={firsname}
          />
        </label>

        <span className="form-error">Неверно введено значение</span>

        <label className="auth-form__label">
          E-mail
          <input
            name="email"
            className="popup-form__input popup-form__input_type_auth"
            type="email"
            placeholder="email@gmail.ru"
            // value={email}
          />
        </label>

        <span className="form-error"></span>

        <label className="auth-form__label">
          Пароль
          <input
            name="password"
            className="popup-form__input popup-form__input_type_auth"
            type="password"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            // value={password}
          />
        </label>

        <span className="form-error"></span>

        <button
          type="submit"
          className="auth-form__btn-submit auth-form__btn-submit_theme_white"
        >
          Зарегистрироваться
        </button>
        <p className="auth-form__link-wrapper">
          Уже зарегистрированы?{" "}
          <Link
            to="/signin"
            className="auth-form__link"
            href="https://developer.mozilla.org/ru/docs/Web/"
          >
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default withRouter(Register);
