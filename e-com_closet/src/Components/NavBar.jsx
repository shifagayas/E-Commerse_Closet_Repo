import { useContext } from 'react';
import { Navbar, Container, Nav, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'
import { GrBasket } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../Context/SearchContext';


function Navbarcomponent() {

    const navigate = useNavigate();
    const { search, setSearch } = useContext(SearchContext);

    return (
        <>
            <Navbar className="border-bottom py-3 bg-light Navbar">
                <Container fluid className="px-5">

                    {/* Brand Name */}
                    <div className='d-flex align-items-center'>
                        <Navbar.Brand>Laura's Closet</Navbar.Brand>
                    </div>

                    {/* Search Bar */}
                    <div className="d-flex justify-content-center search-bar-div">
                        <Form>
                            <InputGroup>
                                <InputGroup.Text className='bg-transparent border-0'>
                                    <FaSearch className='text-secondary mt-1 search-icon' size={14} />
                                    <Form.Control
                                        type='search'
                                        placeholder='Search for an item...'
                                        className='border-0 border-bottom rounded-0 ms-1 p-0 bg-light search'
                                        value={search} 
                                        onChange={(e)=>{setSearch(e.target.value)}}/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </div>

                    {/* Other Options */}
                    <div className='Nav-last-options'>

                        <Nav className='d-flex align-items-center justify-content-end gap-4 '>
                            <Nav.Link>Store</Nav.Link>
                            <Nav.Link>Account</Nav.Link>
                            <Nav.Link onClick={()=>{navigate("/WishlistPage")}}>Wish List</Nav.Link>
                            <Nav.Link onClick={()=>{navigate("/CartPage")}}>Basket <GrBasket className='mb-1 ms-1' /></Nav.Link>
                        </Nav>

                    </div>


                </Container>
            </Navbar>
        </>
    )
}

export default Navbarcomponent;