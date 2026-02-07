import React from 'react'
import '../assets/SCSS/ProductListPage.scss'
import "bootstrap/dist/css/bootstrap.min.css";


const ProductListPage = () => {
  return (
    <div>

      {/* ---------- Top Discount Banner ---------- */}
      <div className="discountbanner m-5 mx-auto">
        <h6 className='text-light pt-4 ps-4'>Ladies Top</h6>
        <span className='text-light ps-4'>Slash Sale begins in April. Get up to 80% Discount on all products</span>
        <span className='text-light ms-1'><b>Read More</b></span>
      </div>

      {/* ---------- Showing total number of products ---------- */}
      <div className="total-number-of-products mt-3">

        <div className="total">
          Total Products: 120
        </div>

      {/* ---------- Sort by Categories ---------- */}
        <div className="sort-by-category">

        </div>
      </div>


      

    </div>
  )
}

export default ProductListPage
