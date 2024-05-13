import { Link } from "react-router-dom";
const Aboutus=()=>
    {
        return(

            <>
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
                <img src="public\image\tk2.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-sm-6 d-flex align-items-center ">
                <div>
                  <h2>Welcome to श्री KSF Steel Factory</h2>
                  <p id="sec3p3">
                    We seamlessly merge three key components – Website, Mobile
                    Application, and Software technology. This is the main
                    factor that sets us apart from our competition and allows us
                    to deliver a specialist in our services.
                  </p>
                  <div>
                    <button className="btn p-2"  ><Link to="/about" className="text-white" >Veiw More</Link></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            </>
        );
    };
    export default Aboutus 