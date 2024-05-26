import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../style.css';
import { Tooltip } from 'react-tooltip';
import { Col, Row } from "react-bootstrap";
import Java from '../../assets/img/techstack/java.png';
import CLang from '../../assets/img/techstack/clang.png';
import Cpp from '../../assets/img/techstack/cpp.png';
import Python from '../../assets/img/techstack/python.png';
import RLang from '../../assets/img/techstack/rlang.png';
import SQL from '../../assets/img/techstack/sql.png';
import JavaScript from '../../assets/img/techstack/javascript.png';
import HTML from '../../assets/img/techstack/html.png';
import CSS from '../../assets/img/techstack/css.png';
import React from '../../assets/img/techstack/react.png';
import VBA from '../../assets/img/techstack/vba.png';
import Tableau from '../../assets/img/techstack/tableau.png';
import PowerBI from '../../assets/img/techstack/powerbi.png';
import Spark from '../../assets/img/techstack/spark.png';
import nodejs from '../../assets/img/techstack/nodejs.png';
import aws from '../../assets/img/techstack/aws.png';
import azure from '../../assets/img/techstack/azure.png';
import git from '../../assets/img/techstack/git.png';
import linux from '../../assets/img/techstack/linux.png';
import gcp from '../../assets/img/techstack/gcp.webp';
import docker from '../../assets/img/techstack/docker.png';
import tf from '../../assets/img/techstack/tf.png';

function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Boya's Portfolio - Skills</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="skills-wrapper">
        <div className="skills-left animate__animated animate__zoomIn">
          <h3>Skills</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>06</strong>
          </h4>
        </div>
        <div className="skills-right">
          <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Java} length={150} width={150} title="Java" alt="Java" data-tooltip-id="Java" data-tooltip-content="Java" />
            </Col>
            <Tooltip id="Java"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Python} length={150} width={150} title="Python" alt="python" data-tooltip-id="python" data-tooltip-content="Python" />
            </Col>
            <Tooltip id="python"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={aws} length={150} width={150} title="AWS" alt="aws" data-tooltip-id="aws" data-tooltip-content="AWS" />
            </Col>
            <Tooltip id="aws"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={gcp} length={150} width={150} title="GCP" alt="GCP" data-tooltip-id="GCP" data-tooltip-content="GCP" />
            </Col>
            <Tooltip id="GCP"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={azure} length={150} width={150} title="Azure" alt="Azure" data-tooltip-id="Azure" data-tooltip-content="Azure" />
            </Col>
            <Tooltip id="Azure"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SQL} length={150} width={150} title="SQL" alt="SQL" data-tooltip-id="SQL" data-tooltip-content="SQL" />
            </Col>
            <Tooltip id="SQL"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={CLang} length={150} width={150} title="C" alt="C" data-tooltip-id="C" data-tooltip-content="C" />
            </Col>
            <Tooltip id="C"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Cpp} length={150} width={150} title="C++" alt="C++" data-tooltip-id="C++" data-tooltip-content="C++" />
            </Col>
            <Tooltip id="C++"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={linux} length={150} width={150} title="Linux" alt="Linux" data-tooltip-id="Linux" data-tooltip-content="Linux" />
            </Col>
            <Tooltip id="Linux"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={git} length={150} width={150} title="Git" alt="Git" data-tooltip-id="Git" data-tooltip-content="Git" />
            </Col>
            <Tooltip id="Git"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={docker} length={150} width={150} title="Docker" alt="Docker" data-tooltip-id="Docker" data-tooltip-content="Docker" />
            </Col>
            <Tooltip id="Docker"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={RLang} length={150} width={150} title="R" alt="R" data-tooltip-id="R" data-tooltip-content="R" />
            </Col>
            <Tooltip id="R"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={PowerBI} length={150} width={150} title="Power BI" alt="PowerBI" data-tooltip-id="PowerBI" data-tooltip-content="Power BI" />
            </Col>
            <Tooltip id="Power BI"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Tableau} length={150} width={150} title="Tableau" alt="Tableau" data-tooltip-id="Tableau" data-tooltip-content="Tableau" />
            </Col>
            <Tooltip id="Tableau"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={tf} length={150} width={150} title="TensorFlow" alt="TensorFlow" data-tooltip-id="TensorFlow" data-tooltip-content="TensorFlow" />
            </Col>
            <Tooltip id="TensorFlow"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Spark} length={150} width={150} title="Spark" alt="Spark" data-tooltip-id="Spark" data-tooltip-content="Spark" />
            </Col>
            <Tooltip id="Spark"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={JavaScript} length={150} width={150} title="JavaScript" alt="JavaScript" data-tooltip-id="JavaScript" data-tooltip-content="JavaScript" />
            </Col>
            <Tooltip id="JavaScript"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={HTML} length={150} width={150} title="HTML" alt="HTML" data-tooltip-id="HTML" data-tooltip-content="HTML" />
            </Col>
            <Tooltip id="HTML"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={CSS} length={150} width={150} title="CSS" alt="CSS" data-tooltip-id="CSS" data-tooltip-content="CSS" />
            </Col>
            <Tooltip id="CSS"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={React} length={150} width={150} title="React" alt="React" data-tooltip-id="React" data-tooltip-content="React" />
            </Col>
            <Tooltip id="React"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={nodejs} length={150} width={150} title="NodeJS" alt="nodejs" data-tooltip-id="nodejs" data-tooltip-content="NodeJS"/>
            </Col>
            <Tooltip id="nodejs"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={VBA} length={150} width={150} title="VBA" alt="VBA" data-tooltip-id="VBA" data-tooltip-content="VBA"/>
            </Col>
            <Tooltip id="VBA"/>

          </Row>
          <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>
      </Container>
    </>
  );
}

export default Skills;
