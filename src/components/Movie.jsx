import React, { Component } from 'react'
import Like from './common/Like'

class Movie extends Component {

  listMovies() {
    const movie = this.props.movie;

    return (
      <ul key={movie._id} className='listItem'>
        <li>{movie.title}</li>
        <li>{movie.genre.name}</li>
        <li>{movie.numberInStock}</li>
        <li>{movie.dailyRentalRate}</li>
        <li>
          <Like favorite={movie.favorite} handleClick={() => this.props.onFavorite(movie._id)} />
        </li>
        <li className='last'>
          <button
            className='deleteMovie'
            onClick={() => this.props.onDelete(movie._id)}
          >Delete</button>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <main>
        {this.listMovies()}
      </main>
    )
  }
}

export default Movie;