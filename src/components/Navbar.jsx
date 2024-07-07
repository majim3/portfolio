import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import './Navbar.css'


function Navibar() {


  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand href="#">Leo Gong</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className='p-2'>
            <Link
              activeClass='active'
              className="HomeSection link-custom"
              to='HomeSection'
              spy={true}
              smooth={true}
              duration={1}
            >

              Home
            </Link>
          </Nav.Link>
          <Nav.Link className='p-2'>
            <Link
              activeClass='active'
              className="KuvaSection link-custom"
              to='KuvaSection'
              spy={true}
              duration={1}
              smooth={true}>
              kuva
            </Link>
          </Nav.Link>
          <Nav.Link className='p-2'>
            <Link
              activeClass="active"
              className="VideoSection link-custom"
              to="VideoSection"
              spy={true}
              smooth={true}
              duration={1}
            >
              video
            </Link>
          </Nav.Link>
          <Nav.Link className='p-2'>
            <Link
              activeClass='active'
              className="ContactSection link-custom"
              to='ContactSection'
              spy={true}
              duration={1}
              smooth={true}
            >
              contact
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navibar
