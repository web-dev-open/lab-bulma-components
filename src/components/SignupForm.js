import React from 'react'
import Navbar from './Navbar'
import FormField from './FormField'

function SignupForm() {
  return (
    <div>
      <div>
        <form className="form-container">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField
            label="Password"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </form>
      </div>
    </div>
  );
}

export default SignupForm