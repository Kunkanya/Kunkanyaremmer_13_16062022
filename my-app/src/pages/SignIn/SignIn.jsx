import React from 'react'
import Header from '../../component/Header/Header'
import { FaUserCircle } from "react-icons/fa"

export default function SignIn() {
    return (
        <>
            <Header />
            <main class="main bg-dark" style={{paddingTop:"1rem",paddingBottom:"2rem", height:"83vh"}}>
                <section class="sign-in-content">
                    <FaUserCircle className='sign-in-icon' style={{fontSize:"24px"}}  />
                    <h1>Sign In</h1>
                    <form>
                        <div class="input-wrapper">
                            <label for="username">Username</label
                            ><input type="text" id="username" />
                        </div>
                        <div class="input-wrapper">
                            <label for="password">Password</label
                            ><input type="password" id="password" />
                        </div>
                        <div class="input-remember">
                            <input type="checkbox" id="remember-me" /><label for="remember-me"
                            >Remember me</label
                            >
                        </div>
                        <button class="sign-in-button">Sign In</button>
                        {/**     <!-- PLACEHOLDER DUE TO STATIC SITE -->
          <a href="./user.html" class="sign-in-button">Sign In</a>
          <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button class="sign-in-button">Sign In</button> -->
          <!--  -->  */}
                    </form>
                </section>
            </main>

        </>
    )
}
