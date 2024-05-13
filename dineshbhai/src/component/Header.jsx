import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
function Header() {
  const handleNavLinkClick = () => {
    // Navbar ko band karne ke liye
    const navbarToggle = document.querySelector('.navbar-toggler');
    if (navbarToggle && !navbarToggle.classList.contains('collapsed')) {
      navbarToggle.click();
    }
    window.scrollTo(0, 0);
  };
  return (
    <header>
    <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 z " style={{zIndex : "9999"}}>
      <Container>
        <Navbar.Brand href="#home"><img  width={30} height={30} src="public\image\logo.png"  alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  d-flex align-items-center  justify-content-between w-100 ">
            <div className='d-flex gap-4 m-auto '>
              <Nav.Link ><Link to="/" className='listt text-black'onClick={handleNavLinkClick} >Home</Link></Nav.Link>
              <Nav.Link ><Link to="/product" className='listt text-black' onClick={handleNavLinkClick} >Product</Link></Nav.Link>
              <Nav.Link ><Link to="/about" className='listt text-black' onClick={handleNavLinkClick} >About</Link></Nav.Link>
              <Nav.Link ><Link to="/privacypolicy" className='listt text-black' onClick={handleNavLinkClick} >Privacy Policy</Link></Nav.Link>
            </div>
            <div className='contact'>
              <button><Link to="/Contact" className='listt text-black' onClick={handleNavLinkClick} >Contact us</Link></button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}

export default Header
