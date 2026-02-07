import { Navbar, Container, Nav, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'
import { GrBasket } from "react-icons/gr";


function Navbarcomponent() {
    return (
        <>
            <Navbar className="border-bottom py-3 bg-light">
                <Container fluid className="px-5">

                    {/* Brand Name */}
                    <div className='d-flex align-items-center px-2' style={{ width: "25%" }}>
                        <Navbar.Brand className='ms-5'>Laura's Closet</Navbar.Brand>
                    </div>

                    {/* Search Bar */}
                    <div className="d-flex justify-content-center"  style={{ width: "50%" }}>
                    <Form style={{ width: "100%", maxWidth: "250px" }}>
                        <InputGroup>
                            <InputGroup.Text className='bg-transparent border-0'>
                                <FaSearch className='text-secondary mt-1' size={14} />
                                <Form.Control
                                    type='search'
                                    placeholder='Search for an item...'
                                    className='border-0 border-bottom rounded-0 ms-1 p-0 bg-light' />
                            </InputGroup.Text>
                        </InputGroup>
                    </Form>
                    </div>

                    {/* Other Options */}
                    <Nav className='d-flex align-items-center justify-content-end gap-4' style={{ width: "35%", paddingRight: "3rem" }}>
                        <Nav.Link>Store</Nav.Link>
                        <Nav.Link>Account</Nav.Link>
                        <Nav.Link>Wish List</Nav.Link>
                        <Nav.Link>Basket <GrBasket className='mb-1 ms-1' /></Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}

export default Navbarcomponent;