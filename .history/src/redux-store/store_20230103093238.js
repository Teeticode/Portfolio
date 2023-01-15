import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import AuthSlice from './auth/AuthSlice';
import UserSlice from './auth/UserSlice';
import AboutSlice, { getAbout } from './features/AboutSlice';

export const store = configureStore({
    reducer:{
        auth:AuthSlice,
        user:UserSlice,
        about:AboutSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})


