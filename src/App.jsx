import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.scss'
import {Button} from 'react-bootstrap'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
    </>
  )
}

export default App
