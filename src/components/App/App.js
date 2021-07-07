import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../../components/Main/Main";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";
import Movies from "../../components/Movies/Movies";
import SavedMovies from "../../components/SavedMovies/SavedMovies";
import Profile from "../../components/Profile/Profile";
import NotFound from "../../components/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/signup">
          <Register />
        </Route>

        <Route exact path="/signin">
          <Login />
        </Route>

        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
