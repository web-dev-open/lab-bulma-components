// import './App.css';
import "bulma/css/bulma.css";
import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm';
import CoolButton from "./components/CoolButton";
import Message from "./components/Message";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <SignupForm/>
     <div>
     <CoolButton isSmall isDanger isRounded>
    Button 1
     </CoolButton>
     <CoolButton isSmall isSuccess>
      Button 2
     </CoolButton>
     </div>
     <br/>

     <Message  isInfo  title="Hello World">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
	<strong>Pellentesque risus mi</strong>.
</Message>
    </div>
  );
}

export default App;
