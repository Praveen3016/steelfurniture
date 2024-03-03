import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import whatsapp from "../public/image/whatsapp.png";
import call from "../public/image/call.png";
import ScrollToTopButton from "./component/ScrollToTopButton";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Usercontext from "./context/usecontext";
import { useContext } from "react";
import { useState } from "react";
import stateDistrictsMap from '../data.json'
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
  const { photos } = useContext(Usercontext);
  const firstFivePhotos = photos.slice(0, 5);

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
      <div className="image-container">
        <a href="https://wa.me/+919967745712">
          <img
            src={whatsapp}
            alt=""
            style={{
              width: "50px",
              position: "fixed",
              bottom: "20px",
              right: "15px",
              zIndex: "100",
            }}
            className="scaling-image"
          />
        </a>
      </div>
      <div className="image-container">
        <a href="tel:+9967745712">
          <img
            src={call}
            alt=""
            style={{
              width: "50px",
              position: "fixed",
              bottom: "20px",
              left: "15px",
              zIndex: "100",
            }}
            className="scaling-image"
          />
        </a>
      </div>
      <main>
        <ScrollToTopButton />

        <section id="sec1">
          <div className=" d-flex align-items-center part1  mt-5 ">
            <div className="d-flex flex-column w-sm-50 w-75 ps-1 ps-sm-5  ">
              <h1 className="text-white heading mb-4 fw-bold">
                Kheteshwar Steel Factory .
              </h1>
              <p className="text-white    ">
                Self-service is now becoming an expectation in the B2B metal
                manufacturing industry. Make buying from your business easy with
                built-in CPQ, plus a 2D or 3D visualizer and guided selling..
              </p>
              <button className="">All Products</button>
            </div>
          </div>
        </section>
        <section id="sec2">
          <p id="p1">_WHAT WE OFFER_</p>
          <h2>Services We Offer</h2>
          <p id="p2">
            We are specialists in information technologies and we apply our full
            range of talent to creating the perfect solution for each client's
            needs.
          </p>
          <div className="cards container row   ">
            <div id="" className="col-sm-3  px-2">
              <div id="card1">
                <div
                  style={{ color: "rgb(255, 111, 0)" }}
                  className=" fw-bold  fs-6 d-flex  align-items-center  justify-content-center  "
                >
                  <p>Jewelry Software</p>
                </div>

                <img
                  className="w-100 img-fluid "
                  src="https://th.bing.com/th/id/OIP.DpxZPUDsx0SSji0I-0CqugHaEK?rs=1&pid=ImgDetMain"
                  alt=""
                />
                {/* <p id="p4">
                  A diamond jewellery software to Manage Jewelry Business.
                </p> */}
              </div>
            </div>
            <div id="" className="col-sm-3 px-2">
              <div className=" " id="card1">
                <p
                  style={{ color: "rgb(255, 111, 0)" }}
                  className="d-flex  fw-bold  fs-6  align-items-center  justify-content-center "
                >
                  Jewelry Software
                </p>
                <img
                  className="w-100 img-fluid "
                  src="https://th.bing.com/th/id/R.50de7787b0db8aac2ab29988f0beebe2?rik=qaZI0DuM2dWSTg&riu=http%3a%2f%2fadonaisteel.com.au%2fwp-content%2fgallery%2fadonai-steel-security-doors-gallery%2fAdonai-Steel-Security-Doors-2.jpg&ehk=6XIoOdrRLh5U2GLZIRucORaTr%2bfTTbNPA2krWuyWytg%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                {/* <p id="p4">
                  A diamond jewellery software to Manage Jewelry Business.
                </p> */}
              </div>
            </div>
            <div id="" className="col-sm-3 px-2 h-50">
              <div className=" " id="card1">
                <p
                  style={{ color: "rgb(255, 111, 0)" }}
                  className="d-flex  align-items-center justify-content-center fw-bold  fs-6 "
                >
                  Jewelry Software
                </p>
                <img
                  className="w-100 img-fluid "
                  src="https://www.recruiter.co.uk/sites/default/files/media/image/2017/steel_worker_shutterstock_126241472.jpg"
                  alt=""
                />
                {/* <p id="p4">
                  A diamond jewellery software to Manage Jewelry Business.
                </p> */}
              </div>
            </div>
            <div id="" className="col-sm-3 h-50 px-2">
              <div className=" " id="card1">
                <p
                  style={{ color: "rgb(255, 111, 0)" }}
                  className="d-flex  align-items-center justify-content-center fw-bold  fs-6 "
                >
                  Jewelry Software
                </p>
                <img
                  className="img-fluid w-100 "
                  src="https://th.bing.com/th/id/OIP.1N_ALN2h2sz60WzgpYg95wHaE7?rs=1&pid=ImgDetMain"
                  alt=""
                />
                {/* <p id="p4">
                  A diamond jewellery software to Manage Jewelry Business.
                </p> */}
              </div>
            </div>
          </div>
          <button>View More</button>
        </section>
      
        <section
          id="sec3"
          style={{
            backgroundImage:
              "linear-gradient(to left,white,white,rgba(255, 160, 122, 0.151))",
            display: "flex",
            flexDirection: "row !important",
          }}
        >
          <div className="container">
            <div className="row col-sm-12">
              <p className="p1 mb-4 ">ABOUT US_</p>
              <div className=" col-sm-6">
                <img src="public\image\OIP.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-sm-6 d-flex align-items-center ">
                <div>
                  <h2>Welcome to KSF Steel Factory</h2>
                  <p id="sec3p3">
                    We seamlessly merge three key components – Website, Mobile
                    Application, and Software technology. This is the main
                    factor that sets us apart from our competition and allows us
                    to deliver a specialist in our services.
                  </p>
                  <div>
                    <button>View More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
        <div className='container-fluid'>
        <div className='row col-sm-12 gap-4 d-flex align-items-center justify-content-center px-2 mb-4'>
          {firstFivePhotos.map(photo =>
            <div style={{ marginTop: "10px" }} className='card col-sm-2 p-0' key={photo.id}>
              <div className="position-relative" >
                <div className="image-container">
                <img style={{ cursor: "pointer", minHeight: '300px', maxHeight: '300px', width: '100%'}} className='img-fluid img-hover' src={photo.src} alt="" />
                </div>
                <label style={{ left: "0", bottom: "0px", color: "rgb(255, 111, 0)", cursor: "pointer" }} className="position-absolute lables bg-white w-100 p-3" >{photo.name}</label>
              </div>
              <button onClick={() => handleOrder(photo.name)} className='my-2 mx-auto' style={{width: '95%'}}>Inquiry Now</button>
            </div>
          )}
        </div>
      </div>
        </section>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="sec4"
        >
          <p style={{ color: "red" }} className="p1 mb-4  fw-bold ">
            Contact Us
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
                  sirohi rampura near by high secondary school main{" "}
                  <span id="spn">road rampura .</span>
                </p>
              </div>
              <div className="col-xl-7 col-sm-8 col-md-11  ">
                <MDBCard>
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
                            label="First Name"
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
                      <MDBRow className="mb-3">
                        <MDBCol md={6}>
                          {/* <label>Select a State:</label> */}
                          <select className="form-select"
                            value={selectedState}
                            onChange={handleStateChange}
                          >
                            <option value="" disabled hidden>Select a State</option>
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
                        <MDBCol md={6}>
                          <select className="form-select"
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                          >
                            <option value="" disabled hidden>Select a District</option>
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
                      <button className="mt-4" size="lg">
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
      {/* <Footer/> */}
    </>
  );
}

export default App;
