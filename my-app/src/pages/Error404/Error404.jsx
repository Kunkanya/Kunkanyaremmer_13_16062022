import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'
import PropTypes from 'prop-types'
/**
 * @description Show error page with error.
 * 
 * @component
 * @param { String } message Text to show the error message.
 * @returns {HTMLElement} Return Error page with the error message.
 */

const Error404 = (message) => {
  console.log("message in Error", message)
  return (
        <main className='error-container'>
          <h1 > Oups! Sorry!</h1>
          <h2 style={{marginTop: "1rem",marginBottom:"1rem", color: "red" }}>{message.message}!!!!!</h2>
          <Link to="/" className='back-home' >Retourner sur la page d’accueil</Link>
        </main>
  )
}

export default Error404

Error404.prototype = {
  message : PropTypes.string
}