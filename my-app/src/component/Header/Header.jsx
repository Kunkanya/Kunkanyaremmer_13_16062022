import React from 'react'
import bankLogo from '../../asset/argentBankLogo.png'
import { FaUserCircle } from "react-icons/fa"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav class="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          class="main-nav-logo-image"
          src={bankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/signin">
          <FaUserCircle style={{ marginRight: "5px" }} />
          Sign In
        </Link>
      </div>
    </nav>

  )
}

export default Header
