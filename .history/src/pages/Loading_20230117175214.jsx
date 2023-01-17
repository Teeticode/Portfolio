import React from 'react'
import { BarLoader } from 'react-spinners'

function 
TeetiColab() {
  return (
    <div
        style={{
            width:'100vw'
            height:'100vh'
        }}
    >
        <span style={{color:'#1f1107',fontWeight:'800'}}>Teeti</span>Colab
        <BarLoader width='100%' color='#26b999'/>
    </div>
  )
}

export default 
TeetiColab