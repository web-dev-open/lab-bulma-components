import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";
import CoolButton from "./components/CoolButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignupForm />
      <div className="section is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
        <CoolButton name="Button1" attribute="button is-success mr-4" />
        <CoolButton name="Button2" attribute="button" />
      </div>
    </div>
  );
}

export default App;
