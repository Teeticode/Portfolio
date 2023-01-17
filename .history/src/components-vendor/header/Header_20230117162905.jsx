import React,{memo} from 'react'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dennis Kateeti</h1>
        <h5 className="text-light">Full Stack Developer</h5>
      </div>
    </header>
  )
}

export default memo(Header)