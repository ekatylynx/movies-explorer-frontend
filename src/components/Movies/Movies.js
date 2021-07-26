import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Footer from "../../components/Footer/Footer";
import { SHORT_MAX_LENGTH } from "../../utils/constants";

const Movies = ({
  onCreateMovie,
  onDeleteMovie,
  externalMovies,
  setExternalMovies,
  myMovies,
  setMyMovies,
  getExternalMovies,
  getMyMovies,
}) => {
  const [search, _setSearch] = useState(
    localStorage.getItem("externalMoviesSearch") || ""
  );
  const [toggle, _setToggle] = useState(
    localStorage.getItem("externalMoviesToggle") === "true" || false
  );
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [busy, setBusy] = useState(false);

  const setSearch = (text) => {
    localStorage.setItem("externalMoviesSearch", text);
    _setSearch(text);
  };

  const setToggle = () => {
    _setToggle((b) => {
      localStorage.setItem("externalMoviesToggle", !b);
      return !b;
    });
  };

  // поиск и фильтрация фильмов
  useEffect(() => {
    if (search !== "") {
      if (myMovies && externalMovies) {
        const tmp = externalMovies.filter((item) => {
          return (
            item.nameRU.toLowerCase().includes(search.toLowerCase()) &&
            (toggle ? item.duration <= SHORT_MAX_LENGTH : true)
          );
        });
        setFilteredMovies(
          tmp.map((item) => {
            const filtered = myMovies.filter((m) => m.movieId === item.movieId);
            const id = filtered.length > 0 ? filtered[0]._id : false;
            const liked = id ? { isLiked: true, _id: id } : { isLiked: false };

            return { ...item, ...liked };
          })
        );
      } else {
        setBusy(true);

        Promise.all([getExternalMovies(), getMyMovies()]).then((res) => {
          setExternalMovies(res[0]);
          setMyMovies(res[1]);
        });
      }
    } else {
     setFilteredMovies([]);
    }
  }, [
    search,
    toggle,
    externalMovies,
    myMovies,
    setExternalMovies,
    setMyMovies,
    getExternalMovies,
    getMyMovies,
  ]);

  useEffect(() => {
    setBusy(false);
  }, [filteredMovies]);

  return (
    <>
      <Header />
      <SearchForm
        text={search}
        setText={setSearch}
        toggle={toggle}
        setToggle={setToggle}
        busy={busy}
      />
      <MoviesCardList
        movies={filteredMovies}
        busy={busy}
        onLikeMovie={onCreateMovie}
        onUnlikeMovie={onDeleteMovie}
      />
      <Footer />
    </>
  );
};

export default Movies;
