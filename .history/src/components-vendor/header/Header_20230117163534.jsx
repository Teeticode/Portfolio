import React,{memo} from 'react'
import CTA from './CTA'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dennis Kateeti</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default memo(Header)