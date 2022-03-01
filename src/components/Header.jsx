import React, { Component } from 'react'
import AddMovie from './AddMovie'
import Search from './common/Search';

// stateless component - Can be converted to stateless functional component but leaving it as is for example
class Header extends Component {
  render() {
    const { movieCount, numOfMovies, onSearch } = this.props;
    return (
      <React.Fragment>
        <div className='searchBar'>
          <p>Showing {movieCount} of {numOfMovies} movies in the database</p>
          <Search onSearch={onSearch} />
        </div>
        {/* <input type="text" onChange={onSearch} /> */}
        <AddMovie />
      </React.Fragment>
    )
  }
}

export default Header

