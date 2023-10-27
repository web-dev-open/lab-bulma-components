import "bulma/css/bulma.css";

import "./App.css";
import Button from "./components/Button";

import Form from "./components/Form";
import MessageComponent from "./components/MessageComponent";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <SignupForm />
      <Button />
      <MessageComponent/>
    </div>
  );
}

export default App;
