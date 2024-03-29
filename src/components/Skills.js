import { Container, Row, Col } from "react-bootstrap";

//import meter1 from "../assets/img/meter1.svg";
//import meter2 from "../assets/img/meter2.svg";
//import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import arrow1 from "../assets/img/arrow1.svg";
//import arrow2 from "../assets/img/arrow2.svg";
//import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>A bit experienced in React JS, JavaScript, CSS3, and HTML5, with a portfolio showcasing projects on GitHub.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
