import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
}
  from 'mdb-react-ui-kit';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100  ">
          <Container>
            <Navbar.Brand href="#home"><img className='w-25' src="public\image\Screenshot (133).png" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto  d-flex align-items-center  justify-content-between w-100 ">
                <div className='d-flex gap-5 m-auto '>
                  <Nav.Link className='listt' href="#home">Home</Nav.Link>
                  <Nav.Link className='listt' href="#link">About</Nav.Link>
                  <Nav.Link className='listt' href="#link">product</Nav.Link>
                  <Nav.Link className='listt' href="#link">Service</Nav.Link>
                </div>
                <div className='contact'>
                  <button>Contact us</button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
         <section id="sec1">
          <div className=" d-flex align-items-center part1  mt-5 ">
            <div className='d-flex flex-column w-50 ps-5  '>

              <h1 className='text-white heading mb-4 fw-bold'>Kheteshwar steel factory .</h1>
              <p className='text-white    ' >Self-service is now becoming an expectation in the B2B metal manufacturing industry. Make buying from your business easy with built-in CPQ, plus a 2D or 3D visualizer and guided selling..</p>
              <button className=''>All Products</button>
            </div>
          </div>
        </section>
        <section id="sec2">
          <p id="p1">_WHAT WE OFFER_</p>
          <h2>Services We Offer</h2>
          <p id="p2">We are specialists in information technologies and we apply our full range of talent to creating the perfect solution for each client's needs.</p>
          <div className="cards">
            <div id="card1">
              <img src="4.svg" alt="" />
              <p id="p3" >01</p>
              <p id="p3" >Jewelry Software</p>
              <p id="p4">A diamond jewellery software to Manage Jewelry Business.</p>
            </div>
            <div id="card1">
              <img src="3.svg" alt="" />
              <p id="p3" >02</p>
              <p id="p3" >Restaurant Software</p>
              <p id="p4">Super POS/Smart Restaurant restaurant management software.</p>
            </div>
            <div id="card1">
              <img src="2.svg" alt="" />
              <p id="p3" >03</p>
              <p id="p3" >Web Application</p>
              <p id="p4">We make your Customized Web App a valuable business asset.</p>
            </div>
            <div id="card1">
              <img src="Mobile-apps-icon.svg" alt="" />
              <p id="p3" >04</p>
              <p id="p3" >Mobile Apps</p>
              <p id="p4">We provide customized Mobile app development services.</p>
            </div>
          </div>
          <button >View More</button>
        </section> 
        <section id="sec3" style={{ backgroundImage: "linear-gradient(to left,white,white,rgba(255, 160, 122, 0.151))", display: "flex", flexDirection: "row !important" }}   >
          <div className='container' >
            <div className='row col-sm-12'>
              <p className="p1 mb-4 " >ABOUT US_</p>
              <div className=" col-sm-6">
                <img src="public\image\OIP.jpg" className='img-fluid' alt="" />
              </div>
              <div className="col-sm-6 d-flex align-items-center ">
                <div>
                  <h2>Welcome to KSF Steel Factory</h2>
                  <p id="sec3p3">We seamlessly merge three key components – Website, Mobile Application, and Software technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist in our services.</p>
                  <div>
                    <button >View More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", }} id="sec4" >
          <p style={{ color: "red" }} className="p1 mb-4  fw-bold " >Contact Us</p>
          <MDBContainer fluid >
            <MDBRow className='justify-content-center align-items-center m-5 '>
              <div className='col-sm-5' >
                <h3>Contact us through</h3>
                <p><span><b>Mobile No. </b> </span>:  +919351990014</p>
                <p><span><b>Email Id </b></span>: tilakkumar@gmail.com</p>
                <p><span><b>Address : </b></span> sirohi rampura near by high secondary school 
                main <span id='spn' >road rampura .</span></p>
              </div>
              <div className='col-sm-7' >
                <MDBCard>
                  <MDBCardBody className='px-4'>
                    <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5"></h3>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text' />
                      </MDBCol>
                      <MDBCol md='6' className='mb-4'>
                        <h6 className="fw-bold">Gender: </h6>
                        <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                        <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                        <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' />
                      </MDBCol>
                    </MDBRow>
                    <button className='mb-4' size='lg'>Submit</button>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBRow>
          </MDBContainer>

        </section>

      </main>
      <footer>


        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>Get connected with us on Social Media :</span>
            </div>

            <div>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="google" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </section>

          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Company name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      React
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Laravel
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Help
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2021 Copyright:
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>

      </footer>
    </>
  )
}

export default App
