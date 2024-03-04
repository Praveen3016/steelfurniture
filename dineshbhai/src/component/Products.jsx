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
  const { photos ,setshow ,show ,img ,setimg , imgshow} = useContext(Usercontext);

  const handleOrder = (photoName) => {
    setSelectedPhotoName(photoName);
    setdata(true);
  };

  return (
    <div className=" ">
     
      <div className='container-fluid pt-5'>
        <h2 className='text-center pt-5'>All Products</h2>
        <div className='row col-sm-12 gap-4 d-flex align-items-center justify-content-center px-2 mb-4'>
          <div>
            
          </div >
          <div className=' row col-sm-12  d-flex align-items-center justify-content-center px-2 mb-4's>
          {photos.map(photo =>
             <div id="" className="col-sm-3 h-50 px-2" key={photo.src} onClick={() =>{ imgshow(photo.src)} }>
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
