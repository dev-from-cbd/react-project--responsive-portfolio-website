import { useState, useEffect } from "react"; // Importing necessary hooks from React
import { Container, Row, Col } from "react-bootstrap"; // Importing layout components from React Bootstrap
import { ArrowRightCircle } from "react-bootstrap-icons"; // Importing an icon component from React Bootstrap Icons
import headerImg from "../assets/img/header-img.svg"; // Importing an image asset

export const Banner = () => {
  // Declaring a functional component named Banner
  const [loopNum, setLoopNum] = useState(0); // Declaring a state variable loopNum and its setter function
  const [isDeleting, setIsDeleting] = useState(false); // Declaring a state variable isDeleting and its setter function
  const toRotate = [
    // Declaring an array toRotate containing strings
    "Web Developer",
    "Frontend Developer",
    "UX/UI Expert",
    "User Experience Specialist",
    "Frontend Engineer",
    "Web Interface Developer",
    "Front End Programmer",
  ];
  const [text, setText] = useState(""); // Declaring a state variable text and its setter function
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Declaring a state variable delta and its setter function
  const period = 2000; // Declaring a constant period with value 2000

  useEffect(() => {
    // Declaring a side effect using the useEffect hook
    let ticker = setInterval(() => {
      // Setting up an interval
      tick(); // Calling the tick function
    }, delta);

    return () => {
      // Cleaning up the interval
      clearInterval(ticker);
    };
  }, [text]); // Specifying text as a dependency for the useEffect hook

  const tick = () => {
    // Declaring the tick function
    let i = loopNum % toRotate.length; // Calculating the index for the toRotate array
    let fullText = toRotate[i]; // Assigning the string at index i from the toRotate array to the variable fullText
    let updatedText = isDeleting // Conditionally updating the text
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText); // Updating the text state with the updatedText value

    if (isDeleting) {
      // Conditionally updating the delta state
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      // Conditionally updating the isDeleting and delta states
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      // Conditionally updating the isDeleting, loopNum, and delta states
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    // Returning JSX for the Banner component
    <section className="banner" id="home">
      {" "}
      {/* Section element with class name "banner" and id "home" */}
      <Container>
        {" "}
        {/* Container component from React Bootstrap */}
        <Row className="align-items-center">
          {" "}
          {/* Row component with class name "align-items-center" */}
          <Col xs={12} md={6} xl={7}>
            {" "}
            {/* Column component with different breakpoints */}
            <span className="tagline">Welcome to my Portfolio!!</span>{" "}
            {/* Span element with class name "tagline" */}
            <h1>
              {" "}
              {/* Heading element */}
              {`Hi I'm webdecoded`} {/* Static text */}
              <span className="wrap">{text}</span>{" "}
              {/* Span element with class name "wrap" and dynamic content */}
            </h1>
            <p>
              {" "}
              {/* Paragraph element */}
              Welcome to my React developer portfolio! I'm passionate about
              crafting engaging user experiences and building scalable web
              applications with React.js. With expertise in front-end
              development and a keen eye for design, I strive to create clean,
              efficient, and intuitive interfaces. Let's collaborate and bring
              your ideas to life!
            </p>
            <button onClick={() => console.log("connect")}>
              {" "}
              {/* Button element with onClick event handler */}
              Let's connect
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {" "}
            {/* Column component with different breakpoints */}
            <img src={headerImg} alt="Header Image" />{" "}
            {/* Image element with src and alt attributes */}
            <a href="#">
              {" "}
              {/* Anchor element */}
              <ArrowRightCircle /> {/* ArrowRightCircle icon component */}
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
