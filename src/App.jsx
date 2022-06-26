import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  return (
    <div className="App">
      <form>
        <FormInput placeholder="Username" />
        <FormInput placeholder="Email Address" />
        <FormInput placeholder="First Name" />
        <FormInput placeholder="Last Name" />
      </form>
    </div>
  );
};

export default App;
