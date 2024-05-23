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
          <title>Boya's Portfolio - Projects</title>
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
                description="A forecasting system developed using Python and machine learning models like SARIMA, Prophet, Orbit, and LSTM, optimizing Divvy bike availability and reducing costs.                                                                         "
                ghLink=""
                //demoLink=""
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="Credit Card Fraud Detection System using Deep Learning"
                description="A fraud detection system developed using deep learning, integrating techniques like Multilayer Neural Networks and CNNs, achieving 97.50% accuracy and 100% precision in identifying fraudulent transactions.                                  "
                ghLink="https://github.com/Boya-Z/Fraud-Detectoion"
                //demoLink=""
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="AI Trend Analysis on Industries with Natural Language Processing"
                description="An AI impacts analysis using advanced NLP techniques on 200K news articles. This project involved topic detection with LDA and BERTopic, sentiment analysis with a Customized Logistic Model, and entity recognition with Google Cloud Platform."
                ghLink=""
                //demoLink=""
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="Amazon Review Big Data Analysis"
                description="A analysis of 200k+ Amazon reviews using AWS Glue and Amazon Redshift, with Spark NLP for sentiment analysis, Apache Spark's ALS in SageMaker for personalized recommendations, and K-Means clustering for targeted customer segmentation.      "
                ghLink=""
                //demoLink=""
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="APAC Region Campaigns KPI Real-Time Interactive Dashboard"
                description="A dynamic data pipeline using AWS Redshift and Vertica, integrating 10M+ rows with regular updates to Tableau, enhancing decision-making efficiency by 30% with real-time KPI and metric tracking.                                              "
                ghLink=""
                //demoLink=""
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                imgPath={LoadingGif}
                isBlog={false}
                title="Computer Vision Project: Automated Image Classification System"
                description="An advanced image classifier developed using TensorFlow and Keras, applying data augmentation to over 50,000 images and employing CNN architectures like ResNet and VGG, achieving 92% accuracy.                                                "
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
