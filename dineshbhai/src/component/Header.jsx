import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos < prevScrollPos;

      setIsVisible(isScrollingDown);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header style={{ display: isVisible ? 'block' : 'none' , transition: 'display 0.3s ease-in-out' }}>
      <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 z " style={{ zIndex: "9999" }}>
        <Container>
          <Navbar.Brand href="#home"><img width={60} height={45} src="public\image\logo.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  d-flex align-items-center  justify-content-between w-100 ">
              <div className='d-flex gap-5 m-auto '>
                <Nav.Link ><Link to="/" className='listt text-black'  >Home</Link></Nav.Link>
                <Nav.Link ><Link to="/product" className='listt text-black' >Product</Link></Nav.Link>
                <Nav.Link ><Link to="/about" className='listt text-black' >About</Link></Nav.Link>
              </div>
              <div className='contact'>
                <button><Link to='/contact' className="text-black">Contact us</Link></button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
