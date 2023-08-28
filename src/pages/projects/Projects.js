import { Container, Row, Col } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../style.css';
import LoadingGif from '../../assets/img/loading.gif';
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Maya's Portfolio - Projects</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="projects-container">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>Projects</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>04</strong>
          </h4>
        </div>
        <Container style={{ position: 'absolute', left: 'auto', top: '500px' }}>
          <Row style={{ justifyContent: "center" }}>
            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="Next.js E-commerce Store"
                description="A simple E-commerce store built with Next.js, Tailwind CSS, and Stripe"
                ghLink=""
                //demoLink=""
              />
            </Col>

            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="NodeJS Realtime Chat"
                description="A simple realtime chat app built with NodeJS and React"
                ghLink=""
                //demoLink=""
              />
            </Col>
          </Row>
          
          <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </Container>
      </Container>
    </>
  );
}

export default Projects;
