import React from "react";
import FormField from "./FormField";

const SignupForm = () => {
  return (
    <>
      <FormField label="Password" type="password" placeholder="password@123" />
      <button class="button is-primary ">Submit</button>
    </>
  );
};

export default SignupForm;
