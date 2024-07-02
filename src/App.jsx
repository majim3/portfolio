import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import './App.css'
import Image from './components/ImageComponent'
import 'animate.css'

function App() {
  const [hide, setHide] = useState(true)


  return (
    <>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <h1 className="animate__animated animate__bounce">testi</h1>
      <Image />
      <Image />
    </>
  )
}

export default App
