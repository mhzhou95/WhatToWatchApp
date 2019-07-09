import React from 'react';

export default class TvGenres extends React.Component{
  handleGenreSearchTv = (event) => {
    const genreTv = this.props.handleGenreSearchTv(event.target.value)
  }
  render(){
    return (
      <div>
        <div>
          <button value="10759" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Action & Adventure</button>
          <button value="16" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Animation</button>
          <button value="35" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Comedy</button>
          <button value="80" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Crime</button>
          <button value="99" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Documentary</button>
          <button value="18" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Drama</button>
          <button value="10751" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Family</button>
          <button value="10762" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Kids</button>
        </div>
        <div>
          <button value="9648" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Mystery</button>
          <button value="10763" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>News</button>
          <button value="10764" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Reality</button>
          <button value="10767" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Talk</button>
          <button value="10765" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Sci-Fi & Fantasy</button>
          <button value="10766" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Soap</button>
          <button value="10768" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>War & Politics</button>
          <button value="37" className="button-default-genre" onClick={(event)=> this.handleGenreSearchTv(event)}>Western</button>
        </div>
      </div>
    )
  }
}