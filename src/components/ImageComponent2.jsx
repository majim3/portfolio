import React from 'react'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'
import BoxShadowComp from './BoxShadowComp.jsx'
import catImage from '../assets/cat.jpg';
import { useInView } from 'react-intersection-observer'
import './ImageComponent2.css'

function ImageComponent2({
  src,
  src2,
  src3,
  src4,
  title,
  text,
   ShadowBoxTitle2, ShadowBoxText2
  , ShadowBoxTitle3, ShadowBoxText3
  , Contributors
}) {





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
        <Col   lg={{ order: 'first' }} >
          <div className='text-container half'>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
              <p className='mt-5'>{Contributors}</p>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} className='mb-4'>
          <Row >
            <Col xs={6}  md={4} ref={ref3} className={`element ${inView3 ? 'fadeIn3' : 'hidden'} containerImages mt-3`}>
              <BoxShadowComp src={src3} ShadowBoxTitle={ShadowBoxTitle2} ShadowBoxText={ShadowBoxText2} />
            </Col>
            <Col xs={6} md={{ span: 4, offset: 4 }} ref={ref4} className={`element ${inView4 ? 'fadeIn4' : 'hidden'} containerImages mt-3`}>
              <BoxShadowComp src={src4} ShadowBoxTitle={ShadowBoxTitle3} ShadowBoxText={ShadowBoxText3} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ImageComponent2

