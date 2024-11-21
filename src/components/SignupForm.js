import React from 'react';
import FormField from './FormField';
import CoolButton from './CoolButton';

function SignupForm() {
    return (
        <form className="flex flex-col max-w-md mx-auto p-4 space-y-4">
            <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="Enter your password" />
            <CoolButton isSuccess>Submit</CoolButton>
        </form>
    );
}

export default SignupForm;