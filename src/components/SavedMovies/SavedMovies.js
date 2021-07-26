import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Footer from "../../components/Footer/Footer";
import { SHORT_MAX_LENGTH } from "../../utils/constants";

const SavedMovies = ({ onDeleteMovie, myMovies, setMyMovies, getMyMovies }) => {
  const [search, _setSearch] = useState(
    localStorage.getItem("myMoviesSearch") || ""
  );
  const [toggle, _setToggle] = useState(
    localStorage.getItem("myMoviesToggle") === "true" || false
  );
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [busy, setBusy] = useState(false);

  const setSearch = (text) => {
    localStorage.setItem("myMoviesSearch", text);
    _setSearch(text);
  };

  const setToggle = () => {
    _setToggle((b) => {
      localStorage.setItem("myMoviesToggle", !b);
      return !b;
    });
  };

  useEffect(() => {
    if (myMovies) {
      const tmp =
        search !== ""
          ? myMovies.filter((item) => {
              return (
                item.nameRU.toLowerCase().includes(search.toLowerCase()) &&
                (toggle ? item.duration <= SHORT_MAX_LENGTH : true)
              );
            })
          : myMovies;

      setFilteredMovies(
        tmp.map((item) => {
          return {
            ...item,
            ...{ isLiked: true },
          };
        })
      );
    } else {
      setBusy(true);

      getMyMovies().then((res) => {
        setMyMovies(res);
      });
    }
  }, [search, toggle, myMovies, setMyMovies, getMyMovies]);

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
        onUnlikeMovie={onDeleteMovie}
      />
      <Footer />
    </>
  );
};

export default SavedMovies;
