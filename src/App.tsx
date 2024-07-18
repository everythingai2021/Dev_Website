import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Project from "./pages/Projects";
import Program from "./pages/Program";
import Contact from "./pages/Contact";
import Footer from "./components/footer";
const App: React.FC = () => {
  return (
    <Router>
      <>
        {/* Navigation Bar */}
        <NavigationBar />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoweare" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/Program" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer/>
      </>
    </Router>
  );
};

export default App;
