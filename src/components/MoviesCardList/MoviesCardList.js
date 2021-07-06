import React from "react";
import "./MoviesCardList.css";

// На роуте saved-movies будет отображаться конкретный блок с карточками

function MoviesCardList({ favourite }) {
  return (
    <>
      {favourite ? (
        <section className="moviesgallery">
          <ul className="moviesgallery__wrapper">
            <li className="card-movies">
              <img
                src="https://images.unsplash.com/photo-1625482107418-828242ae20be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="text"
                className="card-movies__image"
              />
              <div className="card-movies__wrapper-title">
                <h2 className="card-movies__title">36 слов о дизайне</h2>
                <button className="card-movies__button-like"></button>
              </div>
              <div className="card-movies__line" />
              <span className="card-movies__time">1ч 42м</span>
            </li>
            <li className="card-movies">
              <img
                src="https://images.unsplash.com/photo-1625482107418-828242ae20be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="text"
                className="card-movies__image"
              />
              <div className="card-movies__wrapper-title">
                <h2 className="card-movies__title">33 слова о дизайне</h2>
                <button className="card-movies__button-like card-movies__button-like_type_unlike"></button>
              </div>
              <div className="card-movies__line" />
              <span className="card-movies__time">1ч 42м</span>
            </li>
            <li className="card-movies">
              <img
                src="https://images.unsplash.com/photo-1625482107418-828242ae20be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="text"
                className="card-movies__image"
              />
              <div className="card-movies__wrapper-title">
                <h2 className="card-movies__title">86 слов о дизайне</h2>
                <button className="card-movies__button-like"></button>
              </div>
              <div className="card-movies__line" />
              <span className="card-movies__time">1ч 42м</span>
            </li>
          </ul>
        </section>
      ) : (
        <section className="moviesgallery">
          <ul className="moviesgallery__wrapper">
            <li className="card-movies">
              <img
                src="https://images.unsplash.com/photo-1625482107418-828242ae20be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="text"
                className="card-movies__image"
              />
              <div className="card-movies__wrapper-title">
                <h2 className="card-movies__title">36 слов о дизайне</h2>
                <button className="card-movies__button-like"></button>
              </div>
              <div className="card-movies__line" />
              <span className="card-movies__time">1ч 42м</span>
            </li>
            <li className="card-movies">
              <img
                src="https://images.unsplash.com/photo-1625482107418-828242ae20be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="text"
                className="card-movies__image"
              />
              <div className="card-movies__wrapper-title">
                <h2 className="card-movies__title">33 слова о дизайне</h2>
                <button className="card-movies__button-like card-movies__button-like_type_unlike"></button>
              </div>
              <div className="card-movies__line" />
              <span className="card-movies__time">1ч 42м</span>
            </li>
            <li className="card-movies">
              <img
                src="https://images.unsplash.com/photo-1625482107418-828242ae20be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="text"
                className="card-movies__image"
              />
              <div className="card-movies__wrapper-title">
                <h2 className="card-movies__title">86 слов о дизайне</h2>
                <button className="card-movies__button-like"></button>
              </div>
              <div className="card-movies__line" />
              <span className="card-movies__time">1ч 42м</span>
            </li>
            <li className="card-movies">
              <img
                src="https://images.unsplash.com/photo-1625482107418-828242ae20be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="text"
                className="card-movies__image"
              />
              <div className="card-movies__wrapper-title">
                <h2 className="card-movies__title">99 слов о дизайне</h2>
                <button className="card-movies__button-like"></button>
              </div>
              <div className="card-movies__line" />
              <span className="card-movies__time">1ч 42м</span>
            </li>
            <li className="card-movies">
              <img
                src="https://images.unsplash.com/photo-1625482107418-828242ae20be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="text"
                className="card-movies__image"
              />
              <div className="card-movies__wrapper-title">
                <h2 className="card-movies__title">0 слов о дизайне</h2>
                <button className="card-movies__button-like"></button>
              </div>
              <div className="card-movies__line" />
              <span className="card-movies__time">1ч 42м</span>
            </li>
          </ul>
          <div className="moviesgallery__wrapper-button">
            <button className="moviesgallery__button-card-more">Ещё</button>
          </div>
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
