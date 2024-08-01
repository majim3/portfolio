import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Stack, Container, Col, Card, CardBody } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { useState, useEffect } from "react";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './contactscreen.css'
import { useInView } from 'react-intersection-observer';
import Swal from 'sweetalert2'

function ContactScreen() {
    
    const {register, reset, handleSubmit, formState: { errors }} = useForm();

    const [isSuccess, setIsSuccess] = useState(false);
    const [result, setResult] = useState(null);
  
    const accessKey = "YOUR API KEY FROM HERE https://web3forms.com";
  
    const { submit: onSubmit } = useWeb3Forms({
      access_key: accessKey,
      settings: {
        from_name: "Acme Inc",
        subject: "New Contact Message from your Website",
      },
      onSuccess: (msg, data) => {
        Swal.fire({
            title: "success",
            text: "Thanks for the email",
            icon: "success"
          });
        reset();
      },
      onError: (msg, data) => {
        Swal.fire({
            title: "Error",
            text: "Something went wrong",
            icon: "error"
          });
      },
    });

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });


    return (
        <Container ref={ref} className={`element ${inView ? 'fadeIn' : 'hidden'} d-flex justify-content-center align-items-center`} >
            <Row   className=' d-flex justify-content-center align-items-center'>
                <Col sm={6} xs={12} className="mt-4 d-flex justify-content-center  custom-container p-4">
                    <Card >
                        <Card.Body className="text-center">
                            <Row className='mt-3'>

                                <Col md={3}>
                                    <a
                                        href="https://www.linkedin.com/in/leo-gong-585538155/"
                                        className="icon-link"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" />
                                    </a>
                                </Col>
                                <Col md={3}>
                                    <a
                                        href="https://www.facebook.com/leo.go.10004"
                                        className="icon-link"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2" />
                                    </a>
                                </Col>
                                <Col md={3}>
                                    <a
                                        href="https://www.instagram.com/Leoryoo/"
                                        className="icon-link"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2" />
                                    </a>
                                </Col>
                                <Col md={3}>
                                    <a
                                        href="https://github.com/majim3"
                                        className="icon-link"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2" />
                                    </a>
                                </Col>



                            </Row>
                            <Card.Text className="mt-4"><a href="tel:+358 408278956" variant="dark" className='call-button' >Puh: +358 408278956</a></Card.Text>
                            <Card.Text className="mt-3"><a href={`mailto:LeoGong3@gmail.com`} className='call-button'>LeoGong3@gmail.com</a></Card.Text>
                            <Button variant="dark" className="mt-3" >CV</Button>

                        </Card.Body>

                    </Card >
                </Col >

                <Col sm={6} xs={12} className='pt-5 custom-contact' >
                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h3 className=''>Contact me</h3>

                        <Form.Group className='mt-2 ' controlId="formBasicName">
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

                        <Form.Group className='mt-3' controlId="formBasicEmail">
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

                        <Form.Group className='mt-3' controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Message" rows="4" cols="50"

                                {...register("Message", {
                                    required: true,
                                    maxLength: 5000,
                                })} />


                        </Form.Group>
                        {errors.Message && (
                            <p className='text-primary'>
                                {errors.Message.type === 'required' && 'This field is required'}
                                {errors.Message.type === 'maxLength' && 'too long'}
                            </p>
                        )}

                        <Button className='mt-5' type="submit">Submit</Button>
                    </Form>
                </Col>

            </Row >
        </Container >
    );
}

export default ContactScreen;