import React from 'react'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './imageComponent.css'
import { Row, Col, Container } from 'react-bootstrap'
import BoxShadowComp from './BoxShadowComp.jsx'
import catImage from '../assets/cat.jpg';


function ImageComponent({ src, title, text }) {


  return (
    <Container>
      {/* Desktop Layout */}
      <Row>
        <Col sm={6} lg={{ order: 'last' }} md={{ order: 'first' }}>
          <div className='text-container half'>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={6}  className='mb-4'>
          <Row>
            <Col sm={6} xs={6} className='containerImages mt-3'>
              <BoxShadowComp src={src} />
            </Col>
            <Col sm={6} xs={6} className='containerImages mt-3'>
              <BoxShadowComp src={src} />
            </Col>
            <Col sm={6} xs={6} className='containerImages mt-3'>
              <BoxShadowComp src={src} />
            </Col>
            <Col sm={6} xs={6} className='containerImages mt-3'>
              <BoxShadowComp src={src} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ImageComponent

