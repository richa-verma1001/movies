import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <div className='container' >
      <NavBar />
      <Outlet />
    </div >
  )
}
