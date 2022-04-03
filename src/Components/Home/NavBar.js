import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../HomeStyle/NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="NavBar1">
        <Container>
          <Navbar.Brand href="#home">
            <div className="menu">
              <span className="eros">EROS</span>
              <span className="ads">ADS</span>
            </div>
            <span className="barsIcon">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </Navbar.Brand>
          <div className="item4">
            <span className="eros">EROS</span>
            <span className="ads">ADS</span>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto pt-1">
              <Nav.Link href="#features" className="item1">
                Contact & Support
              </Nav.Link>
              <Nav.Link href="#pricing" className="item2">
                Pricing
              </Nav.Link>
              <Nav.Link href="#pricinga" className="item3">
                F.A.Q.
              </Nav.Link>
              <Nav.Link href="#pricingaa" className="item444">
                My Account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
