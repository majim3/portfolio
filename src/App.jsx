import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
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
      <Navbar />
      <div name="HomeSection" className="d-flex vh-100 align-items-center justify-content-center" >
        <FirstScreenText />
      </div>
      <div className='ImageSection' name="KuvaSection">
        <Image src={testimg} title={"Full stack App"} text={"Reddit clone, MERN stack, hosted in AWS"} />
      </div>
      <div name="VideoSection">
        <Video src={video2} name="VideoSection" />
      </div>
      <div className='EMTSection'>
        <Image src={img} title={"Python Scripting project"} text={"Scrapy library is used"} />
      </div>
      <div name="ContactSection" className="d-flex vh-100 align-items-center justify-content-center">
        <Container>
          <Contact />
        </Container>
      </div>
    </>
  )
}

export default App
