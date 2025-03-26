import React from "react";
import { Container} from "react-bootstrap";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../style.css';
import { AiFillStar } from "react-icons/ai";
import ads from "../../assets/img/ads.png";
import uwcs from "../../assets/img/uwcs.png";

function Course_Taken() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                <title>Boya's Portfolio - Skills</title>
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
                    <h4 className="text-center">Course taken at University of Chicago</h4> <br /> <br />
                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Big Data and Cloud Computing </strong> <br />
                            <strong>Professor:</strong> <br />
                           
                            <strong>When: Autumn 2023 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/><AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/>  </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Leadership & Consulting in Data Science</strong> <br />
                            <strong>Professor:</strong> <br />

                            <strong>When: Autumn 2023 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Statistical Analysis</strong> <br />
                            <strong>Professor:</strong> <br />
                            
                            <strong>When: Autumn 2023 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Natural Language Processing and Cognitive Computing</strong> <br />
                            <strong>Professor:</strong> <br />
                            
                            <strong>When: Winter 2024 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/><AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/>  <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>
                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Data Mining Principles</strong> <br />
                            <strong>Professor:</strong> <br />
                            
                            <strong>When: Winter 2024 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>
                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Linear and Non-Linear Models</strong> <br />
                            <strong>Professor:</strong> <br />
                           
                            <strong>When: Winter 2024 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>
                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Machine Learning & Predictive Analytics</strong> <br />
                            <strong>Professor:</strong> <br />
                            
                            <strong>When: Spring 2024 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/><AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>
                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Time Series Analysis and Forecasting</strong> <br />
                            <strong>Professor:</strong> <br />
                            
                            <strong>When: Spring 2024 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div> 
                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Capstone I
                                </strong> <br />
                            <strong>Professor:</strong> <br />
                            
                            <strong>When: Spring 2024 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/><AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>
                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Advanced Computer Vision with Deep Learning</strong> <br />
                            <strong>Professor:</strong> <br />
                            
                            <strong>When: Summer 2024 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/><AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>
                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Machine Learning Operations</strong> <br />
                            <strong>Professor:</strong> <br />
                            
                            <strong>When: Summer 2024 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/><AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>
                    <div className="d-flex mt-4 ms-5">
                        <img src={ads} alt="cs252" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>Capstone II</strong> <br />
                            <strong>Professor:</strong> <br />
                            
                            <strong>When: Autumn 2024 </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/><AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div><br /> <br />

    

                    <h4 className="text-center">Course taken at University of Wisconsin - Madison</h4> <br /> <br />
                    <div className="d-flex mt-4 ms-5">
                        <img src={uwcs} alt="cs200" width={250} height={90}/>
                        <ul className=" portfolio_right_text list">
                            <strong>COMP SCI 200 - Programming I </strong> <br />
                            <strong>Professor: </strong> <br />
                            
                            <strong>When: </strong> <br />
                            <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs220" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 220 - Data Science Programming I </strong> <br />
                        <strong>Professor: </strong> <br />
                       
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs240" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 240 - Introduction to Discrete Mathematics </strong> <br />
                        <strong>Professor: </strong> <br />
                        
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs252" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 252 - Introduction to Computer Engineering </strong> <br />
                        <strong>Professor: </strong> <br />
                        
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs300" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 300 - Programming II </strong> <br />
                        <strong>Professor: </strong> <br />
                        
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs320" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 320 - Data Science Programming II </strong> <br />
                        <strong>Professor: </strong> <br />
                        
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs354" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 354 - Machine Organization and Programming </strong> <br />
                        <strong>Professor: </strong> <br />
                        
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs400" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 400 - Programming III </strong> <br />
                        <strong>Professor: </strong> <br />
                        
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs532" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 532 - Matrix Methods in Machine Learning</strong> <br />
                        <strong>Professor: </strong> <br />
                        
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs537" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 537 - Introduction to Operating Systems</strong> <br />
                        <strong>Professor: </strong> <br />
                        
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs540" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 540 - Introduction to Artificial Intelligence</strong> <br />
                        <strong>Professor: </strong> <br />
                        
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs559" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 559 - Computer Graphics</strong> <br />
                        <strong>Professor: </strong> <br />
                       
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs564" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 564 - Database Management Systems: Design and Implementation</strong> <br />
                        <strong>Professor: </strong> <br />
                        
                        <strong>When: </strong> <br />
                        <strong>Workload: <AiFillStar color="#FFDB58"/> <AiFillStar color="#FFDB58"/> </strong>
                        </ul>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                    <img src={uwcs} alt="cs564" width={250} height={90}/>
                    <ul className=" portfolio_right_text list">
                        <strong>COMP SCI 577 - Introduction to Algorithms</strong> <br />
                        <strong>Professor: </strong> <br />
                        
                        <strong>When: </strong> <br />
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
