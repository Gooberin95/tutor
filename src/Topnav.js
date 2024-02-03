import logo from './Original.png';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {  Link as ScrollLink } from "react-scroll";
function Topnav() {
	  return (
		  		  <>
		  		 <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
		  		  <Container >
		  		   <Navbar.Brand style={{color: "#D8FF91"}} >
		  	  <img

		  	  alt=""
		  	  src={logo}
		  	  width="50"
		  	  height="50"
		  	  />
		  	  {' '}
		  	  Brandon Ruiz</Navbar.Brand>
		  		    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		  		    <Navbar.Collapse id="basic-navbar-nav">
		  		  <Nav className="me-auto">
		  			<Nav.Link><ScrollLink to="section1" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">About</ScrollLink></Nav.Link>
		  			<Nav.Link><ScrollLink to="section2" spy={true} smooth={true} offset={300} duration={500} className="nav-link">Why Cloud</ScrollLink></Nav.Link>
		  	                <Nav.Link><ScrollLink to="section3" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">Services</ScrollLink></Nav.Link>
		  		  	  </Nav>
		  		  	  </Navbar.Collapse>
		  		  	  </Container>
		  		  	  </Navbar>

		  		  		</>
		  		  	)
};

export default Topnav;
