import { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import Navbar from './components/Navbar';
import FormField from './components/FormField';
import SignupForm from './components/SignupForm';
import CoolButton from './components/CoolButton';
import Message from './components/Message';

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="App">
      <Navbar/>


<FormField  label="Name"  type="text"  placeholder="e.g Alex Smith"  />

  

<FormField  label="Email"  type="email"  placeholder="e.g. alexsmith@gmail.com"  />

<SignupForm/>



<CoolButton  type= "is-success button " text="button1" ></CoolButton>
<CoolButton type="button " text="Button 2"></CoolButton>
<CoolButton type="button is-small is-success" text="Button 3"></CoolButton>




<div>
      <button className="button is-primary" onClick={openModal}>Open Modal</button>
      <Message showModal={isModalVisible} closeModal={closeModal} />
    </div>
    </div>
  );
}

export default App;
