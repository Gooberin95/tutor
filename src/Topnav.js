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
		  		   <Navbar.Brand style={{color: "white"}} >
		  	  <img

		  	  alt=""
		  	  src={logo}
		  	  width="50"
		  	  height="50"
		  	  />
		  	  {' '}
		  	  Mavis Simpson</Navbar.Brand>
		  		    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		  		    <Navbar.Collapse id="basic-navbar-nav">
		  		  <Nav className="me-auto">
		  			<Nav.Link><ScrollLink to="section1" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">About</ScrollLink></Nav.Link>
		  			<Nav.Link><ScrollLink to="section2" spy={true} smooth={true} offset={300} duration={500} className="nav-link">Fashion Consulting</ScrollLink></Nav.Link>
		  	                <Nav.Link><ScrollLink to="section3" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">Event Planning</ScrollLink></Nav.Link>
		  		  	  </Nav>
		  		  	  </Navbar.Collapse>
		  		  	  </Container>
		  		  	  </Navbar>

		  		  		</>
		  		  	)
};

export default Topnav;
