import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";
import { Card, Row, Col, Badge } from "react-bootstrap";
import '../assets/SCSS/WishListPage.scss'
import Totalproducts from '../Components/Totalproducts'

const WishlistPage = () => {

   const { wishlist, removeFromWishlist } = useContext(WishlistContext);
     const { addToCart } = useContext(CartContext);

     const handleAddToBasket = (product) => {
  addToCart(product);
  removeFromWishlist(product.id);
};
  return (
    <div className="wishlist-main-div">
        <Totalproducts/>
      <Row>
      {wishlist.map((product) => (
        <Col key={product.id} className="p-0 pb-3">
          <Card className="rounded-0 product-card">

            <div className="position-relative">
              <Card.Img
                className="p-0 rounded-0"
                style={{ height: "370px", objectFit: "cover" }}
                variant="top"
                src={product.productImage}
              />
              <Badge className="position-absolute bottom-0 end-0 text-dark border border-dark rounded-0 bg-transparent p-2 m-3 wishlist-remove-badge" onClick={()=>removeFromWishlist(product.id)}>
                Remove
              </Badge>
            </div>

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
                <span className="fw-bold" style={{ cursor: "pointer" }} onClick={() => handleAddToBasket(product)}>+ Add to Basket</span>
              </div>
            </Card.Body>

          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default WishlistPage

