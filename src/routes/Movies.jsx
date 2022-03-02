import React from 'react'
import { Outlet } from 'react-router'

export default function Movies() {
  return (
    <div className='content'>
      <Outlet />
    </div>
  )
}
