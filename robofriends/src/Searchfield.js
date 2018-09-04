import React from 'react';

const Searchfield = ({onSearchChange}) => {
return (
    <input type='search' className='ba mb3 bg-lightest-blue pa3 b--green' placeholder='Search robots...' onChange={onSearchChange}/>
)
}

export default Searchfield;