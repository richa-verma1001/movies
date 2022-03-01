import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AddNewMovieForm from '../../routes/AddNewMovieForm';

export default function WithNavigate(props) {
  let navigate = useNavigate();
  let params = useParams();
  props = { ...props, ...{ movieid: params.movieid } };
  return <AddNewMovieForm {...props} navigate={navigate} />
}
