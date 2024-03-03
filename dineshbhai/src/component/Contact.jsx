import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import Calllogo from "./Calllogo";
import Whatsapp from "./Whatsapp";
import ScrollToTopButton from "./ScrollToTopButton";
import { useState } from "react";
import stateDistrictsMap from '../../data.json'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
function Contact() {

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
    <div className="container-fluid ">
      <div className="row col-sm-12 align-items-center  justify-content-center  ">
        <div style={{ marginTop: "100px" }} className="col-sm-6">
          <div>
            <div className="row col-sm-12">
              <h3
                style={{ color: "rgb(255, 111, 0)" }}
                className="text-center fw-bolder mb-5 "
              >
                Contact Us
              </h3>

              <div className="col-sm-3">
                <p>
                  <span>
                    <b className="fs-5">
                      <FaPhoneAlt />{" "}
                    </b>{" "}
                  </span>
                  : +919351990014
                </p>
              </div>
              <div className="col-sm-4">
                <p>
                  <span>
                    <b className="fs-5">
                      {" "}
                      <MdEmail />{" "}
                    </b>
                  </span>
                  : tilakkumar@gmail.com
                </p>
              </div>
              <div className="col-sm-5">
                <p>
                  <span>
                    <b className="fs-5">
                      {" "}
                      <FaAddressBook />{" "}
                    </b>
                  </span>{" "}
                  sirohi rampura near by high secondary school main{" "}
                  <span id="spn">road rampura .</span>
                </p>
              </div>
            </div>
          </div>
          <div className="  col-sm-12 ">
            <MDBCard>
              <MDBCardBody>
                <form action="https://formspree.io/f/mbjnoddw" method="post">
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
                        label="Last Name"
                        size="lg"
                        id="form1"
                        type="text"
                        name="Name"
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Email"
                        size="lg"
                        id="form1"
                        type="text"
                        name="Name"
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Phone number"
                        size="lg"
                        id="form2"
                        type="text"
                        name="Phone number"
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
                        label="address"
                        size="lg"
                        id="form3"
                        type="text"
                        name="Address"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <MDBTextArea
                        label="Message"
                        id="validationTextarea"
                        required
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
        </div>
      </div>
      <div className="mt-5 container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.0483284397708!2d72.74532017910519!3d24.99354641030336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3942dfc41ba83031%3A0x251a833240b970ac!2sShree%20kheteshwar%20steel%20furniture%20jawal!5e0!3m2!1sen!2sin!4v1709378484911!5m2!1sen!2sin"
          height="450"
          width="100%"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Calllogo/>
      <Whatsapp/>
      <ScrollToTopButton/>
    </div>
  );
}

export default Contact;