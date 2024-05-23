import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import '../../style.css';

function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Boya's Portfolio - About</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right">
          <p> 
            Hi, I'm Boya Zeng, a first year master student at University of Chicago, studying Applied Data Science. 
            <strong>I am currently seeking full-time opportunities as a business analyst, data analyst, data scientist, or Machine Learning position.</strong>
          </p>
        </div>

        <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </Container>
    </>
  );
}

export default About;
