import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./component/Navbar";
import FormField from "./component/FormField";
import SignupForm from "./component/SignupForm";
import CoolButton from "./component/CoolButton";
import Message from "./component/Message";

function App() {
  return (
    <div className="App">
      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <SignupForm />
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <CoolButton isSuccess>Button 1</CoolButton>
        <CoolButton> Button 2 </CoolButton>
      </div>

      {/* BONUS 1 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "10px",
        }}
      >
        <CoolButton isSmall isDanger isRounded>
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </div>


      {/* BONUS 2 */}
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default App;
