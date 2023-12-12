import "./App.css";

import "bulma/css/bulma.css";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import SignupForm from "./components/SignupForm";
import Message from "./components/Message";


function App() {
  return <div className="App">
    <SignupForm/>
    <Message isInfo title="Hello world">Lorem ipsum</Message>
  </div>;

}

export default App;
