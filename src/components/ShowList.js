import React from 'react';
import Movie from './Movie';

const ShowList = (props) => (
  <div>
    {props.movieList.map((movie)=> {
      return(
        <Movie 
          key={movie.id}
          id = {movie.id}
          title={movie.title}
          name={movie.name}
          posterPath={movie.poster_path}
          voteAverage= {movie.vote_average}
          releaseDate={movie.release_date}
          overview= {movie.overview}
        />
      )
    })}
  </div>
);

export default ShowList;