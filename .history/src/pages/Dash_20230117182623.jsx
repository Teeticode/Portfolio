import React,{memo,useEffect} from 'react'
import {About, HeaderDash, HomeView, Services, Skills} from '../components-dash'
import '../App.css'
import { getUser } from '../redux-store/auth/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getAbout, getPing } from '../redux-store/features/AboutSlice'
import { BarLoader, DotLoader } from 'react-spinners'
import { logout } from '../redux-store/auth/AuthSlice'
import './vendor.css'

function Dash() {
  const dispatch = useDispatch()
  const {user,errorUser,loadingUser} = useSelector(state=>state.user)
  const {about, error, loading} = useSelector(state=>state.about)
  useEffect(()=>{
    dispatch(getUser())
  },[])
  useEffect(()=>{
    dispatch(getAbout(user?.userid))
  },[user])
  
  return (
    <>
      {user?
      (
          <>
            {
      (loadingUser)?(
        <div 
          className='loader_div'
        >
          <div style={{
            fontWeight:'800'
          }}>
            Teeti Colab
          </div>
          <div>
          <BarLoader color='#ffd9d9'/>
          </div>
            
        </div>
      ):(
        <>
          <HeaderDash/>
          <main className="main">
            <HomeView user={user} /> 
            <About user={user}/> 
            <Skills/>
            <Services/>
          </main>
        </>
        )
      }
          </>
      ):(
        <div className="vendor_404"
                            
        >
            
            <p>{errorUser} !</p>
            <a href='/' style={{marginTop:'20px'}} className="button button--flex">Go To Home</a>
        </div>
      )  
    }
    </>
  )
}

export default memo(Dash)