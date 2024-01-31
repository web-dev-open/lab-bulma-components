import './App.css';
import "bulma/css/bulma.css"
import SignupForm from './componenets/SignupForm';
import Message from './componenets/Message';

function App() {
  return (
    <div className="App">
      <SignupForm/>
      <Message/>
    </div>
  );
}

export default App;
