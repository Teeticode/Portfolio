import React,{useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { addToken } from './redux-store/auth/AuthSlice';
import './App.css'
import {Home,Dash} from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux-store/auth/UserSlice';
import Vendor from './pages/Vendor';
function BaseComponent({token}){
  
  return(
    <>
    {
      token?
      (
        <Dash/>
      )
      :(
        <Home/>
      )
    }
    </>
  )
}
function App() {
  const dispatch = useDispatch()
  const {token} = useSelector(state=>state.auth)
  useEffect(()=>{
    dispatch(addToken())
    
  },[])
  return (
    <>
        
       <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<BaseComponent token={token} />} />
          <Route exact path='/vendor/:userId' element={<Vendor/>} />
        </Routes>
       </BrowserRouter> 
        
    </>
    
  );
}

export default App;
