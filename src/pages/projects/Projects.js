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
                title="Time Series Demand Foresting for Divvy Bike Usage in Chicago"
                description="•Analyzed four years of data (2019-2023) to develop and implement predictive models (SARIMA, Prophet, Orbit, LSTM) using Python, enhancing bike availability and reducing operational costs. 
                •	Model Optimization: Identified LSTM as the optimal model for its accuracy in capturing complex demand patterns, significantly improving forecast reliability. 
                •	Operational Improvements: Enabled precise bike stock management and improved service delivery during peak demand periods, boosting customer satisfaction. 
                •	Technical Expertise in Machine Learning: Utilized Python, Bayesian Optimization, and various machine learning algorithms to refine forecasting accuracy, contributing to data-driven decisions that bolstered business operations.
                "
                ghLink=""
                //demoLink=""
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="Credit Card Fraud Detection System using Deep Learning"
                description="A simple E-commerce store built with Next.js, Tailwind CSS, and Stripe"
                ghLink=""
                //demoLink=""
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="AI Trend Analysis on Industries with Natural Language Processing"
                description="A simple E-commerce store built with Next.js, Tailwind CSS, and Stripe"
                ghLink=""
                //demoLink=""
              />
            </Col>
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
