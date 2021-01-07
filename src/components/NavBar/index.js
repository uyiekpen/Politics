import React, { useState, useEffect } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBar.element";
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);

  const changeNav = () => {
    if (window.scrolY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <FaMagento style={{ marginRight: "10px" }} />
            BDCL
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="discover">Awards</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="services">Event</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="signup">Contact</NavLinks>
            </NavItem>
          </NavMenu>

          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign-In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
