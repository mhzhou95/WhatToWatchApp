import React from 'react';

export default class MovieGenres extends React.Component{
  handleGenreSearchMovies = (event) => {
    const genre = this.props.handleGenreSearchMovies(event.target.value)
  }
  render(){
    return (
      <div>
        <div>
          <button value="28" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Action</button>
          <button value="12" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Adventure</button>
          <button value="16" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Animation</button>
          <button value="35" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Comedy</button>
          <button value="80" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Crime</button>
          <button value="18" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Drama</button>
          <button value="99" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Documentary</button>
          <button value="10751" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Family</button>
        </div>
        <div>
        <button value="14" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Fantasy</button>
          <button value="36" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>History</button>
          <button value="27" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Horror</button>
          <button value="9648" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Mystery</button>
          <button value="10749" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Romance</button>
          <button value="53" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>Thriller</button>
          <button value="10752" className="button-default-genre" onClick={(event)=> this.handleGenreSearchMovies(event)}>War</button>
        </div>
      </div>
    )
  }
}