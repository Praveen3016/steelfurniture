import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header>
    <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 z " style={{zIndex : "9999"}}>
      <Container>
        <Navbar.Brand href="#home"><img  width={60} height={45} src="public\image\logo.png"  alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  d-flex align-items-center  justify-content-between w-100 ">
            <div className='d-flex gap-4 m-auto '>
              <Nav.Link ><Link to="/" className='listt text-black' >Home</Link></Nav.Link>
              <Nav.Link ><Link to="/product" className='listt text-black' >Product</Link></Nav.Link>
              <Nav.Link ><Link to="/about" className='listt text-black' >About</Link></Nav.Link>
              <Nav.Link ><Link to="/catalouge" className='listt text-black' >Catalouge</Link></Nav.Link>
              <Nav.Link ><Link to="/privacypolicy" className='listt text-black' >Privacy Policy</Link></Nav.Link>
            </div>
            <div className='contact'>
              <button><Link to='/contect' className="text-black">Contact us</Link></button>
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}
export default Header