import React from 'react'
import bankLogo from '../../asset/argentBankLogo.png'
import { FaUserCircle } from "react-icons/fa"
import { RiLogoutBoxRLine } from "react-icons/ri"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../features/userLogin/userSlice'

const Header = () => {

  const history = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.user)
  const isLogin = state.isLogin
  const firstName = state.firstName

  const handelLogOut=()=>{
    history.push("/")   
    dispatch(logoutUser())  
  }

  const HeaderContent = () => {
    return (
      isLogin && (firstName != "") ? <div>
          <FaUserCircle style={{ marginRight: "5px" }} />
          {firstName}
          <Link  className="main-nav-item" to="/" onClick={handelLogOut}>
          <RiLogoutBoxRLine  style={{ marginRight: "5px" }}  />
          Sign out
        </Link>
      </div>
        :
        <div>
          <Link className="main-nav-item" to="/signin">
            <FaUserCircle style={{ marginRight: "5px" }} />
            Sign In
          </Link>
        </div>

    )
  }


  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={bankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <HeaderContent />
    </nav>
  )
}

export default Header
