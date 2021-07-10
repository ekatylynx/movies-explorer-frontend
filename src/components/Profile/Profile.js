import React, { useEffect, useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const Profile = ({ logOut, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  // eslint-disable-next-line
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({ name: currentUser.name, email: currentUser.email });
  
  useEffect(() => {
    return () => resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = values;
    onUpdateUser({ name, email });
  };

  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__wrapper">
          <h2 className="profile__title">Привет, {values.name || ""}!</h2>
          <form className="profile-form" onSubmit={handleSubmit}>
            <label className="profile-form__label">
              Имя
              <input
                name="name"
                className="profile-form__input"
                type="text"
                value={values.name || ""}
                onChange={handleChange}
                pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                minLength="2"
                maxLength="30"
                required
              ></input>
            </label>
            <span className="form-error">{errors.name}</span>
            <div className="profile-form__line" />
            <label className="profile-form__label">
              E-mail
              <input
                name="email"
                className="profile-form__input"
                type="email"
                value={values.email || ""}
                onChange={handleChange}
                required
              ></input>
            </label>
            <span className="form-error">{errors.email}</span>
            <div className="profile-form__button-wrapper">
              <input type="submit" className={"profile-form__button profile-form__button_type_edit-profile" + (!isValid ? " auth-form__btn-submit_type_disabled" : "")} value="Редактировать" disabled={!isValid} />
              <button className="profile-form__button profile-form__button_type_signout" onClick={logOut}>
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
