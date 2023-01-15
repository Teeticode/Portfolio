import React from 'react'
import './accordion.css'
import { SyncLoader } from 'react-spinners'

function Chevron(props) {
  return (
    <>
        {props.loading || props.loadingUser?(
            <div
            style={{width:'20px',height:'40px'}}
            >
                <SyncLoader color='black'/>
            </div>
        ):(
            <div
                style={{width:'20px',height:'40px'}}
            >
                <i style={{fontSize:'20px'}} className={props.className}></i>
            </div>
            ) }
    </>
    
  )
}

export default Chevron