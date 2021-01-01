import React, {Component} from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown , Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import joystic from './files/joystic.png';

class HeaderX extends Component {
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar>
                    <img src={joystic} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                </Navbar>
                <Navbar.Brand href="#home">GameWorld</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"> Sign In</Nav.Link>
                        <button href="#" type="button" style={{backgroundColor:"#D8166F", color:"white" }} className="btn btn-light"> Sign Up
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default HeaderX;