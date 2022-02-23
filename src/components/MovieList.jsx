import React from 'react'
import { Component } from 'react';
import Movie from './Movie';
import MovieHeader from './MovieHeader';

class MovieList extends Component {
  show(property) {
    console.log('show called' + property);
  }
  render() {
    let { movies, onSort, onDelete, onFavorite } = this.props;

    movies = movies.map((movie) => {
      return (
        <Movie
          key={movie._id}
          onDelete={() => onDelete(movie._id)}
          onFavorite={() => onFavorite(movie._id)}
          movie={movie} />
      )
    });

    return (
      <React.Fragment>
        <MovieHeader onSort={(property) => this.props.onSort(property)} />
        {movies}
      </React.Fragment >
    )
  }
}

export default MovieList
