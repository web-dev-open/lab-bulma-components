import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import './SignupForm.css';

const SignupForm = () => {
    return (
        <div>
            <Navbar />
            <form>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="Enter your password" />
                <button id="submit-btn" type="submit" className="button is-primary is-pointer">Submit</button>
            </form>
        </div>
    );
};

export default SignupForm;