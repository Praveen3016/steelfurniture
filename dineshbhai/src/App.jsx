import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { useState, useEffect } from "react";
import ScrollToTopButton from "./component/ScrollToTopButton";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Usercontext from "./context/usecontext";
import { useContext } from "react";
import cardData from ".././CardData.json";
import Card from "./component/Card";
import stateDistrictsMap from ".././data.json";
import Calllogo from "./component/Calllogo";
import Whatsapp from "./component/Whatsapp";
import ClientNumber from "./component/clientnumber";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import Aboutus from "./component/Aboutus";
import Offer from "./component/Offers";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const { photos , formshow } = useContext(Usercontext);
  const firstFivePhotos = photos.slice(0, 6);
 function  handlecontact () {
  window.location.href="tel:+9351990014"
  
 } 
  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      setGradientColor(randomColor);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [showAll, setShowAll] = useState(false);
  const yourArray = [...cardData];

  const renderedItems = showAll ? yourArray : yourArray.slice(0, 4);

  const handleViewToggle = () => {
    setShowAll(!showAll);
  };

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedDistrict("");
    const selectedStateData = stateDistrictsMap.states.find(
      (item) => item.state === state
    );
    setDistricts(selectedStateData ? selectedStateData.districts : []);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  setInterval(function () {<Offer/>}, 1000);


  return (
    <>
      <div class="area">
        <ul class="circles">
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
      <Whatsapp />
      
      <Calllogo />
      <ScrollToTopButton />
      <main>
        <section id="sec1">
          <div className=" d-flex align-items-center part1  mt-5 ">
            <div className="d-flex flex-column w-sm-50 w-100 ps-1 ps-sm-5  ">
              <h1 className="heading mb-3 mt-2 fw-bold text-warning">
                श्री KSF Furniture Factory
              </h1>
              <p className="text-white paragraph">
                Kheteshwar Steel Furniture, Rajasthan's premier iron furniture
                manufacturer since 2007. Renowned for superior quality products
                and service, customer satisfaction is our utmost priority.
                Specializing in a diverse range of furniture including hospital,
                hostel, college, and school furniture, alongside domestic
                almirahs and office furnishings. Experience excellence with
                Kheteshwar Steel Furniture.
              </p>
              <button><Link to='/contect' className="text-white">Contact us</Link></button>
            </div>
          </div>
        </section>
        <section id="sec2">
          <h2 style={{ color: "#d90700" }} className="font-m fw-bold">
            Services We Offer
          </h2>
          <p id="p2" style={{ maxWidth: "90%" }} className="my-0">
            We are experts in steel furniture craftsmanship, dedicating our
            entire range of skills to crafting the ideal solutions for every
            client's requirements.
          </p>
          <div className="cards container row">
            <Card props={renderedItems} />
          </div>
          <button
            onClick={handleViewToggle}
            style={{ padding: "8px 10px", fontSize: "13px" }}
          >
            {showAll ? " View Less" : "View More"}
          </button>
        </section>
        <section>
          <section>
            <p
              className="p1 mb-4 font-m fw-bold text-center  fs-4"
              style={{ color: "#d90700" }}
            >
              PRODUCT
            </p>
            <div className=' row col-sm-12 gap-4   d-flex align-items-center justify-content-center px-2 mb-4' s>
            {firstFivePhotos.map(photo =>
              <div id="" className="col-sm-3 col-10 h-50 px-1" key={photo.id}>
                <div style={{ height: "350px" }} className='mt-4' id="card1">
                  <p
                    style={{ color: '#d90700' }}
                    className="d-flex  align-items-center justify-content-center fw-bold fs-6 "
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
                  <div className="border-bottom mt-2  " >
                    <p className="flex-wrap" >{photo.p} <label style={{ color: '#d90700' }} className='mx-2' >{photo.price} </label> </p>
                  </div>
                  <div className="justify-content-between d-flex  " >
                    <button className='p-1 text-light mt-3  ' onClick={() => { formshow(photo.name) }} > Inquriy now </button>
                    <button className=' p-1 text-light mt-3 buttonbackgraund ' onClick={handlecontact} > <IoCall /> contact</button>
                  </div>

                </div>
              </div>
            )}
            <div className="text-center p-0" >
            <button  className="p-1 mt-3 text-light btn" > <Link to="/product"  className="text-light"  >More product</Link></button>
            </div>
      
          </div>
          </section>
          <Aboutus/>
          <ClientNumber />
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="sec4"
          className="formbg"
        >
          <p
            className="p1 mb-4 font-m fw-bold fs-4"
            style={{ color: "#d90700" }}
          >
            CONTACT US
          </p>
          <MDBContainer>
            <MDBRow className="justify-content-center align-items-center ">
              <div className="col-sm-5">
                <h3>Contact us through</h3>
                <p>
                  <span>
                    <b>Mobile No. </b>{" "}
                  </span>
                  : +919351990014
                </p>
                <p>
                  <span>
                    <b>Email Id </b>
                  </span>
                  : tilakkumar@gmail.com
                </p>
                <p>
                  <span>
                    <b>Address : </b>
                  </span>{" "}
                  <mark>Shree Kheteshwar Steel Furniture</mark> Jawal Post
                  offices ke pass, Sirohi - Jawal Rd, Jawal, Rajasthan 307801{" "}
                </p>
              </div>
              <div className="col-xl-7 col-sm-8 col-md-11  ">
                <MDBCard className="transparent-form " >
                  <MDBCardBody>
                    <form
                      action="https://formspree.io/f/mbjnoddw"
                      method="post"

                    >
                      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5"></h3>
                      <MDBRow>
                        <MDBCol md="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Full Name"
                            size="lg"
                            id="form1"
                            type="text"
                            name="name"
                          />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Phone number"
                            size="lg"
                            id="form2"
                            type="text"
                            name="phone number"
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md={6} className="mb-4">
                          {/* <label>Select a State:</label> */}
                          <select
                            className="form-select"
                            value={selectedState}
                            name="State"
                            onChange={handleStateChange}
                          >
                            <option value="" disabled hidden className=""  >
                              Select a State
                            </option>
                            <option value="">-- Select --</option>
                            {stateDistrictsMap.states.map(
                              (stateData, index) => (

                                <option key={index} value={stateData.state}>
                                  {stateData.state}
                                </option>
                              )
                            )}
                          </select>
                        </MDBCol>
                        <MDBCol md={6} className="mb-4">
                          <select
                            className="form-select"
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                            name="District"
                          >
                            <option value="" disabled hidden>
                              Select a District
                            </option>
                            <option value="">-- Select --</option>
                            {districts.map((district, index) => (
                              <option key={index} value={district}>
                                {district}
                              </option>
                            ))}
                          </select>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="12">
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Address"
                            size="lg"
                            id="form3"
                            type="text"
                            name="address"
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="12">
                          <MDBTextArea
                            label="Message"
                            id="validationTextarea"
                            required
                            name="message"
                          />
                        </MDBCol>
                      </MDBRow>
                      <button className="mt-4 text-light" size="lg">
                        Submit
                      </button>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBRow>
          </MDBContainer>
        </section>
      </main>

          </>
  );
}

export default App;
