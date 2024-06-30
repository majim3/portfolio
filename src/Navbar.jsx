import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import { useState } from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'


function Navibar() {
    
  
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
        <Nav className="mx-auto">
            <Nav.Link className='p-2'>Home</Nav.Link>
            <Nav.Link className='p-2'>kokemus</Nav.Link>
            <Nav.Link className='p-2'>contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
  
  export default Navibar
  