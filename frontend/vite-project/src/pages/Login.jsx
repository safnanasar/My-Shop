import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [input, setInput] = useState(""); // email or phone
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // <-- Missing line

  const handleLogin = (e) => {
    e.preventDefault();

    if (!input || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === input && u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    alert(`Welcome ${user.name} 🎉`);

    setUser(user.name);
    localStorage.setItem("currentUser", user.name);

    navigate("/");
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Email or Phone Number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="auth-switch">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;