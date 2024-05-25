import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resume from "../../assets/resume/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = Resume;

function ResumeNew() {
    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Boya's Portfolio - Skills</title>
                </Helmet>
            </HelmetProvider>
            <Container fluid className="resume-section">
                <Row className="resume">
                    <div className="skills-left animate__animated animate__zoomIn">
                        <h3>Resume</h3>
                        <h4>
                            ───&nbsp;&nbsp;Pages <strong>1-{numPages}</strong>
                        </h4>
                    </div>
                    <Document
                        file={resumeLink}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Row key={`page_${index + 1}`}>
                                    <Col className="d-flex justify-content-center">
                                        <Page
                                            pageNumber={index + 1}
                                            scale={width > 786 ? 1.7 : 0.6}
                                        />
                                    </Col>
                                </Row>
                            )
                        )}
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: 'relative', marginTop: '20px' }}>
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
            </Container>
        </>
    );
}

export default ResumeNew;
