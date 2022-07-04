import React from 'react'

const FormError = ({formErrors}) => {
  return (
    <div className='error'>
      { Object.keys(formErrors).map((item, i) =>{
        if(formErrors[item].length > 0){
            <p key={i}>{item}</p>
        }
      })
      }
    </div>
  )
}

export default FormError
