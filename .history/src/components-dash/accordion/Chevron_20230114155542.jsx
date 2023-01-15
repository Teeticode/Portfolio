import React from 'react'
import './accordion.css'
import { PuffLoader, SyncLoader } from 'react-spinners'

function Chevron(props) {
  return (
    <>
        {props.loading || props.loadingUser?(
            <div
            style={{width:'20px',height:'40px'}}
            >
                <PuffLoader style={{width:"20px",height:"20px"}} color='black'/>
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