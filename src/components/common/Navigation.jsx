import React from 'react'
import PropTypes from 'prop-types'


// stateless functional component
const Navigation = (props) => {
  const { items, selected, onGenreClick } = props;
  let hasActive = false;
  const navElems = items.map((item) => {
    let active = '';
    if (item._id === selected) {
      active = 'active';
      hasActive = true;
    }
    return <li key={item._id}>
      <button className={active} onClick={() => onGenreClick(item._id)}>{item.name}</button>
    </li>
  })

  return (
    <ul>
      <li><button
        className={hasActive ? '' : 'active'}
        onClick={() => onGenreClick('')}>All Genres</button></li>
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
