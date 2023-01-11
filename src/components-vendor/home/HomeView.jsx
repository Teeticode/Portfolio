import React,{memo,useEffect} from "react"
import './home.css';
import { useSelector } from "react-redux";
import '../../App.css'
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown.jsx";
import Banner from "./Banner";
function HomeView({user}){
        const {about} = useSelector(state=>state?.about)
   
    return(
        <section className="section home" id="home">
            <div className="home__container container">
                <div className="home__content grid">
                    <Social/>
                    
                    <div className="home__img" 
                         style= {{
                            backgroundImage:`url('${about?.image}')`
                         }}
                    >
                       
                    </div>
                    <Data />
                </div>
                <ScrollDown/>
            </div>
        </section>
    )
}

export default memo(HomeView)