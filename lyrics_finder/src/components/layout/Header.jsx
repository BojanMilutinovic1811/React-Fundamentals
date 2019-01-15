import React from 'react';
import {Link} from 'react-router-dom';

export default function Header () {
  return (
    <nav className="navbar navbar-dark bg-dark">
         <span className="navbar-brand mb-0 mr-auto h1">Lyrics Finder</span>
         <Link style={linkStyle} to='/'>Home</Link>
         <Link style={linkStyle} to='/about'>About</Link>
    </nav>
  )
}



const linkStyle = {
  color: 'white',
  padding: '0 20px',
  textDecoration: 'none'
}