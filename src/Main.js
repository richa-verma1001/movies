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
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleDelete(movieId) {
    let movies = [...this.state.movies];
    movies = movies.filter((movie) => movie._id != movieId);
    this.setState({ movies });
  }

  handleFavorite(movieId) {
    let movies = [...this.state.movies];
    movies = movies.map((movie) => {
      if (movie._id == movieId) {
        // toggle favorite
        movie.favorite = !movie.favorite;
      }
      return movie;
    })
    this.setState({ movies });

  }

  render() {
    return (
      <div className='container' >
        <Header numOfMovies={this.state.movies.length} />
        <ListMovies
          onDelete={this.handleDelete}
          onFavorite={this.handleFavorite}
          movies={this.state.movies} />
      </div>
    )
  }

}

export default Main;
