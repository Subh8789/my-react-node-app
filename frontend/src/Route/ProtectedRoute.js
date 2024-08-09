import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

export default function ProtectedRoute({ element: Component, ...rest }) {
  const isLoggedIn = localStorage.getItem("userLoggedIn") // Ensure proper boolean check
  const navigate = useNavigate();

  if (isLoggedIn === "false") {
    return <Home/>;
  }

  return <Component {...rest} />;
}
