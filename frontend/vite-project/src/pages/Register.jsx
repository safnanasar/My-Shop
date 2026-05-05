import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();


  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

 
  const users = JSON.parse(localStorage.getItem("users")) || [];

  
  const exists = users.find((u) => u.email === email);
  if (exists) {
    alert("User already exists");
    return;
  }
  


  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered successfully");

  navigate("/login");

  };


  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleRegister}>
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Register</button>

      
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}


export default Register;