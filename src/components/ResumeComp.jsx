import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ResumeComp.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer';

const ResumeComp = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })





    return (
        <Container className=" mt-5">
            <Row>
                <Col xs={12} ref={ref2} className={`element ${inView2 ? 'fadeIn' : 'hidden'} text-center`}>
                    <h1>Resume</h1>
                    <p>A seasoned Developer with a passion for solutions and robust backend systems.</p>
                </Col>
            </Row>

            <Row ref={ref3} className={`element ${inView3 ? 'fadeIn2' : 'hidden'} mt-5`}>
                <Col xs={12} className="col-md-6">
                    <div className="resume-section">
                        <div className="circle">
                        </div>
                        <h2>Skills</h2>
                        <div className="resume-item">
                            <ul>
                                <li className='mt-3'> Back End Coding</li>
                                <li className='mt-3'> Front End Coding</li>
                                <li className='mt-3'>Strong Communication</li>
                                <li className='mt-3'> MySql good understanding of SQL
                                    syntax, write queries</li>
                                <li className='mt-3'>Team Collaboration</li>
                                <li className='mt-3'>Mobile Development (Swift , Kotlin
                                    and React native)</li>
                                <li className='mt-3'> moderate level of knowledge about
                                    cloud computing (azure cloud and AWS)</li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xs={12} className="col-md-6">
                    <Col className="resume-section">
                        <div className="circle">
                        </div>
                        <h2>Professional Experience</h2>
                        <div className="resume-item">
                            <h5>SOFTWARE DEVELOPER TRAINEE</h5>
                            <p>Extreme Consulting</p>
                            <p className="resume-date">Apr 2019 - May 2019</p>
                            <p><strong>Upwork</strong></p>
                            <ul>
                                <li className='mt-3'>Collaborated with coworkers to identify and troubleshoot issues,
                                    utilizing problem-solving skills to find effective solutions.</li>
                                <li className='mt-3'> Engaged in on-the-job learning, applying concepts and skills from
                                    school coursework to real-world problems and challenges.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h5>SUMMER SIILI, TRAINEE PROGRAM</h5>
                            <p>Siili </p>
                            <p className="resume-date">June 2016 - july 2016 </p>
                            <p><strong>Upwork</strong></p>
                            <ul>
                                <li className='mt-3'>Worked alongside experienced programmers to gain a better 
                                understanding of the software development life cycle. </li>
                                <li className='mt-3'>Collaborated with team members to identify and troubleshoot 
                                issues, utilizing problem-solving skills to find effective solutions.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h5>JOB LEARNING </h5>
                            <p>Gofore Oyj</p>
                            <p className="resume-date">Oct 2018 - Dec 2018 </p>
                            <p><strong>Upwork</strong></p>
                            <ul>
                                <li className='mt-3'>Utilizing cloud services</li>
                                <li className='mt-3'>small programming problems</li>
                                <li className='mt-3'>Completed on-the-job training sessions and demonstrated learned
                                skills to supervisors.</li>
                            </ul>
                        </div>
                    </Col>
                </Col>
            </Row>

            <Row ref={ref4} className={`element ${inView4 ? 'fadeIn3' : 'hidden'} mt-5`}>
                <div className="col-12">
                    <div className="resume-section">
                        <div className="circle">
                        </div>
                        <h2>Education</h2>
                        <div className="resume-item">
                            <h5>Bachelor of Engineering in Information Technology</h5>
                            <p className="resume-date">2021 - Still Enrolled</p>
                            <p>Metropolia university of applied sciences</p>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};
export default ResumeComp;