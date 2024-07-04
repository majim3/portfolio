import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import './App.css'
import 'animate.css'
import Image from './components/ImageComponent'
import Video from './components/VideoComponent'
import testimg from './assets/testpic.jpg'
import video1 from './assets/video.mp4'
import video2 from './assets/video2.mp4'

function App() {
  const [hide, setHide] = useState(true)

  const img = 'https://media.istockphoto.com/photos/test-picture-id996396804?k=20&m=996396804&s=170667a&w=0&h=huj1Gbf6hCATkhOX8EIXekv9eBWZS8DT-RfSh2sIm-0='

  return (
    <>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <h1 className="animate__animated animate__bounce">testi</h1>
      <Image src={testimg} title={"Full stack App"} text={"Reddit clone, MERN stack, hosted in AWS"}/>
      <Video src={video1} />
      <Video src={video2} />
      <Image src={img} title={"Python Scripting project"} text={"Scrapy library is used"} />
    </>
  )
}

export default App
