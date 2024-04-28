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
        <h2 className='text-center pt-5'  style={{ color: '#d90700' }}   >All Products</h2>
        <div className='row col-sm-12 gap-4 d-flex align-items-center justify-content-center px-2 mb-4'>
          <div>

          </div >
          <div className=' row col-sm-12 gap-4   d-flex align-items-center justify-content-center px-2 mb-4' s>
            {photos.map(photo =>
              <div id="" className="col-sm-3 h-50 px-2 border mt-2 bg-white shadow rounded-2 border    " key={photo.src}>
                <div style={{ height: "300px" }} className='mt-4' id="card1">
                  <p
                    style={{ color: '#d90700' }}
                    className="d-flex  align-items-center justify-content-center fw-bold fs-6 "
                  >
                    {photo.name}
                  </p>
                  <img style={{ height: "200px" }}
                    className="img-fluid  w-100  "
                    src={photo.src} onClick={() => { imgshow(photo.src) }}
                    alt=""
                  />
                  <div className="justify-content-between d-flex  " >
                  <button className='p-1 text-light mt-3  ' onClick={() => { formshow(photo.name) }} > inquriy now </button>
                  <button  className=' p-1 text-light mt-3 buttonbackgraund '>contact</button>
                  </div>
               
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
