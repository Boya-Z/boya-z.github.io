import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import '../../style.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdWorkOutline } from "react-icons/md";
import TTD from '../../assets/img/TheTradeDesk.png';
import Tencent from '../../assets/img/Tencent.png';
import Alibaba from '../../assets/img/Alibaba.png';

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
                        date="September 2022 - August 2023"
                        contentStyle={{ background: '#F5F5F5', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #89CFF0' }}
                        iconStyle={{ background: '#89CFF0', color: '#fff' }}
                        icon={<MdWorkOutline />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
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
                        <p> &#x2022;Led a team of 3 to design and implement a web-based automation tools using Python(Flask), JavaScript, HTML, and CSS. Managed all aspects through GitLab, including streamlined file uploads, integration with metadata checks, and enhanced data handling. The initaitve helped 150+ internal stakeholders to save +90% of manual precessing time.<br /><br />
                            &#x2022;Deployed an E2E data pipeline and developed and maintained full-cycle analytics dashboards through Tableau to provide meaningful insights and guide strategic decision-making, securing an $88 million+ deal with Samsung in the US. <br /><br />
                            &#x2022;Built ETL process infrastructure using SQL to improve workflow efficiency. Created visualizations such as waterfall charts, KPI cards, and drill-down reports using Power BI, presented to senior leaders and external partner.<br /><br />
                            &#x2022;Created a custom ad-hoc reporting platform using Python and Streamlit, allowing users to generate tailored performance reports for internal stakeholders. Presented analysis and recommendations to senior management.<br /><br />
                        
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
                        <h3 className="vertical-timeline-element-title">Data Analysis Intern</h3>
                        <a href="https://www.alibabagroup.com/en-US/" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">Alibaba Group</h4> </a>
                        <a href="https://www.alibabagroup.com/en-US/"> <img className="vertical-timeline-element-image" src={Alibaba} width={140} height={140} alt="Alibaba" /> </a>
                        <h4 className="vertical-timeline-element-subtitle">Hangzhou, Zhejiang</h4>
                        <p>
                            xxx
                        </p>
                    </VerticalTimelineElement> 
                    
                    <br /> <br /> <br /> <br /> <br /> <br /> <br />
                </VerticalTimeline>
            </Container>
        </>
    );
}
export default Experiences;
