import { useState, useEffect } from "react";

// Importing necessary components from react-bootstrap library
import { Container, Row, Col } from "react-bootstrap";

// Importing headerImg from the specified path
import headerImg from "../assets/img/header-img.svg";

// Importing ArrowRightCircle icon from react-bootstrap-icons library
import { ArrowRightCircle } from "react-bootstrap-icons";

// Defining Banner component as a functional component
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "UX/UI Expert", "Front End Programmer"];
  const [text, setText] = useState("");
  const period = 200;

  // Returning JSX for the Banner component
  return (
    // Section element with className "banner" and id "home"
    <section className="banner" id="home">
      {/* Container component from react-bootstrap */}
      <Container>
        {/* Row component from react-bootstrap */}
        <Row className="align-items-center">
          {/* Column component with different breakpoints */}
          <Col xs={12} md={6} xl={7}>
            {/* Span element with className "tagline" */}
            <span className="tagline">Welcome to my Portfolio!!</span>
            {/* Heading element with dynamic content */}
            <h1>
              {`Hi I'm webdecoded`}
              {/* Span element with className "wrap" */}
              <span className="wrap">Web developer!!</span>
            </h1>
            {/* Paragraph element with text content */}
            <p>
              Welcome to my React developer portfolio! I'm passionate about
              crafting engaging user experiences and building scalable web
              applications with React.js. With expertise in front-end
              development and a keen eye for design, I strive to create clean,
              efficient, and intuitive interfaces. Let's collaborate and bring
              your ideas to life!
            </p>
            {/* Button element with onClick event handler */}
            <button onClick={() => console.log("connect")}>
              Let's connect
            </button>
          </Col>
          {/* Column component with different breakpoints */}
          <Col xs={12} md={6} xl={5}>
            {/* Image element with src and alt attributes */}
            <img src={headerImg} alt="Header Image" />
            {/* Anchor element with ArrowRightCircle icon */}
            <a href="#">
              <ArrowRightCircle />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
