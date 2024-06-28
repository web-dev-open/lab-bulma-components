import React from 'react'
import Navbar from './Navbar';
import FormField from './FormField';
const SignupForm = () => {
  return (
    <>
    <Navbar/>
    <FormField  label="Name"  type="text"  placeholder="e.g Alex Smith"  />
    <FormField  label="Email"  type="email"  placeholder="e.g. alexsmith@gmail.com"  />
    <FormField  label="Password"  type="password"  placeholder="Your Password"  />
    <button className='button'>Submit</button>
    </>
  )
}

export default SignupForm