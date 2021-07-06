import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login.css";
import logoOne from "../../images/logotypeHeader.svg";

function Login() {
  return (
    <div>
      <form name="login" className="auth-form" noValidate>
        <div className="auth-form__img-wrapper">
          <Link to="/" className="auth-form__img-wrapper-link">
            <img
              className="auth-form__logotype"
              src={logoOne}
              alt="logotype site"
            />
          </Link>
        </div>

        <h2 className="auth-form__title">Рады видеть!</h2>

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
            // value={password}
            autoComplete="on"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
          />
        </label>

        <span className="form-error"></span>

        <button
          type="submit"
          className="auth-form__btn-submit auth-form__btn-submit_theme_white
          type_signin"
        >
          Войти
        </button>
        <p className="auth-form__link-wrapper">
          Ещё не зарегистрированы?{" "}
          <Link to="/signup" className="auth-form__link">
            Регистрация
          </Link>
        </p>
      </form>
    </div>
  );
}

export default withRouter(Login);
