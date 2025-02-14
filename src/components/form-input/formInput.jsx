import React from 'react'
import './formInput.css'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            <label className={`${otherProps.value ? 'shrink' : ''
                } form-input-label`}>
                {label}
            </label>
        </div>
    )
}

export default FormInput