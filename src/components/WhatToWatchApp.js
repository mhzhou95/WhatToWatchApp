import React from 'react';
import SearchBar from './SearchBar';
import Movie from './Movie';
import ShowList from './ShowList';
import RandomShow from './Modal';
import $ from 'jquery';

const auth = require("../../auth");

class WhatToWatchApp extends React.Component {
  state = {
    movies: [],
    searchTitle: '',
    discover: false,
    page: 1,
    url: ''
  }
  handleDiscover = () => {
    this.setState(()=> ({
      movies: [],
      discover:true,
      searchTitle: '',
      page: 1
    }))
    $.ajax({
      url: "https://api.themoviedb.org/3/discover/movie?api_key=" + auth.TMDB_API_KEY + "&sort_by=vote_count.desc&include_adult=true" 
      ,
      success: (searchResults) => {
        console.log('search')
        const results = searchResults.results
        console.log(searchResults);
        this.setState(()=>({
          movies: this.state.movies.concat(results),
          url: "https://api.themoviedb.org/3/discover/movie?api_key=" + auth.TMDB_API_KEY + "&sort_by=vote_count.desc&include_adult=true&page=" 
        }))
      }
    })
  }
  handleTrending = () => {
    this.setState(()=>({
      movies: [],
      discover: false,
      searchTitle: '',
      page: 1
    }))
    $.ajax({
      url: "https://api.themoviedb.org/3/trending/all/week?api_key=" + auth.TMDB_API_KEY 
      ,
      success: (searchResults) => {
        console.log('search')
        const results = searchResults.results
        console.log(searchResults);
        this.setState(()=>({
          movies: this.state.movies.concat(results),
          url: "https://api.themoviedb.org/3/trending/all/week?api_key=" + auth.TMDB_API_KEY  + "&page=" 
        }))
      }
    })
  }
  handleSearch = (title) => {
    this.setState(()=>({
      movies: [],
      searchTitle: title,
      discover: true,
      page: 1
    }))
    $.ajax({
      url: "https://api.themoviedb.org/3/search/multi?api_key=" + auth.TMDB_API_KEY +  "&query=" + title
      ,
      success: (searchResults) => {
        console.log('search')
        const results = searchResults.results
        console.log(searchResults);
        this.setState(()=>({
          movies: this.state.movies.concat(results),
          url: "https://api.themoviedb.org/3/search/multi?api_key=" + auth.TMDB_API_KEY +  "&query=" + title + "&page=" 
        }))
      }
    })
  }
  handleNowPlaying = () => {
    this.setState(()=>({
      movies: [],
      discover: false,
      searchTitle: '',
      page: 1
    }))
    $.ajax({
      url: "https://api.themoviedb.org/3/movie/upcoming?api_key=" + auth.TMDB_API_KEY  + "&"
      ,
      success: (searchResults) => {
        console.log('search')
        const results = searchResults.results
        console.log(searchResults);
        this.setState(()=>({
          movies: this.state.movies.concat(results),
          url: "https://api.themoviedb.org/3/movie/upcoming?api_key=" + auth.TMDB_API_KEY  + "&page=" 
        }))
      }
    })
  }
  handleTvPopular = () => {
    this.setState(()=>({
      movies: [],
      discover: false,
      searchTitle: '',
      page: 1
    }))
    $.ajax({
      url: "https://api.themoviedb.org/3/tv/popular?api_key=" + auth.TMDB_API_KEY + ""
      ,
      success: (searchResults) => {
        console.log('search')
        const results = searchResults.results
        console.log(searchResults);
        this.setState(()=>({
          movies: this.state.movies.concat(results),
          url: "https://api.themoviedb.org/3/tv/popular?api_key=" + auth.TMDB_API_KEY +  "&page=" 
        }))
      }
    })
  }
  handleNextPage = () => {
    this.setState(()=>({
      movies: [],
      discover: false,
      searchTitle: '',
      page: this.state.page += 1,
    }))
    $.ajax({
      url: this.state.url + (this.state.page + 1),
      success: (searchResults) => {
        console.log('search')
        const results = searchResults.results
        console.log(searchResults);
        this.setState(()=>({
          movies: this.state.movies.concat(results),
        }))
      }
    })
  }
  handleLastPage = () => {
    if(this.state.page > 1) {
      this.setState(()=>({
        movies: [],
        discover: false,
        searchTitle: '',
        page: this.state.page -= 1,
      }))
      $.ajax({
        url: this.state.url + (this.state.page - 1),
        success: (searchResults) => {
          console.log('search')
          const results = searchResults.results
          console.log(searchResults);
          this.setState(()=>({
            movies: this.state.movies.concat(results),
          }))
        }
      })
    }
  }
  render=() => {
    return (
      <div className="wrapper-div">
      <img className="logo "src="/images/logo.png" />
        <div className="dashboard">
          <SearchBar handleSearch = {this.handleSearch}/>
          <button className="button-default" onClick= {this.handleDiscover}>Discover</button>
          <button className="button-default" onClick={this.handleTrending}>Trending</button>
          <button className="button-default" onClick={this.handleNowPlaying}>Upcoming Movies</button>
          <button className="button-default" onClick = {this.handleTvPopular}>Popular TV Series</button>
          <div>
            {this.state.movies.length > 1 && <button className="button-default" onClick = {this.handleLastPage}>LastPage</button>}
            {this.state.movies.length > 1 && <button className="button-default" onClick = {this.handleNextPage}>NextPage</button>}
          </div>
          {this.state.movies.length>0 && <RandomShow options={this.state.movies}/>}
        </div>
        <ShowList movieList = {this.state.movies}/>
        {this.state.movies.length > 1 && <button className="button-default" onClick = {this.handleLastPage}>LastPage</button>}
        {this.state.movies.length > 1 && <button className="button-default" onClick = {this.handleNextPage}>NextPage</button>}
      </div>
    );
  }
}


export default WhatToWatchApp;