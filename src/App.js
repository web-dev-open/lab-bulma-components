import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import SignupForm from "./components/SignupForm";
import CoolButton from "./components/CoolButton";
function App() {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g  alexsmith@gmail.com"
      />
      <SignupForm />
      <CoolButton isSuccess>Button 1</CoolButton>
      <CoolButton> Button 2 </CoolButton>
    </>
  );
}

export default App;
