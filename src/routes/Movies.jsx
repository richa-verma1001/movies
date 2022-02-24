import React from 'react'
import { Outlet } from 'react-router'
import MoviesContainer from '../components/MoviesContainer'

export default function Movies() {
  return (
    <div className='content'>
      <Outlet />
    </div>
  )
}
