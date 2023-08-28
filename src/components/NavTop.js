import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import "../style.css";

function NavTop() {
  const [toogleMenu, setToogleMenu] = useState(false);

  function toogleOpen() {
    setToogleMenu(true);
  }

  function toogleClose() {
    setToogleMenu(false);
  }

  if (toogleMenu) {
    return (
      <>
        <NavTop />
        <div className="menu">
          <Container fluid className="menu-close">
            <button className="toogle-menu ms-auto" onClick={toogleClose}>
              <GrClose />
            </button>
            <div className="menu-list">
              <NavLink to="/" onClick={toogleClose}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={toogleClose}>
                About
              </NavLink>
              <NavLink to="/experiences" onClick={toogleClose}>
                Experiences
              </NavLink>
              <NavLink to="/projects" onClick={toogleClose}>
                Projects
              </NavLink>
              <NavLink to="/courses" onClick={toogleClose}>
                Course Taken
              </NavLink>
              <NavLink to="/skills" onClick={toogleClose}>
                Skills
              </NavLink>
              <NavLink to="/resume" onClick={toogleClose}>
                Resume
              </NavLink>
              <NavLink to="/contact" onClick={toogleClose}>
                Contact
              </NavLink>
            </div>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar className="navtop py-3" expand="lg">
        <Container fluid className="px-4">
          <Navbar.Brand className="navtop-brand">
            <Link to="/">
              Maya
            </Link>
          </Navbar.Brand>
          <button className="toogle-menu" onClick={toogleOpen}>
            <FaAlignRight />
          </button>
          <Nav className="navtop-list ms-auto">
            <Nav.Link className="pe-3">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/experiences"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Experiences
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Projects
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/courses"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Course Taken
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Skills
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Resume
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTop;
