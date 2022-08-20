import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Footer } from "./components/index.js";
import { Home } from "./pages/index.js";
const App = () => {
  return (
    <div className="overflow-hidden w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
