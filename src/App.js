import { useState } from "react";
import { Spinner } from "react-bootstrap";
import SideVertical from "./components/SideVertical";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Skills from "./pages/skills/Skills";
import About from "./pages/about/About";
import Experiences from "./pages/experiences/Experiences";
import NavTop from "./components/NavTop";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import "./index.css";
import Courses from "./pages/courses/Courses";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [preload, setPreload] = useState(true);

  setTimeout(function () {
    setPreload(false);
  }, 1000);

  if (preload) {
    return (
      <>
        <div className="preload">
          <h1>
            <strong>Maya</strong>
          </h1>
          <p>─────</p>
          <Spinner animation="grow" />
        </div>
      </>
    );
  }

  return (
    <>
      <NavTop />
      <div className="d-flex">
        <SideVertical />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experiences" element={<Experiences />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
