import React,{memo, useEffect,useState} from "react"
import './home.css';
import '../../App.css'
import Social from "./Social";
import { useSelector } from "react-redux";
import Data from "./Data";
import ScrollDown from "./ScrollDown.jsx";
import Accordion from "../accordion/Accordion";
function HomeView({user}){
    const {about} = useSelector(state=>state?.about)
    const [image, setImage] = useState('')
    useEffect(()=>{
        if(about?.image){
            setImage(`${about?.image}`)
        }else{
            setImage(require('../../assets/images/pexels3.jpg'))
        }
    },[about])
    return(
        <section className="section home" id="home">
            <Accordion/>
        </section>
    )
}

export default memo(HomeView)