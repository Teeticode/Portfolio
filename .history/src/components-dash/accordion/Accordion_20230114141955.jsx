import React,{memo, useState} from 'react';
import './accordion.css';
import Chevron from './Chevron';
function Accordion(props) {
    const [active, setActive] = useState("")
    function toggleAccordion (){
        setActive(setAct === ""?"active":"" )
    }
  return (
    <div className="accordion__section">
        <button className="accordion">
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