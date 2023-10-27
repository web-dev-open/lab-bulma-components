import FormField from "./FormField";
import Navbar from "./Navbar";

function SignupForm() {
  return (
    <div>
      <Navbar />
      <form className="form">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="e.g. password312"
        />

        <button type="submit" className="button is-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
