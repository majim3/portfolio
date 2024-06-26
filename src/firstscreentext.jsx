import 'bootstrap/dist/css/bootstrap.min.css'
import './firstscreentext.css'
import {Button, Row} from 'react-bootstrap'
import { useState } from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Container,Col} from 'react-bootstrap'


function FirstScreenText() {
    
  
    return (
      <Navbar>
        <Container >
            <Col >
                <Row className="container text-center mt-1">
                    <h1 >Leo Gong</h1>
                </Row>
                <Row className="container text-center mt-1">
                    <p>Student, It-enthusiasist and future thinker</p>
                </Row>
                <Row className='justify-content-center'>
                    <Button className='contact-button' size="sm">Contact me</Button>
                </Row>                   
            </Col>
        </Container>
      </Navbar>
    )
  }
  
  export default  FirstScreenText
  