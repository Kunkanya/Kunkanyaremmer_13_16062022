import React from 'react'
import PropTypes from 'prop-types';


/**
 * @description : Transaction component which contain the back accounts information
 * 
 * @param {string} title 
 * @param {number} string 
 * @param {string} description 
 * @returns HTMLElement
 */
const Transaction = ({title, amount, description}) => {
  return (
    <section className="account">
    <div className="account-content-wrapper">
      <h3 className="account-title">{title}</h3>
      <p className="account-amount">${amount}</p>
      <p className="account-amount-description">{description}</p>
    </div>
    <div className="account-content-wrapper cta">
      <button className="transaction-button">View transactions</button>
    </div>
  </section>

  )
}

export default Transaction

Transaction.propTypes ={
    title: PropTypes.string,
    amount: PropTypes.string,
    description: PropTypes.string
}