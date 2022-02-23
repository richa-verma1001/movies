import React, { Component } from 'react'
import { sortBy } from '../utils/paginationHelper';

class MovieHeader extends Component {
  // handleSort(property, e) {
  //   console.log(`handle sort in movie header`);
  //   //console.log(e);
  //   const liElem = e.target.parentNode;
  //   const currClass = liElem.className;
  //   if(currClass === 'asc')
  //     liElem.toggle
  //   this.props.onSort(property);
  // }

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
