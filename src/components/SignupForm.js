import Navbar from "./Navbar";
import FormField from "./FormField";
import "./SignupForm.css"
function SignupForm(){
    return(
        <div>
            <Navbar/>
            <FormField type="name" placeholder="Alex Smith" label="Name"/>
            <FormField type="email" placeholder="alexsmith@gmail.com" label="E-Mail"/>
            <FormField type="password" placeholder="******" label="Password"/>
            <button className="button">Submit</button>
        </div>
    );
}

export default SignupForm;