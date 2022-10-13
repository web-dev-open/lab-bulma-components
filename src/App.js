import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';

import  "bulma/css/bulma.css";
import SignupForm from './components/SignupForm';
import CoolButton from './components/CoolButton';




function App() {
  return (
    <>
        <SignupForm/>
        <CoolButton className={"button is-success"} btnName={"Success"}/>
        <CoolButton className={"button is-danger"} btnName={"Danger"}/>
        <CoolButton className={"button is-warning"} btnName={"Warning"}/>
    </>
  );
}

export default App;
