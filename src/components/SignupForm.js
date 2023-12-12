import FormField from "./FormField";
import Navbar from "./Navbar";

const SignupForm = () => {
    return (
        <div>
            <Navbar />
            <form style={{width: "600px", margin: "100px auto"}}>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="x1xy139**" />
                <button type="submit" class="button is-success">Submit</button>
            </form>
        </div>
    )
}

export default SignupForm;