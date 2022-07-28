const API_KEY = "34efd8fd6b7f542118ce68df8c63589a";

const requests = {
  fetchTrending:
    "/trending/all/week?api_key=34efd8fd6b7f542118ce68df8c63589a&language=en-US",
  fetchNetflixOriginals:
    "/discover/tv?api_key=34efd8fd6b7f542118ce68df8c63589a&with_network=213",
  fetchTopRated:
    "/movie/top_rated?api_key=34efd8fd6b7f542118ce68df8c63589a&language=en-US",
  fetchActionMovies:
    "/discover/movie?api_key=34efd8fd6b7f542118ce68df8c63589a&width_genres=28",
  fetchComedyMovies:
    "/discover/movie?api_key=34efd8fd6b7f542118ce68df8c63589a&width_genres=35",
  fetchHorrorMovies:
    "/discover/movie?api_key=34efd8fd6b7f542118ce68df8c63589a&width_genres=27",
  fetchRomanceMovies:
    "/discover/movie?api_key=34efd8fd6b7f542118ce68df8c63589a&width_genres=10749",
  fetchDocumentries:
    "/discover/movie?api_key=34efd8fd6b7f542118ce68df8c63589a&width_genres=99",
};

export default requests;
