import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../style.css';
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

function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Maya's Portfolio - Skills</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="skills-wrapper">
        <div className="skills-left animate__animated animate__zoomIn">
          <h3>Skills</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>06</strong>
          </h4>
        </div>
        <div className="skills-right" style={{ position: 'absolute', left: '1100px', top: '400px' }}>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <img src={Java} alt="Java" width={110} height={100} />
              <img src={CLang} alt="C" width={110} height={100} />
              <img src={Cpp} alt="C++" width={110} height={100} />
              <img src={Python} alt="Python" width={110} height={100} />
            </div>
          </div>

          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <img src={RLang} alt="R" width={110} height={100} />
              <img src={SQL} alt="SQL" width={110} height={100} />
              <img src={JavaScript} alt="JavaScript" width={110} height={100} />
              <img src={HTML} alt="HTML" width={110} height={100} />
            </div>
          </div>

          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <img src={CSS} alt="CSS" width={110} height={100} />
              <img src={React} alt="React" width={110} height={100} />
              <img src={VBA} alt="VBA" width={110} height={100} />
              <img src={Tableau} alt="Tableau" width={110} height={100} />
            </div>
          </div>

          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <img src={PowerBI} alt="PowerBI" width={110} height={100} />
            </div>
          </div> 
          
          <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>
      </Container>
    </>
  );
}

export default Skills;
