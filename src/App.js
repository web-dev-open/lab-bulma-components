import logo from './logo.svg';
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
    </div>
  );
}

export default App;
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Home
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="/login">
            Login
          </a>
          <a className="navbar-item" href="/signup">
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

//export default Navbar;
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Other components or content goes here */}
    </div>
  );
}
import React from 'react';
//import Navbar from './components/Navbar';
import FormField from './components/FormField';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Other components or content goes here */}
      
{

// prop name: bulma class name

	isCentered : 'is-centered',
	isActive: 'is-active',
	isBlack: 'is-black',
	isDanger: 'is-danger',
	isDark: 'is-dark',
	isFocused: 'is-focused',
	isGrouped: 'is-grouped',
	isHovered: 'is-hovered',
	isInfo: 'is-info',
	isInverted: 'is-inverted',
	isLarge: 'is-large',
	isLight: 'is-light',
	isLink: 'is-link',
	isLoading: 'is-loading',
	isMedium: 'is-medium',
	isOutlined: 'is-outlined',
	isPrimary: 'is-primary',
	isRight: 'is-right',
	isRounded: 'is-rounded',
	isSelected: 'is-selected',
	isSmall: 'is-small',
	isStatic: 'is-static',
	isSuccess: 'is-success',
	isText: 'is-text',
	isWarning: 'is-warning',
	isWhite: 'is-white'


      {/* Example usage of FormField component */}
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div>
  );
}

//export default App;

//export default App;
