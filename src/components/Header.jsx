import React, { Component } from 'react'
import AddMovie from './AddMovie'

// stateless component - Can be converted to stateless functional component but leaving it as is for example
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Showing {this.props.movieCount} of {this.props.numOfMovies} movies in the database</p>
        <AddMovie />
      </React.Fragment>
    )
  }
}

export default Header

