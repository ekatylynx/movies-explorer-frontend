import React from "react";
import Header from "../Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "react-router-dom";

function SavedMovies() {
  return (
    <>
      <Header logined={true} />
      <SearchForm />
      <MoviesCardList favourite={true} />
      <Footer />
    </>
  );
}

export default withRouter(SavedMovies);
