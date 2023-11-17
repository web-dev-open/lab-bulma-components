// Components

import Navbar from "./Navbar";
import FormField from "./FormField";

function SignupForm() {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="Enter your name" />
      <FormField label="Email" type="email" placeholder="Enter your email" />
      <FormField
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
    </>
  );
}

export default SignupForm;
