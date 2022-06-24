import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const User = () => {

  const state = useSelector((state) => state.user)
  const token = state.token
  const isLogin = state.isLogin
console.log(state)
  console.log("token",state.loginToken)
  console.log("islogin",state.isLogin)


  useEffect(()=>{
    if( token && (isLogin === true)){
      return
    }else {
      // call action get profile data
    }


  },[])
  return (
    <div>
      <Header />
      <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
<Footer />
    </div>
  )
}

export default User
