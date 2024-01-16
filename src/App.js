// import './App.css';
import "bulma/css/bulma.css";
import Navbar from './components/Navbar.js';
import FormField from "./components/FormField.js";
import SignupForm from "./components/SignupForm.js";
import CoolButton from "./components/CoolButton.js";
import Message from "./components/Message.js";

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g. Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/> */}
      <SignupForm/>
      {/* <CoolButton class="button is-success" value="Button 1"/>
      <CoolButton class="button" value="Button 2"/> */}
      <br/>
      <Message/>
    </div>
  );
}

export default App;
