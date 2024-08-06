import React from 'react'
import { useState } from "react"
import "./SignUp.css"
import FormInput from '../form-input/formInput'
import CustomButton from '../custom-button/customButton'
// import axios from "axios"

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {signUpUser} from '../../redux/user/signup/action'

const defaultFormFields = {
    userId:"",
    userName: "",
    email: "",
    password1: "",
    
  }

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { userId,userName, email, password1} = formFields

    const dispatch=useDispatch();
    const navigate=useNavigate();

    // const { currentUser, error } = useSelector((state) => state.user);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // try{
        //     const response=await axios.post('http://localhost:7000/user/registration',
        //     {
        //         id:userId,
        //         userName:userName,
        //         email:email,
        //         password1:password
        //     });
        //     console.log(response.data);
        //     alert("Successfully Registered!!!");
        //     navigate('/');
        //     setFormFields(defaultFormFields);
        // }catch(error){
        //     console.log(error);
        //     alert("Registration Failed!!,Please try again")
        // }

        dispatch(signUpUser(formFields));
        setFormFields(defaultFormFields);
        alert("Successfully Registered!!!");
        navigate('/');  
        
      }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
      }

     
  return (
    <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={(event) => handleSubmit(event)}>
                   <FormInput
                        type='text'
                        name='userId'
                        value={userId}
                        label='User Id'
                        handleChange={handleChange}
                        required />
                    <FormInput
                        type='text'
                        name='userName'
                        value={userName}
                        label='User Name'
                        handleChange={handleChange}
                        required />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        handleChange={handleChange}
                        required />
                    <FormInput
                        type='password'
                        name='password1'
                        value={password1}
                        label='Password'
                        handleChange={handleChange}
                        required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
  )
}

export default SignUp