import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../style.css';
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
                <img src={Java} length={150} width={150}title="Java" alt="java"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Python} length={150} width={150} title="Python" alt="python"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={CLang} length={150} width={150} title="R" alt="c"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Cpp} length={150} width={150} title="C++" alt="c++"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={RLang} length={150} width={150} title="R" alt="r"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SQL} length={150} width={150} title="SQL" alt="sql"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={JavaScript} length={150} width={150} title="JavaScript" alt="javascript"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={HTML} length={150} width={150} title="HTML" alt="html"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={CSS} length={150} width={150} title="CSS" alt="css"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={React} length={150} width={150} title="React" alt="react"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={VBA} length={150} width={150} title="VBA" alt="vba"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={PowerBI} length={150} width={150} title="PowerBI" alt="powerbi"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Tableau} length={150} width={150} title="Tableau" alt="tableau"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Spark} length={150} width={150} title="Spark" alt="spark"/>
            </Col>
          </Row>
          <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>
      </Container>
    </>
  );
}

export default Skills;
