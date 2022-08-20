import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import { Home } from "./pages/index.js";
const App = () => {
  return (
    <div className="overflow-hidden w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
