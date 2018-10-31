import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
        <Link to='/client/add' className='btn btn-block btn-success'>
            New <i className='fas fa-plus'></i>
        </Link>
  )
}

export default Sidebar
