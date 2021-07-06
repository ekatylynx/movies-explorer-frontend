import React, { useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { withRouter } from "react-router-dom";

function Profile() {
  const [name, setName] = useState("Василий");
  const [email, setEmail] = useState("test@gmail.com");

  return (
    <>
      <Header logined={true} />
      <section className="profile">
        <div className="profile__wrapper">
          <h2 className="profile__title">Привет, {name}!</h2>
          <form className="profile-form">
            <label className="profile-form__label">
              Имя
              <input
                className="profile-form__input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <div className="profile-form__line" />
            <label className="profile-form__label">
              E-mail
              <input
                className="profile-form__input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <div className="profile-form__button-wrapper">
              <button className="profile-form__button">Редактировать</button>
              <button className="profile-form__button profile-form__button_type_signout">
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default withRouter(Profile);
