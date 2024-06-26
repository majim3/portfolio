import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import './index.css'
import FirstScreenText from './firstscreentext.jsx'
import { Container, Row,Col,Image} from 'react-bootstrap'
import catImage from './assets/cat.jpg';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar fixed="top"/>
    <Container className="position-absolute top-50 start-50 translate-middle">
      <Row>
        <Col><FirstScreenText/></Col>
        <Col md={5}>
          <Image src={catImage}  fluid/>
        </Col>
      </Row>
    </Container> 
  </React.StrictMode>
)