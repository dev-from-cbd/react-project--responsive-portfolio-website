import { Container, Row, Col, Tab, Nav } from "react-bootstrap"; // Importing components from react-bootstrap library for layout creation
import { ProjectCard } from "./ProjectCard"; // Importing ProjectCard component from local file "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png"; // Importing projImg1 image from local file
import projImg2 from "../assets/img/project-img2.png"; // Importing projImg2 image from local file
import projImg3 from "../assets/img/project-img3.png"; // Importing projImg3 image from local file
import projImg4 from "../assets/img/project-img4.png"; // Importing projImg4 image from local file
import projImg5 from "../assets/img/project-img5.png"; // Importing projImg5 image from local file
import projImg6 from "../assets/img/project-img6.png"; // Importing projImg6 image from local file
import colorSharp2 from "../assets/img/color-sharp2.png"; // Importing colorSharp2 image from local file
import "animate.css"; // Importing animation styles from "animate.css" library
import TrackVisibility from "react-on-screen"; // Importing TrackVisibility component from "react-on-screen" library

export const Projects = () => {
  const projects = [
    {
      title: "Fitness Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Gym",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Real Estate Web Page",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Bug Sweep Detection Services",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Fitness WebPage",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Lawn Mowing",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have completed several freelance projects. They are under
                    NDA. But you can view my publicly accessible projects on
                    Github. However, the projects that I will be proud of are
                    still ahead!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Portfolio</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Technologies</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Why choose me</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Developing new website components, pages, and sections
                          is what I excel at the most. I also enjoy refactoring
                          and hunting down complex bugs in other people's code
                          when I have plenty of free time for it.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>React JS, HTML5, CSS3, Bootstrap, etc..</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I particularly enjoy tasks that bring profit to the
                          company. For example, I love creating online stores
                          with payment systems, as well as making product
                          catalogs and other projects that generate revenue for
                          the client!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
