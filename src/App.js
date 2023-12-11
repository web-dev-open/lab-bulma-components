import  "bulma/css/bulma.css";
import './App.css';
import SignupForm from "./components/SignupForm";
import CoolButton from "./components/CoolButton";
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <SignupForm />
      <CoolButton isSmall isDanger isRounded>Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      <div className="message-container">
        <Message isInfo title="Hello World" size="is-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    </div>
  );
}

export default App;