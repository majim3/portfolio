import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Row } from 'react-bootstrap'
import './App.css'
import 'animate.css'
import Image from './components/ImageComponent'
import Video from './components/VideoComponent'
import testimg from './assets/testpic.jpg'
import video1 from './assets/video.mp4'
import video2 from './assets/video2.mp4'
import Navbar from './components/Navbar.jsx'
import FirstScreenText from './components/firstscreentext.jsx'
import Contact from './components/contactscreen.jsx'
import { Container } from 'react-bootstrap'

function App() {


  const img = 'https://media.istockphoto.com/photos/test-picture-id996396804?k=20&m=996396804&s=170667a&w=0&h=huj1Gbf6hCATkhOX8EIXekv9eBWZS8DT-RfSh2sIm-0='

  return (
    <>
    
        <Navbar/>
        <Col className='mt-5'> 
          <Col name="HomeSection" className="vh-100-xl pt-sm-5 pb-sm-5 mt-5 justify-content-center align-items-center" >
            <FirstScreenText />
          </Col>
          <Col className='ImageSection pt-5 vh-100-xl ' name="KuvaSection">
            <Image src={testimg} title={"Full stack App"} text={"Reddit clone, MERN stack, hosted in AWS"} />
          </Col>
          <Col name="VideoSection" className="pt-5 ">
            <Video src={video2} name="VideoSection" />
          </Col>
          <Col className='EMTSection pt-5 vh-100-xl'>
            <Image src={img} title={"Python Scripting project"} text={"Scrapy library is used"} />
          </Col>
          <Col name="ContactSection" className="pt-5 vh-100-xl">
              <Contact />
          </Col>
        </Col>
      
    </>
  )
}

export default App
