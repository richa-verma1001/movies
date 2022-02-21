import React, { Component } from 'react'
import AddMovie from './AddMovie'

// stateless component 
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <p>Showing {this.props.numOfMovies} movies in the database</p>
          <AddMovie />
        </header>
      </React.Fragment>
    )
  }
}

export default Header

