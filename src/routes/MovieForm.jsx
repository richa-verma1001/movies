import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function MovieForm() {
  const params = useParams();
  let navigate = useNavigate();

  return (
    <div>
      {params.id}
      <button onClick={(e) => {
        navigate(`/movies`);
      }}>Save</button>
    </div>
  )
}
