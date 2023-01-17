import React,{memo,useState,useEffect} from "react";
import {About, Header, Services, Skills,Portfolio, Nav, Testimonial,Exp, Experience, Contact} from '../components-vendor'
import '../App.css'
import { getUser } from '../redux-store/auth/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { getAbout, getPing } from "../redux-store/features/AboutSlice";
import {DotLoader} from 'react-spinners';
import './vendor.css'

function Vendor(){
    const user = useSelector(state=>state.user)
    const {about,loadingPing, error} = useSelector(state=>state.about)
    const dispatch = useDispatch()
    const id = useParams();
    const [userid, setUserid] = useState(id?.userId)
    const [loadingState, setLoading] = useState(false)
    const [err, setError] = useState()
    const [aboutstat, setAbout]=useState()
    useEffect(()=>{
        dispatch(getAbout(userid))
    },[])
    useEffect(()=>{
        dispatch(getPing(userid))
    },[])
    useEffect(()=>{
        if(error){
            setError(error)
           }else{
            setError(null)
           
           }
    },[error])
    return(
        <>
            <Header/>
             <Nav/>
             <About/>
             <Experience/>
             <Services/>
             <Portfolio/>
             <Testimonials/>
             <Contact/>
             <Footer\>
        </>
    )
}
export default memo(Vendor)