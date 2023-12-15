import Message from './Components/Message';
import CoolButton from './Components/Button';
import Signup from './Components/signup';
import FormField from './Components/Form';
import Navbar from './Components/Navbar';
import  "bulma/css/bulma.css";
import  "./App.css";


function App() {

  return  <div  className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <hr/>
      <Signup/>
      <hr/>
      <CoolButton>
        <button  class="button is-small is-danger is-rounded ">Button 1</button>
        <button  class="button is-small is-success">Button 2</button>
        <button  class="button is-small is-success is-rounded is-loading">Button 3</button>
        <button  class="button is-small is-success is-static">Button 4</button>
        <button  class="button is-large is-success is-outlined">Button 5</button>
        <button  class="button is-small is-rounded is-black">Button 6</button>
        <button  class="button is-small is-rounded is-dark">Button 7</button>
        <button  class="button is-small is-white is-focused">Button 8</button>
        <button  class="button is-small is-text">Button 9</button>
        <button  class="button is-small is-info">Button 10</button>
        <button  class="button is-medium is-warning is-hovered">Button 11</button>
      </CoolButton>
      <hr/>
      <Message  isInfo  title="Hello React ❤️">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
  </div>;
  
  }
  
  export  default App;