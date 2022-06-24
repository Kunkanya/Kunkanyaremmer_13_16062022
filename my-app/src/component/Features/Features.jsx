import React from 'react'
import PropTypes from 'prop-types'

/**
 * 
 * @param {string} img 
 * @param {string} title 
 * @param {string} alt
 * @param {string} text 
 * @returns 
 */
const Features = ({img,alt, title, text}) => {
    console.log(img)
    return (
        <div className="feature-item">
            <img src={img} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}    </p>
        </div>
    )
}

Features.propTypes = {
    img : PropTypes.string,
    title : PropTypes.string,
    text : PropTypes.string

}

export default Features
