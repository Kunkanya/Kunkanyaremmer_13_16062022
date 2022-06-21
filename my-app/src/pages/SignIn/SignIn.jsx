import React from 'react'
import Header from '../../component/Header/Header'
import { FaUserCircle } from "react-icons/fa"
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import User from '../../pages/User/User'
import { sendPostServiceLogin } from '../../service/store'
import axios from 'axios'

const baseURL = 'http://localhost:3001'
const endpointLogin = baseURL + '/api/v1/user/login'


export default function SignIn() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const handleSetName = (e) => {
        setName(e.target.value)
        console.log("name", name)
    }

    const handleSetPassword = (e) => {
        setPassword(e.target.value)
        console.log("password", password)
    }

    const handleRememberMe = (e) => {
        setRememberMe(!rememberMe)
        console.log(rememberMe)
    }
    const user = { name, password }

    const handleSignIn = (e) => {
        e.preventDefault();
        const target = e.target

        console.log(name, password, rememberMe)
        //        const test = sendPostServiceLogin(user)

        const fetch = async () => {
            try {
                const response = await axios.post(endpointLogin, {
                    email: name,
                    password: password
                })
                console.log("response", response)

                if (response.data.status === 200) {

                }
            } catch (error) {
                console.error(error.message)
            }
        }
        fetch()

    }


    return (
        <>
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
