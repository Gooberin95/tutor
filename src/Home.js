import Services from './Services.js';
import React from 'react';
import microsoftLogo from './mavisOne.jpg';
import azureinfoOne from './mavisTwo.js';
import azureinfoTwo from './mavisThree.js';
import testpic from './mavisThree.jpg';
import azure from './mavisFour.png';
import profilePic from './mavisFive.jpg'
import logoTwo from './mavisSix.png';
import seattlePage from './mavisOne.jpg';
import Image from 'react-bootstrap/Image';
import personalSummaryOne from './personalSummaryOne.js';
import personalSummaryTwo from './personalSummaryTwo.js';
import personalSummaryThree from './personalSummaryThree.js';
import photoTwo from './mavisSeven.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
		  const parallaxStyle = {
			  		      backgroundImage: `url(${photoTwo})`,
			  		      minHeight: '500px',
			  		      backgroundAttachment: 'fixed',
			  		      backgroundPosition: 'center',
			  		      backgroundRepeat: 'no-repeat',
			  		      backgroundSize: 'cover',
			  		    };
		const parallaxStyleTwo = {
					
					      backgroundImage: `url(${seattlePage})`,
					      minHeight: '500px',
					      backgroundAttachment: 'fixed',
					      backgroundPosition: 'center',
					      backgroundRepeat: 'no-repeat',
					      backgroundSize: 'cover',
					    };

			 const parallaxStyleThree = {
				 		
				 			 backgroundImage: `url(${testpic})`,
				 		      minHeight: '500px',
				 		      backgroundAttachment: 'fixed',
				 		      backgroundPosition: 'center',
				 		      backgroundRepeat: 'no-repeat',
				 		      backgroundSize: 'cover',
				 		    };



		  return (
			  		
			  		      <div>

			  		        <div style={parallaxStyle} className="parallax" ></div>
			  				<Container fluid id="section1">
			  		  	<Row>
			  		 	<Col style={{height:"500px"}} className="d-flex justify-content-evenly align-items-center">
			  				  <Image height="150px" src={logoTwo}  />
			  				  <Image height="300px" width="250px" style={{objectFit: "cover"}} rounded src={profilePic}/>
			  		  	</Col>
			  		  	<Col className="d-flex justify-content-center align-items-center" >
			  		  		<Col>
			  		  	       <p>{personalSummaryOne}</p>
			  		  	       <p>{personalSummaryTwo}</p>
			  		  	       <p>{personalSummaryThree}</p>
			  		  </Col>
			  		  	</Col>
			  		  	</Row>
			  			</Container>
			  		   	
			  		  <div style={parallaxStyleTwo} className="parallax" id="section2"></div>
			  		 			<Container  id="section2" fluid>
			  		  	<Row>
			  		  	<Col className="d-flex justify-content-center align-items-center" >
			  		  		<Col>
			  		  	       <p>{azureinfoOne}</p>
			  		  	       <p>{azureinfoTwo}</p>
			  		  </Col> 
			  		  <Col style={{height:"500px"}} className="d-flex justify-content-evenly align-items-center">
			  				  <Image height="150px" src={azure}  />
			  				  <Image height="250px" width="350px" style={{objectFit: "cover"}} rounded src={microsoftLogo}/>
			  		  	</Col>
			  		  	</Col>
			  		  	</Row>
			  			</Container>
			            
			  		  <div style={parallaxStyleThree} className="parallax"></div>
			  			<Container fluid id="section3" >
			  		  <Services/>
			  				</Container>
			  		  <Container fluid style={{height: "50px"}}>
			  		  </Container>
			  		      </div>
			  		    );
};

export default Home;
