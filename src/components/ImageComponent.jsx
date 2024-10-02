import React from 'react'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'
import BoxShadowComp from './BoxShadowComp.jsx'
import catImage from '../assets/cat.jpg';
import { useInView } from 'react-intersection-observer'
import './ImageComponent.css'

function ImageComponent({
  src,
  src2,
  src3,
  src4,
  title,
  text,
    ShadowBoxTitle1, ShadowBoxText1
  , ShadowBoxTitle2, ShadowBoxText2
  , ShadowBoxTitle3, ShadowBoxText3
  ,Contributors
}) {



  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <Container>
      <Row>
        <Col md={6} sm={12} lg={{ order: 'last' }}>
          <Row ref={ref2} className={`element ${inView2 ? 'fadeIn2' : 'hidden'} text-container half`}>  
              <h2>{title}</h2>
              <p>{text}</p>
              <p>{Contributors}</p>
          </Row>
        </Col>
        <Col md={6} lg={6} className='mb-4'>
          <Row>
            <Col sm={12} xs={12} ref={ref} className={`element ${inView ? 'fadeIn' : 'hidden'} containerImages mt-3`}>
              <BoxShadowComp src={src} ShadowBoxTitle={ShadowBoxTitle1} ShadowBoxText={ShadowBoxText1} />
            </Col>

            <Col sm={6} xs={6} ref={ref3} className={`element ${inView3 ? 'fadeIn3' : 'hidden'} containerImages mt-3`}>
              <BoxShadowComp src={src3} ShadowBoxTitle={ShadowBoxTitle2} ShadowBoxText={ShadowBoxText2} />
            </Col>
            <Col sm={6} xs={6} ref={ref4} className={`element ${inView4 ? 'fadeIn4' : 'hidden'} containerImages mt-3`}>
              <BoxShadowComp src={src4} ShadowBoxTitle={ShadowBoxTitle3} ShadowBoxText={ShadowBoxText3} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ImageComponent

