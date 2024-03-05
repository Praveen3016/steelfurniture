import React, { useState, useEffect } from "react";

function ClientNumber() {
  const [clientCount, setClientCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [workCount, setWorkCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (clientCount < 290) {
        setClientCount((prevCount) => prevCount + 4);
      }
      if (serviceCount < 400) {
        setServiceCount((prevCount) => prevCount + 4);
      }
      if (workCount < 470) {
        setWorkCount((prevCount) => prevCount + 5);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [clientCount, serviceCount, workCount]);

  return (
    <>
      <div class="feat bg-gray pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-head col-sm-12">
              <h4  style={{color: '#d90700'}}>
                <span>Why Choose</span> Us?
              </h4>
              <p>
              At Shri Kheteshwar Steel Furniture, we pride ourselves on being more than just a furniture store; we're a symbol of reliability, quality, and customer satisfaction. Here are just a few reasons why you should choose us for all your furniture needs
              </p>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                {" "}
                <span class="icon feature_box_col_one">
                  <i class="fa fa-globe"></i>
                </span>
                <h6 className="fs-3 mb-1">{clientCount}+</h6>
                <h6>Total Clients</h6>
                <p className="text-center">
                  We use latest technology for the latest world because we know
                  the demand of peoples.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                {" "}
                <span class="icon feature_box_col_two">
                  <i class="fa fa-anchor"></i>
                </span>
                <h6 className="fs-3 mb-1">{serviceCount}+</h6>
                <h6>Total Services</h6>
                <p className="text-center">
                  We use latest technology for the latest world because we know
                  the demand of peoples.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                {" "}
                <span class="icon feature_box_col_three">
                  <i class="fa fa-hourglass-half"></i>
                </span>
                <h6 className="fs-3 mb-1">{workCount}+</h6>
                <h6>Total Works Done</h6>
                <p className="text-center">
                  We use latest technology for the latest world because we know
                  the demand of peoples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientNumber;
