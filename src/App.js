import "bulma/css/bulma.css";
import './App.css';
import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <SignupForm />
    </div>
  );
}

export default App;