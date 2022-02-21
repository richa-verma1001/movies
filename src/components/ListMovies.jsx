import React from 'react'
import { Component } from 'react';
import Movie from './Movie';

class ListMovies extends Component {
  render() {
    let { movies } = this.props;

    movies = movies.map((movie) => {
      return (
        <Movie key={movie._id} onDelete={() => this.props.onDelete(movie._id)} movie={movie} />
      )
    });

    return (
      <React.Fragment>
        <ul className='listTitle'>
          <li><strong>Title</strong></li>
          <li><strong>Genre</strong></li>
          <li><strong>Stock</strong></li>
          <li><strong>Rate</strong></li>
          <li className="last"><strong></strong></li>
        </ul>
        {movies}
      </React.Fragment>
    )
  }
}

export default ListMovies
