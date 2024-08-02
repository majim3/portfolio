import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ResumeComp.css'
import { Col, Container,Row } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer';

const ResumeComp = () => {
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      })
    
      const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold:0.5,
      })
    
      const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true,
        threshold:0.5,
      })
    
      const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold:0.5,
      })
    




    return (
        <Container className=" mt-5">
            <Row>
                <Col xs={12} ref={ref2} className={`element ${inView2 ? 'fadeIn' : 'hidden'} text-center`}>
                    <h1>Resume</h1>
                    <p>A seasoned Developer with a passion for solutions and robust backend systems.</p>
                </Col>
            </Row>

            <Row ref={ref3}  className={`element ${inView3 ? 'fadeIn2' : 'hidden'} mt-5`}>
                <Col xs={12} className="col-md-6">
                    <div className="resume-section">
                        <div className="circle">
                        </div>
                        <h2>Summary</h2>
                        <div className="resume-item">
                            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin venenatis potenti donec ornare fames lacinia integer massa. Elementum conubia himenaeos justo tempor eget. Senectus laoreet</p>
                            <p><strong>Location:</strong> Helsinki</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} className="col-md-6">
                    <Col className="resume-section">
                        <div className="circle">
                        </div>
                        <h2>Professional Experience</h2>
                        <div className="resume-item">
                            <h5>FREELANCE DATA ENGINEER</h5>
                            <p className="resume-date">2019 - Present</p>
                            <p><strong>Upwork</strong></p>
                            <ul>
                                <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin venenatis potenti donec ornare fames lacinia integer massa.</li>
                                <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin venenatis potenti donec ornare fames lacinia integer massa.</li>
                                <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin venenatis potenti donec ornare fames lacinia integer massa.</li>
                                <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin venenatis potenti donec ornare fames lacinia integer massa.</li>
                            </ul>
                        </div>
                    </Col>
                </Col>
            </Row>

            <Row  ref={ref4}  className={`element ${inView4 ? 'fadeIn3' : 'hidden'} mt-5`}>
                <div className="col-12">
                    <div className="resume-section">
                        <div className="circle">
                        </div>
                        <h2>Education</h2>
                        <div className="resume-item">
                            <h5>BACHELOR'S DEGREE IN COMPUTER SCIENCE</h5>
                            <p className="resume-date">2019 - ?</p>
                            <p>Metropolia</p>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};
export default ResumeComp;