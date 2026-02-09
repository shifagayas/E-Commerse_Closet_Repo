import React, { Fragment, useContext, useEffect } from 'react'
import ProductData from '../Data/Productdata'
import Totalproducts from "../Components/Totalproducts";
import { Card, Row, Col, Button, Badge } from 'react-bootstrap'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { CategoryContext } from '../Context/CategoryContext';
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";
import { BrandContext } from '../Context/BrandContext';
import { SizeContext } from '../Context/SizeContext';
import { FilterContext } from '../Context/FilterContext';
import { SearchContext } from '../Context/SearchContext';
import { FilteredProductsContext } from "../Context/FilteredProductContext";
import { PaginationContext } from '../Context/PaginationContext';
// import PaginationComponent from '../Components/Pagination';


const Products = () => {

    const { categories } = useContext(CategoryContext);
    const { brands } = useContext(BrandContext);
    const { sizes } = useContext(SizeContext);
    const { filters } = useContext(FilterContext);
    const { search } = useContext(SearchContext);
    const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const { setFilteredProducts } = useContext(FilteredProductsContext);
    const { currentPage, productsPerPage, setCurrentPage } = useContext(PaginationContext);



    const FilteredProducts = ProductData.filter((product) => {

        const isNewArrivals = categories.includes("NEW_ARRIVALS");

        const categoryMatch = categories.length === 0 || isNewArrivals || categories.includes(product.category);

        const newArrivalMatch = !isNewArrivals || product.isNewArrival === true;

        const brandMatch = brands.length === 0 || brands.includes(product.brand);

        const sizeMatch = sizes.length === 0 || sizes.includes(product.size);

        const filterMatch = filters.length === 0 || filters.includes(product.filter);

        const searchMatch = search.trim() === "" || product.description.toLowerCase().includes(search.toLowerCase());

        return (categoryMatch && newArrivalMatch && brandMatch && sizeMatch && filterMatch && searchMatch);
    });


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const paginatedProducts = FilteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );



  useEffect(() => {
  if (FilteredProducts.length >= 0) {
    setFilteredProducts([...FilteredProducts]); 
    setCurrentPage(1);
  }
}, [categories, brands, sizes, filters, search]);


    return (
        <Fragment>

            <Row>
                {paginatedProducts.map((product) => {

                    const isInWishlist = wishlist.some(item => item.id === product.id);
                    const isInCart = cart.some(item => item.id === product.id);



                    const handleWishlistToggle = () => {
                        if (isInWishlist) {
                            removeFromWishlist(product.id);
                        } else {
                            addToWishlist(product);
                        }
                    };

                    const handleCartToggle = () => {

                        if (isInCart) {
                            removeFromCart(product.id);
                        } else {
                            addToCart(product);
                        }
                    };

                    return (
                        <Col key={product.id} className='p-0 pb-3'>

                            {/* ---------- Card ---------- */}
                            <Card className='rounded-0 product-card'>

                                <div className='position-relative'>
                                    <Card.Img className='p-0 rounded-0 ' style={{ height: "370px", objectFit: "cover" }} variant='top' src={product.productImage} />

                                    {product.isNewArrival && (
                                        <Badge className='position-absolute rounded-0 bottom-0 end-0 bg-dark text-white fw-normal p-2 m-3'>New Arrivals</Badge>
                                    )}
                                    <Button className='position-absolute rounded-0 top-0 end-0 bg-dark border border-dark pe-2 ps-2 pb-1 pt-1 m-3' style={{ opacity: 0.5 }} onClick={handleWishlistToggle}>
                                        {isInWishlist ? (
                                            <FaHeart size={18} color="white" />
                                        ) : (
                                            <FaRegHeart size={18} color="white" />
                                        )}
                                    </Button>
                                </div>

                                {/* ---------- Card Body ---------- */}

                                <Card.Body className='p-3'>
                                    <Card.Text style={{ fontWeight: '600' }}>{product.description}</Card.Text>  {/* Card text */}

                                    {/* Div for discount price , number of orders */}
                                    <div className="d-flex justify-content-between align-items-center">

                                        <span className="fw-bold text-dark">${product.price}</span>
                                        <span>{product.numberOfOrders} orders</span>
                                    </div>

                                    {/* Div for strick through price , add to basket */}
                                    <div className="d-flex justify-content-between align-items-center">

                                        <span className="text-muted text-decoration-line-through ">${product.discountPrice}</span>
                                        <span className={`fw-bold ${isInCart ? "text-success" : "text-dark"}`} style={{ cursor: "pointer" }} onClick={handleCartToggle}> {isInCart ? "In Basket" : "+ Add to Basket"}</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

            </Row>
        </Fragment>
    )
}

export default Products
