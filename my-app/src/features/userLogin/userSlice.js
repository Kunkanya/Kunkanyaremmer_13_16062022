import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const baseURL = 'http://localhost:3001'
const URL_Login = baseURL + '/api/v1/user/login'
const URL_Profile = baseURL + '/api/v1/user/profile'

const initState = {
    loginToken: "",
    errorMessage: "",
    isLogin: false,
    firstName: "",
    lastName: "",
    status: ""
}

/**
 * @description : in oder to get the token we have to dispatch this action 
 * @param {string} email
 * @param {string} password
 * @retuen action.payload or error message
 */
export const getLoginToken = createAsyncThunk('user/getLoginToken',

    async (user, { rejectWithValue }) => {
        try {
            const response = await axios.post(URL_Login, {
                email: user.email,
                password: user.password,
            })
            return response
        } catch (err) {
            console.log(err.message)
            return rejectWithValue(err.message)
        }
    })

/**
 * @description : in oder to login to the application we have to pass token 
 * from getLoginToken() in the header for the authorization before we can dispatch this action 
 * @param {string} token
 * @retuen action.payload or error message
 */
export const getUserProfile = createAsyncThunk('user/getUserProfile',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.post(URL_Profile, {},
                {
                    headers: { Authorization: `Bearer ${token}` }
                })
            console.log("response get user", response)
            return response

        }
        catch (err) {
            console.log(err.message)
            return rejectWithValue(err.message)
        }
    })

/**
 * @description : in oder to modifiy the user information. We have to pass token 
 * from getLoginToken in the header for authorization 
 * and add the information that we need to moodify in the body.
 * @param {string} token
 * @param {string} userInfo.token
 * @param {string} userInfo.firstName
 * @param {string} userInfo.lastName
 * @retuen action.payload or error message
 */
 export const editUserProfile = createAsyncThunk('user/editUserProfile',
    async (userInfo, { rejectWithValue }) => {

        try {
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
        } catch (err) {
            console.log(err.message)
            return rejectWithValue(err.message)
        }

    })

/**
 * Reducers part we use createSlice() for redux-toolkit
 */
export const userSlice = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        logoutUser: state => initState
    },
    extraReducers: {
        [getLoginToken.pending]: (state) => {
            state.error = ""
            state.status = "Loading"
            state.isLogin = false
        },

        [getLoginToken.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.loginToken = action.payload.data.body.token
            state.status = "Success"
            state.isLogin = true
        },
        [getLoginToken.rejected]: (state, action) => {
            console.log(action.payload)
            state.status = "Failed"
            state.errorMessage = action.payload
            state.isLogin = false
        },
        [getLoginToken.pending]: (state) => {
            state.status = "Loading"
        },
        [getUserProfile.fulfilled]: (state, action) => {
            console.log("payload", action.payload)
            const userInfo = action.payload.data.body
            state.firstName = userInfo.firstName
            state.lastName = userInfo.lastName
        },
        [getUserProfile.rejected]: (state, action) => {
            state.status = "Failed"
            state.errorMessage = action.payload
        },
        [editUserProfile.fulfilled]: (state, action) => {
            const userInfo = action.payload.data.body
            state.firstName = userInfo.firstName
            state.lastName = userInfo.lastName
            state.errorMessage = ""
            console.log("payload AFTER edit", action.payload)
        },
        [editUserProfile.rejected]: (state, action) => {
            state.errorMessage = action.payload
            state.status = "Failed"
        },

    }
})

//export aciton to global
export const { logoutUser } = userSlice.actions
export default userSlice.reducer