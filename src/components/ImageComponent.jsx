import React from 'react'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'
import BoxShadowComp from './BoxShadowComp.jsx'
import catImage from '../assets/cat.jpg';
import { useInView } from 'react-intersection-observer'
import './ImageComponent.css'

function ImageComponent({ src, src2, src3, src4, title, text }) {



  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold:0.5,
  })

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold:0.5,
  })

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold:0.5,
  })


  const img = 'https://media.istockphoto.com/photos/test-picture-id996396804?k=20&m=996396804&s=170667a&w=0&h=huj1Gbf6hCATkhOX8EIXekv9eBWZS8DT-RfSh2sIm-0='
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
          <Col md={6} lg={6} className='mb-4'>
            <Row>
              <Col sm={6} xs={6} ref={ref} className={`element ${inView ? 'fadeIn' : 'hidden'} containerImages mt-3`}>
                <BoxShadowComp src={src} />
              </Col>

              <Col sm={6} xs={6} ref={ref2} className={`element ${inView2 ? 'fadeIn2' : 'hidden'} containerImages mt-3`}>
                <BoxShadowComp src={src2} />
              </Col>
              <Col sm={6} xs={6} ref={ref3} className={`element ${inView3 ? 'fadeIn3' : 'hidden'} containerImages mt-3`}>
                <BoxShadowComp src={src3} />
              </Col>
              <Col sm={6} xs={6} ref={ref4} className={`element ${inView4 ? 'fadeIn4' : 'hidden'} containerImages mt-3`}>
                <BoxShadowComp src={src4} />
              </Col>
            </Row>
          </Col>
        </Row>
    </Container>
  )
}

export default ImageComponent

