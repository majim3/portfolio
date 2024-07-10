import { Col, Container } from 'react-bootstrap'
import '../App.css'
import React from 'react'

function VideoComponent({ src }) {

  return (

    <Container>
      <Col md={12} >
        <video className='video-container' autoPlay muted loop>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </Col>
    </Container>

  )
}

export default VideoComponent
