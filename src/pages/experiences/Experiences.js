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
                        <p>
                            xxx
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
                        <p>
                            xxx
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
