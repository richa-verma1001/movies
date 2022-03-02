import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

// this is a stateless functional component 
const Like = (props) => {
  const faHeart = props.favorite ? faHeartSolid : faHeartRegular;
  return (
    <button
      className='favoriteMovie'
      onClick={() => props.handleClick()}>
      <FontAwesomeIcon icon={faHeart} />
    </button>
  )
}

Like.propTypes = {
  favorite: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
}

export default Like;