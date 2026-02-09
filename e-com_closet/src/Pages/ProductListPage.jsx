import '../assets/SCSS/Productlistpage.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from 'react-bootstrap';
import CategorySideBar from './CategorySideBar';
import Products from './Products';
import PaginationComponent from '../Components/Pagination'
import Totalproducts from '../Components/Totalproducts';



const ProductListPage = () => {
  return (
    <div>
     
      {/* ---------- Top Discount Banner ---------- */}
      <div className="discountbanner">
        <h6 className='text-light pt-4 ps-4'>Ladies Top</h6>
        <span className='text-light ps-4'>Slash Sale begins in April. Get up to 80% Discount on all products</span>
        <span className='text-light ms-1'><b>Read More</b></span>
        <div className='content'></div>
      </div>

     <div>

      <Totalproducts/>
     </div>
     

      <div>
        <Row className='product-listpage-row'>
          <Col md={4} className='categorysidebar-col'>
            <CategorySideBar/>
          </Col>
          <Col className='product-col'>
            <Products/>
          </Col>
        </Row>
            <div className="pagination-div">
             <PaginationComponent/>
            </div>
      </div>
      

    </div>
  )
}

export default ProductListPage
