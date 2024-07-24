import React from 'react'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'
import BoxShadowComp from './BoxShadowComp.jsx'
import catImage from '../assets/cat.jpg';
import { useInView } from 'react-intersection-observer'
import './imageComponent.css'

function ImageComponent({ src, title, text }) {



  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const { ref2, inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const img = 'https://media.istockphoto.com/photos/test-picture-id996396804?k=20&m=996396804&s=170667a&w=0&h=huj1Gbf6hCATkhOX8EIXekv9eBWZS8DT-RfSh2sIm-0='
  return (
    <Container>
      {/* Desktop Layout */}
        <Row ref={ref} className={`element ${inView ? 'animate__animated animate__fadeIn' : 'hidden'} `}>
          <Col sm={6} lg={{ order: 'last' }} md={{ order: 'first' }}>
            <div className='text-container half'>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} className='mb-4'>
            <Row ref={ref2} className={`element ${inView2 ? 'animate__animated animate__fadeIn' : 'hidden'}`} >
              <Col sm={6} xs={6}  className='containerImages mt-3'>
                <BoxShadowComp src={img} />
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

