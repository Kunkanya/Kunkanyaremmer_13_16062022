import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userLogin/userSlice'

/**
 * @description : Setup Store for redux-toolkit
 */
const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer:{
        user: userReducer
    }
})


export default store


