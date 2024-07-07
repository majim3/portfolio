import 'bootstrap/dist/css/bootstrap.min.css'
import './firstscreentext.css'
import { Button, Row } from 'react-bootstrap'
import { Container, Col, Image } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer';
import catImage from '../assets/cat.jpg';
import { Link } from 'react-scroll';


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
        <Container>
            <Row>
                <Col >
                    <div ref={ref1} className={`element ${inView1 ? 'fadeIn' : 'hidden'}`}>
                        <Row className={`container text-center mt-1`}>
                            <h1 >Leo Gong</h1>
                        </Row>
                        <Row className="container text-center mt-1">
                            <p>Student, It-enthusiasist and future thinker</p>
                        </Row>

                        <Row className='contact-button' >
                            <Button className='contact-button' size="sm"  >
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
                        </Row>
                    </div>
                </Col>
                <Col md={5} ref={ref2} className={`element ${inView2 ? 'fadeInS' : 'hidden'}`}>
                    <Image src={catImage} fluid />
                </Col>
            </Row>
        </Container >
    )
}

export default FirstScreenText
