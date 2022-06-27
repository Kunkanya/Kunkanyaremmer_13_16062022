import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const baseURL = 'http://localhost:3001'
const URL_Login = baseURL + '/api/v1/user/login'
const URL_Profile = baseURL + '/api/v1/user/profile'

const initState = {
    loginToken: "",
    pending: false,
    error: false,
    isLogin: false,
    firstName: "",
    lastName: ""
}

export const getLoginToken = createAsyncThunk('user/getLoginToken',
    async (user) => {
        const response = await axios.post(URL_Login, {
            email: user.email,
            password: user.password,
        })
        return response
    })

export const getUserProfile = createAsyncThunk('user/getUserProfile',
    async (token) => {
        const response = await axios.post(URL_Profile,{},
            {
                headers: { Authorization: `Bearer ${token}` }
            })
        console.log("response get user", response)
        return response
    })

export const editUserProfile = createAsyncThunk('user/editUserProfile',
    async (userInfo) => {
        const response = await axios.put(URL_Profile,     
            {
                firstName: userInfo.newFirstName,
                lastName: userInfo.newLastName
            },
            {
                headers: { Authorization: `Bearer ${userInfo.token}` }
            })
        console.log("response edit user", response)
        return response
    })


export const userSlice = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        logoutUser: state => initState
    },
    extraReducers: {
        [getLoginToken.pending]: (state) => {
            state.pending = true
            state.error = false
        },
        [getLoginToken.fulfilled]: (state, action) => {
            state.loginToken = action.payload.data.body.token
            state.isLogin = true
            state.pending = false
            state.error = false
        },
        [getLoginToken.rejected]: (state) => {
            state.error = true
        },
        [getLoginToken.pending]: (state) => {
            state.pending = true
        },
        [getUserProfile.rejected]: (state) => {
            state.error = true
        },

        [getUserProfile.fulfilled]: (state, action) => {
            console.log("payload", action.payload)
            const userInfo = action.payload.data.body
            state.firstName = userInfo.firstName
            state.lastName = userInfo.lastName
        },
        [editUserProfile.fulfilled]: (state, action) => {
            const userInfo = action.payload.data.body
            state.firstName = userInfo.firstName
            state.lastName = userInfo.lastName
            console.log("payload AFTER edit", action.payload)
        },
        [editUserProfile.rejected]: (state) => {
            state.error = true
        },

    }
})

//export aciton to global
export const { logoutUser } = userSlice.actions
export default userSlice.reducer