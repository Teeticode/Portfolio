import React from 'react'
import './accordion.css'

function Chevron(props) {
  return (
    <div>
        <i style={{fontSize:'20px'}} className={props.className}></i>
    </div>
  )
}

export default Chevron