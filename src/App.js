import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navBar/index";
import Home from "./containers/home/index";
import About from "./containers/about/index";
import Portfolio from "./containers/portfolio/index";
import Resume from "./containers/resume/index";
import Skills from "./containers/skills/index";
import Contact from "./containers/contact/index";

function App() {
  return (
    <div className="App">
      {/* Particles */}
      {/* Nav bar */}
      <Navbar />
      {/* Main page */}
      <Routes>
        {/* Create routes */}
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
