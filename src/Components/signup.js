import React from 'react';
import Navbar from './Navbar';
import Field from './fields.js';

function SignupForm() {
    return (
        <div>
            <Navbar />
            <form>
                <Field label="Name" type="text" placeholder="e.g Alex Smith" />
                <Field label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <Field label="Password" type="password" placeholder="Your Password" />
                <div className="field">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;