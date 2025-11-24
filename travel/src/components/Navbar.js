// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar({ theme, setTheme }) {
  const { user } = useAuth();

  const toggleTheme = () => {
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  };

  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            Travel Lebanon
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {/* LEFT SIDE: MAIN PAGES */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink to="/" className={linkClass} end>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/cities" className={linkClass}>
                  Cities
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/events" className={linkClass}>
                  Events
                </NavLink>
              </li>

              {/* About Us moved to main group */}
              <li className="nav-item">
                <NavLink to="/about" className={linkClass}>
                  About Us
                </NavLink>
              </li>
            </ul>

            {/* RIGHT SIDE: LOGIN → MORE → THEME */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                {user ? (
                  <NavLink to="/account" className={linkClass}>
                    Account
                  </NavLink>
                ) : (
                  <NavLink to="/login" className={linkClass}>
                    Login
                  </NavLink>
                )}
              </li>

              <li className="nav-item">
                <NavLink to="/more" className={linkClass}>
                  More
                </NavLink>
              </li>

              <li className="nav-item ms-3">
            <button
                type="button"
                className="btn btn-theme-toggle"
                onClick={toggleTheme}
              >
                {theme === "light-theme" ? "🌙" : "☀️"}
              </button>

              </li>

            </ul>

          </div>
        </div>
      </nav>

      <div className="flag-bar"></div>
    </>
  );
}

export default Navbar;
