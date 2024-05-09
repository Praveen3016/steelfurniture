import '../App.css'
import React, { useState, useContext } from 'react'
import Whatsapp from './Whatsapp'
import Calllogo from './Calllogo'
import ScrollToTopButton from './ScrollToTopButton'
import Usercontext from '../context/usecontext';
import { IoCall } from "react-icons/io5";

function Products() {

  const { photos, formshow, imgshow } = useContext(Usercontext);
  return (

    <div className=" backgraundcolor ">
      <div className="overflow-hidden " >
      <div class="area1">
        <ul   class="circles1">
          <li ></li>
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
        <img className='img-fluid mainphoto w-100 ' src="public\image\pexels-photo-1029243.jpeg" alt="" />
      </div>
      <div className='container-fluid pt-5'>
        <h2 className='text-center pt-5' style={{ color: '#d90700' }}   >All Products</h2>
        <p className='text-center' >Explore our range of durable and stylish steel furniture on our Products page</p>
        

          <div className=' row col-sm-12 gap-4   d-flex align-items-center justify-content-center px-2 mb-4' >
            {photos.map(photo =>
              <div id="" className="col-sm-3 h-50 px-1" key={photo.id}>
                <div style={{ height: "350px" }} className='mt-4' id="card1">
                  <p
                    style={{ color: '#d90700' }}
                    className="d-flex  align-items-center justify-content-center fw-bold fs-6 "
                  >
                    {photo.name}
                  </p>
                  <img style={{ height: "200px" }}
                    className="img-fluid  w-100  "
                    src={photo.src} onClick={() => { imgshow(photo.src ) }}
                    alt=""
                  />
                  <div className="border-bottom mt-2  " >
                    <p className="flex-wrap" >{photo.p} <label style={{ color: '#d90700' }} className='mx-2' >{photo.price} </label> </p>
                  </div>
                  <div className="justify-content-between d-flex  " >
                    <button className='p-1 text-light mt-3  ' onClick={() => { formshow(photo.name) }} > Inquriy now </button>
                    <button className=' p-1 text-light mt-3 buttonbackgraund '> <IoCall /> contact</button>
                  </div>

                </div>
              </div>
            )}
          </div>
      </div>
      <Whatsapp />
      <Calllogo />
      <ScrollToTopButton />
    </div>
  )
}
export default Products;
