import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Stack, Container, Col, Card, CardBody } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './contactscreen.css'
import { useInView } from 'react-intersection-observer';

function ContactScreen() {
    const { register, trigger, formState: { errors } } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    });


    return (
        <Container ref={ref} className={`element ${inView ? 'fadeIn' : 'hidden'} d-flex flex-column align-items-center`} >
            <Stack direction='horizontal' gap={4} className='justify-content-center'>

                <Container className="mt-4 d-flex justify-content-center custom-container">
                    <Card className="p-4">
                        <Card.Body className="text-center">
                            <Row className="justify-content-center my-3">

                                <Col xs="auto">
                                    <a
                                        href="#"
                                        className="icon-link"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" />
                                    </a>
                                    <a
                                        href="#"
                                        className="icon-link"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faYoutube} size="2x" className="mx-2" />
                                    </a>
                                    <a
                                        href="#"
                                        className="icon-link"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2" />
                                    </a>

                                    <a
                                        href="#"
                                        className="icon-link"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2" />
                                    </a>


                                </Col>
                            </Row>
                            <Card.Text className="my-2">puh</Card.Text>
                            <Card.Text className="my-2">Sposti</Card.Text>
                            <Button variant="dark" className="mt-3">CV</Button>

                        </Card.Body>

                    </Card>
                </Container>

                <Form
                    onSubmit={onSubmit}
                    action='https://formsubmit.co/f2729bf9f8a855538815e433d4cf5608'
                    method="POST"
                >
                    <h3>Contact me</h3>

                    <Form.Group className="mb-2" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name"
                            {...register("name", {
                                required: true,
                                maxLength: 100,

                            })}
                        />

                    </Form.Group>

                    {errors.name && (
                        <p className='text-primary'>
                            {errors.name.type === 'required' && 'This field is required'}
                            {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
                        </p>
                    )}

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="text" placeholder="Email"
                            {...register("email", {
                                required: true,
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,

                            })}
                        />

                    </Form.Group>
                    {errors.email && (
                        <p className='text-primary'>
                            {errors.email.type === 'required' && 'This field is required'}
                            {errors.email.type === 'pattern' && 'Invalid email address.'}
                        </p>
                    )}

                    <Form.Group className="mb-2" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Message" rows="4" cols="50"

                            {...register("Message", {
                                required: true,
                                maxLength: 1,
                            })} />


                    </Form.Group>
                    {errors.Message && (
                        <p className='text-primary'>
                            {errors.Message.type === 'required' && 'This field is required'}
                            {errors.Message.type === 'maxLength' && 'too long'}
                        </p>
                    )}

                    <Button type="submit">Submit</Button>
                </Form>

            </Stack>
        </Container>
    );
}

export default ContactScreen;