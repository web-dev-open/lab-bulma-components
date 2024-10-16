import React from 'react'
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
            placeholder="include. a-z,A-z,1-9"
          />
        </form>
      </div>
    </div>
  );
}

export default SignupForm