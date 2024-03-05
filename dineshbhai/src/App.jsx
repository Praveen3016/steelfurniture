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
import Clientnumber from "./component/clientnumber";

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

  const [gradientColor, setGradientColor] = useState("#ff0000"); // Initial color

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
              <button>Contact Us</button>
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
            {showAll ? "Less" : "View More"}
          </button>
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
              <p
                className="p1 mb-4 font-m fw-bold fs-4"
                style={{ color: "#d90700" }}
              >
                ABOUT US
              </p>
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
    <Clientnumber/>

    </section>
        <section>
          {/* <div className="container-fluid">
            <div className="row col-sm-12 gap-4 d-flex align-items-center justify-content-center px-2 mb-4">
              {firstFivePhotos.map((photo) => (
                <div
                  style={{ marginTop: "10px" }}
                  className="card col-sm-2 p-0"
                  key={photo.id}
                >
                  <div className="position-relative">
                    <div className="image-container">
                      <img
                        style={{
                          cursor: "pointer",
                          minHeight: "290px",
                          maxHeight: "300px",
                          width: "100%",
                        }}
                        className="img-fluid img-hover"
                        src={photo.src}
                        alt=""
                      />
                    </div>
                    <label
                      style={{
                        left: "0",
                        bottom: "0px",
                        color: "rgb(255, 111, 0)",
                        cursor: "pointer",
                      }}
                      className="position-absolute lables bg-white w-100 p-3"
                    >
                      {photo.name}
                    </label>
                  </div>
                  <button
                    onClick={() => handleOrder(photo.name)}
                    className=" mx-auto"
                    style={{ width: "100%" }}
                  >
                    Inquiry Now
                  </button>
                </div>
              ))}
            </div>
          </div> */}
        </section>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="sec4"
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
                      <MDBRow>
                        <MDBCol md={6} className="mb-4">
                          {/* <label>Select a State:</label> */}
                          <select
                            className="form-select"
                            value={selectedState}
                            name="State"
                            onChange={handleStateChange}
                          >
                            <option value="" disabled hidden>
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
