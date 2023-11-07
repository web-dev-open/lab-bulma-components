
// src/App.js
import Message from './components/Message';
import CoolButton from './components/CoolButton';
import SignupForm from './components/SignupForm';
import FormField from './components/FormField';
import Navbar from './components/Navbar';
import  "bulma/css/bulma.css";
import  "./App.css";

  

function App() {

return  <div  className="App">
  <Navbar />
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
   <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
   <SignupForm />
   <CoolButton>
   <button  class="button is-small is-danger is-rounded ">Button 1</button>
<button  class="button is-small is-success">Button 2</button>
   </CoolButton>
   <Message  isInfo  title="Hello World">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
	<strong>Pellentesque risus mi</strong>.
</Message>
</div>;

}

export  default App;
