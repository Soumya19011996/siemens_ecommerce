import Layout from "./components/Layout";
import Loginform from "./components/Login/Loginform";
import { useState } from "react";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";

function App() {
  const adminUser = {
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };

  const Logout = () => {
    setUser({ name: "", password: "" });
  };
  return (
    <div className="App">
      <Layout />
      <Loginform />
    </div>
  );
}

export default App;
