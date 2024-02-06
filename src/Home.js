import React from 'react';
import coolPattern from './coolPattern.jpg';
import eventPic from './eventPic.jpg';
import personalSummaryOne from './personalSummaryOne.js';
import personalSummaryThree from './personalSummaryThree.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mavisMagazine from './mavisMagazine.jpg';
import guyMagazine from './guyMagazine.jpg';
import Image from 'react-bootstrap/Image';
const Home = () => {
		const parallaxStyleTwo = {
					
					      backgroundImage: `url(${eventPic})`,
					      minHeight: '500px',
					      backgroundAttachment: 'fixed',
					      backgroundPosition: 'center',
					      backgroundRepeat: 'no-repeat',
					      backgroundSize: 'cover',
					    };

			 const parallaxStyleThree = {
				 		
				 			 backgroundImage: `url(${coolPattern})`,
				 		      minHeight: '500px',
				 		      backgroundAttachment: 'fixed',
				 		      backgroundPosition: 'center',
				 		      backgroundRepeat: 'no-repeat',
				 		      backgroundSize: 'cover',
				 		    };



		  return (
			  		
			  		      <div>
			  				<Container fluid id="section1" style={{marginTop: "95px", marginBottom: "75px"}}>
			  		  	<Row>
			  		 	<Col style={{height:"500px"}} className="d-flex justify-content-evenly align-items-center">
			  				<h3>{personalSummaryOne}</h3>

			  		  	</Col>
			  		  	<Col className="d-flex justify-content-center align-items-center" >
			  		  		<Col>
			  		  	       <p>{personalSummaryThree}</p>
			  		  </Col>
			  		  	</Col>
			  		  	</Row>
			  			</Container>
			  		   	
			  		  <div style={parallaxStyleTwo} className="parallax" id="section2"></div>
			  		 			<Container  id="section2" fluid style={{marginTop: "75px", marginBottom: "75px"}}>
			  		  	<Row>
			  		  	<Col className="d-flex justify-content-center align-items-center" >
			  		  		<Col style={{marginLeft: "50px"}}>
			  		  	       <Image src={mavisMagazine} style={{borderRadius: "10px",width: "75%"}}/>
			  		  </Col> 
			  		  <Col style={{height:"500px"}} className="d-flex justify-content-evenly align-items-center">
			  				<Image src={guyMagazine} style={{borderRadius: "10px",width: "75%"}}/>
			  		  	</Col>
			  		  	</Col>
			  		  	</Row>
			  			</Container>
			            
			  		  <div style={parallaxStyleThree} className="parallax"></div>
			  			<Container fluid id="section3" style={{marginTop: "75px"}}>
			  			<Row>
			  				<Col>
			  					<h3>{personalSummaryOne}</h3>
			  				</Col>
			  				<Col>
			  					<h5>{personalSummaryThree}</h5>
			  				</Col>
			  			</Row>
			  				</Container>
			  		
			  		      </div>
			  		
			  		    );
};

export default Home;
