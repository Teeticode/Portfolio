import React from 'react'
import './accordion.css'

function Chevron(props) {
  return (
    <div>
        <i style={{fontSize:'20px'}} className={`uil uil-arrow-circle-right ${props.active === ''? 'rotate': ''}`}></i>
    </div>
  )
}

export default Chevron