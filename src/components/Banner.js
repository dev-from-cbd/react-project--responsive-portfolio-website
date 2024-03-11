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
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[1];
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio!!</span>
            <h1>
              {`Hi I'm webdecoded`}
              <span className="wrap">Web developer!!</span>
            </h1>
            <p>
              Welcome to my React developer portfolio! I'm passionate about
              crafting engaging user experiences and building scalable web
              applications with React.js. With expertise in front-end
              development and a keen eye for design, I strive to create clean,
              efficient, and intuitive interfaces. Let's collaborate and bring
              your ideas to life!
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
            <a href="#">
              <ArrowRightCircle />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
