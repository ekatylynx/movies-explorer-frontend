import React, { useState, useEffect } from "react";
import "./MoviesCardList.css";
import Preloader from "../../components/Preloader/Preloader";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { GRID_480, GRID_768, GRID_1280, GRID_FULL } from "../../utils/constants";

// На роуте saved-movies будет отображаться конкретный блок с карточками
const MoviesCardList = ({ movies, busy, onLikeMovie, onUnlikeMovie }) => {
  const [page, setPage] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onResize = () => {
    setScreenWidth(window.outerWidth);
  };

  const more = () => {
    setPage((p) => p + 1);
  };

  // let gridParams = {
  //   init: 0,
  //   perPage: 0,
  // };

  let gridParams = GRID_FULL;

  if (screenWidth < 480) {
    gridParams = GRID_480;
  } else if (screenWidth >= 480 && screenWidth < 768) {
    gridParams = GRID_768;
  } else if (screenWidth >= 768 && screenWidth < 1280) {
    gridParams = GRID_1280;
  // } else {
  //   gridParams = GRID_FULL;
  }

  const { init, perPage } = gridParams;

  let maxPage = movies ? (movies.length - init) / perPage : 0;

  return (
    <>
      {busy ? (
        <Preloader />
      ) : (
        <section className="moviesgallery">
          <ul className="moviesgallery__wrapper">
            {movies
              .slice(0, init + page * perPage)
              .map(({ isLiked, ...item }) => (
                <MoviesCard
                  key={item.movieId}
                  onClickMovie={isLiked ? onUnlikeMovie : onLikeMovie}
                  liked={isLiked}
                  {...item}
                />
              ))}
          </ul>
          {maxPage > 1 && page < maxPage ? (
            <div className="moviesgallery__wrapper-button">
              <button
                onClick={more}
                className="moviesgallery__button-card-more"
              >
                Ещё
              </button>
            </div>
          ) : null}
        </section>
      )}
    </>
  );
};

export default MoviesCardList;
