import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const baseURL = 'http://localhost:3001'
const endpointLogin = baseURL + '/api/v1/user/login'

const initialState = {
    loginToken: "",
    pending: false,
    error: false,
    isLogin: false
}

export const getLoginToken = createAsyncThunk('user/getLoginToken',
    async (user) => {
        const response = await axios.post(endpointLogin, {
            email: user.email,
            password: user.password,
        })

        console.log("response", response)
        return response
    })

export const userSlice = createSlice({
    name: "user",
    initialState: {      
            loginToken: [],
            pending: false,
            error: false,
            isLogin: false
        
    },
    reducers:{
        login : (state, action) =>{
            state.value = action.payload
        }
    },
    extraReducers: {
        [getLoginToken.pending]: (state) => {
            state.pending = true
            state.error = false
        },
        [getLoginToken.fulfilled]: (state, action) => {
            state.loginToken = action.payload
            state.isLogin = true
            state.pending = false
            state.error = false
        },
        [getLoginToken.rejected]: (state) => {
            state.error = true
        }
    }
})

//export aciton to global
export default userSlice.reducer