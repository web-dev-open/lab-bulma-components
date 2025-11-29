// src/App.js
import "./App.css";
import "bulma/css/bulma.css";

import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignupForm />

      {/* Example form fields used directly */}
      <div className="container mt-5">
        <FormField
          label="Name"
          type="text"
          placeholder="e.g. Alex Smith"
        />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </div>
    </div>
  );
}

export default App;
