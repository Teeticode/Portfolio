import React,{memo, useState,useEffect,useRef} from 'react';
import './accordion.css';
import Chevron from './Chevron';
import { useDispatch, useSelector } from 'react-redux';
import { getAbout } from '../../redux-store/features/AboutSlice';
import { BarLoader } from 'react-spinners';
function Accordion(props) {
    const [active, setActive] = useState("")
    const [height, setHeight] = useState("0px")
    const [rotate,setRotate] = useState('')
 
    const dispatch = useDispatch()
    const {user,loadingUser} = useSelector(state=>state.user)
    const {loading} = useSelector(state=>state.about)
    const content = useRef(null)
    
    function toggleAccordion (){
        dispatch(getAbout(user?.userid))
        setActive(active === ""?"active":"" )
        setHeight(active === ""?"0px":`500px`)
        setRotate(active === ''?'accordion__icon':'accordion__icon rotate')
    }
  return (
    <div className="accordion__section">
        <button className={`accordion ${active}`} onClick={toggleAccordion} >
            <p className="accordion__title">{props.title}</p>
            <></>
            <div className={`accordion__icon ${rotate}`}>
            <Chevron loading={loading} loadingUser={loadingUser} className={`uil uil-arrow-circle-right`}  width={10} fill={'#777'}/>
            </div>
        </button>
        
        {(loading||loadingUser)?(
             <div style={{marginTop:'5px'}}>
                <BarLoader className="loader" width='100%' color="#d79b2e"/>   
             </div>
             ):(
                <>
                <div ref={content} style={{maxHeight: `${height}`}} className="accordion__content">
            <div 
                className="accordion__text"
            >{props.content}</div>
        </div></>
            )}
    </div>
  )
}

export default memo(Accordion)