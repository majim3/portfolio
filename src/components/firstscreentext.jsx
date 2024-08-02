import 'bootstrap/dist/css/bootstrap.min.css'
import './firstscreentext.css'
import { Button, Row } from 'react-bootstrap'
import { Container, Col, Image } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer';
import catImage from '../assets/faceImage.jpg';
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
                                    .typeString('<span>I am a <strong>Developer</strong> </span>')
                                    .pauseFor(1000)
                                    .deleteChars(10)
                                    .typeString('<span><strong>Problem solver</strong></span>')
                                    .pauseFor(1000)
                                    .deleteChars(14)
                                    .typeString('<span> <strong>Student</strong></span>')
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

                    <Col className="mt-3  mt-4 d-none d-md-block" >
                        <h2>About</h2>
                    </Col>

                    <Col className=" d-none d-md-block ">
                        <p className='InfoText'> As a passionate and motivated programmer with a strong desire to
                            learn, I am seeking a position with a dynamic programming company
                            where I can apply and expand my current programming knowledge and
                            skills. I am excited to work alongside experienced developers to learn
                            and grow in a fast-paced and collaborative environment. My strong
                            work ethic, attention to detail, and eagerness to learn will make me a
                            valuable member of your programming team.</p>
                    </Col>
                </Col>

                <Col xl={6} sm={12} xs={12} ref={ref2} className={`element ${inView2 ? 'fadeInS' : 'hidden'} custom p5 mt-5  mb-5`}>
                    <Container className=' container  d-flex flex-column justify-content-center align-items-center text-center'>
                        <div className="image-containerFirst">
                            <Image src={catImage} rounded className="stretched-image" />

                            <div className="Content d-flex flex-column justify-content-center align-items-center text-center">
                                <h1>About</h1>
                                <p> As a passionate and motivated programmer with a strong desire to
                                    learn, I am seeking a position with a dynamic programming company
                                    where I can apply and expand my current programming knowledge and
                                    skills. I am excited to work alongside experienced developers to learn
                                    and grow in a fast-paced and collaborative environment. My strong
                                    work ethic, attention to detail, and eagerness to learn will make me a
                                    valuable member of your programming team.</p>
                            </div>
                        </div>
                    </Container>

                </Col>
            </Row>
        </Container>
    );
};

export default FirstScreenText
