import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import '../../style.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdWorkOutline } from "react-icons/md";
import TTD from '../../assets/img/TheTradeDesk.png';
import Tencent from '../../assets/img/Tencent.png';
import Alibaba from '../../assets/img/Alibaba.png';
import royalcyber from '../../assets/img/royalcyber.png';

function Experiences() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Maya's Portfolio - Experiences</title>
                </Helmet>
            </HelmetProvider>
            <Container fluid className="skills-wrapper">
                <div className="skills-left animate__animated animate__zoomIn">
                    <h3>Experiences</h3>
                    <h4>
                        ───&nbsp;&nbsp;Page <strong>03</strong>
                    </h4>
                </div>
                <VerticalTimeline lineColor="#F5F5F5"> 
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="March 2024 - Present"
                        contentStyle={{ background: '#F5F5F5', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #89CFF0' }}
                        iconStyle={{ background: '#89CFF0', color: '#fff' }}
                        icon={<MdWorkOutline />}
                    >
                        <h3 className="vertical-timeline-element-title">Capstone Project Data Scientist</h3>
                        <a href="https://www.royalcyber.com/" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">Royal Cyber Inc.</h4> </a>
                        <a href="https://www.royalcyber.com/"> <img className="vertical-timeline-element-image" src={royalcyber} width={140} height={140} alt="royalcyber" /> </a>
                        <h4 className="vertical-timeline-element-subtitle">Chicago, United State</h4>
                        <p> &#x2022;Developed a personalized recommendation engine and an advanced chatbot leveraging Large Language Models (OpenAI GPT and LLaMA) within the LangChain framework and Retrieval-Augmented Generation (RAG) technology.<br /><br />
                            &#x2022;Implemented data solutions enabling Open Source P5 self-service frameworks for data consumers, enhancing product suggestion relevancy and user satisfaction in e-commerce platforms by training the preprocessed unstructured data.<br /><br />
                            
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="September 2022 - August 2023"
                        contentStyle={{ background: '#F5F5F5', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #89CFF0' }}
                        iconStyle={{ background: '#89CFF0', color: '#fff' }}
                        icon={<MdWorkOutline />}
                    >
                        <h3 className="vertical-timeline-element-title">Business Analyst Intern</h3>
                        <a href="https://www.thetradedesk.com/us" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">The Trade Desk</h4> </a>
                        <a href="https://www.thetradedesk.com/us"> <img className="vertical-timeline-element-image" src={TTD} width={140} height={140} alt="TheTradeDesk" /> </a>
                        <h4 className="vertical-timeline-element-subtitle">Shanghai, China</h4>
                        <p> &#x2022;Led a team of 3 to design and implement a web-based automation tools using Python(Flask), JavaScript, HTML, and CSS. Managed all aspects through GitLab, including streamlined file uploads, integration with metadata checks, and enhanced data handling. The initaitve helped 150+ internal stakeholders to save +90% of manual precessing time.<br /><br />
                            &#x2022;Deployed an E2E data pipeline and developed and maintained full-cycle analytics dashboards through Tableau to provide meaningful insights and guide strategic decision-making, securing an $88 million+ deal with Samsung in the US. <br /><br />
                            &#x2022;Built ETL process infrastructure using SQL to improve workflow efficiency. Created visualizations such as waterfall charts, KPI cards, and drill-down reports using Power BI, presented to senior leaders and external partner.<br /><br />
                            &#x2022;Created a custom ad-hoc reporting platform using Python and Streamlit, allowing users to generate tailored performance reports for internal stakeholders. Presented analysis and recommendations to senior management.<br /><br />
                        
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="June 2021 - September 2021"
                        contentStyle={{ background: '#F5F5F5', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #89CFF0' }}
                        iconStyle={{ background: '#89CFF0', color: '#fff' }}
                        icon={<MdWorkOutline />}
                    >
                        <h3 className="vertical-timeline-element-title">Data Scientist Intern</h3>
                        <a href="https://www.tencent.com/" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">Tencent</h4> </a>
                        <a href="https://www.tencent.com/"> <img className="vertical-timeline-element-image" src={Tencent} width={140} height={140} alt="Tencent" /> </a>
                        <h4 className="vertical-timeline-element-subtitle">Shanghai, China</h4>
                        <p> &#x2022;Developed and optimized an automated image classification system using TensorFlow and Keras, processing over 50,000 labeled images with data augmentation and advanced CNN architectures like ResNet and VGG, achieving 92% accuracy<br /><br />
                            &#x2022;Built supervised machine learning models (Logistic Regression and Random Forest) on EHR data and Implemented statistical analysis validate the result, extracting insights that led to an 85% reduction in patient wait times and enhanced care quality.<br /><br />

                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="August 2020 - October 2020"
                        contentStyle={{ background: '#F5F5F5', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #89CFF0' }}
                        iconStyle={{ background: '#89CFF0', color: '#fff' }}
                        icon={<MdWorkOutline />}
                    >
                        <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
                        <a href="https://www.alibabagroup.com/en-US/" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">Alibaba Group</h4> </a>
                        <a href="https://www.alibabagroup.com/en-US/"> <img className="vertical-timeline-element-image" src={Alibaba} width={140} height={140} alt="Alibaba" /> </a>
                        <h4 className="vertical-timeline-element-subtitle">Hangzhou, Zhejiang</h4>
                        <p> &#x2022;Built a user churn prediction model using Random Forest and XGBoost through Python's Scikit-Learn, achieving +95% accuracy. Further validated its effectiveness through A/B testing, resulting in a 5PP improvement in user retention during customer reengagement campaigns with promo codes.<br /><br />
                            &#x2022;Utilized PCA, K-means clustering and Apriori algorithms to analyze over 3 million records of customer transaction data, demographic data, and product SKUs. Deployed a customer classification system based on shopping patterns (segmented customer into 5 tiers) and provided product recommendations tailored to individual preferences via a searching dashbaord. <br /><br />
                            &#x2022;Collaborated with cross-functional and marketing teams to launch a series of targeted campaigns through A/B testing, leveraging previously defined power user classification. This initiative led to 10% increase in repeated purchases (stat sig).<br /><br />
                            
                        </p>
                    </VerticalTimelineElement> 
                    
                    <br /> <br /> <br /> <br /> <br /> <br /> <br />
                </VerticalTimeline>
            </Container>
        </>
    );
}
export default Experiences;
