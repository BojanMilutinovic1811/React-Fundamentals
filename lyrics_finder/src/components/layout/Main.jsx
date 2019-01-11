import React from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search'
export default function Main() {
  return (
    <div className='container p-3' id='main'>
    <div className="row">
      <Search />
    </div>
      <Tracks />
    </div>
  )
}
