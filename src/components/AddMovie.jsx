import React from 'react'
import { Link } from 'react-router-dom'


function AddMovie(props) {
  const { onMovieAdd } = props;
  //console.log(onMovieAdd);

  return (
    <React.Fragment>
      <Link className="addMovie" to="/movies/new">Add Movie</Link>
    </React.Fragment>
  )
}

export default AddMovie
