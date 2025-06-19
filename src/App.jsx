import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

import "./index.css";
import React, { useState, useEffect } from "react"; // src/App.jsx
import Home from "./pages/Home";
import Ighub from "./pages/Ighub";
import Fun from "./pages/Fun";
import Dhabis from "./pages/Dhabis";
import Misce from "./pages/Misce";
import Projects from "./pages/Projects";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      {/* this the dark and light mode code */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ighub" element={<Ighub />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/dhabis" element={<Dhabis />} />
        <Route path="/misce" element={<Misce />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
