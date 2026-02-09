import React from 'react'
import '../assets/SCSS/Landingpage.scss'
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingpageGrid from '../Components/LandingpageGrid'
import PopularItem from '../Components/PopularItem';
import Bannerimage from '../assets/images/Bannerimage.png';
import Chanel from '../assets/images/Chanel.png'
import DandG from '../assets/images/DandG.png'
import Dior from '../assets/images/Dior.png'
import Versace from '../assets/images/Versace.png'
import Zara from '../assets/images/Zara.png'
import Gucci from '../assets/images/Gucci.png'
import Landingpagesummercollection from '../Components/Landingpagesummercollection';



const LandingPage = () => {
  return (
    <>
   
      {/* ---------- First Banner ---------- */}
      <section className='New-Arrivals-Banner'>

        {/* ---------- offer section ---------- */}
        <div className="left-section">
         <div className='diagonal-bg'>
           <div className="offer-content">
            <h1 className='offer-text'>Get up to 30% off </h1>
            <h1 className='text-new-arrival'>New Arrivals</h1>
            <p>Introducing our latest collection of products</p>
            <button className='Bannerbutton'>PLACE YOUR ORDER<i className="bi bi-arrow-right"></i></button>
          </div>
         </div>
        </div>
        
        {/* ---------- Banner's right side women's image ---------- */}
        <div className="right-section">
          <div className="right-circle"/>
          <img className="right-side-image" src={Bannerimage} alt="Women with long coat" />
        </div>
      </section>


      {/* ---------- Main Section ---------- */}
      <section className='Main-section'>

        {/* ---------- This Weeks Highlights Section ---------- */}
        <section className='Highlights'>
          <div className="week-highlight-grid">
            <LandingpageGrid/>
          </div>
        </section>


        {/* ---------- Popular this week Section ---------- */}
        <section>
          <PopularItem/>
        </section>


        {/* ---------- Brands for you Section ---------- */}
        <section className="Brands d-flex justify-content-center align-items-center">
          <div className="brand-div d-flex flex-column justify-content-between">

            <h4 className='Brand-text text-center'>BRANDS FOR YOU</h4>
            
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
          <Landingpagesummercollection/>

        </section>
      </section>

    </>
  )
}

export default LandingPage
