import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";


import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea 
}
  from 'mdb-react-ui-kit';
function Contact() {
  return (
    <div className='container-fluid '>
      <div className='row col-sm-12 align-items-center  justify-content-center  '>
        <div style={{marginTop:"100px"}} className='col-sm-6' >
          <div>
          <div className='row col-sm-12' >
            
            <h3 style={{color:"rgb(255, 111, 0)"}} className='text-center fw-bolder mb-5 ' >Contact Us</h3>
          
 
            <div className='col-sm-3' >
            <p><span><b className='fs-5' ><FaPhoneAlt/> </b> </span>:  +919351990014</p>
            </div>
            <div className='col-sm-4' >
            <p><span><b className='fs-5' > <MdEmail/> </b></span>: tilakkumar@gmail.com</p>
            </div>  
            <div className='col-sm-5' >
            <p><span><b className='fs-5' > <FaAddressBook/> </b></span> sirohi rampura near by high secondary school 
                main <span id='spn' >road rampura .</span></p>
              </div> 
            
              </div>
          </div>
              <div  className='  col-sm-12 ' >
                <MDBCard >
                  <MDBCardBody  >
                    <form action="https://formspree.io/f/mbjnoddw" method='post'>
                      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5"></h3>
                      <MDBRow>
                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' name='name' />
                        </MDBCol>
                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' name='name' />
                        </MDBCol>
                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form1' type='text' name='name' />
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
    </div>
    </div>
    <div className='mt-5' >
    <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3652225.2823648746!2d73.8783351!3d26.6284242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shi!2sin!4v1709214004224!5m2!1shi!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    </div>

  )
}

export default Contact
