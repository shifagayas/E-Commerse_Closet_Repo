import React, { useContext } from "react";
import "../assets/SCSS/Categorysidebar.scss";
import { PriceContext } from "../Context/PriceContext";
import { CategoryContext } from "../Context/CategoryContext";
import { BrandContext } from "../Context/BrandContext";
import { SizeContext } from "../Context/SizeContext";
import { FilterContext } from "../Context/FilterContext";


const CategorySideBar = () => {
   const {priceRange, setPricerange}= useContext(PriceContext);
   const {filters, setFilters}= useContext(FilterContext);
   const {brands , setBrands} = useContext(BrandContext)
  const {sizes, setSizes} = useContext(SizeContext)
const { categories, setCategories } = useContext(CategoryContext);

 
  // Function For Handling Filters
  const handleFilterChange = (filter) =>{
    setFilters((prev)=>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter])
  }  

  // Function For Handling Brand  
  const handleBrandChange = (brand) => {
    setBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand])
  }

  // Function For Handling Category
  const handleCategoryChange = (category) => {
  setCategories((prev) =>
    prev.includes(category)
      ? prev.filter((c) => c !== category)
      : [...prev, category]
  );
};

  // Function For Handling Size 
  const handleSizeChange = (sizes) => {
    setSizes((prev) =>
      prev.includes(sizes) ? prev.filter((s) => s !== sizes) : [...prev, sizes])
  }

  

  return (
    <div className="sidebar bg-light">

      {/* ---------- PRICES RANGE ----------*/}
      <h4 className="mt-3">PRICES</h4>
      <p>Range: ${priceRange[0]} - ${priceRange[1]}</p>
      <input
        type="range"
        min="120"
        max="300"
        value={priceRange[1]}
        onChange={(e) => setPricerange([priceRange[0], Number(e.target.value), priceRange[1]])}

      />


      {/* ---------- AGE FILTERS ----------*/}
      <h4>FILTERS</h4>
      {["Women", "Ladies", "Girls", "Babies"].map((filter) => (
        <label key={filter} className="gap-5">
          <input
            type="checkbox"
            className="check-input" 
            checked={filters.includes(filter)}
            onChange={()=>handleFilterChange(filter)}/>
          {filter}
        </label>
      ))}


      {/* ---------- BRANDS FILTERS ----------*/}
      <div>
        <h4>BRANDS</h4>
        {["H&M", "Mark & Spencer", "Victoria’s Secret", "Dior", "Gucci", "Fendi", "Prada", "Versace", "Dolce & Gabbana", "Zara", "Chanel"].map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              className="check-input"
              checked={brands.includes(brand)}
              onChange={() => handleBrandChange(brand)} />
            {brand}
          </label>
        ))}
        <p className="ms-4 text-danger small mt-3">+ 234 more</p>
      </div>

      
      {/* ---------- CATEGORY FILTERS ----------*/}
      <div>
        <h4>CATEGORIES</h4>
        {["Dresses", "Tops", "Lingerie & Lounge Wear", "Blouse", "Vintage"].map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              className="check-input"
              checked={categories.includes(category)}
              onChange={() => handleCategoryChange(category)} />
            {category}
          </label>
        ))}
        <p className="ms-4 text-danger small mt-3">+ 4 more</p>
      </div>


      {/* ---------- SIZE FILTER ----------*/}
      <div>
        <h4>SIZE</h4>
        {["Medium", "Large", "Plus Size", "Sexy Plus Size"].map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              className="check-input"
              checked={sizes.includes(item)}
              onChange={() => handleSizeChange(item)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategorySideBar;
