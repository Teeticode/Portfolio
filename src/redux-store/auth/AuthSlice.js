import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetch2} from '../../helpers';

const initialState = {
    token:'',
    loading:false,
    errorLogin:'',
    errorReg:'',
    message:''
}

export const loginUser = createAsyncThunk(
    'loginUser',
    async (body)=>{
        const result = await fetch2('users/login', body)
        return result 
    }
)
export const signupUser = createAsyncThunk(
    'signupUser',
    async (body)=>{
        const result = await fetch2('users/register', body)
        return result 
    }
)
export const addToken =createAsyncThunk(
    'addToken',
    async ()=>{
        const token = await localStorage.getItem('token');
        return token
    }
)

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state,action)=>{
            state.token = null;
            localStorage.removeItem('token')
        }
    },
    extraReducers:{
        [loginUser.fulfilled]:(state,{payload:{error, token}})=>{
            state.loading = false;
            if(error){
                state.errorLogin = error;
                state.message = null
            }else{
                state.token = token;
                state.errorLogin = null;
                localStorage.setItem('token', token);
            }
        },
        [loginUser.pending]:(state,action)=>{
            state.loading = true;
        },
        [addToken.fulfilled]:(state,action)=>{
            state.token = action.payload
        },
        [signupUser.fulfilled]:(state,{payload:{error, message}})=>{
            state.loading = false;
            if(error){
                state.errorReg=error;
                state.message = null;
            }else{
                state.errorReg = null;
                state.message = message;
            }
        },
        [signupUser.pending]:(state,action)=>{
            state.loading = true
            state.message = null
        }
    }
})

export const {logout} = AuthSlice.actions
export default AuthSlice.reducer