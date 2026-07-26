import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router";


export default function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigate=useNavigate();

    function logout(){
        localStorage.clear();
        navigate('/login');
    }

    return <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Nav.Link as={Link} to="/">E-commerce Dashboard</Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {
                        localStorage.getItem('user-info') ?
                            <Nav.Link as={Link} to="/add">Add Product</Nav.Link>
                            :
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </>
                    }
                </Nav>
               {
                localStorage.getItem('user-info') &&  <NavDropdown title={user && user.name} id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1" onClick={logout}>Logout</NavDropdown.Item>                    
                </NavDropdown>
               }
            </Navbar.Collapse>
        </Container>
    </Navbar>
}







