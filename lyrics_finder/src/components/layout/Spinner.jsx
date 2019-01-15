import React from 'react'
import spinner from './spinner2.gif'

export default  function Spinner() {
  return (
    <div style={spinnerStyle}>
        <img src={spinner} alt="loading..." style={imageStyle}/>
        <p>Loading...</p>
      
    </div>
  )
}

const spinnerStyle = {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '30px'
}

const imageStyle = {
    width: '100px'
}
