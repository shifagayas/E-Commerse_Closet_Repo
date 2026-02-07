import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaSnapchatGhost, FaAndroid, FaApple  } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className='bg-light text-dark pt-5'>
        <Container>
            <Row>
                <Col md={2}>
                    <h6>COMPANY INFO</h6>
                    <ul className='list-unstyled'>
                        <li>About Laura's Closet</li>
                        <li>Social Responsibility</li>
                        <li>Affiliate</li>
                        <li>Fashion Blogger</li>
                    </ul>
                </Col>

                <Col md={2}>
                    <h6>HELP & SUPPORT</h6>
                    <ul className='list-unstyled'>
                        <li>Shipping Info</li>
                        <li>Returns</li>
                        <li>How to Order</li>
                        <li>How to Track</li>
                        <li>Size Chart</li>
                    </ul>
                </Col>
                <Col md={2}>
                    <h6>CUSTOMER CARE</h6>
                    <ul className='list-unstyled'>
                        <li>Contact Us</li>
                        <li>Payment</li>
                        <li>Bonus Point</li>
                        <li>Notices</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <Row className='gap-5'>
                        <Col md={4}>
                            <h6>SOCIALS</h6>
                            <div className="d-flex gap-2">
                                <Button variant="dark" className='rounded-circle d-flex justify-content-center align-items-center pt-4' style={{ width: "44px", height: "44px" }}><FaFacebookF size={27}/></Button>
                                <Button variant="dark" className='rounded-circle d-flex justify-content-center align-items-center' style={{ width: "44px", height: "44px" }}><FaTwitter size={27}/></Button>
                                <Button variant="dark" className='rounded-circle d-flex justify-content-center align-items-center' style={{ width: "44px", height: "44px" }}><FaInstagram size={27}/></Button>
                                <Button variant="dark" className='rounded-circle d-flex justify-content-center align-items-center' style={{ width: "44px", height: "44px" }}><FaTiktok size={27}/></Button>
                                <Button variant="dark" className='rounded-circle d-flex justify-content-center align-items-center' style={{ width: "44px", height: "44px" }}><FaSnapchatGhost size={27}/></Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <h6 className='ms-5 ps-5 '>PLATFORMS</h6>
                            <div className="d-flex gap-4 ">
                                <FaAndroid/>
                                <FaApple/>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>    
        </Container>
      </footer>
    </div>
  )
}

export default Footer
