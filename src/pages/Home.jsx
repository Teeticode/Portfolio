import React,{memo} from 'react'
import {About, Header, HomeView, Services, Skills} from '../components'
import '../App.css'
function Home() {
  return (
    <>
      <Header/>
      <main className="main">
        <HomeView/> 
        <About/> 
        <Skills/>
        <Services/>
      </main>
      

      
    </>
  )
}

export default memo(Home)