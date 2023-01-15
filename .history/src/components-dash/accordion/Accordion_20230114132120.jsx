import React,{memo} from 'react';
import './accordion.css';
function Accordion(props) {
  return (
    <div className="accordion__section">
        <button className="accordion">
            <p className="accordion__title">{props.title}</p>
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