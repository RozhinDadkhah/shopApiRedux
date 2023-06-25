import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'

const NavbarSection = () => {
    const cartProducts = useSelector(state => state.cart)
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100" style={{zIndex:999}}>
                <Container>
                    <Navbar.Brand as={Link} to="/">Redux toolkit</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home" as={Link}>Products</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='d-flex justify-content-end'>
                        <Navbar.Text className='px-2'>
                            <Nav.Link to='/cart' as={Link}><FaShoppingCart className='mx-2'/>{cartProducts.length}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarSection