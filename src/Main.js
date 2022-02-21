import React, { Component } from 'react';
import Header from './components/Header';
import ListMovies from './components/ListMovies';
import { getMovies } from './services/fakeMovieService';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies()
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(movieId) {
    let movies = this.state.movies;
    movies = movies.filter((movie) => movie._id != movieId);
    this.setState({ movies })
  }

  render() {
    return (
      <div className='container' >
        <Header numOfMovies={this.state.movies.length} />
        <ListMovies onDelete={this.handleDelete} movies={this.state.movies} />
      </div>
    )
  }

}

export default Main;
