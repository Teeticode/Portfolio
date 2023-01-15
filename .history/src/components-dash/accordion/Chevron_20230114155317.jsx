import React from 'react'
import './accordion.css'

function Chevron(props) {
  return (
    <div
        style={{width:'20px',height:'40px'}}
    >
        <i style={{fontSize:'20px'}} className={props.className}></i>
    </div>
  )
}

export default Chevron