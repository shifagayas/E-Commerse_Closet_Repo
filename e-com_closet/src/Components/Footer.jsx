import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/SCSS/footer.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import AliPay from '../assets/images/AliPay.jpg'
import Amazon from '../assets/images/Amazon.jpg'
import ApplePay from '../assets/images/ApplePay.png'
import BitPay from '../assets/images/BitPay.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        {/* ---------------- TOP SECTION ---------------- */}
        <Row className="footer-top">
          {/* COMPANY INFO */}
          <Col md={2} sm={4} xs={12}>
            <h6>COMPANY INFO</h6>
            <ul>
              <li>About Laura’s Closet</li>
              <li>Social Responsibility</li>
              <li>Affiliate</li>
              <li>Fashion Blogger</li>
            </ul>
          </Col>

          {/* HELP & SUPPORT */}
          <Col md={2} sm={4} xs={12}>
            <h6>HELP & SUPPORT</h6>
            <ul>
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>How to Order</li>
              <li>How to Track</li>
              <li>Size Chart</li>
            </ul>
          </Col>

          {/* CUSTOMER CARE */}
          <Col md={2} sm={6} xs={12}>
            <h6>CUSTOMER CARE</h6>
            <ul>
              <li>Contact Us</li>
              <li>Payment</li>
              <li>Bonus Point</li>
              <li>Notices</li>
            </ul>
          </Col>

          {/* SOCIALS */}
          <Col md={2} sm={6} xs={12}>
            <h6>SOCIALS</h6>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaTiktok />
              <FaSnapchatGhost />
            </div>
          </Col>

          {/* NEWSLETTER */}
          <Col md={4} sm={12} xs={12} className="newsletter">
            <h6>SIGN UP FOR LAURA'S CLOSET STYLE NEWS</h6>
            <Form className="newsletter-input">
              <Form.Control type="email" placeholder="Your email" />
              <Button type="submit">SUBSCRIBE</Button>
            </Form>
            <p>
              By clicking the SUBSCRIBE button, you are agreeing to our
              <span> Privacy & Cookie Policy</span>
            </p>
          </Col>
        </Row>

        {/* ---------------- BOTTOM SECTION ---------------- */}
        <Row className="footer-bottom mt-4 pt-3">
          <Col xs={12} md={4}>
            <p>©2010-2022 Laura’s Closet All Rights Reserved</p>
          </Col>

          <Col xs={12} md={4} className="footer-links">
            <span>Privacy Center</span>
            <span>Privacy & Cookie Policy</span>
            <span>Manage Cookies</span>
            <span>Terms & Conditions</span>
            <span>Copyright Notice</span>
            <span>Imprint</span>
          </Col>

          <Col xs={12} md={4} className="payments">
            <span>WE ACCEPT</span>
            <div className="payment-icons">
              <img src="/payments/visa.png" alt="Visa" />
              <img src="/payments/mastercard.png" alt="Mastercard" />
              <img src="/payments/paypal.png" alt="Paypal" />
              <img src="/payments/gpay.png" alt="Google Pay" />
              <img src={ApplePay} alt="Apple Pay" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
