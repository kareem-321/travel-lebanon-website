// src/App.js
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Events from "./pages/Events";
import More from "./pages/More";
import About from "./pages/About";
import Login from "./pages/Login";
import Account from "./pages/Account";

import { BookingProvider } from "./context/BookingContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute.js";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AuthProvider>
      <BookingProvider>
        <div className={`app-root ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme} />

          {/* 👇 put container INSIDE main so all pages get same width */}
          <main className="app-main py-4">
            <div className="page-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cities" element={<Cities />} />
                <Route path="/events" element={<Events />} />
                <Route path="/more" element={<More />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/account"
                  element={
                    <ProtectedRoute>
                      <Account />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </main>

          <Footer />
        </div>
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;
