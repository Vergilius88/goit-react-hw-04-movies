const keyAPI = "ce2eb9dc8a268657dca33c0f3f4f0ac2";
const pathAPI = "https://api.themoviedb.org/3";



export const imgPath = "https://image.tmdb.org/t/p/w185";
export const posterImgPath = `https://image.tmdb.org/t/p/w342/`;



export const getTrending = () => {
  return fetch(`${pathAPI}/trending/movie/day?api_key=${keyAPI}`)
    .then((res) => res.json())
    .then((data) => data.results);
};

export const getMoviesByKeyword = (keyword) => {
  return fetch(`${pathAPI}/search/movie?api_key=${keyAPI}&query=${keyword}`)
    .then((res) => res.json())
    .then((data) => data.results);
};

export const getMovieDetails = (movieId) => {
  return fetch(`${pathAPI}/movie/${movieId}?api_key=${keyAPI}`).then((res) =>
    res.json()
  );
};

export const getMovieCast = (movieId) => {
  return fetch(`${pathAPI}/movie/${movieId}/credits?api_key=${keyAPI}`)
    .then((res) => res.json())
    .then((data) => data.cast);
};

export const getMovieReviews = (movieId) => {
  return fetch(`${pathAPI}/movie/${movieId}/reviews?api_key=${keyAPI}`)
    .then((res) => res.json())
    .then((data) => data.results);
};
