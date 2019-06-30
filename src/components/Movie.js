import React from 'react';

const Movie = (props) => (
  <div className="movie">
    <img src= {"http://image.tmdb.org/t/p/w185/" + props.posterPath} alt="Poster" className="poster"/>
    <div>
      {props.title&& <h2 className = "title">{props.title}</h2>}
      {props.name&& <h2 className = "title">{props.name}</h2>}
      <h4>Rating: {props.voteAverage}</h4>
      {props.releaseDate&& <h4>Release Date: {props.releaseDate}</h4>}
    </div>
    <div className="movie-summary">
      <p className="summary">{props.overview}</p>
    </div>
  </div>
);


export default Movie;