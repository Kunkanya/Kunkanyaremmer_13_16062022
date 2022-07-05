import React from 'react'
import Header from '../../component/Header/Header'
import { FaUserCircle } from "react-icons/fa"
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getLoginToken } from '../../features/userLogin/userSlice'
import { useEffect } from 'react'


export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [isLogin, setIsLogin] = useState("false")
    const [checkValid, setCheckValid] = useState("false")
    const [emailError, setEmailError] = useState("")

    //const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const state = useSelector((state) => state.user)
    const loginStatus = state.isLogin
    const errorMessage = state.errorMessage

    
    const handleSetName = (e) => {
        setEmail(e.target.value.trim())        
    }

    const handleSetPassword = (e) => {
        setPassword(e.target.value.trim())
    }

    const handleRememberMe = (e) => {
        setRememberMe(!rememberMe)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
    }

    const Validation=()=>{
        // check name
        if (!email.includes(`@`)){
            setEmailError("Invalid e-mail address")
            setCheckValid(false)
            return false
        }
        setEmailError("")
        setCheckValid(true)
        return true   
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        let isValid = Validation()
        console.log(email, password, rememberMe);

        if(isValid){
            dispatch(getLoginToken({ email, password }))    
        }
    }

    useEffect(() => {
        console.log("isLoging in use effect", loginStatus)
        if (loginStatus === true) {
            setIsLogin(true)
        }
    }, [loginStatus])

    return (
        <>
            {(isLogin === true) && <Navigate to="/user" replace={true} />}
            {loginStatus === "Loading" ? <div>Loading</div> :
                <>
                    <Header />
                    <main className="main bg-dark" style={{ paddingTop: "1rem", paddingBottom: "2rem", height: "83vh" }}>
                        <section className="sign-in-content">
                            <FaUserCircle className='sign-in-icon' style={{ fontSize: "24px" }} />
                            <h1>Sign In</h1>
                            {errorMessage !== "" && <div className="error" >{errorMessage}</div>}
                            <form onSubmit={handleSignIn}>
                                <div className="input-wrapper" >
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" className={checkValid ? "" :"errorForm" }  onChange={handleSetName} required />
                                    {emailError.length > 0 && <span className='error'>{emailError}</span>}
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" onChange={handleSetPassword} required />
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
            }
        </>

    )
}
