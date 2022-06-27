import React, { useState } from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { editUserProfile, getUserProfile } from '../../features/userLogin/userSlice'
import EditProfile from '../../component/EditProfile/EditProfile'

const User = () => {

  const state = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [newFirstName , setNewFirstName] = useState()
  const [newLastName , setNewLastName] = useState()

  const token = state.loginToken
  const isLogin = state.isLogin
  const firstName = state.firstName
  const lastName = state.lastName


  useEffect(()=>{
    if( token  && !firstName){
      // call action get profile data
      dispatch(getUserProfile(token))
    }else {
       
    }
  },[])

  return (
    <div>
      <Header />
      <main className="main bg-dark">
  <EditProfile />
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
