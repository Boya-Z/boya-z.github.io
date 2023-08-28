import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resume from "../../assets/resume/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = Resume;

function ResumeNew() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Maya's Portfolio - Skills</title>
                </Helmet>
            </HelmetProvider>
            <Container fluid className="resume-section">
                <Row className="resume">
                    <div className="skills-left animate__animated animate__zoomIn">
                        <h3>Resume</h3>
                        <h4>
                            ───&nbsp;&nbsp;Page <strong>07</strong>
                        </h4>
                    </div>
                    <Document file={resumeLink} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: 'flex', right: '870px', top: '1600px' }}>
                    <Button
                        variant="dark"
                        href={Resume}
                        target="_blank"
                        style={{ maxWidth: "250px", zIndex: 1 }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row> 
                <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </Container>
        </>
    );
}

export default ResumeNew;

