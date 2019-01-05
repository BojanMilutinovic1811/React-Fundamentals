import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1 >To Do List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
    background: 'black',
    padding: '15px',
    color: 'white',
    textAlign: 'center',
    textTransform: 'upperacase'
};


const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    paddingTop: '10px'
  }
