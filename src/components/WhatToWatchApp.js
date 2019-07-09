import React from 'react';
import SearchBar from './SearchBar';
import ShowList from './ShowList';
import RandomShow from './Modal';
import MovieGenres from './MovieGenres';
import TvGenres from './TvGenres';
import $ from 'jquery';

const auth = require('../../auth');

class WhatToWatchApp extends React.Component {
  state = {
    movies: [],
    searchTitle: '',
    page: 1,
    url: '',
    genre: 0,
    genreSearchMovies: false,
    genreSearchTv: false
  };
  handleDiscover = () => {
    this.setState(() => ({
      movies: [],
      searchTitle: '',
      page: 1
    }));
    $.ajax({
      url:
        'https://api.themoviedb.org/3/discover/movie?api_key=' +
        auth.TMDB_API_KEY +
        '&sort_by=vote_count.desc&include_adult=true',
      success: searchResults => {
        const results = searchResults.results;
        this.setState(() => ({
          movies: this.state.movies.concat(results),
          url:
            'https://api.themoviedb.org/3/discover/movie?api_key=' +
            auth.TMDB_API_KEY +
            '&sort_by=vote_count.desc&include_adult=true&page='
        }));
      }
    });
  };
  handleTrending = () => {
    this.setState(() => ({
      movies: [],
      searchTitle: '',
      page: 1
    }));
    $.ajax({
      url:
        'https://api.themoviedb.org/3/trending/all/week?api_key=' +
        auth.TMDB_API_KEY,
      success: searchResults => {
        const results = searchResults.results;
        this.setState(() => ({
          movies: this.state.movies.concat(results),
          url:
            'https://api.themoviedb.org/3/trending/all/week?api_key=' +
            auth.TMDB_API_KEY +
            '&page='
        }));
      }
    });
  };
  handleSearch = title => {
    this.setState(() => ({
      movies: [],
      searchTitle: title,
      page: 1
    }));
    $.ajax({
      url:
        'https://api.themoviedb.org/3/search/multi?api_key=' +
        auth.TMDB_API_KEY +
        '&query=' +
        title,
      success: searchResults => {
        const results = searchResults.results;
        this.setState(() => ({
          movies: this.state.movies.concat(results),
          url:
            'https://api.themoviedb.org/3/search/multi?api_key=' +
            auth.TMDB_API_KEY +
            '&query=' +
            title +
            '&page='
        }));
      }
    });
  };
  handleNowPlaying = () => {
    this.setState(() => ({
      movies: [],
      searchTitle: '',
      page: 1
    }));
    $.ajax({
      url:
        'https://api.themoviedb.org/3/movie/upcoming?api_key=' +
        auth.TMDB_API_KEY +
        '&',
      success: searchResults => {
        const results = searchResults.results;
        this.setState(() => ({
          movies: this.state.movies.concat(results),
          url:
            'https://api.themoviedb.org/3/movie/upcoming?api_key=' +
            auth.TMDB_API_KEY +
            '&page='
        }));
      }
    });
  };
  handleTvPopular = () => {
    this.setState(() => ({
      movies: [],
      searchTitle: '',
      page: 1
    }));
    $.ajax({
      url:
        'https://api.themoviedb.org/3/tv/popular?api_key=' +
        auth.TMDB_API_KEY +
        '',
      success: searchResults => {
        const results = searchResults.results;
        this.setState(() => ({
          movies: this.state.movies.concat(results),
          url:
            'https://api.themoviedb.org/3/tv/popular?api_key=' +
            auth.TMDB_API_KEY +
            '&page='
        }));
      }
    });
  };
  handleNextPage = () => {
    this.setState(() => ({
      movies: [],
      searchTitle: '',
      page: (this.state.page += 1)
    }));
    $.ajax({
      url: this.state.url + (this.state.page + 1),
      success: searchResults => {
        const results = searchResults.results;
        this.setState(() => ({
          movies: this.state.movies.concat(results)
        }));
      }
    });
  };
  handleLastPage = () => {
    if (this.state.page > 1) {
      this.setState(() => ({
        movies: [],
        searchTitle: '',
        page: (this.state.page -= 1)
      }));
      $.ajax({
        url: this.state.url + (this.state.page - 1),
        success: searchResults => {
          const results = searchResults.results;
          this.setState(() => ({
            movies: this.state.movies.concat(results)
          }));
        }
      });
    }
  };
  handleHome = () => {
    this.setState(() => ({
      movies: [],
      searchTitle: '',
      genre: 0,
      genreSearchMovies: false,
      genreSearchTv: false
    }));
  };
  handleGenreMovies = () => {
    this.setState(() => ({
      movies: [],
      searchTitle: '',
      page: 1,
      genreSearchMovies: true
    }));
  };
  handleGenreSearchMovies = genreMovie => {
    this.setState(() => ({
      movies: [],
      page: 1,
      genre: genreMovie
    }));
    $.ajax({
      url:
        'https://api.themoviedb.org/3/discover/movie?api_key=' +
        auth.TMDB_API_KEY +
        '&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&vote_average.gte=1&with_genres=' +
        genreMovie,
      success: searchResults => {
        const results = searchResults.results;
        this.setState(() => ({
          movies: this.state.movies.concat(results),
          url:
            'https://api.themoviedb.org/3/discover/movie?api_key=' +
            auth.TMDB_API_KEY +
            '&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&vote_average.gte=1&with_genres=' +
            genreMovie +
            '&page='
        }));
      }
    });
  };
  handleGenreTv = () => {
    this.setState(() => ({
      movies: [],
      searchTitle: '',
      page: 1,
      genreSearchTv: true
    }));
  };
  handleGenreSearchTv = genreTv => {
    this.setState(() => ({
      movies: [],
      page: 1,
      genre: genreTv
    }));
    $.ajax({
      url:
        'https://api.themoviedb.org/3/discover/tv?api_key=' +
        auth.TMDB_API_KEY +
        '&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&vote_average.gte=1&with_genres=' +
        genreTv,
      success: searchResults => {
        const results = searchResults.results;
        this.setState(() => ({
          movies: this.state.movies.concat(results),
          url:
            'https://api.themoviedb.org/3/discover/tv?api_key=' +
            auth.TMDB_API_KEY +
            '&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&vote_average.gte=1&with_genres=' +
            genreTv +
            '&page='
        }));
      }
    });
  };
  render = () => {
    return (
      <div className='wrapper-div'>
        <img className='logo ' src='/images/logo.png' />
        <div className='dashboard'>
          {!this.state.genreSearchMovies && !this.state.genreSearchTv && (
            <div>
              <SearchBar handleSearch={this.handleSearch} />
              <button className='button-default' onClick={this.handleDiscover}>
                Discover
              </button>
              <button className='button-default' onClick={this.handleTrending}>
                Trending
              </button>
              <button
                className='button-default'
                onClick={this.handleNowPlaying}
              >
                Upcoming Movies
              </button>
              <button className='button-default' onClick={this.handleTvPopular}>
                Popular TV Series
              </button>
              <button
                className='button-default'
                onClick={this.handleGenreMovies}
              >
                Movie Genres
              </button>
              <button className='button-default' onClick={this.handleGenreTv}>
                Tv Genres
              </button>
            </div>
          )}
          {this.state.genreSearchMovies && (
            <MovieGenres
              handleGenreSearchMovies={this.handleGenreSearchMovies}
            />
          )}
          {this.state.genreSearchTv && (
            <TvGenres handleGenreSearchTv={this.handleGenreSearchTv} />
          )}
          <div>
            {this.state.genre > 0 && (
              <button className='button-change-page' onClick={this.handleHome}>
                Home
              </button>
            )}
            {this.state.movies.length > 0 && (
              <button
                className='button-change-page'
                onClick={this.handleLastPage}
              >
                LastPage
              </button>
            )}
            {this.state.movies.length > 0 && (
              <button
                className='button-change-page'
                onClick={this.handleNextPage}
              >
                NextPage
              </button>
            )}
          </div>
          {this.state.movies.length > 0 && (
            <RandomShow options={this.state.movies} />
          )}
        </div>
        <ShowList movieList={this.state.movies} />
        {this.state.movies.length > 1 && (
          <button className='button-change-page' onClick={this.handleLastPage}>
            LastPage
          </button>
        )}
        {this.state.movies.length > 1 && (
          <button className='button-change-page' onClick={this.handleNextPage}>
            NextPage
          </button>
        )}
      </div>
    );
  };
}

export default WhatToWatchApp;
