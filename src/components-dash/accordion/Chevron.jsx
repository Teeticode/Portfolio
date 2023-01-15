import React from 'react'
import './accordion.css'
import { PuffLoader, SyncLoader } from 'react-spinners'
import { memo } from 'react'

function Chevron(props) {
  return (
    <>
        {props.loading || props.loadingUser?(
            <div
            style={{width:'20px',height:'20px'}}
            >
                <PuffLoader size={5} style={{width:"20px!important",height:"20px!important"}} color='#ccc'/>
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

export default memo(Chevron)