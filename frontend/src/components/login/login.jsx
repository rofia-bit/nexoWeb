import { useState } from "react";
import "./login.css"; 

function Login() {
  //  usestate 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  const handleGuest = () => {
    console.log("Continue as guest");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo hna */}
        <h1 className="brand">NEXO PIZZA</h1>
        <p className="tagline">pizza and tech blah blah blah</p>

        <form onSubmit={handleLogin} className="form">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
