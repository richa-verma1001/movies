import React, { Component } from 'react'

class Movie extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     movie: this.props.movie
  //   }
  // }

  listMovies() {
    const movie = this.props.movie;
    return (
      <ul key={movie._id} className='listItem'>
        <li>{movie.title}</li>
        <li>{movie.genre.name}</li>
        <li>{movie.numberInStock}</li>
        <li>{movie.dailyRentalRate}</li>
        <li className="last">
          <button
            id={movie._id}
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