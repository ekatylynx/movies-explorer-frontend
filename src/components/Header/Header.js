import Navigation from "../Navigation/Navigation";
import './Header.css';
import logoOne from '../../images/logotypeHeader.svg';

function Header() {
  return (
        <section className="header">
          <div className="header__container">
            <img className="header__logo" 
            src={logoOne}
            alt="Логотип сайта" />
            <Navigation />
          </div>
        </section>
  );
}

export default Header;
