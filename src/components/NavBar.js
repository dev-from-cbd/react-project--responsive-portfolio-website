import { Navbar, Nav, Container } from "react-bootstrap";
//import logo from '../assets/img/logo.svg';

export const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={""} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon">Span</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
