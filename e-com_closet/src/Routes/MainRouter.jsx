// MainRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import LandingPage from '../Pages/LandingPage';
import ProductListPage from '../Pages/ProductListPage';
import WishlistPage from '../Pages/WishlistPage';
import Cart from '../Pages/CartPage';

// Context Providers
import CategoryProvider from '../Context/CategoryContext';
import PriceProvider from "../Context/PriceContext";
import WishlistProvider from '../Context/WishlistContext';
import CartProvider from '../Context/CartContext';
import BrandProvider from '../Context/BrandContext';
import SizeProvider from '../Context/SizeContext';
import FilterProvider from '../Context/FilterContext';
import SearchProvider from '../Context/SearchContext';
import FilteredProductsProvider from '../Context/FilteredProductContext';
import PaginationProvider from '../Context/PaginationContext';
import "bootstrap-icons/font/bootstrap-icons.css";

function MainRouter() {
  return (
    <SearchProvider>
      <PaginationProvider>
        <FilteredProductsProvider>
          <FilterProvider>
            <BrandProvider>
              <CategoryProvider>
                <PriceProvider>
                  <SizeProvider>
                    <WishlistProvider>
                      <CartProvider>
                        <Routes>
                          <Route path="/" element={<App />}>
                            <Route index element={<LandingPage />} />
                            <Route path="ProductListPage" element={<ProductListPage />} />
                            <Route path="WishlistPage" element={<WishlistPage />} />
                            <Route path="CartPage" element={<Cart />} />
                          </Route>
                        </Routes>
                      </CartProvider>
                    </WishlistProvider>
                  </SizeProvider>
                </PriceProvider>
              </CategoryProvider>
            </BrandProvider>
          </FilterProvider>
        </FilteredProductsProvider>
      </PaginationProvider>
    </SearchProvider>
  );
}

export default MainRouter;
