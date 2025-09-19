import { useState, useEffect, use} from "react";
import  Axios from "axios";
import api from "../../api/api";
import "./login.css"; 

function Login() {
  //  usestate
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hello, setHello] = useState("");

    const fetchData = async () => {
      try {
        const response = await api.get("/hi/");
        console.log("API Response:", response.data.message);
        setHello(response.data.message);
      } catch (error) {
        console.error("Error fetching API status:", error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
    const fetchLogin = async () => {
      try {
        const response = await api.post("token/", {
          username: username,
          password: password,
        });
        console.log("Login Response:", response.data);
        localStorage.setItem("access_token", response.data.access);
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    fetchLogin();
  };
  const handleGuest = () => {
    console.log("Continue as guest");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo hna */}
        <h1 className="brand">NEXO PIZZA</h1>
        <p className="tagline">{ hello }</p>

        <form onSubmit={handleLogin} className="form">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>


        <button onClick={handleGuest} className="guest-btn">
          Continue as Guest
        </button>
      </div>
    </div>
  );
}

export default Login;
