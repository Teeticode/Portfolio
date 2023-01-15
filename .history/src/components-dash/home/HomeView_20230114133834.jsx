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
            {/** <div className="home__container container">
                <div className="home__content grid">
                    <Social/>
                   
                    <div className="home__img" 
                        style={{
                            backgroundImage: `url('${image}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}  
                    >
                       
                    </div>
                    <Data user={user}/>
                    
                </div>
                <ScrollDown/>
            </div> */}
            <>
            </>
            <div style={{width:'80%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Accordion 
                title="My Space"
                content={<AccordionContent/>}
            />
            </div>
            
        </section>
        
    )
}
function AccordionContent(){
    return(
        <>
            <p>content</p>
        </>
    )
}

export default memo(HomeView)