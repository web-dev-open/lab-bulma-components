import Navbar from "./Navbar"
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import './SignupForm.css';
import './CoolButton.css';

export default function SignupForm () {
    return (
        <>
        <Navbar/>
        <form>
            <FormField label="Name" tyoe="text" placeholder="Enter full name"/>
            <FormField label="Email" tyoe="email" placeholder="Enter valid email"/>
            <FormField label="Password" tyoe="password" placeholder="Enter password"/>
            <CoolButton class="button is-link submitButton" value="Submit"/>
        </form>
        </>
    )
}