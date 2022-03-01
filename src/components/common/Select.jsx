import React from 'react'
import { getGenres } from '../../services/fakeGenreService';

export default function Select(props) {
  const {
    label,
    name,
    value,
    onChange,
    error } = props;
  const showError = error != '' ? true : false;
  const genres = getGenres();

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onChange} value={value}>
        {genres.map((genre) => {
          return <option
            key={genre._id}
            value={genre._id}
          >{genre.name}</option>
        })
        }
      </select>
      <span className={showError ? 'error' : ''}>{error}</span>
    </>
  )
}
