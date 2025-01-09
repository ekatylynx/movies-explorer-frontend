class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // Функция проверки запроса
  async _checkResult(res) {
    const body = await res.json();
    return res.ok ? body : Promise.reject({ statusCode: res.status, ...body });
  }

  _getHeaders() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      return { ...this._headers, ...{ Authorization: `Bearer ${jwt}`} }
    } else {
      return this._headers;
    }
  }

  // Регистрация
  register(password, email, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ password, email, name }),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  login(password, email) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ password, email }),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  checkAuth(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  setUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify(data),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  createMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify(data),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._getHeaders(),
    }).then((res) => {
      return this._checkResult(res);
    });
  }
}

export default new MainApi({
  // baseUrl: "https://api.ekate.students.nomoredomains.monster",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
