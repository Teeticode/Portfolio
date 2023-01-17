import React,{memo} from 'react'
import './header-vendor.css'
import CTA from './CTA'
import { useSelector } from 'react-redux'
import HeaderSocials from './HeaderSocials'

function Header() {
  const {about, loading,error} = useSelector(state=>state.about)
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dennis Kateeti</h1>
        <h5 className="text-lit">Full Stack Developer</h5>
        <CTA/>
        <div className="me">
          <img src={about?.image} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <HeaderSocials/>
      </div>
    </header>
  )
} 

export default memo(Header)