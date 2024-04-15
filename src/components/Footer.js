import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sixe={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://LinkedIn.com">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="http://FB.com">
                <img src={navIcon2} alt="FB" />
              </a>
              <a href="http://instagram.com">
                <img src={navIcon3} alt="Insta" />
              </a>
            </div>
            <p>Copyright (с) 2024 || Almost all rights reserved ;)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
