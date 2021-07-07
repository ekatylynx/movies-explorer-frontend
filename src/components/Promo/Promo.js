import React from "react";
import "./Promo.css";
import promoLogo from "../../images/landing-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <div className="promo__text-wrapper">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className="promo__button">Узнать больше</button>
        </div>

        <img className="promo__logo" src={promoLogo} alt="promo logotype" />
      </div>
    </section>
  );
}

export default Promo;
