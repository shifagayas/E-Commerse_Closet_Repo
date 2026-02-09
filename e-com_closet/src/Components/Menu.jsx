import React, { useContext } from 'react';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { CategoryContext } from '../Context/CategoryContext';
import { PaginationContext } from '../Context/PaginationContext';

const Menu = () => {

  const { setCategories } = useContext(CategoryContext);
  const { setCurrentPage } = useContext(PaginationContext);
  const navigate = useNavigate();

  const handleCategory = (category) => {
    setCategories([category]);
    setCurrentPage(1);          // ✅ pagination reset
    navigate("/ProductListPage");
  };

  return (
    <Navbar className='menu'>
      <Container fluid>
        <Nav>

          <Nav.Link className="d-flex menu-items gap-1" onClick={() => {setCategories(["NEW_ARRIVALS"]);navigate("/ProductListPage");}}>
            New Arrivals
            <Badge className='bg-danger rounded-1 px-3 p-2'>#Fresh</Badge>
          </Nav.Link>

          <Nav.Link className='menu-items' onClick={() => {setCategories(["Dresses"]);navigate("/ProductListPage");}}>Dresses</Nav.Link>
          <Nav.Link className='menu-items' onClick={() => {setCategories(["Tops"]);navigate("/ProductListPage");}}>Tops</Nav.Link>
          <Nav.Link className='menu-items' onClick={() => {setCategories(["Jackets"]);navigate("/ProductListPage");}}>Jackets</Nav.Link>
          <Nav.Link className='menu-items' onClick={() => {setCategories(["Lingerie & Lounge Wear"]);navigate("/ProductListPage");}}>Lingerie & Lounge Wear</Nav.Link>
          <Nav.Link className='menu-items' onClick={() => {setCategories(["Beachwear"]);navigate("/ProductListPage");}}>Beach Wear</Nav.Link>
          <Nav.Link className='menu-items' onClick={() => {setCategories(["Blouse"]);navigate("/ProductListPage");}}>Blouse</Nav.Link>
          <Nav.Link className='menu-items' onClick={() => {setCategories(["Denims"]);navigate("/ProductListPage");}}>Denim</Nav.Link>
          <Nav.Link className='menu-items' onClick={() => {setCategories(["Vintage"]);navigate("/ProductListPage");}}>Vintage</Nav.Link>
          <Nav.Link className='menu-items' onClick={() => {setCategories(["shoes"]);navigate("/ProductListPage");}}>Shoes</Nav.Link>
          <Nav.Link className='menu-items' onClick={() => {setCategories(["sandals"]);navigate("/ProductListPage");}}>Sandals</Nav.Link>
          <Nav.Link className='menu-items' onClick={() => {setCategories(["bags"]);navigate("/ProductListPage");}}>Bags</Nav.Link>
          <Nav.Link className='menu-items' onClick={() => {setCategories(["jewelries"]);navigate("/ProductListPage");}}>Jewelries</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;


