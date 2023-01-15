import React,{memo, useState,useRef} from 'react';
import './accordion.css';
import Chevron from './Chevron';
function Accordion(props) {
    const [active, setActive] = useState("")
    const [height, setHeight] = useState('0px')

    const content = useRef(null)
    function toggleAccordion (){
        setActive(active === ""?"active":"" )
        setHeight(height===''?"0px":`${content.current.scrollHeight}px`)
    }
  return (
    <div className="accordion__section">
        <button className={`accordion ${active}`} onClick={toggleAccordion} >
            <p className="accordion__title">{props.title}</p>
            <Chevron width={10} fill={'#777'}/>
        </button>
        <div className="accordion__content">
            <div 
                className="accordion__text"
            >{props.content}</div>
        </div>
    </div>
  )
}

export default memo(Accordion)