import React from "react";
import { useNavigate } from "react-router-dom";
import Home from '../pages/Home.js';
export default function ProtectedRoute({ element : Component, ...rest }) {


  
  const isLoggedIn = localStorage.getItem("userLoggedIn");
  const navigate = useNavigate();

  return  isLoggedIn ? <Component {...rest} /> : <Home/>;


}