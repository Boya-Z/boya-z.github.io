import React from "react";
import { Container} from "react-bootstrap";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../style.css';
import { AiFillStar } from "react-icons/ai";
import LoadingGif from "../../assets/img/loading.gif";

function Course_Taken() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                <title>Maya's Portfolio - Skills</title>
                </Helmet>
            </HelmetProvider>
            <Container fluid className="skills-wrapper">
                <div className="skills-left animate__animated animate__zoomIn">
                    <h3>Courses</h3>
                    <h4>
                        ───&nbsp;&nbsp;Page <strong>05</strong>
                    </h4>
                </div>
                <div style={{ position: 'absolute', left: '100px', top: '500px' }}>
                    <h4 className="text-center">Course taken at University of Wisconsin - Madison</h4> <br /> <br />
                    <div className="d-flex mt-4 ms-5">
                        <img src={LoadingGif} alt="cs200" width={250} height={250}/>
                        <ul className=" portfolio_right_text list">
                            <strong>COMP SCI 200 - Programming I </strong> <br />
                            <strong>Professor: </strong> <br />
                            <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                            <strong>When: </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs220" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 220 - Data Science Programming I </strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs240" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 240 - Introduction to Discrete Mathematics </strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs252" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 252 - Introduction to Computer Engineering </strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs300" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 300 - Programming II </strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs320" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 320 - Data Science Programming II </strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs354" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 354 - Machine Organization and Programming </strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs400" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 400 - Programming III </strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs532" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 532 - Matrix Methods in Machine Learning</strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs537" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 537 - Introduction to Operating Systems</strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs540" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 540 - Introduction to Artificial Intelligence</strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs559" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 559 - Computer Graphics</strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs564" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 564 - Database Management Systems: Design and Implementation</strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={LoadingGif} alt="cs564" width={250} height={250}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 577 - Introduction to Algorithms</strong> <br />
                        <strong>Professor: </strong> <br />
                        <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <h4 className="text-center">Course taken at University of Chicago</h4> <br /> <br />
                    <div className="d-flex mt-4 ms-5">
                        <img src={LoadingGif} alt="cs252" width={250} height={250}/>
                        <ul className=" portfolio_right_text list">
                            <strong> </strong> <br />
                            <strong>Professor:</strong> <br />
                            <strong>Rating: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong> <br />
                            <strong>When: Fall 2020 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <br /> <br /> <br /> <br /> <br /> <br /> <br />
                </div>
            </Container>
        </>
    );
}

export default Course_Taken;
