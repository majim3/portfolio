
import { Col, Container } from 'react-bootstrap'
import '../App.css'
import React from 'react'
import '../App.css'
import 'animate.css'
import { useInView } from 'react-intersection-observer'
import './VideoComponent.css'

function VideoComponent({ src }) {


  const { ref, inView } = useInView ({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (


    <Container>
      <Col md={12} >
      <section ref={ref} className={`element ${inView ? 'animate__animated animate__fadeIn' : 'hidden'} `}>
        <video className='video-container' autoPlay muted loop>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </section>
      </Col>
    </Container>

  )
}

export default VideoComponent
