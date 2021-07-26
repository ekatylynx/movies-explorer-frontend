import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logoOne from "../../images/logotypeHeader.svg";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const Login = ({ onLogin, history }) => {
  const [busy, setBusy] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    return () => resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setBusy(true);

    onLogin(values.password, values.email)
      .finally(() => setBusy(false));
  };

  return (
    <div>
      <form
        name="login"
        className="auth-form"
        onSubmit={handleSubmit}
        noValidate
      >
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
            required
            placeholder="email@gmail.ru"
            value={values.email || ""}
            onChange={handleChange}
            disabled={busy}
          />
        </label>

        <span className="form-error">{errors.email}</span>

        <label className="auth-form__label">
          Пароль
          <input
            name="password"
            className="popup-form__input popup-form__input_type_auth"
            type="password"
            value={values.password || ""}
            autoComplete="on"
            minLength="8"
            required
            onChange={handleChange}
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            disabled={busy}
          />
        </label>

        <span className="form-error">{errors.password}</span>

        <button
          type="submit"
          className={
            "auth-form__btn-submit auth-form__btn-submit_theme_white" +
            (!isValid || busy ? " auth-form__btn-submit_type_disabled" : "")
          }
          disabled={!isValid || busy}
        >
          {!busy ? "Войти" : "Пожалуйста подождите..."}
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
};

export default Login;
