import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "Frontend Developer",
    "UX/UI Expert",
    "User Experience Specialist",
    "Frontend Engineer",
    "Web Interface Developer",
    "Front End Programmer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker); // Clearing the interval on unmount
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[1];
  };

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
