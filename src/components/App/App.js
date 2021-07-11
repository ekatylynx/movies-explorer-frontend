import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import MainApi from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";
import Main from "../../components/Main/Main";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";
import Movies from "../../components/Movies/Movies";
import SavedMovies from "../../components/SavedMovies/SavedMovies";
import Profile from "../../components/Profile/Profile";
import Popup from "../../components/Popup/Popup";
import NotFound from "../../components/NotFound/NotFound";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [popup, setPopup] = useState();
  const [externalMovies, setExternalMovies] = useState();
  const [myMovies, setMyMovies] = useState();

  const getUser = useCallback(
    (jwt) => {
      MainApi.checkAuth(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);

            const savedExternalMovies = JSON.parse(
              localStorage.getItem("externalMovies")
            );
            if (savedExternalMovies && Array.isArray(savedExternalMovies)) {
              setExternalMovies(savedExternalMovies);
            }

            const savedMyMovies = JSON.parse(localStorage.getItem("myMovies"));
            if (savedMyMovies && Array.isArray(savedMyMovies)) {
              setMyMovies(savedMyMovies);
            }

            props.history.push("/movies");
          }
        })
        .catch((err) => {
          console.log(err);
          setPopup({
            type: "error",
            text: err && err.message ? err.message : "Произошла ошибка",
          });
        });
    },
    [props.history]
  );

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      getUser(jwt);
    }
  }, [getUser]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (loggedIn && jwt) {
      getUser(jwt);
    }
  }, [loggedIn, getUser]);

  // Выход
  const logOut = (e) => {
    e.preventDefault();

    localStorage.removeItem("jwt");
    setCurrentUser();
    localStorage.removeItem("myMovies");
    setMyMovies();
    localStorage.removeItem("externalMovies");
    setExternalMovies();

    localStorage.removeItem("externalMoviesSearch");
    localStorage.removeItem("externalMoviesToggle");
    localStorage.removeItem("myMoviesSearch");
    localStorage.removeItem("myMoviesToggle");
    
    setLoggedIn(false);
    props.history.push("/");
    setPopup({ type: "success", text: "Вы успешно вышли" });
  };

  const error = (err) => {
    console.log(err);
    setPopup({
      type: "error",
      text: err && err.message ? err.message : "Произошла ошибка",
    });
  };

  const handleRegister = (password, email, name) => {
    return MainApi.register(password, email, name)
      .then((res) => {
        setPopup({ type: "success", text: "Вы успешно зарегистрировались" });
        props.history.push("/signin");
      })
      .catch(error);
  };

  // Запрос на логин по паролю и мэйлу
  const handleLogin = (password, email) => {
    return MainApi.login(password, email)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          setPopup({ type: "success", text: "Вы успешно вошли" });
        }
      })
      .catch(error);
  };

  const handleUpdateUser = (data) => {
    return MainApi.setUser(data)
      .then((data) => {
        setCurrentUser(data);
        setPopup({ type: "success", text: "Профиль успешно сохранен" });
      })
      .catch(error);
  };

  const handlerCreateMovie = (data) => {
    MainApi.createMovie(data)
      .then((res) => {
        setMyMovies((m) => {
          m.push(res);
          localStorage.setItem("myMovies", JSON.stringify(m));
          return [...m];
        });
        setPopup({ type: "success", text: "Фильм успешно сохранен" });
      })
      .catch(error);
  };

  const handlerDeleteMovie = (id) => {
    MainApi.deleteMovie(id)
      .then(() => {
        setMyMovies((m) => {
          m = m.filter((f) => f._id !== id);
          localStorage.setItem("myMovies", JSON.stringify(m));
          return [...m];
        });
        setPopup({ type: "success", text: "Фильм успешно удален" });
      })
      .catch(error);
  };

  const getExternalMovies = () => {
    return new Promise((resolve, reject) => {
      const saved = JSON.parse(localStorage.getItem("externalMovies"));

      if (saved && Array.isArray(saved)) {
        resolve(saved);
      } else {
        getMovies()
          .then((res) => {
            localStorage.setItem("externalMovies", JSON.stringify(res));
            resolve(res);
          })
          .catch((err) => {
            error(err);
            reject();
          });
      }
    });
  };

  const getMyMovies = () => {
    return new Promise((resolve, reject) => {
      const saved = JSON.parse(localStorage.getItem("myMovies"));

      if (saved && Array.isArray(saved)) {
        resolve(saved);
      } else {
        MainApi.getMovies()
          .then((res) => {
            localStorage.setItem("myMovies", JSON.stringify(res));
            resolve(res);
          })
          .catch((err) => {
            error(err);
            reject();
          });
      }
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {popup ? <Popup {...popup} onClose={() => setPopup()} /> : null}
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/signup">
            <Register onRegiter={handleRegister} />
          </Route>

          <Route exact path="/signin">
            <Login onLogin={handleLogin} />
          </Route>

          <ProtectedRoute exact path="/movies" isLoginned={currentUser}>
            <Movies
              onCreateMovie={handlerCreateMovie}
              onDeleteMovie={handlerDeleteMovie}
              externalMovies={externalMovies}
              setExternalMovies={setExternalMovies}
              myMovies={myMovies}
              setMyMovies={setMyMovies}
              getExternalMovies={getExternalMovies}
              getMyMovies={getMyMovies}
            />
          </ProtectedRoute>

          <ProtectedRoute exact path="/saved-movies" isLoginned={currentUser}>
            <SavedMovies
              onDeleteMovie={handlerDeleteMovie}
              myMovies={myMovies}
              setMyMovies={setMyMovies}
              getMyMovies={getMyMovies}
            />
          </ProtectedRoute>

          <ProtectedRoute exact path="/profile" isLoginned={currentUser}>
            <Profile logOut={logOut} onUpdateUser={handleUpdateUser} />
          </ProtectedRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default withRouter(App);
