import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navBar'>
      <ul>
        <li><NavLink to="/movies">Movies</NavLink></li>
        <li><NavLink to="/customers">Customers</NavLink></li>
        <li><NavLink to="/rentals">Rentals</NavLink></li>
      </ul>
    </div>
  )
}
