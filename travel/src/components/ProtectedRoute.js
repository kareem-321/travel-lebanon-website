// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // not logged in → send to login page
    return <Navigate to="/login" replace />;
  }

  // logged in → show the page
  return children;
}

export default ProtectedRoute;
