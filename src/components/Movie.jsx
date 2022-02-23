import React, { Component } from 'react'
import Like from './common/Like'

class Movie extends Component {

  movieList() {
    const movie = this.props.movie;

    return (
      <ul key={movie._id} className='listItem'>
        <li>{movie.title}</li>
        <li>{movie.genre.name}</li>
        <li>{movie.numberInStock}</li>
        <li>{movie.dailyRentalRate}</li>
        <li>
          <Like
            favorite={movie.favorite}
            handleClick={() => this.props.onFavorite()} />
        </li>
        <li className='last'>
          <button
            className='deleteMovie'
            onClick={() => this.props.onDelete()}
          >Delete</button>
        </li>
      </ul>
    );
  }

  render() {
    return this.movieList();
  }
}

export default Movie;