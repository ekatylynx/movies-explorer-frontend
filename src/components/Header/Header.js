import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import "./Header.css";
import logoOne from "../../images/logotypeHeader.svg";

// Если мы на роуте /movies - то в Navigation будет другое меню
const Header = ({ dark }) => {
  return (
    <section className={"header" + (!dark ? " header_type_logined" : "")}>
      <div className="header__container">
        <Link to="/" className="auth-form__img-wrapper-link">
          <img className="header__logo" src={logoOne} alt="Логотип сайта" />
        </Link>
        <Navigation dark={dark} />
      </div>
    </section>
  );
};

export default Header;
