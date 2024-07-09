import 'bootstrap/dist/css/bootstrap.min.css'
import './firstscreentext.css'
import { Button, Row } from 'react-bootstrap'
import { Container, Col, Image } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer';
import catImage from '../assets/cat.jpg';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { TypeAnimation } from 'react-type-animation';




function FirstScreenText() {




    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });



    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });








    return (
        <Container className="justify-content-center pt-5">
            <Row className=" text-center  ">
                <Col ref={ref1} className={`element ${inView1 ? 'fadeIn' : 'hidden'} d-flex  flex-column align-items-center `}>
                    <Col md={6} className="mt-5">
                        <h1>Leo Gong</h1>
                    </Col>

                    <Col md={6} className="mt-sm-5 mt-3">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('<span style="size: 3px" >I am <span style="color: cyan;">Student</span> </span>')
                                    .pauseFor(1000)
                                    .deleteChars(7) 
                                    .typeString('<span style="color: cyan;"> future It-enthusiast</span>')
                                    .pauseFor(1000)
                                    .deleteChars(20) 
                                    .typeString('<span style="color: cyan;">problem solver</span>')
                                    .pauseFor(1000)
                                    .deleteAll(50)
                                    .start();
                            }}
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Col>



                    <Col className='mt-sm-5 mt-3' >
                        <Button className="contact-button" size="sm">
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

                    <Col className="mt-3  mt-4" >
                        <h2>About</h2>
                    </Col>

                    <Col className=" ">
                        <TypeAnimation
                            sequence={[
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            ]}
                            speed={100}
                            style={{ display: 'inline-block' }}
                            className="type-animation-large"
                        />
                    </Col>
                </Col>

                <Col xl={5} sm={12} ref={ref2} className={`element ${inView2 ? 'fadeInS' : 'hidden'} mt-5 mt-sm-3  mb-5`}>
                    <Image src={catImage} rounded className="stretched-image" />
                </Col>
            </Row>
        </Container>
    );
};

export default FirstScreenText
