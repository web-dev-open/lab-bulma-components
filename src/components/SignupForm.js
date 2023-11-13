import FormField from "./FormField.js";

function SignupForm() {
  return (
    <div className="container">
      <h1 className="title">Create Account</h1>
      <FormField label="Name" type="text" placeholder="e.g. Ernest Opoku" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. ernest@mail.com"
      />
      <FormField label="Password" type="password" />

      <button
        type="submit"
        className="button has-background-link has-text-white px-5 py-2 is-link my-3"
      >
        Create Account
      </button>
    </div>
  );
}

export default SignupForm;
