
import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="nav">
          <div className="logo">
            <img src="public\image\Screenshot (133).png" alt="logo img" />
          </div>
          <div className="lists">
            <ul>
              <li>KNOW US
                {/* <i style="color: gray;" className="fa-solid fa-angle-down"></i> */}
              </li>
              <li>SOLUTION  SERVICES</li>
              <li>CURRENT OPENINGS</li>
              <li>@ WORK</li>
            </ul>
          </div>
          <div className="contact">
            <button>CONTACT with US</button>
          </div>
        </div>
      </header>
      <main>
        <section id="sec1">
          <div className="part1">
            <span>Empowering Businesses with Innovative</span>
            <pre><b>Gatisofttech,</b> a leading Surat-based custom software development
              company, offers a skilled team of developers for creating perfect
              custom software.</pre>
            <button>All Products</button>
          </div>
          <div className="part2">
            <img src="public\image\22-YEAR-3.svg" alt="" />
          </div>
        </section>
        <section id="sec2">
          

          <p id="p1">_WHAT WE OFFER_</p>
          <h2>Services We Offer</h2>
          <p id="p2">We are specialists in information technologies and we apply our full range of talent to creating the perfect solution for each client's needs.</p>
          <div className="cards">
            <div id="card1">
              <img src="4.svg" alt="" />
              <p id="p3" >01</p>
              <p id="p3" >Jewelry Software</p>
              <p id="p4">A diamond jewellery software to Manage Jewelry Business.</p>
              {/* <i style="padding: 10px 15px;" id="p3" className="fa-solid fa-arrow-right"></i> */}
            </div>

            <div id="card1">
              <img src="3.svg" alt="" />
              <p id="p3" >02</p>
              <p id="p3" >Restaurant Software</p>
              <p id="p4">Super POS/Smart Restaurant restaurant management software.</p>
              {/* <i style="padding: 10px 15px;" id="p3" className="fa-solid fa-arrow-right"></i> */}
            </div>

            <div id="card1">
              <img src="2.svg" alt="" />
              <p id="p3" >03</p>
              <p id="p3" >Web Application</p>
              <p id="p4">We make your Customized Web App a valuable business asset.</p>
              {/* <i style="padding: 10px 15px;" id="p3" className="fa-solid fa-arrow-right"></i> */}
            </div>

            <div id="card1">
              <img src="Mobile-apps-icon.svg" alt="" />
              <p id="p3" >04</p>
              <p id="p3" >Mobile Apps</p>
              <p id="p4">We provide customized Mobile app development services.</p>
              {/* <i style={{padding: "10px 15px"}} id="p3" className="fa-solid fa-arrow-right"></i> */}
            </div>
          </div>
          <button >View More</button>
        </section>

        <section id="sec3" style={{ backgroundImage: "linear-gradient(to left,white,white,rgba(255, 160, 122, 0.151))", display: "flex", flexDirection: "row !important"}} >

          <div className="left">
            <p style={{textAlign: "start"}} className="p1" >ABOUT US_</p>
            <h2 style={{"padding-left": "0px","textAlign": "start"}} >Welcome to GatiSoftTech</h2>
            <p id="sec3p3">We seamlessly merge three key components – Website, Mobile Application, and Software technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist in our services.</p>
            <button >View More</button>
          </div>

          <div className="right">
            <div className="boxes">
              <div className="btop">
                <div style={{ borderToptrightRadius: "15px"}} className="gr1">
                  <p>22+</p>
                  <span id="ff">Year of Experience</span>
                </div>
                <div style={{  bordertoprightRadius: "15px"}}className="gr1">
                  <p>1200+</p>
                  <span id="ff">Trusted Client</span>
                </div>
              </div>
              <div className="b-bot">
                <div style={{ borderbottomRightRadius: "15px"}
                } className="gr1">
                  <p>75+</p>
                  <span id="ff">Applications</span>
                </div>
                <div style={{ borderTopRightRadius: "15px"}} className="gr1">
                  <p>400+</p>
                  <span id="ff">Websites</span>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", }} id="sec4" >
          <p id="p1">_TESTIMONIALS_</p>
          <h2>What Our Clients Say!</h2>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <p>"Not been with Gatisofttech for very long, I have confidence their hard work and ERP solution for jewellery. We are able to manage offices in 4 different locations in the world only because of Gati. It cannot get better than them to manage clients difficulties faced due to lack of technology in our industry. They have a perfect approach to anything and everything needed to grow our business in a strategic way. Goodluck !!!!" </p>
                <span>Millana Kreation</span>
              </div>
              <div className="carousel-item">
                <p>“I've been using Gatisofttech software since 2015, although the implementation from manual data entry to computerize was Eazy, the Gatisofttech team was patient enough to go through the whole process with us. With all the customization done to fit our business purpose, it helps us to reduce our workers due to increase in production efficiency”</p>
                <span>Vajra Jewels</span>

              </div>
              <div className="carousel-item">
                <p>“Gatisofttech is a very Professional Company. Their working style is very transparent and the staff is very supportive in all the activities..”</p>
                <span>Shashwat Jewels</span>

              </div>
            </div>
          </div>

        </section>

      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
