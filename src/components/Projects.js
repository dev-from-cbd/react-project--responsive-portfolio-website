import { Container, Row, Col, Tab, Nav } from "react-bootstrap"; // Importing necessary components from the react-bootstrap library for creating layout elements
import { ProjectCard } from "./ProjectCard"; // Importing the ProjectCard component from the local file "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png"; // Importing the projImg1 image from the local file path
import projImg2 from "../assets/img/project-img2.png"; // Importing the projImg2 image from the local file path
import projImg3 from "../assets/img/project-img3.png"; // Importing the projImg3 image from the local file path
import projImg4 from "../assets/img/project-img4.png"; // Importing the projImg4 image from the local file path
import projImg5 from "../assets/img/project-img5.png"; // Importing the projImg5 image from the local file path
import projImg6 from "../assets/img/project-img6.png"; // Importing the projImg6 image from the local file path
import colorSharp2 from "../assets/img/color-sharp2.png"; // Importing the colorSharp2 image from the local file path
import "animate.css"; // Importing animation styles from the "animate.css" library
import TrackVisibility from "react-on-screen"; // Importing the TrackVisibility component from the "react-on-screen" library

export const Projects = () => {
  // Declaring the Projects functional component
  const projects = [
    // Array containing project details
    {
      title: "Fitness Website", // Title of the first project
      description: "Design & Development", // Description of the first project
      imgUrl: projImg1, // Image URL for the first project
    },
    // Similar objects for other projects
  ];

  return (
    // Returning JSX markup for rendering
    <section className="project" id="projects">
      {" "}
      // Section element for projects with class "project" and id "projects"
      <Container>
        {" "}
        // Container component for layout
        <Row>
          {" "}
          // Row component for grid layout
          <Col size={12}>
            {" "}
            // Column component with size 12 for full width
            <TrackVisibility>
              {" "}
              // Component for tracking visibility
              {(
                { isVisible } // Rendering child components based on visibility
              ) => (
                <div // Div container
                  className={
                    // Conditional class based on visibility
                    isVisible ? "animate__animated animate__fadeIn" : "" // Apply fadeIn animation when visible
                  }
                >
                  <h2>Projects</h2> // Heading for projects
                  <p>
                    {" "}
                    // Paragraph describing completed freelance projects I have
                    completed several freelance projects. They are under NDA.
                    But you can view my publicly accessible projects on Github.
                    However, the projects that I will be proud of are still
                    ahead!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {" "}
                    // Container for tabs with default active tab
                    <Nav // Navigation component for tabs
                      variant="pills" // Variant styling for navigation tabs
                      className="nav-pills mb-5 justify-content-center align-items-center" // Additional classes for styling
                      id="pills-tab" // ID attribute for navigation
                    >
                      <Nav.Item>
                        {" "}
                        // Navigation item for first tab
                        <Nav.Link eventKey="first">Portfolio</Nav.Link> // Link
                        for first tab with event key "first"
                      </Nav.Item>
                      // Similar navigation items for other tabs
                    </Nav>
                    <Tab.Content // Container for tab content
                      id="slideInUp" // ID attribute for tab content
                      className={
                        // Conditional class based on visibility
                        isVisible ? "animate__animated animate__slideInUp" : "" // Apply slideInUp animation when visible
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {" "}
                        // Tab pane for first tab
                        <Row>
                          {" "}
                          // Row for displaying project cards
                          {projects.map((project, index) => {
                            // Mapping through projects array to render ProjectCard components
                            return <ProjectCard key={index} {...project} />; // Rendering ProjectCard component with project details
                          })}
                        </Row>{" "}
                        // End of row
                      </Tab.Pane>{" "}
                      // End of first tab pane // Similar tab panes for other
                      tabs
                    </Tab.Content>{" "}
                    // End of tab content container
                  </Tab.Container>{" "}
                  // End of tab container
                </div> // End of div container
              )}
            </TrackVisibility>{" "}
            // End of TrackVisibility component
          </Col>{" "}
          // End of column component
        </Row>{" "}
        // End of row component
      </Container>{" "}
      // End of container component
      <img className="background-image-right" src={colorSharp2}></img> // Image
      element with class and source attributes
    </section> // End of projects section
  ); // End of return statement
}; // End of Projects component declaration
