import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
export default function DetailList() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  // getting the movie details from the store
  const movieDetails = useSelector((store) => store.movieDetails);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // formatting movie details
    if (movieDetails?.length > 0) {
      setMovie({
        title: movieDetails[0].title,
        poster: movieDetails[0].poster,
        description: movieDetails[0].description,
        genres: movieDetails.map((genre) => genre.name),
      });
    }
  }, [movieDetails]);

  useEffect(() => {
    if (params.id) {
      // dispatching an action to saga to fetch movie details
      dispatch({ type: "FETCH_MOVIE_DETAILS", payload: params.id });
    }
  }, []);

  return movie ? (
    <div className="details_page">
      <div className="image">
        <img src={movie.poster} alt="" />
      </div>
      <div className="content">
        <h1>{movie.title}</h1>
        <p className="description">{movie.description}</p>
        <p className="genres"><span className="genreTitle">Genres:</span>{movie.genres.map((x) => (
            <span key={x}>{x}</span>
          ))}</p>
        <button onClick={() => history.push("/")}>Back To Movie List</button>
      </div>
    </div>
  ) : null;
}
