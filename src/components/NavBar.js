import React from 'react';
import {Navbar, Container, Nav, NavDropdown,Form,FormControl,Button} from "react-bootstrap";
import styles from "../styles/NavBar.module.css"

const NavBar = () => {
  return  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    <Container>
  <Navbar.Brand href="#home">WeShare</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#"><i className="fas fa-home"></i>Home</Nav.Link>
   
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </Nav> 
    <Nav>
    <Nav.Link href="#"><i className="fas fa-sign-in-alt"></i>SignIn</Nav.Link>
    <Nav.Link href="#"><i className="fas fa-user-plus"></i>SignUp</Nav.Link>
    </Nav>
    <Nav>
    <FormControl type="text" placeholder="Search" />
    <Button type="submit">Go</Button>
  </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
}

export default NavBar
