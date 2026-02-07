import React from 'react'
import '../assets/SCSS/Landingpage.scss'
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card} from 'react-bootstrap';
import BufferJacket from '../assets/images/BufferJacket.png'
import Top from '../assets/images/Top.png'
import fullsleevetop from '../assets/images/fullsleevetop.png'
import gymwear from '../assets/images/gymwear.png'
import Bannerimage from '../assets/images/Bannerimage.png';
import summercollectionbanner from '../assets/images/summercollectionbanner.png'
import Chanel from '../assets/images/Chanel.png'
import DandG from '../assets/images/DandG.png'
import Dior from '../assets/images/Dior.png'
import Versace from '../assets/images/Versace.png'
import Zara from '../assets/images/Zara.png'
import Gucci from '../assets/images/Gucci.png'


const LandingPage = () => {
  return (
    <>
      {/* ---------- First Banner ---------- */}
      <section className='New-Arrivals-Banner'>

        {/* ---------- offer section ---------- */}
        <div className="left-section">
          <div className="offer-content">
            <h1 className='offer-text'>Get up to 30% off </h1>
            <h1 className='text-new-arrival'>New Arrivals</h1>
            <p>Introducing our latest collection of products</p>
            <button className='Bannerbutton'>PLACE YOUR ORDER<i className="bi bi-arrow-right"></i></button>
          </div>
        </div>
        
        {/* ---------- Banner's right side women's image ---------- */}
        <div className="right-section">
          <div className="right-circle"></div>
          <img className="right-side-image" src={Bannerimage} alt="Women with long coat" />
        </div>
      </section>


      {/* ---------- Main Section ---------- */}
      <section className='Main-section'>

        {/* ---------- This Weeks Highlights Section ---------- */}
        <section className='Highlights'>
          <div className="week-highlight-grid"></div>
        </section>


        {/* ---------- Popular this week Section ---------- */}
        <section className='Popular-items-section'>
          <div className="Popular-items d-flex flex-column justify-content-between h-100">

            <h4 className='Popular-section-heading text-center'>POPULAR THIS WEEK</h4>
            <hr style={{ width: "88px", marginLeft: "580px", marginTop: "-10px" }} />

            <div className="items-card d-flex justify-content-end align-items-end gap-5 pe-">
              <Card style={{ width: '18rem' }} className='rounded-0 border-0'>
                <Card.Img variant="top" src={BufferJacket} className='rounded-0 ' />
                <Card.Body className='p-0'>
                  <Card.Text className='m-0 mt-1 mb-1'>
                    Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='rounded-0 border-0' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Top} className='rounded-0 '/>
                <Card.Body className='p-0'>
                  <Card.Text className='m-0 mt-1 mb-1'>
                    Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='rounded-0 border-0' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={fullsleevetop} className='rounded-0 ' />
                <Card.Body className='p-0'>
                  <Card.Text className='m-0 mt-1 mb-1'>
                    Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='rounded-0 border-0' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={gymwear} className='rounded-0 ' />
                <Card.Body className='p-0'>
                  <Card.Text className='m-0 mt-1 mb-1'>
                    Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

        </section>


        {/* ---------- Brands for you Section ---------- */}
        <section className="Brands d-flex justify-content-center align-items-center">
          <div className="brand-div d-flex flex-column justify-content-between">

            <h4 className='Brand-text text-center'>BRANDS FOR YOU</h4>
            <hr style={{ width: "88px", marginLeft: "330px", marginTop: "-10px" }} />

            <div className="Brandlogo d-flex justify-content-end align-items-end gap-5 p-3 pb-0">
              <img src={Chanel} alt="Chanel" />
              <img src={DandG} alt="D&G" />
              <img src={Dior} alt="Dior" />
              <img src={Versace} alt="Versace" />
              <img src={Zara} alt="Zara" />
              <img src={Gucci} alt="Gucci" />
            </div>

          </div>
        </section>


        {/* ---------- Summer Collection Section ---------- */}
        <section className='Summer-Collection'>
          <div className="Summer-Content">
            <img src={summercollectionbanner} alt="summer collection" />
            <div className='inner-text'>
              <h2>SUMMER COLLECTIONS</h2>
            </div>
          </div>

            {/* <Card className='rounded-0 border-0' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={summercollectionbanner} className='Summer-card-image rounded-0 ' />
                
              </Card> */}

        </section>
      </section>

    </>
  )
}

export default LandingPage
