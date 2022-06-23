import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userLogin/userSlice'

//#### Setup Store
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


