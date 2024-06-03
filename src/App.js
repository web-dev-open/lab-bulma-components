
import './App.css';
import  "bulma/css/bulma.css";

import SignupForm from './components/SignupForm';
import CoolButton from './components/CoolButton';
import Message from './components/Message';

function App() {
  return <div className="App">
     <SignupForm />

<CoolButton isSuccess>Button 1</CoolButton>
<CoolButton> Button 2 </CoolButton>
<div>
  <CoolButton  isSmall  isDanger  isRounded>Button 1</CoolButton>
  <CoolButton  isSmall  isSuccess isRounded>Button 2</CoolButton>
  </div>
  <Message isInfo title="Hello world">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
	<strong>Write something in bold</strong>.
</Message>
  </div>;
}



export default App;
