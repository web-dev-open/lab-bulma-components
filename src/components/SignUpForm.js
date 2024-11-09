import React from 'react'
import FormField from './FormField'
import CoolButton from './CoolButton'

const SignUpForm = () => {
  return (
    <div>
         <FormField label="Name" type="text" placeholder="Ajith"/>
         <FormField label="Email" type="email" placeholder="ajith@gmail.com"/>
         <FormField label="Password" type="password" placeholder="************"/>
        <CoolButton isSuccess>Button 1</CoolButton>
      
    </div>
  )
}

export default SignUpForm