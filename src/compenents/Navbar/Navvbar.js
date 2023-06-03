import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
const Navvbar = () => {
  return (
    <div>
              <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MOVIE-APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navvbar