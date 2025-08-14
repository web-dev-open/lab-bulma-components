import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";

function App() {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main container for form */}
      <div
        className="container"
        style={{ marginTop: "20px", maxWidth: "500px" }}
      >
        <form>
          <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField label="Password" type="password" placeholder="********" />

          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <button type="submit" className="button is-primary">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
