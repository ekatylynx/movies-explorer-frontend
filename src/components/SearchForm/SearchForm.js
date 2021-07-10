import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ setText, toggle, setToggle, busy }) => {
  const [text, _setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(text.trim());
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__form-wrapper">
          <div className="search__form-button search__form-button_type_search"></div>
          <button
            className="search__form-button search__form-button_type_find"
            type="submit"
            disabled={busy}
          ></button>
          <input
            type="text"
            name="search"
            placeholder="Фильм"
            className="search__form-input"
            required
            onChange={(e) => _setText(e.target.value)}
            value={text}
            disabled={busy}
          />
        </div>

        <label className="search__toggle-wrapper">
          <input
            className="search__toggle"
            type="checkbox"
            checked={toggle}
            onChange={() => setToggle(t => !t)}
          />
          Короткометражки
        </label>
      </form>
    </section>
  );
};

export default SearchForm;
