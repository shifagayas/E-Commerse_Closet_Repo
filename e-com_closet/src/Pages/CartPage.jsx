import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FaRegHeart, FaHeart } from 'react-icons/fa'

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
   const {  wishlist, addToWishlist } = useContext(WishlistContext);
   
   const handleMoveToWishlist = (product) => {
  addToWishlist(product);     
  removeFromCart(product.id);
};

  return (
  <div className="cart-main-div">
    <Row>
      {cart.map((product) => {

        const isInWishlist = wishlist.some(
          item => item.id === product.id
        );

        return (
          <Col key={product.id} className="p-0 pb-3">
            <Card className="rounded-0 product-card">

              {/* Image + Heart */}
              <div className="position-relative">
                <Card.Img
                  className="p-0 rounded-0"
                  style={{ height: "370px", objectFit: "cover" }}
                  variant="top"
                  src={product.productImage}
                />

                <Button
                  className="position-absolute rounded-0 bottom-0 end-0 bg-dark border border-dark pe-2 ps-2 pb-1 pt-1 m-3"
                  style={{ opacity: 0.5 }}
                  onClick={() => handleMoveToWishlist(product)}
                >
                  {isInWishlist ? (
                    <FaHeart size={18} color="white" />
                  ) : (
                    <FaRegHeart size={18} color="white" />
                  )}
                </Button>
              </div>

              {/* Card Body */}
              <Card.Body className="p-3">
                <Card.Text style={{ fontWeight: "600" }}>
                  {product.description}
                </Card.Text>

                <div className="d-flex justify-content-between">
                  <span className="fw-bold">${product.price}</span>
                  <span>{product.numberOfOrders} orders</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span className="text-decoration-line-through">
                    ${product.discountPrice}
                  </span>
                  <span
                    className="fw-bold text-dark"
                    style={{ cursor: "pointer" }}
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </span>
                </div>
              </Card.Body>

            </Card>
          </Col>
        );
      })}
    </Row>
  </div>
);

};

export default Cart;
