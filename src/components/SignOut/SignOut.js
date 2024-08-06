import React from 'react'
import { useState } from "react"
import CustomButton from '../../components/custom-button/customButton'

const defaultFormFields = {
    userName: "",
    password: "",
}
const SignOut = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    // const { userName, password } = formFields

      const handleLogout = () => {
        setFormFields(defaultFormFields);
        alert("Logged out successfully");
    };  
  return (
    <CustomButton type='submit' onClick={handleLogout}>SIGN OUT</CustomButton> 
  )
}

export default SignOut