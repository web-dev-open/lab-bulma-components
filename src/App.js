import logo from './logo.svg';
import './App.css';
import  "bulma/css/bulma.css";


import SignupForm from "./components/SignupForm.js";
import CoolButton from "./components/CoolButton.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
             <SignupForm />

      <CoolButton isSuccess>Button 1</CoolButton>
      <CoolButton> Button 2 </CoolButton>
      <div><CoolButton  isSmall  isDanger  isRounded>Button 1</CoolButton>
      <CoolButton  isSmall  isSuccess>Button 2</CoolButton></div>

    </div>
  );
}

export default App;
