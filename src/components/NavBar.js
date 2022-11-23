import React from 'react';
import {Navbar, Container, Nav, FormControl,Button} from "react-bootstrap";
import styles from "../styles/NavBar.module.css"
import { NavLink } from "react-router-dom"



const NavBar = () => {
  return  <Navbar className= {styles.NavBar}  collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
    <Container>
    <NavLink to="/">
   <Navbar.Brand href="#home"><h1>WeShare</h1></Navbar.Brand>
   </NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="mr-auto">
    <NavLink to="home">
    <Nav.Link href="#"><i className="fas fa-home"></i> Home</Nav.Link>
    </NavLink>
    <NavLink to="/">
    <Nav.Link href="#"><i className="fa fa-newspaper"></i> Read News</Nav.Link>
    </NavLink>

      </Nav> 
    <Nav>
    <NavLink to="/signin">
    <Nav.Link href="#"><i className="fas fa-sign-in-alt"></i>SignIn</Nav.Link>
    </NavLink>
    <NavLink to="/signup">
    <Nav.Link href="#"><i className="fas fa-user-plus"></i>SignUp</Nav.Link>
    </NavLink>
    </Nav>
    <Nav>
    <FormControl type="text" placeholder="Search Friends" />
    <Button type="submit">Go</Button>
  </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
}

export default NavBar
