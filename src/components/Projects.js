import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj-img1.jpeg";
import projImg2 from "../assets/img/proj-img2.jpeg";
import projImg3 from "../assets/img/proj-img3.jpeg";
import projImg4 from "../assets/img/proj-img4.jpeg";
import projImg5 from "../assets/img/proj-img5.jpeg";
import projImg6 from "../assets/img/proj-img6.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pirate Ecommerce",
      description: "Next JS Ecommerce Site",
      imgUrl: projImg6,
    },
    {
      title: "PHP Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "UAE DESERT ADVENTURES",
      description: "Next JS | Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Wordpress Shopping Site",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Pirate Coderz Portfolio",
      description: "React JS | Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "React Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These Projects are made by me and in different production levels. Like in React.js, Next.js, Wordpress, Website in PHP etc.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Banner 2"></img>
    </section>
  )
}
