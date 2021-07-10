import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logoOne from "../../images/logotypeHeader.svg";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const Register = (props) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    return () => resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegiter(values.password, values.email, values.name);
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

        <h2 className="auth-form__title">Добро пожаловать!</h2>

        <label className="auth-form__label">
          Имя
          <input
            name="name"
            className="popup-form__input popup-form__input_type_auth"
            type="text"
            placeholder="Виталий"
            pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
            value={values.name || ""}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            required
          />
        </label>

        <span className="form-error">{errors.name}</span>

        <label className="auth-form__label">
          E-mail
          <input
            name="email"
            className="popup-form__input popup-form__input_type_auth"
            type="email"
            placeholder="email@gmail.ru"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
        </label>

        <span className="form-error">{errors.email}</span>

        <label className="auth-form__label">
          Пароль
          <input
            name="password"
            className="popup-form__input popup-form__input_type_auth"
            type="password"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            minLength="8"
            value={values.password || ""}
            onChange={handleChange}
            autoComplete="on"
            required
          />
        </label>

        <span className="form-error">{errors.password}</span>

        <button
          type="submit"
          className={
            "auth-form__btn-submit auth-form__btn-submit_theme_white" +
            (!isValid ? " auth-form__btn-submit_type_disabled" : "")
          }
          disabled={!isValid}
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
};

export default Register;
