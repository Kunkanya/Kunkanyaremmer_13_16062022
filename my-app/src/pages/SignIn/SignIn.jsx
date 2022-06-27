import React from 'react'
import Header from '../../component/Header/Header'
import { FaUserCircle } from "react-icons/fa"
import { useState } from 'react'
import {  Navigate } from 'react-router-dom'

import { useSelector , useDispatch } from 'react-redux'
import { getLoginToken } from '../../features/userLogin/userSlice'
import { useEffect } from 'react'


export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [isLogin, setIsLogin] = useState("false")

    const dispatch = useDispatch()

    const loginStatus = useSelector((state)=> state.user.isLogin)

    
    const handleSetName = (e) => {
        setEmail(e.target.value)
        console.log("email", email)
    }

    const handleSetPassword = (e) => {
        setPassword(e.target.value)
        console.log("password", password)
    }

    const handleRememberMe = (e) => {
        setRememberMe(!rememberMe)
        console.log(rememberMe)
    }
    const user = { email, password }

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(email, password, rememberMe);
        dispatch(getLoginToken({email, password}))           
}

useEffect(()=>{
    console.log("isLoging in use effect", loginStatus)
    if(loginStatus === true){
        setIsLogin(true)
    }
},[loginStatus])

    return (
        <>
        {(isLogin === true) &&
        <Navigate to="/user" replace={true}/> }
            <Header />
            <main className="main bg-dark" style={{ paddingTop: "1rem", paddingBottom: "2rem", height: "83vh" }}>
                <section className="sign-in-content">
                    <FaUserCircle className='sign-in-icon' style={{ fontSize: "24px" }} />
                    <h1>Sign In</h1>
                    <form onSubmit={handleSignIn}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={handleSetName} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={handleSetPassword} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me" onClick={handleRememberMe}>Remember me</label>
                        </div>
                        <button className="sign-in-button" type='submit'>Sign In</button>         
                    </form>
                </section>
            </main>

        </>
        
    )
}
