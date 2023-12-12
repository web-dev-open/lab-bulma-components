import logo from './logo.svg';
import "bulma/css/bulma.css"
import Message from './components/Message';

import SignupForm from './components/SignupForm';

import './App.css';

function App() {
  return (
    <div className="App">
     <SignupForm/>
     <Message isInfo title="New Message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
	    <strong>Pellentesque risus mi</strong>.</Message>
  
    </div>
  );
}

export default App;
