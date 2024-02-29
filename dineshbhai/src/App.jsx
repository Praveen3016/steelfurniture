import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
}
  from 'mdb-react-ui-kit';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      
      <main>
        <section id="sec1">
          <div className=" d-flex align-items-center part1  mt-5 ">
            <div className='d-flex flex-column w-sm-50 w-75 ps-1 ps-sm-5  '>

              <h1 className='text-white heading mb-4 fw-bold'>Kheteshvar steel factory .</h1>
              <p className='text-white    ' >Self-service is now becoming an expectation in the B2B metal manufacturing industry. Make buying from your business easy with built-in CPQ, plus a 2D or 3D visualizer and guided selling..</p>
              <button className=''>All Products</button>
            </div>
          </div>
        </section>
        <section id="sec2">
          <p id="p1">_WHAT WE OFFER_</p>
          <h2>Services We Offer</h2>
          <p id="p2">We are specialists in information technologies and we apply our full range of talent to creating the perfect solution for each client's needs.</p>
          <div className="cards container row   ">
            <div id="" className='col-sm-3 px-2'>
              <div className=' ' id="card1">
                <img src="4.svg" alt="" />
                <p id="p3" >01</p>
                <p id="p3" >Jewelry Software</p>
                <p id="p4">A diamond jewellery software to Manage Jewelry Business.</p>
              </div>
            </div>
            <div id="" className='col-sm-3 px-2'>
              <div className=' ' id="card1">
                <img src="4.svg" alt="" />
                <p id="p3" >01</p>
                <p id="p3" >Jewelry Software</p>
                <p id="p4">A diamond jewellery software to Manage Jewelry Business.</p>
              </div>
            </div>
            <div id="" className='col-sm-3 px-2'>
              <div className=' ' id="card1">
                <img src="4.svg" alt="" />
                <p id="p3" >01</p>
                <p id="p3" >Jewelry Software</p>
                <p id="p4">A diamond jewellery software to Manage Jewelry Business.</p>
              </div>
            </div>
            <div id="" className='col-sm-3 px-2'>
              <div className=' ' id="card1">
                <img src="4.svg" alt="" />
                <p id="p3" >01</p>
                <p id="p3" >Jewelry Software</p>
                <p id="p4">A diamond jewellery software to Manage Jewelry Business.</p>
              </div>
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
                  <h2>Welcome to KFS Steel Furniture</h2>
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
            <MDBRow className='justify-content-center align-items-center '>
              <div className='col-sm-5' >
                <h3>Contact with use throw</h3>
                <p><span>Mobile No.  </span>:  +919351990014</p>
                <p><span>Email Id </span>: tilakkumar@gmail.com</p>
                <p><span>Address : </span> sirohi rampura near by high secondary school main road rampura .</p>
              </div>
              <div  className='col-xl-7 col-sm-8 col-md-11  ' >
                <MDBCard >
                  <MDBCardBody  >
                    <form action="https://formspree.io/f/mbjnoddw" method='post'>
                      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5"></h3>
                      <MDBRow>
                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' name='name' />
                        </MDBCol>
                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' label='phone number' size='lg' id='form2' type='text' name='phone number' />
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>

                        <MDBCol md='12'>
                          <MDBInput wrapperClass='mb-4' label='address' size='lg' id='form3' type='text' name='address' />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md='12'>
                        <MDBTextArea label='message'id='validationTextarea'placeholder='Required example textarea'required/>
                        </MDBCol>
                      </MDBRow>
                      <button className='mt-4' size='lg'>Submit</button>
                    </form>
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
              <span>Get connected with us on social networks:</span>
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
