
import { Col, Container,Row } from 'react-bootstrap'
import '../App.css'
import React from 'react'
import '../App.css'
import 'animate.css'
import { useInView } from 'react-intersection-observer'
import './VideoComponent.css'

function VideoComponent({ src,title,text }) {


  const { ref, inView } = useInView ({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (


    <Container className=''>
      <Row md={12} >
        <Col sm={6} className='d-none d-lg-block'>
              <div className='text-container half '>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </div>
            </Col>
        <Col sm={6} className='m-0'>
        <section ref={ref} className={`element ${inView ? 'animate__animated animate__fadeIn' : 'hidden'} `}>
          <video className='video-container d-none d-md-block' autoPlay muted loop>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </section>
        </Col>
      </Row>
    </Container>

  )
}

export default VideoComponent
