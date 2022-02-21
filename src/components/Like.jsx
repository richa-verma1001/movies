import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'

export default class Like extends Component {
  render() {
    const faHeart = this.props.favorite ? faHeartSolid : faHeartRegular;
    return (
      <React.Fragment>
        <button
          className='favoriteMovie'
          onClick={() => this.props.handleClick()}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </React.Fragment>
    )
  }
}
