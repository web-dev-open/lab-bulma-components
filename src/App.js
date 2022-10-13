import "bulma/css/bulma.css";

import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <SignupForm />
      <Button />
    </div>
  );
}

export default App;
