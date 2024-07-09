import React from 'react'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './imageComponent.css'
import { Row,Col, Container } from 'react-bootstrap'


function ImageComponent({ src, title, text }) {


  return (
    <Container>
      <Row>

      <Col md={6}>
            <div className='text-container half'>
              <div >
                <h1 >{title}</h1>
                <p>{text}</p>
              </div>
            </div>
          </Col>
        <Col md={6} >
            <div className='image-container half'>
              <img src={src} alt="image description" className='image' />
            </div>
          </Col>

         
      </Row>
    </Container>

  )
}

export default ImageComponent

