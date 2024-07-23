import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Program from "./pages/Program";
import Contact from "./pages/Contact";
import Footer from "./components/footer";
import ProjectPage2020 from "./pages/Project2020";
import ProjectPage2022 from "./pages/Project2022";
import EventPage from "./pages/Events";
import SandboxGlobal from "./pages/SandboxGlobal";
import Sandbox1 from "./pages/Sandbox1";
import Sandbox2 from "./pages/Sandbox2";
import Sandbox3 from "./pages/Sandbox3";
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
          <Route path="/events" element={<EventPage/>} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/Program" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-2020" element={<ProjectPage2020/>} />
          <Route path="/project-2022" element={<ProjectPage2022 />} />
          <Route path="/Sandbox" element={<SandboxGlobal />} />
          <Route path="/Sandbox1" element={<Sandbox1 />} />
          <Route path="/Sandbox2" element={<Sandbox2 />} />
          <Route path="/Sandbox3" element={<Sandbox3 />} />
        </Routes>

        <Footer/>
      </>
    </Router>
  );
};

export default App;
