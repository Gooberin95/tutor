import React from 'react';
import Contact from './Contact.js';
import personalSummaryOne from './personalSummaryOne.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mavisMagazine from './mavisMagazine.jpg';
import guyMagazine from './guyMagazine.jpg';
import Image from 'react-bootstrap/Image';
import Orange from './Orange';



const Home = () => {

		const parallaxStyleTwo = {
					      backgroundColor: ' #FFCC99',	
					      minHeight: '10px',
					      backgroundAttachment: 'fixed',
					      backgroundPosition: 'center',
					      backgroundRepeat: 'no-repeat',
					      backgroundSize: 'cover',
					      border: "solid #FFCC99"
					    };

			 const parallaxStyleThree = {
				 			backgroundColor: "#FFCC99",	
				 		      minHeight: '10px',
				 		      backgroundAttachment: 'fixed',
				 		      backgroundPosition: 'center',
				 		      backgroundRepeat: 'no-repeat',
				 		      backgroundSize: 'cover',                         
				 		marginTop: "200px",
				 		border: "solid #FFCC99"
				
				 		    };


		  return (
			  		
			  		      <div>
			  <h1 style={{textDecoration: 'underline', paddingLeft: "35%",fontFamily:"Lucidia Handwriting",  color: "black",marginTop:"75px",paddingBottom: "200px"}}>Featured in Seattle Homes Magazine</h1>
			      <Container  id="section2" fluid style={{marginTop: "75px", marginBottom: "75px",height: "800px"}}>
			  		  	<Row>
			  		  	<Col className="d-flex justify-content-center align-items-center" >
			  		  		<Col style={{marginLeft: "50px"}}>
			  		  	       <p style={{borderRadius: "10px",width: "75%"}}>{personalSummaryOne}</p>
			  		  </Col> 
			  		  <Col style={{height:"500px"}} className="d-flex justify-content-evenly align-items-center">
			  				<Image src={guyMagazine} style={{borderRadius: "10px",width: "75%"}}/>
			  		  	</Col>
			  		  	</Col>
			  		  	</Row>
			  			</Container>

			  		  <div style={parallaxStyleTwo} className="parallax" id="section2"></div>
			   <h1 style={{textDecoration: 'underline', paddingLeft: "1300px",marginTop:"75px",fontFamily: "Lucidia Handwriting"}}>About</h1>
	<Container fluid id="section1" style={{marginTop: "95px", marginBottom: "75px"}}>
			  		  	<Row>
			  		  		<Col style={{height: "500px"}} className="d-flex justify-content-evenly align-items-center">
			                                         
			  		  	       <Image src={mavisMagazine} style={{borderRadius: "10px", width: "75%",height: "800px"}}/>
			  		  </Col>
			  
			                 	
			                 	<Col style={{height:"500px"}} className="d-flex justify-content-evenly align-items-center">
			  				<p>{personalSummaryOne}</p>

			  		  	</Col>
			  		  	
			  		  	</Row>
			  			</Container>
			  		   	

			            
			  		  <div style={parallaxStyleThree} className="parallax"></div>
			  <Container>
			  <Row>

			  <Col style={{paddingLeft: "250px",paddingRight: "250px", marginTop: "250px", marginBottom: "250px"}}>
			  <Orange/>
			  </Col>
			  </Row>
			  </Container>
			                        <Container fluid id="section3" style={{marginTop: "75px"}}>
			  			<Row>
			  				<Col>
			  <Contact/>
			  				</Col>
			  			</Row>
			  				</Container>

			  		      </div>
			  		
			  		    );
};

export default Home;
