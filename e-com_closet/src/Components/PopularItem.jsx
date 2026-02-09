import React from 'react'
import BufferJacket from '../assets/images/BufferJacket.png'
import gymwear from '../assets/images/gymwear.png'
import Top from '../assets/images/Top.png'
import fullsleevetop from '../assets/images/fullsleevetop.png'
import { Row, Col, Card } from 'react-bootstrap'

const products = [
    {
        "id": 1,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "price": 120.23,
        "discountPrice": 120.23,
        "productImage": BufferJacket,
    },
    {
        "id": 2,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "price": 100.23,
        "discountPrice": 90.23,
        "productImage": Top,
    },
    {
        "id": 3,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": fullsleevetop,
    },
    {
        "id": 4,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "price": 120.23,
        "discountPrice": 105.23,
        "productImage": gymwear,
    },
]

export default function PopularItem() {
  return (
    <div className="productcardcontainer">

      <h4>POPULAR THIS WEEKS</h4>

      <Row>
        {products.map((item) => (
          <Col key={item.id} md={3} className="pb-3">

            <Card className="rounded-0 product-card">

              <Card.Img
                className="rounded-0 cardimage"
                variant="top"
                src={item.productImage}
              />

              <Card.Body className="p-3">
                <Card.Text style={{ fontWeight: 600 }}>
                  {item.description}
                </Card.Text>

                <div className="d-flex gap-2 align-items-center">
                  <span className="fw-bold text-dark">
                    ${item.discountPrice}
                  </span>

                  <span className="text-muted text-decoration-line-through">
                    ${item.price}
                  </span>

                  <span className="fw-bold text-dark ps-4 addtobasket"> + Add to Basket </span>
                </div>
              </Card.Body>

            </Card>

          </Col>
        ))}
      </Row>

    </div>
  );
}

