import  "bulma/css/bulma.css";
import './App.css'; 
import SignupForm from "./components/SignupForm";
import CoolButton from "./components/CoolButton";

function App() {
  return (
    <div className="App">
    <SignupForm/>
    <div style= {{display: "flex", marginLeft: "40%"}}>
      <CoolButton class="button is-success" name="Button 1" color="#47cdb0"/>
      <CoolButton class="button is-white" name="Button 1" color="#FFF" text="#000"/>
    </div>
    </div>
  );
}

export default App;
