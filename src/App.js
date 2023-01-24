import "bulma/css/bulma.css";
import "./App.css";
import Message from "./components/Message";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div>
      <SignupForm />
      <Message title="Hello World" />
    </div>
  );
}

export default App;
