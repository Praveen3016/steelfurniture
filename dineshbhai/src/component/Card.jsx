import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import { useContext } from "react";
import Usercontext from "../context/usecontext";

export default function Card({ props }) {
  const { formshow } = useContext(Usercontext);

  return (
    <>
      {props.map((value, index) => (
        <div id="" className="col-sm-3  px-2 my-2" key={index} onClick={() => { formshow(value.cardTitle) }}>
          <MDBCard className="card-container">
            <div className="img-container">
              <MDBCardImage
                src={value.imageURl}
                position="top"
                alt="Image"
                className="card-img"
              />
            </div>
            <MDBCardBody>
              <MDBCardTitle className="card-title fw-bold" style={{color:'chocolate'}}>
                {value.cardTitle}
              </MDBCardTitle>
              <MDBCardText className="card-desc">{value.title}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </>
  );
}
