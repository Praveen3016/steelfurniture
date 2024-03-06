import '../App.css'
import React, { useState, useContext } from 'react'
import Whatsapp from './Whatsapp'
import Calllogo from './Calllogo'
import ScrollToTopButton from './ScrollToTopButton'
import Usercontext from '../context/usecontext';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
function Products() {
  const [data, setdata] = useState(false);
  const [selectedPhotoName, setSelectedPhotoName] = useState("");
  const { photos, formshow, imgshow } = useContext(Usercontext);

  const handleOrder = (photoName) => {
    setSelectedPhotoName(photoName);
    setdata(true);
  };

  return (
    <div className=" backgraundcolor ">

      <div className='container-fluid pt-5'>
        <h2 className='text-center pt-5'  style={{ color: '#d90700' }}   >All Products</h2>
        <div className='row col-sm-12 gap-4 d-flex align-items-center justify-content-center px-2 mb-4'>
          <div>

          </div >
          <div className=' row col-sm-11    d-flex align-items-center justify-content-center px-2 mb-4' s>
            {photos.map(photo =>
            <>
              {/* <div id="" className="col-sm-3    " key={photo.src}>
                <div className='h-50  border mt-2 bg-white shadow rounded-2'>
                <div style={{ height: "300px" }} className='m-2' id="card1">
                  
                  <img style={{ height: "200px" }}
                    className="img-fluid  w-100  "
                    src={photo.src} onClick={() => { imgshow(photo.src) }}
                    alt=""
                  />
>>>>>>> f19733d7b53b1e6fd6d86379b2f255189c5caeac
                  <p
                    style={{ color: '#d90700' }}
                    className="d-flex align-items-center justify-content-center fw-bold"
                  >
                    {photo.name}
                  </p>
<<<<<<< HEAD
                  <div className="card-image-container mx-2">
                  <img style={{ height: "200px" }}
                    className="img-fluid  w-100  "
                    src={photo.src} onClick={() => { imgshow(photo.src) }}
                    alt=""
                  /></div>
                  <button className='p-1 text-light mt-3 w-100 rounded-0' onClick={() => { formshow(photo.name) }} >Enquiry Now</button>
=======
                  <button className='p-1 text-light mt-3  ' onClick={() => { formshow(photo.name) }} > inquriy now </button>
>>>>>>> f19733d7b53b1e6fd6d86379b2f255189c5caeac
                </div>
              </div>
              </div> */}

<div id="" className="col-sm-3  px-2 my-2 " key={photo.src}>
<MDBCard className="card-container shadow">
  <div className="img-container">
    <MDBCardImage
      src={photo.src}
      position="top"
      alt="Image"
      style={{height : "200px"}}
      className="card-img"
    />
  </div>
  <MDBCardBody className='p-0 px-3 pt-2 ' style={{height : '80px'}}>
    <MDBCardTitle className="card-title fw-bold" style={{color:'#d90700'}}>
      {photo.name}
    </MDBCardTitle>
    <div className='w-100 d-flex justify-content-center'>
    <button className='p-1 text-light mt-3  ' onClick={() => { formshow(photo.name) }} > inquriy now </button>
    </div>
  </MDBCardBody>
</MDBCard>
</div>
</>
            )}
          </div>
        </div>
      </div>
      <Whatsapp />
      <Calllogo />
      <ScrollToTopButton />
    </div>
  )
}
export default Products;
