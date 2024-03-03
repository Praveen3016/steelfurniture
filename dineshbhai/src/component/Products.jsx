import '../App.css'
import React, { useState  , useContext} from 'react'
import Whatsapp from './Whatsapp'
import Calllogo from './Calllogo'
import ScrollToTopButton from './ScrollToTopButton'
import Usercontext from '../context/usecontext';
import { ImCancelCircle } from "react-icons/im";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea
} from 'mdb-react-ui-kit';

function Products() {
  const [data, setdata] = useState(false);
  const [selectedPhotoName, setSelectedPhotoName] = useState("");
  const { photos } = useContext(Usercontext);

  const handleOrder = (photoName) => {
    setSelectedPhotoName(photoName);
    setdata(true);
  };

  return (
    <div className=" ">
      {/* {data && (  
        <MDBCard style={{ zIndex: "99999", left: "20%", top: "100px" }} className="position-absolute position-fixed col-sm-7 align-items-center justify-content-center ">
          <div style={{cursor:"pointer"}} className='end-0 position-absolute  top-0  p-3 fs-4 fw-bolder  ' onClick={() => setdata(false)} >
          <ImCancelCircle />
          </div>
          <MDBCardBody>
            <form action="https://formspree.io/f/mbjnoddw" method='post'>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5"></h3>
              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' name='name' />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form1' type='text' name='name' />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form1' type='text' name='Name' />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='phone number' size='lg' id='form2' type='text' name='Phone number' />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <MDBInput wrapperClass='mb-4' label='address' size='lg' id='form3' type='text' name='Address' />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <MDBTextArea id='validationTextarea' value={selectedPhotoName} placeholder='Required example textarea' disabled required />
                </MDBCol>
              </MDBRow>
              <button className='mt-4' size='lg'>Submit</button>
            </form>
          </MDBCardBody>
        </MDBCard>
      )} */}
      <div className='container-fluid pt-5'>
        <h2 className='text-center pt-5'>All Products</h2>
        <div className='row col-sm-12 gap-4 d-flex align-items-center justify-content-center px-2 mb-4'>
          <div>
            
          </div >
          <div className=' row col-sm-12  d-flex align-items-center justify-content-center px-2 mb-4's>
          {photos.map(photo =>
             <div id="" className="col-sm-3 h-50 px-2">
             <div className=" " id="card1">
               <p
                 style={{ color: "rgb(255, 111, 0)" }}
                 className="d-flex  align-items-center justify-content-center fw-bold  fs-6 "
               >
                {photo.name}
               </p>
               <img
                 className="img-fluid w-100 "
                 src={photo.src}
                 alt=""
               />
               {/* <p id="p4">
                 A diamond jewellery software to Manage Jewelry Business.
               </p> */}
             </div>
           </div>
          )}
          </div>
        </div>
      </div>
      <Whatsapp />
      <Calllogo />
      <ScrollToTopButton/>
    </div>
  )
}
export default Products;
