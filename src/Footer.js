import React from 'react';
import Nav from "react-bootstrap/Nav"
import { SiUpwork } from "react-icons/si"
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi"; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Footer () {
  return (
		  	  <>
	  		<div className="fixed-bottom" >
			        <Navbar style={{backgroundColor:" #FFCC99"}}>
			        <Container className="justify-content-center">
	  		<Nav.Link  style={{marginRight: "20px", marginLeft: "20px", color: "white"}}   href="https://www.linkedin.com/in/brandon-ruiz1/"><FaLinkedin/></Nav.Link>
	                <Nav.Link  style={{marginRight: "20px", marginLeft: "20px", color: "white"}}href= "https://www.youtube.com/channel/UC5y5JHcpvCzgcy04QcvLLBg"><IoLogoYoutube/></Nav.Link>
	                <Nav.Link  style={{marginRight: "20px", marginLeft: "20px", color: "white"}} href="https://github.com/Gooberin95"><FiGithub/></Nav.Link>
	  		<Nav.Link   style={{marginRight: "20px", marginLeft: "20px", color: "white"}} href= "https://www.upwork.com/freelancers/~01891a7ab82fb53898?viewMode=1"><SiUpwork/></Nav.Link>
		  	 
			        </Container>
			        </Navbar>
			</div>



		  		</>
		  	)
};

export default Footer;
