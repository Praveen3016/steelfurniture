import '../App.css'
import React, { useState, useContext } from 'react'
import Whatsapp from './Whatsapp'
import Calllogo from './Calllogo'
import ScrollToTopButton from './ScrollToTopButton'
import Usercontext from '../context/usecontext';
import { IoCall } from "react-icons/io5"; // Added IoCall for the call button icon
import { Link } from 'react-router-dom';

function Products() {
  const { photos, formshow } = useContext(Usercontext);
  const [showphoto, setphotos] = useState(false);
  function handleview() {
    setphotos(true);
  }
  return (
    <div className="backgraundcolor">
      <div className="overflow-hidden">
        <div class="area1">
          <ul class="circles1">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <img className='img-fluid mainphoto w-100' src="public\image\pexels-photo-1029243.jpeg" alt="" />
      </div>
      <div className='container-fluid pt-5'>
        <h2 className='text-center pt-5' style={{ color: '#d90700' }}>All Products</h2>
        <p className='text-center'>Explore our range of durable and stylish steel furniture on our Products page</p>

        <div className='row col-sm-12 gap-4 d-flex align-items-center justify-content-center px-2 mb-4'>
          {photos.slice(0 , showphoto ? photos.length : 4).map(photo =>
            <div id="" className="col-sm-3 h-50 px-1" key={photo.id}>
              <div style={{ height: "350px" }} className='mt-4' id="card1">
                <p
                  style={{ color: '#d90700' }}
                  className="d-flex align-items-center justify-content-center fw-bold fs-6"
                >
                  {photo.name}
                </p>
                <Link to={`/productdetails/${photo.id}`} style={{ display: "block", width: "100%", height: "200px" }}>
                  <img style={{ height: "100%", width: "100%", objectFit: "cover" }}
                    className="img-fluid"
                    src={photo.src}
                    alt=""
                  />
                </Link>
                <div className="border-bottom mt-2">
                  <p className="flex-wrap">{photo.p} <label style={{ color: '#d90700' }} className='mx-2'>{photo.price}</label> </p>
                </div>
                <div className="justify-content-between d-flex">
                  <button className='p-1 text-light mt-3' onClick={() => { formshow(photo.name) }}>Inquiry now</button>
                  <button className='p-1 text-light mt-3 buttonbackgraund'><IoCall /> Contact</button>

                </div>
              </div>
            </div>
          )}

        </div>
        <div className='text-center mt-5 '>
          <button className="btn" onClick={handleview} >view more</button>
        </div>

      </div>
      <Whatsapp />
      <Calllogo />
      <ScrollToTopButton />
    </div>
  )
}
export default Products;
