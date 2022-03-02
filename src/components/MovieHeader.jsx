import React, { Component } from 'react'

class MovieHeader extends Component {
  render() {
    return (
      <ul className='listTitle'>
        <li><strong onClick={() => this.props.onSort('title')}>Title</strong></li>
        <li><strong onClick={() => this.props.onSort('genre')}>Genre</strong></li>
        <li><strong onClick={() => this.props.onSort('numberInStock')}>Stock</strong></li>
        <li><strong onClick={() => this.props.onSort('dailyRentalRate')}> Rate</strong></li>
        <li><strong onClick={() => this.props.onSort('favorite')}>Favorite</strong></li>
        <li className="last"><strong></strong></li>
      </ul>
    )
  }
}

export default MovieHeader
