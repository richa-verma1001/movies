import React, { Component } from 'react'

class Navigation extends Component {
  render() {
    const { items, selected, onGenreClick } = this.props;
    let hasActive = false;
    const navElems = items.map((item) => {
      let active = '';
      if (item._id == selected) {
        active = 'active';
        hasActive = true;
      }

      return <li key={item._id}>
        <a href="#" className={active} onClick={() => this.props.onGenreClick(item._id)}>{item.name}</a>
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

}

export default Navigation
