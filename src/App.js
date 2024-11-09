
import './App.css';
import 'bulma/css/bulma.css'
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <SignUpForm/>
    </div>
  );
}

export default App;
