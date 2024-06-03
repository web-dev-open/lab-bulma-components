import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton"

function SignupForm()
{
    return(
        <div>
            <Navbar />
            <form>
                <FormField label="Name" type="text" placeholder="e.g. George Richard" />
                <FormField label="Email" type="email" placeholder="e.g. grichard@gmail.com" />

                <FormField label="Password" type="password" placeholder="enter password" />
                <CoolButton isPrimary>Submit</CoolButton>
            </form>
        </div>
    )
}

export default SignupForm;