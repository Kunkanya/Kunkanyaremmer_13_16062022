import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { getUserProfile } from '../../features/userLogin/userSlice'
import EditProfile from '../../component/EditProfile/EditProfile'
import Transaction from '../../component/Transaction/Transaction'


const User = () => {

  const state = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const token = state.loginToken
  const isLogin = state.isLogin
  const firstName = state.firstName

  useEffect(() => {
    if (isLogin && token && !firstName) {
      // call action get profile data
      dispatch(getUserProfile(token))
    } else {
    }
  }, [token])

  return (
    <>
      {!token && <Navigate to="/" replace={true} />}
      <div>
        <Header />
        <main className="main bg-dark">
          <EditProfile />
          <h2 className="sr-only">Accounts</h2>
          <Transaction
            title="Argent Bank Checking (x8349)"
            amount="2,082.79"
            description="Available Balance"
          />
          <Transaction
            title="Argent Bank Savings (x6712)"
            amount="10,928.42"
            description="Available Balance"
          />
          <Transaction
            title="Argent Bank Credit Card (x8349)"
            amount="184.30"
            description="Current Balance"
          />
        </main>
        <Footer />
      </div>

    </>
  )
}

export default User
