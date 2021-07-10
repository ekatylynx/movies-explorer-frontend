import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import accountIcon from "../../images/account-icon.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Navigation = ({ dark }) => {
  const [isMobile, setMobile] = useState(false);
  const [gamburger, setGamburger] = useState(false);
  const logined = useContext(CurrentUserContext);

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
              "gamburger-overlay" +
              (gamburger ? " gamburger-overlay_opened" : "")
            }
          ></div>
          <div className={"gamburger" + (gamburger ? " gamburger_show" : "")}>
            <div className="gamburger__wrapper">
              <div className="gamburger__wrapper-link">
                <NavLink exact={true} className="gamburger__link" activeClassName="header-navigation__link_active" to="/">
                  Главная
                </NavLink>
                <NavLink className="gamburger__link" activeClassName="header-navigation__link_active" to="/movies">
                  Фильмы
                </NavLink>
                <NavLink className="gamburger__link" activeClassName="header-navigation__link_active" to="/saved-movies">
                  Сохранённые фильмы
                </NavLink>
              </div>
              <div className="gamburger__wrapper-link-account">
                <NavLink to="/profile" className="gamburger__link" activeClassName="header-navigation__link_active">
                  Аккаунт
                  <img
                    className="header-navigation__image-logined"
                    src={accountIcon}
                    alt="account icon"
                  />
                </NavLink>
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
                  <NavLink
                    to="/movies"
                    activeClassName="header-navigation__link_active"
                    className={
                      "header-navigation__link-logined" +
                      (dark
                        ? " header-navigation__link-logined_style_white"
                        : "")
                    }
                  >
                    Фильмы
                  </NavLink>
                  <NavLink
                    to="/saved-movies"
                    activeClassName="header-navigation__link_active"
                    className={
                      "header-navigation__link-logined" +
                      (dark
                        ? " header-navigation__link-logined_style_white"
                        : "")
                    }
                  >
                    Сохранённые фильмы
                  </NavLink>
                </li>
              </ul>

              <ul className="header-navigation_type_logined">
                <li className="header-navigation__li-logined">
                  <NavLink
                    to="/profile"
                    activeClassName="header-navigation__link_active"
                    className={
                      "header-navigation__link-logined header-navigation__link-logined_type_account" +
                      (dark
                        ? " header-navigation__link-logined_style_white"
                        : "")
                    }
                  >
                    Аккаунт
                    <img
                      className="header-navigation__image-logined"
                      src={accountIcon}
                      alt="account icon"
                    />
                  </NavLink>
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
};

export default Navigation;
