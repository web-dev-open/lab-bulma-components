import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from 'react';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="App">
      {/* Other components or content goes here */}
      
      {/* Render the SignupForm component */}
      <SignupForm />
    </div>
  );
}

export default App;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
