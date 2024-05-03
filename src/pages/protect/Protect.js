import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const Protect = () => {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  return loggedIn ? <Outlet /> : <Navigate to={"/register"} />;
};

export default Protect;
