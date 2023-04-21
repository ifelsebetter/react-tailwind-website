import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Home" element={<HomePage />} />
          <Route exact path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
