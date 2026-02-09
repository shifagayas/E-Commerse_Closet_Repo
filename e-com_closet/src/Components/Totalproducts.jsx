import React, { useContext, useState } from 'react'
import '../assets/SCSS/Mediaquary.scss'
import { FilterContext } from "../Context/FilterContext";
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import {CategoryContext} from '../Context/CategoryContext';
import { FilteredProductsContext } from "../Context/FilteredProductContext";


const Totalproducts = () => {
  const { setCategories } = useContext(CategoryContext);

  const { filteredProducts } = useContext(FilteredProductsContext);

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("New Arrivals")

    const handleCategory = (category) => {
    setCategories([category]); 
    setCurrentPage(1); 
     setSelectedCategory(category === "NEW_ARRIVALS" ? "New Arrivals" : category) 
    navigate("/ProductListPage");
  };

  return (
    <div>
      {/* ---------- Showing total number of products ----------  */}
      <div className="total-number-of-products">

        <div className="total">
          Showing: <span>1 - 20</span> out of {""} <span>{filteredProducts.length}</span> Products
        </div>

        {/* ---------- Sort by Categories ---------- */}
        <div className="sort-by-category">
          <span>Sort by:</span>
          <Dropdown className="sort-dropdown">
            <Dropdown.Toggle id="dropdown-basic" className="sort-toggle">
              {selectedCategory}
            </Dropdown.Toggle>
            <Dropdown.Menu className="sort-menu">
              <Dropdown.Item onClick={() => handleCategory("NEW_ARRIVALS")}>New Arrivals</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategory("Dresses")}>Dresses</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCategory("Tops")}>Tops</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCategory("Jackets")}>Jackets</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCategory("Lingerie & Lounge Wear")}>Lingerie & Lounge Wear</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCategory("Beachwear")}>Beach Wear</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCategory("Blouse")}>Blouse</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCategory("Denims")}>Denim</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCategory("Vintage")}>Vintage</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCategory("shoes")}>Shoes</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCategory("sandals")}>Sandals</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCategory("bags")}>Bags</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleCategory("jewelries")}>Jewelries</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


        </div>

      </div>
      </div>
      )
}

      export default Totalproducts
