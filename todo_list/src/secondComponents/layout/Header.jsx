import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="logo">RouterExercise</div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </nav>
      
    </header>
  )
}
