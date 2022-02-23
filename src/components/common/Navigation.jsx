import React, { Component } from 'react'
import PropTypes from 'prop-types'


// stateless functional component
const Navigation = (props) => {
  const { items, selected, onGenreClick } = props;
  let hasActive = false;
  const navElems = items.map((item) => {
    let active = '';
    if (item._id == selected) {
      active = 'active';
      hasActive = true;
    }
    return <li key={item._id}>
      <a href="#" className={active} onClick={() => onGenreClick(item._id)}>{item.name}</a>
    </li>
  })

  return (
    <ul>
      <li><a
        href="#"
        className={hasActive ? '' : 'active'}
        onClick={() => onGenreClick('')}>All Genres</a></li>
      {navElems}
    </ul >
  )
}

Navigation.propTypes = {
  items: PropTypes.array.isRequired,
  selected: PropTypes.any.isRequired,
  onGenreClick: PropTypes.func.isRequired

}

export default Navigation
