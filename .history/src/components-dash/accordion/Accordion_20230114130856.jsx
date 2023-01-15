import React,{memo} from 'react';
import './accordion.css';
function Accordion(props) {
  return (
    <div className="accordion__section">
        <button className="accordion">
            <p className="accordion__title">{props.title}</p>
        </button>
    </div>
  )
}

export default memo(Accordion)