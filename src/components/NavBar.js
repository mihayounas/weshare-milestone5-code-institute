import React, { useContext } from "react";
import { Navbar, Container, Nav, FormControl, Button } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);

  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );
  return (
    <Navbar
      className={styles.NavBar}
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      fixed="top"
    >
      <Container >
        <NavLink to="/">
          <h1>WeShare</h1>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink activeClassName={styles.Active} to="/">
              <i className="fas fa-home"></i> Home
            </NavLink>
            <NavLink activeClassName={styles.Active} to="/">
              <i className="fa fa-newspaper"></i> Read News
            </NavLink>
          </Nav>

          <Nav>
            <FormControl type="text" placeholder="Search Friends" />
            <Button type="submit">Go</Button>
          </Nav>
          {currentUser ? loggedInIcons : loggedOutIcons}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
