import React from "react";
import './Navigation.css';

function Navigation() {
  return (
        <ul className="header-navigation">
          <li className="header-navigation__li">
            <a className="header-navigation__link" href="2">Регистрация</a>
          </li>

          <li className="header-navigation__li header-navigation__li_type_signin">
            <a className="header-navigation__link header-navigation__link_type_signin" href="2">Войти</a>
          </li>
        </ul>
  );
}

export default Navigation;