import React, { Fragment } from 'react'
import ProductData from '../Data/Productdata'
import { Card, Row, Col } from 'react-bootstrap'

const Products = () => {
  return (
    <Fragment>
        <Row>
            {ProductData.map((product,index)=>{
                return(
                    <Col key={index} md={4} className='p-2'>
                        <Card className='rounded-0'>
                            <Card.Img className='p-0 rounded-0' variant='top' src={product.productImage}/>
                            <Card.Body className='p-0'>
                                <Card.Title>{product.description}</Card.Title>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <span className="fw-bold text-dark">${product.price}</span>
                                        <span className="text-muted text-decoration-line-through ms-2">${product.discountPrice}</span>
                                    </div>
                                    <div>{product.numberOfOrders} orders</div>
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
