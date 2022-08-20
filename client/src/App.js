import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Header, Footer } from "./components/index.js";
import { Home, Register, Login } from "./pages/index.js";
import { ToastContainer } from "react-toastify";
const App = () => {
  const location = useLocation();
  return (
    <div className="overflow-hidden w-full">
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <Header />
      )}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <Footer />
      )}
    </div>
  );
};

export default App;
