export const baseUrl = "https://api.nomoreparties.co/beatfilm-movies";

export const getMovies = () => {
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // Приведение объекта фильма к необходимой модели
      return data.map((item) => {
        let tmp = {
          ...item,
          ...{
            image: `https://api.nomoreparties.co${item.image.url}`,
            trailer: item.trailerLink,
            thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
            movieId: item.id,
          },
        };
  
        delete tmp.id;
        delete tmp.trailerLink;
        delete tmp.created_at;
        delete tmp.updated_at;
  
        return tmp;
      });
    });
};
