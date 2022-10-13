import React from "react";
import FormField from "./FormField";

const SignupForm = () => {
  return (
    <>
      <FormField label="Password" type="password" placeholder="password@123" />
      <button>Submit</button>
    </>
  );
};

export default SignupForm;
