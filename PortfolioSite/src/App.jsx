import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";
import Education from "./Pages/Education";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <div className="app-wrapper">
        <Routes>
          <Route path="/warner.github.io/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
