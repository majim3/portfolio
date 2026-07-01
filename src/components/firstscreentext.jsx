import 'bootstrap/dist/css/bootstrap.min.css'
import './firstscreentext.css'
import { Button, Row } from 'react-bootstrap'
import { Container, Col, Image } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer';
import catImage from '../assets/faceImage.jpg';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

function FirstScreenText() {

    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const [bioVisible, setBioVisible] = useState(false);

    return (
        <Container className="justify-content-center">
            <Row className="text-center gx-5 gy-4">
                <Col lg={6} ref={ref1} className={`element ${inView1 ? 'fadeIn' : 'hidden'} d-flex flex-column align-items-center gap-5`}>
                    <Col className="movingText">
                        <h3>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('<span>I am a <strong>Developer</strong> </span>')
                                        .pauseFor(400)
                                        .deleteChars(10)
                                        .typeString('<span><strong>Problem solver</strong></span>')
                                        .pauseFor(400)
                                        .deleteChars(14)
                                        .typeString('<span> <strong>AWS Certified</strong></span>')
                                        .pauseFor(400)
                                        .deleteAll(50)
                                        .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></h3>
                    </Col>

                    <Col className='mt-0'>
                        <Button className="contact-button" size="md">
                            <Link
                                activeClass="active"
                                to="ContactSection"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Contact me
                            </Link>
                        </Button>
                    </Col>

                    <Col className="d-none d-lg-block bio-desktop text-start">
                        <p>Recently graduated ICT Engineer (Insinööri AMK) from Metropolia UAS,
                            specializing in Mobile Solutions, and AWS Certified. During an
                            internship at Good2Know I independently built and shipped a
                            production LLM application combining web scraping and computer
                            vision. Comfortable across the stack with JavaScript/TypeScript,
                            React, Node.js, Python, PostgreSQL, and Swift/SwiftUI.</p>
                    </Col>
                </Col>

                <Col lg={6} ref={ref2} className={`element ${inView2 ? 'fadeInS' : 'hidden'} custom mb-3`}>
                    <Container className='container d-flex flex-column justify-content-center align-items-center text-center'>
                        <div className="image-containerFirst" onClick={() => setBioVisible(v => !v)}>
                            <Image src={catImage} rounded className="stretched-image" />
                            <div className={`Content d-flex flex-column justify-content-center align-items-center text-center ${bioVisible ? 'bio-visible' : ''}`}>
                                <h1>About</h1>
                                <p>AWS Certified ICT Engineer who shipped a production LLM app at Good2Know.</p>
                            </div>
                        </div>
                        <p className="tap-hint d-block d-lg-none mt-2">👆 Tap image to learn more</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default FirstScreenText
