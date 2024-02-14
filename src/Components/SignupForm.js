import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"
function SignupForm()
{
    return(
     <div>
        <Navbar />
        <form>
        <FormField  label="Name"  type="text"  placeholder="e.g Priyanka Dandupati"  />
        <FormField  label="Email"  type="email"  placeholder="e.g. priyatech@gmail.com"  />
        <FormField label="Password" type="password" placeholder="please enter your passoword" />
        <CoolButton isPrimary>Submit</CoolButton>
               
        </form>
    </div>
    )
}

export default SignupForm