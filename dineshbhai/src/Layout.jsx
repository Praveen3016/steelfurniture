import React, { useState, useEffect } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Usercontext from "./context/usecontext";
import stateDistrictsMap from "../data.json";
import Loader from './component/Loader'
import { TiDelete } from "react-icons/ti";

import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";

function Layout() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true); // State for managing loading state

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  }, []);

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

  const { setshow, show, img, showfrom, setform, form } =
    useContext(Usercontext);

  return (
    <>
      {loading ? ( 
        <Loader />
      ) : (
        <>
          {show ? (
            <div
              className="w-100 h-100 position-absolute position-fixed  bg-black bg-opacity-50 "
              style={{ zIndex: "9999999" }}
              onClick={() => setshow(false)}
            >
              <div
                className="d-flex align-items-center h-100 w-100 justify-content-center  "
                style={{ top: "100px", left: "350px" }}
              >
                <img src={img} alt="" style={{height : "500px" , width : " 750px" , border : "10px solid #0000007a"}} className="rounded" />
              </div>
            </div>
          ) : (
            ""
          )}
          {form ? (
            <div
              style={{ height: "100vh" , zIndex: "9999999" }}
              className="row col-sm-12 align-items-center  position-fixed bg-black bg-opacity-50  justify-content-center"
            >
              <div className="   col-sm-7  ">
                <MDBCard>
                  <div
                    className="end-0 position-absolute  p-2 mx-3 "
                    onClick={() => {
                      setform(false);
                    }}
                  >
<TiDelete style={{height : " 30px "}}/>              
    </div>
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
                            name="First Name"
                          />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Last Name"
                            size="lg"
                            id="form1"
                            type="text"
                            name="Last Name"
                          />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Email"
                            size="lg"
                            id="form1"
                            type="text"
                            name="Email"
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
                            {stateDistrictsMap.states.map((stateData, index) => (
                              <option key={index} value={stateData.state}>
                                {stateData.state}
                              </option>
                            ))}
                          </select>
                        </MDBCol>
                        <MDBCol md={6}>
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
                            value={showfrom}
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
          ) : (
            ""
          )}

          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
