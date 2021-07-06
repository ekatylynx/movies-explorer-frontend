import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__form-wrapper">
          <button
            className="search__form-button search__form-button_type_search"
            type="submit"
          ></button>
          <button
            className="search__form-button search__form-button_type_find"
            type="submit"
          ></button>
          <input
            type="text"
            name="search"
            placeholder="Фильм"
            className="search__form-input"
            required
          />
        </div>

        <span className="search__form-error">Нужно ввести ключевое слово</span>
        <div className="search__toggle-wrapper">
          <input className="search__toggle" type="checkbox" />
          <label className="search__toggle-text">Короткометражки</label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
