import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Footer from "../../components/Footer/Footer";

const SavedMovies = ({ onDeleteMovie, myMovies, setMyMovies, getMyMovies }) => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    if (myMovies) {
      const tmp =
        search !== ""
          ? myMovies.filter((item) => {
              return (
                item.nameRU.toLowerCase().includes(search.toLowerCase()) &&
                (toggle ? item.duration <= 40 : true)
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
