import React from 'react';
import {Navbar, Container, Nav, NavDropdown,FormControl,Button} from "react-bootstrap";
import styles from "../styles/NavBar.module.css"



const NavBar = () => {
  return  <Navbar className= {styles.NavBar}  collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
    <Container className={styles.Tabs}>
   <Navbar.Brand href="#home"><h1>WeShare</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="mr-auto">
    <Nav.Link href="#"><i className="fas fa-home"></i> Home</Nav.Link>
    <Nav.Link href="#"><i class="fa fa-newspaper"></i> Read News</Nav.Link>
   
      </Nav> 
    <Nav>
    <Nav.Link href="#"><i className="fas fa-sign-in-alt"></i>SignIn</Nav.Link>
    <Nav.Link href="#"><i className="fas fa-user-plus"></i>SignUp</Nav.Link>
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
