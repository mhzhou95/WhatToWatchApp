import React from 'react';

export default class SearchBar extends React.Component{
  handleSearch = (event) => {
    event.preventDefault();
    const value = event.target.elements.title.value.trim();
    console.log(value);
    if (value.length > 0 ){
    const title = this.props.handleSearch(value);
    }
  }
  render() {
    return (
     <div>
        <form onSubmit= {this.handleSearch}>
          <input type="text" name="title"/> 
          <button className="search-button">Search</button>
        </form>
     </div>
    );
  }
}