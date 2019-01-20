import React from 'react'
import {Link} from 'react-router-dom'


export default function NoMatch() {
  return (
    <div>
      <h4>no match</h4>
      <p>go to home page <Link to='/'/></p>
    </div>
  )
}
