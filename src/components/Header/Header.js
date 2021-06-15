import './Header.css';
import logo_one from '../../images/logo.svg';

function Header() {
  return (
        <header className="header">
            <img className="header__logo" 
            src={logo_one}
            alt="Логотип сайта" />
            <ul className="header-navigation">
              <li className="header-navigation__li">
                <a className="header-navigation__link" href="2">Регистрация</a>
              </li>

              <li className="header-navigation__li">
                <a className="header-navigation__link" href="2">Войти</a>
              </li>
            </ul>
        </header>
  );
}

export default Header;
