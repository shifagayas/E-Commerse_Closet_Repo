import React from 'react'
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar>
        <Container fluid className="px-5">
            <Nav className='ms-5 gap-3'>
                <Nav.Link className="d-flex align-items-center gap-1">
                    New Arrivals
                    <Badge className='bg-danger rounded-1 ms-1 px-3 p-2'>#Fresh</Badge>
                </Nav.Link>
                <Nav.Link className='pe-3'>Dresses</Nav.Link>
                <Nav.Link className='pe-3'>Tops</Nav.Link>
                <Nav.Link className='pe-3'>Jackets</Nav.Link>
                <Nav.Link className='pe-3'>Lingerie & Lounge Wear</Nav.Link>
                <Nav.Link className='pe-3'>Beach Wear</Nav.Link>
                <Nav.Link className='pe-3'>Blouse</Nav.Link>
                <Nav.Link className='pe-3'>Denim</Nav.Link>
                <Nav.Link className='pe-2'>Vintage</Nav.Link>
                <Nav.Link className='pe-2'>Shoes</Nav.Link>
                <Nav.Link className='pe-2'>Sandals</Nav.Link>
                <Nav.Link className='pe-2'>Bags</Nav.Link>
                <Nav.Link className='pe-2'>Jewelries</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu
