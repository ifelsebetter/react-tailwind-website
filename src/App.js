import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
    </Router>
  );
}

export default App;
