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
                description=""
                ghLink=""
                //demoLink=""
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="Credit Card Fraud Detection System using Deep Learning"
                description="An advanced fraud detection system built with deep learning techniques such as
                 Multilayer Neural Network, Convolutional Neural Network, and data preprocessing including 
                 under-sampling and PCA, achieving 97.50% accuracy and 100% precision in identifying fraudulent transactions."
                ghLink="https://github.com/Boya-Z/Fraud-Detectoion"
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
                title="Amazon Review Big Data Analysis"
                description="Data ingestion and analysis of 200,000 Amazon reviews using AWS Glue and Amazon Redshift, 
                with Spark NLP for sentiment analysis, Apache Spark's ALS in SageMaker for personalized recommendations,
                and K-Means clustering for targeted customer segmentation."
                ghLink=""
                //demoLink=""
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="APAC Region Campaigns KPI Real-Time Interactive Dashboard"
                description="A simple E-commerce store built with Next.js, Tailwind CSS, and Stripe"
                ghLink=""
                //demoLink=""
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="Computer Vision Project: Automated Image Classification System"
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
