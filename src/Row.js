import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import YouTube from "react-youtube";
import "./row.css";
import movieTrailer from "movie-trailer";
const row_poster = "row_poster";
const row_posterLarge = " row_posterLarge";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, islargeRow }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    async function fetData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.div}
            className={islargeRow ? row_poster + row_posterLarge : row_poster}
            src={
              islargeRow
                ? base_url + movie.poster_path
                : base_url + movie.backdrop_path
            }
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
