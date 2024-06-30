import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import './index.css'
import FirstScreenText from './firstscreentext.jsx'
import { Container, Row,Col,Image} from 'react-bootstrap'
import catImage from './assets/cat.jpg';
import Contact from './contactscreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar/>
  
  <div className="d-flex vh-100 align-items-center justify-content-center" >
    <Container>
      <Row>
        <Col>
          <FirstScreenText />
        </Col>
        <Col md={5}>
          <Image src={catImage} fluid />
        </Col>
      </Row>
    </Container>
  </div>
  
  <div id="contact-section" className="d-flex vh-100 align-items-center justify-content-center">
    <Container>
      <Contact />
    </Container>
  </div>
</React.StrictMode>
)