import logo from './logo.svg';
import "bulma/css/bulma.css"
import Message from './components/Message';

import SignupForm from './components/SignupForm';

import './App.css';

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
     <SignupForm/>
     <Message isInfo title="New Message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
	    <strong>Pellentesque risus mi</strong>.</Message>

    </div>
  );
}
export default App;