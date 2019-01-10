import React from 'react'
import spinner from './spinner2.gif'

export default  function Spinner() {
  return (
    <React.Fragment>
        <img src={spinner} alt="loading..." style={spinnerStyle}/>
      
    </React.Fragment>
  )
}

const spinnerStyle = {
    width: '100px',
    margin: '40px auto',
    display: 'block',
    position: 'absolute',
    left: '50%',
    top: '40%',
    transform: 'translate(-50%, -50%)'
}
