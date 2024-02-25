
import  "./App.css";
import Navbar from "./components/Navbar.js";
import FormField from "./components/FormField";
import SignupForm from "./components/SignupForm.js";
import Message from "./components/Message.js";
import CoolButton from "./components/CoolButton.js";


import  "bulma/css/bulma.css";


  

function App() {

return  <div  className="App">
  <SignupForm />
  <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>.
  </Message>
  <CoolButton  isSuccess  >Button 1</CoolButton>
  <CoolButton> Button 2 </CoolButton>

</div>;

}

export  default App;

