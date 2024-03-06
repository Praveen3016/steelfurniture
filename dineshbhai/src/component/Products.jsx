import '../App.css'
import React, { useState, useContext } from 'react'
import Whatsapp from './Whatsapp'
import Calllogo from './Calllogo'
import ScrollToTopButton from './ScrollToTopButton'
import Usercontext from '../context/usecontext';
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
        <h2 className='text-center pt-5 mt-2 mb-0'  style={{ color: '#d90700' }}   >All Products</h2>
        <div className='row col-sm-12 gap-4 d-flex align-items-center justify-content-center px-2 mb-4'>
          <div>

          </div >
          <div className='row col-sm-12 gap-4  d-flex align-items-center justify-content-center px-2 mb-4' s>
            {photos.map(photo =>
              <div className="col-sm-2 h-50 p-0 border mt-2 bg-white rounded-1 shadow" key={photo.src}>
                <div  className='mt-4' id="card1">
                  <p
                    style={{ color: '#d90700' }}
                    className="d-flex align-items-center justify-content-center fw-bold"
                  >
                    {photo.name}
                  </p>
                  <div className="card-image-container mx-2">
                  <img style={{ height: "200px" }}
                    className="img-fluid  w-100  "
                    src={photo.src} onClick={() => { imgshow(photo.src) }}
                    alt=""
                  /></div>
                  <button className='p-1 text-light mt-3 w-100 rounded-0' onClick={() => { formshow(photo.name) }} >Enquiry Now</button>
                </div>
              </div>
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
