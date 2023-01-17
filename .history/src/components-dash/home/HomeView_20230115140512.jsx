import React,{memo, useEffect,useState} from "react"
import './home.css';
import '../../App.css'
import Social from "./Social";
import { useSelector } from "react-redux";
import Data from "./Data";
import ScrollDown from "./ScrollDown.jsx";
import Accordion from "../accordion/Accordion";
import { BarLoader } from "react-spinners";
import AddInfo from "./AddInfo";
function HomeView({user}){
    const {about,loading,error} = useSelector(state=>state?.about)
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
            <div style={{  width:'80%', marginLeft:'10%', justifyContent:'center'}}>
            <small style={{color:'grey',marginBottom:'20px', fontWeight:'700'}}><i class="uil uil-info-circle" style={{color:'grey',padding:"10px"}}></i> If the first click doesnt work, try again</small>
            <Accordion 
                title="Dashboard"
                content={<AccordionContent user={user} loading={loading} about={about}/>}
            />
            </div>
            
        </section>
        
    )
}
function AccordionContent({loading,about,user}){
    return(
        <div style={{width:'100%'}}>
        
                <div className="accordion__cont">
                    <div className="card">
                        <div className="imgBx">
                            <img src={(about?.image)? about?.image : require('../../assets/images/pexels3.jpg')}/>
                        </div>
                        <div className="content">
                            <div className="details">
                                
                                <div className="actionBtn">
                                    {(about)?(
                                        <>
                                        <h2>Dennis Kateeti <br/> <span>Senior UI/UX Designer</span></h2>
                                        <div className="data">
                                            <h3>342 <br /><span>Posts</span></h3>
                                            <h3>20 <br /><span>Followers</span></h3>
                                            <h3>5 <br /><span>Following</span></h3>
                                        </div>
                                        <AddInfo user={user}/>
                                        </>
                                    ):(
                                        <AddInfo user={user}/>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card2" 
                        style={{
                        }}
                    >
                    <iframe style={{
                        background: "#FFFFFF",
                        border: "none",
                        borderRadius: "2px",
                        boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
                    }} width="100%" height="100%" src="https://charts.mongodb.com/charts-project-0-ihsbu/embed/charts?id=63c3d16f-5398-4ce5-8d41-6e83f43166f8&maxDataAge=3600&theme=light&autoRefresh=true"src="https://charts.mongodb.com/charts-project-0-ihsbu/embed/charts?id=63c3d16f-5398-4ce5-8d41-6e83f43166f8&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
                    </div>
                </div>
            
        </div>
    )
}

export default memo(HomeView)