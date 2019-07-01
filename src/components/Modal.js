import React from 'react';
import Modal from 'react-modal';
import Movie from './Movie';

// Set App element http://reactcommunity.org/react-modal/accessibility/
Modal.setAppElement(document.getElementById('app'));

class RandomShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      movies: props.options,
      movie: []
    }
  }
  handleOpenModal = () => {
    const randomNumber = Math.floor(Math.random() * Math.floor(this.state.movies.length))
      if(this.state.movies[randomNumber].vote_average>0){
        this.setState(()=> ({
          showModal: true,
          movie: this.state.movies[randomNumber]
        }))
      }else{
        this.handleOpenModal();
      }  
  }
  handleCloseModal = () => {
    this.setState(()=> ({
      showModal: false
    }))
  }
  render() {
    return (
      <div>
        <button className="random-button" onClick={this.handleOpenModal}>Random</button>
        <Modal
          className="modal"
          isOpen={this.state.showModal}
          contentLabel="Modal"
        >
          <Movie 
            key={this.state.movie.id}
            id={this.state.movie.id}
            title={this.state.movie.title}
            name={this.state.movie.name}
            posterPath={this.state.movie.poster_path}
            voteAverage= {this.state.movie.vote_average}
            releaseDate={this.state.movie.release_date}
            overview= {this.state.movie.overview}
            />
          <button className="random-button" onClick={this.handleOpenModal}>Random</button>
          <button className="button-modal" onClick={this.handleCloseModal}>Close</button>
       </Modal>
      </div>
    )
  }
}

export default RandomShow;