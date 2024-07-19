import React from 'react'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'
import BoxShadowComp from './BoxShadowComp.jsx'
import catImage from '../assets/cat.jpg';
import { useInView } from 'react-intersection-observer'
import './ImageComponent.css'

function ImageComponent({ src, title, text }) {



  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <Container>
      {/* Desktop Layout */}
      <section ref={ref} className={`element ${inView ? 'animate__animated animate__fadeIn' : 'hidden'} `}>
        <Row>
          <Col sm={6} lg={{ order: 'last' }} md={{ order: 'first' }}>
            <div className='text-container half'>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} className='mb-4'>
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
      </section>
    </Container>
  )
}

export default ImageComponent

