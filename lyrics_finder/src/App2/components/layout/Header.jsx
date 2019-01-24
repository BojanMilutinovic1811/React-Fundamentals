import React from 'react'
// import {Link} from 'react-router-dom'
import SearchInput from './SearchInput'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a href='#' className="navbar-brand">Movie Show</a>
    <SearchInput />
    </nav>
  )
}
