import Navbar from "./Navbar";
import FormField from "./FormField";


import React from 'react'
import Message from "./Message";

function SignupForm() {
  return (
    <div>
     <Navbar />
    <FormField label={"Name"} type={"text"} placeholder={"e.g Alex Smith" } />
    <FormField label={"Email"} type={"email"} placeholder={"e.g. alexsmith@gmail.com" } />
    <FormField label={"Password"} type={"password"} placeholder={"password here" } />
    <Message style={'message is-info'} title={"HEYHEYHEY"}/>
    </div>
  )
}

export default SignupForm