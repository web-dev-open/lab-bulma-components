import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";

const SignupForm = () => {
  return (
    <div>
      <Navbar />
      <form>
        <FormField 
        label="Name" 
        type="text" 
        placeholder="e.g Alex Smith"
         />

        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <FormField
          label="Password"
          type="password"
          placeholder=" Password"
        />
       
        <button style={{margin:'10px'}} className="button is-primary">Signup</button>
        
      </form>
    </div>
  );
};

export default SignupForm;
