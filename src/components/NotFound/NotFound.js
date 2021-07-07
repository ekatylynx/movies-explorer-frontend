import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound__wrapper">
      <div className="notfound">
        <div className="notfound__wrapper-text">
          <h2 className="notfound__title">404</h2>
          <p className="notfound__text">Страница не найдена</p>
        </div>
        <Link to="/" className="notfound__link">
          Назад
        </Link>
      </div>
    </div>
  );
}

export default withRouter(NotFound);
