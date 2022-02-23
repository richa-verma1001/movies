import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMoviesPerPage, getPageCount } from '../../utils/paginationHelper';


export default class Pagination extends Component {
  render() {

    const { pageSelected, totalPages, movies, onPageChange } = this.props;

    let pageList = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i == pageSelected)
        pageList.push(<li key={i}><button className='selected'>{i}</button></li>);
      else
        pageList.push(<li key={i}><button onClick={() => onPageChange(i, movies)}>{i}</button></li>);
    }

    return (
      <ul>
        {pageList}
      </ul>
    )
  }
}

Pagination.propTypes = {
  pageSelected: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired,
  onPageChange: PropTypes.func.isRequired
}
