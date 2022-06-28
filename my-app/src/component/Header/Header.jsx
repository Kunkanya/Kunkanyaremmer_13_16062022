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

  const handelLogOut = () => {
    history.push("/")
    dispatch(logoutUser())
  }

  const HeaderContent = () => {
    return (
      isLogin && (firstName !== "") ?
        <div className='header-content'>
          <div className="main-nav-item">
            <FaUserCircle style={{ marginRight: "10px", fontSize: "25px" }} />
            <p style={{ fontWeight: "bold" }}>{firstName}</p>
          </div>
          <Link className="main-nav-item" to="/" onClick={handelLogOut}>
            <RiLogoutBoxRLine style={{ marginRight: "10px", fontSize: "25px" }} />
            <p>Sign out</p>
          </Link>
        </div>
        :
        <div>
          <Link className="main-nav-item" to="/signin">
            <FaUserCircle style={{ marginRight: "10px", fontSize: "25px" }} />
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
