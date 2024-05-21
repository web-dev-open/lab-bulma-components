import "./App.css";
import  "bulma/css/bulma.css";


import SignupForm from "./components/SignupForm.js";
import CoolButton from "./components/CoolButton.js";


function App() {
  return (
    <div className="App">
      
      <SignupForm />

      <CoolButton isSuccess>Button 1</CoolButton>
      <CoolButton> Button 2 </CoolButton>
      <div><CoolButton  isSmall  isDanger  isRounded>Button 1</CoolButton>
      <CoolButton  isSmall  isSuccess>Button 2</CoolButton></div>

    </div>
  );
}


export default App;