import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import accountIcon from "../../images/account-icon.svg";

function Navigation({ logined }) {
  const [isMobile, setMobile] = useState(false);
  const [gamburger, setGamburger] = useState(false);

  useEffect(() => {
    // При монтировании компонента
    window.addEventListener("resize", onResize);
    onResize();

    // При отмонтировании компонента
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // При изменении gamburger
  useEffect(() => {
    if (gamburger) {
      // Чтобы не скролилось при открытом меню
      document.body.style.overflow = "hidden";
    } else {
      // Чтобы скролилось при закрытом меню
      document.body.style.overflow = "auto";
    }
  }, [gamburger]);

  // При изменении isMobile
  useEffect(() => {
    // Автомат закрытие меню при разрешении меньше 768
    if (!isMobile) setGamburger(false);
  }, [isMobile]);

  // Функция, определяющая мобильное отображение, записывает в стейт либо true либо false
  const onResize = () => setMobile(window.outerWidth <= 768);

  return (
    <>
      {logined ? (
        <>
          <div
            onClick={() => setGamburger(false)}
            className={
              "gamburger-overlay" + (gamburger ? " gamburger-overlay_opened" : "")
            }
          ></div>
          <div className={"gamburger" + (gamburger ? " gamburger_show" : "")}>
            <div className="gamburger__wrapper">
              <div className="gamburger__wrapper-link">
                <Link className="gamburger__link" to="/">
                  Главная
                </Link>
                <Link className="gamburger__link" to="/movies">
                  Фильмы
                </Link>
                <Link className="gamburger__link" to="/saved-movies">
                  Сохранённые фильмы
                </Link>
              </div>
              <div className="gamburger__wrapper-link-account">
                <Link to="/profile" className="gamburger__link">
                  Аккаунт
                  <img
                    className="header-navigation__image-logined"
                    src={accountIcon}
                    alt="account icon"
                  />
                </Link>
              </div>
            </div>
          </div>
          {isMobile ? (
            <button
              className="gamburger__button"
              onClick={() => setGamburger((b) => !b)}
            ></button>
          ) : (
            <>
              <ul className="header-navigation-logined">
                <li className="header-navigation__li-logined">
                  <Link
                    to="/movies"
                    className="header-navigation__link-logined"
                  >
                    Фильмы
                  </Link>
                  <Link
                    to="/saved-movies"
                    className="header-navigation__link-logined"
                  >
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>

              <ul className="header-navigation_type_logined">
                <li className="header-navigation__li-logined">
                  <Link
                    to="/profile"
                    className="header-navigation__link-logined header-navigation__link-logined_type_account"
                  >
                    Аккаунт
                    <img
                      className="header-navigation__image-logined"
                      src={accountIcon}
                      alt="account icon"
                    />
                  </Link>
                </li>
              </ul>
            </>
          )}
        </>
      ) : (
        <ul className="header-navigation">
          <li className="header-navigation__li">
            <Link to="/signup" className="header-navigation__link">
              Регистрация
            </Link>
          </li>

          <li className="header-navigation__li header-navigation__li_type_signin">
            <Link
              to="/signin"
              className="header-navigation__link header-navigation__link_type_signin"
            >
              Войти
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Navigation;
