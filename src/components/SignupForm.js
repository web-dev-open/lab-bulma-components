import React from "react";
import FormField from "./FormField";
import Navbar from "./Navbar";

function SignupForm() {
  return (
    <>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="Emma" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g  emma@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="" />
      </form>
      <button>Submit</button>
    </>
  );
}

export default SignupForm;
