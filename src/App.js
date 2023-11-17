import "bulma/css/bulma.css";

// Components
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import SignupForm from "./components/SignupForm";
import CoolButton from "./components/CoolButton";
// import logo from "./logo.svg";
// import "./App.css";
const input = [
  {
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
];
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        {input.map((input) => (
          <FormField
            key={input.label}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}
        <CoolButton isSuccess={true}>Button 1</CoolButton>
      </main>

      <footer>
        <SignupForm />
        <CoolButton isSuccess={false}>Button 2</CoolButton>
      </footer>
    </div>
  );
}

export default App;
