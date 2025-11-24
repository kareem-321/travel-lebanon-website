// src/pages/Login.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import "../styles/login.css";

function Login() {
  const { user, logout } = useAuth();

  return (
    <div className="login-container">
      {user ? (
        <div className="logged-in-message">
          <h2>Welcome, {user.username}!</h2>
          <p>You are logged in. This is only UI (no real backend yet).</p>
          <button className="btn btn-outline-light mt-3" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default Login;
