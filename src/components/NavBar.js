import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/posts/create"
      >
        <i className="far fa-plus-square"></i>Add post
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to="/stories/create"
      >
        <i className="far fa-plus-square"></i>Add Story
      </NavLink>
    </>

  );
  const loggedInIcons = (
    <>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Your Profile" height={40} />
      </NavLink>
    </>
  );
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
    <Navbar className={styles.NavBar} expanded={expanded} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand id="logo">
            <h1>WeShare</h1>
          </Navbar.Brand>
        </NavLink>

        {currentUser && addPostIcon}

        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">

            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/news">
              <i className="fa-regular fa-newspaper"></i>News
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}

          </Nav>


        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
};
export default NavBar;
