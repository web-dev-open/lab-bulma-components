import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import "bulma/css/bulma.css";
import FormField from './components/FormField';
import SignupForm from './components/SignupForm';
import CoolButton from './components/CoolButton';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Other components or content here */}
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <SignupForm/>
      {/* <CoolButton isSuccess>Button 1</CoolButton>
      <CoolButton>Button 2</CoolButton> */}
      
        <Message isInfo title="Hello World">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <strong>Pellentesque risus mi</strong>.
        </Message>

      <CoolButton isSmall isDanger isRounded>Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div>
  );
}

export default App;
