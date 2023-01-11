import React,{memo} from "react"
import './home.css';
import '../../App.css'
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown.jsx";
function HomeView(){
    return(
        <section className="section home" id="home">
            <div className="home__container container">
                <div className="home__content grid">
                    <Social/>
                   
                    <div className="home__img" 
                        style={{
                            backgroundImage: `url(${require('../../assets/images/burger-restaurant-2.jpg')})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}  
                    >
                       
                    </div>
                    <Data/>
                    
                </div>
                <ScrollDown/>
            </div>
        </section>
    )
}

export default memo(HomeView)