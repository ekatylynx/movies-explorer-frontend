import React from "react";

const MoviesCard = ({ onClickMovie, liked, _id, ...film }) => {
  const formatTime = (minutes) => {
    if (minutes > 60) {
      const hours = Math.floor(minutes / 60);
      return `${hours}ч ${minutes - (hours * 60)}м`;
    } else {
      return `${minutes}м`;
    }
  };

  return (
    <li className="card-movies">
      <a href={film.trailer} target="_blank" rel="noreferrer">
        <img
          src={film.image}
          alt={film.nameRU}
          className="card-movies__image"
        />
      </a>
      <div className="card-movies__wrapper-title">
        <h2 className="card-movies__title">{film.nameRU}</h2>
        <button
          onClick={() => onClickMovie(liked ? _id : film)}
          className={
            "card-movies__button-like" +
            (liked ? " card-movies__button-like_type_unliked" : "")
          }
        ></button>
      </div>
      <div className="card-movies__line" />
      <span className="card-movies__time">{formatTime(film.duration)}</span>
    </li>
  );
};

export default MoviesCard;
