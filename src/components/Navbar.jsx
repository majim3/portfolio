import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, NavbarToggle } from 'react-bootstrap'
import { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import './Navbar.css'
import { TypeAnimation } from 'react-type-animation';


function Navibar() {


  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container className=' '>
        <Navbar.Brand href="#">
        <TypeAnimation
            sequence={['Leo Gong']}
          />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link className='p-2'>
              <Link
                activeClass='active'
                className="HomeSection link-custom"
                to='HomeSection'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className='p-2'>
              <Link
                activeClass='active'
                className="ResumeSection link-custom"
                to='ResumeSection'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1}
              >
                Resume
              </Link>
            </Nav.Link>
            <Nav.Link className='p-2'>
              <Link
                activeClass='active'
                className="KuvaSection link-custom"
                to='KuvaSection'
                spy={true}
                duration={1}
                offset={-70}
                smooth={true}>
                Project
              </Link>
            </Nav.Link>
            <Nav.Link className='p-2'>
              <Link
                activeClass='active'
                className="ContactSection link-custom"
                to='ContactSection'
                spy={true}
                duration={1}
                offset={-70}
                smooth={true}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navibar
