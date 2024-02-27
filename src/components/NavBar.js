import { useState, useEffect } from "react"; // Importing React hooks for managing state and side effects
import { Navbar, Nav, Container } from "react-bootstrap"; // Importing components from React Bootstrap library
import logo from "../assets/img/logo.svg"; // Importing logo image
import navIcon1 from "../assets/img/nav-icon1.svg"; // Importing navigation icon 1 image
import navIcon2 from "../assets/img/nav-icon2.svg"; // Importing navigation icon 2 image
import navIcon3 from "../assets/img/nav-icon3.svg"; // Importing navigation icon 3 image

export const NavBar = () => {
  // Defining functional component NavBar
  const [activeLink, setActiveLink] = useState("home"); // State variable for active link with default value 'home'
  const [scrolled, setScrolled] = useState(false); // State variable for scrolled state with default value 'false'

  useEffect(() => {
    // Effect hook for handling scroll event
    const onScroll = () => {
      // Callback function to handle scroll event
      if (window.scrollY > 50) {
        // Checking if scroll position is greater than 50 pixels
        setScrolled(true); // Setting scrolled state to 'true' if scroll position is greater than 50 pixels
      } else {
        setScrolled(false); // Setting scrolled state to 'false' if scroll position is less than or equal to 50 pixels
      }
    };

    window.addEventListener("scroll", onScroll); // Adding scroll event listener

    return () => {
      // Cleanup function to remove event listener when component unmounts
      window.removeEventListener("scroll", onScroll); // Removing scroll event listener
    };
  }, []); // Empty dependency array indicates the effect should only run once after the initial render

  const onUpdateActiveLink = (value) => {
    // Function to update active link state
    setActiveLink(value); // Updating active link state with the provided value
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      {" "}
      <Container>
        {" "}
        <Navbar.Brand href="#home">
          {" "}
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {" "}
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          {" "}
          <Nav className="ms-auto">
            {" "}
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link" // Conditional class based on active link state
              }
              onClick={() => onUpdateActiveLink("home")} // Click event handler to update active link state
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link" // Conditional class based on active link state
              }
              onClick={() => onUpdateActiveLink("skills")} // Click event handler to update active link state
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link" // Conditional class based on active link state
              }
              onClick={() => onUpdateActiveLink("projects")} // Click event handler to update active link state
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            {" "}
            <div className="social-icon">
              {" "}
              <a href="http://LinkedIn.com">
                {" "}
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="http://FB.com">
                {" "}
                <img src={navIcon2} alt="FaceBook" />
              </a>
              <a href="http://instagram.com">
                {" "}
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              {" "}
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
