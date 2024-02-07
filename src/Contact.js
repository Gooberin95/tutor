import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import formBackground from './formBackground.jpg';
function Contact() {
	const labels = {
		fontWeight: "bold"
			};


	 const Shadow = {
	  backgroundColor: `#FFCC99`,
	  backgroundSize: "cover",
          borderRadius: "8px",
	  width: "900px",
	  boxShadow:" 20px 20px 50px 15px grey",

	  marginLeft: "500px",
	  textAlign: "center",
	  paddingTop: "50px" ,
	  paddingRight: "10px", 
	  paddingBottom: "50px", 
	  paddingLeft: "10px",

}
	    


	  return (
		      <Form   style={Shadow}>
		  <h3>Contact</h3>
		        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
		          <Form.Label column sm={2} style={labels}>
		            Email
		          </Form.Label>
		          <Col sm={10}>
		            <Form.Control type="email" placeholder="Email" />
		          </Col>
		        </Form.Group>

		        <Form.Group as={Row} className="mb-3" controlId="formHorizontalFullname">
		          <Form.Label column sm={2} style={labels}>
		            Full name
		          </Form.Label>
		          <Col sm={10}>
		            <Form.Control type="full name" placeholder="Full Name" />
		          </Col>
		        </Form.Group>
		        <fieldset>
		          <Form.Group as={Row} className="mb-3">
		            <Form.Label as="legend" style={labels} column sm={2}>
		              Type of Event:
		            </Form.Label>
		            <Col sm={10}>
		             
		              <Form.Check
		                type="radio"
		                label="Wedding"
		                name="formHorizontalRadios"
		                id="formHorizontalRadios1"
		              />
		              <Form.Check
		                type="radio"
		                label="Graduation"
		                name="formHorizontalRadios"
		                id="formHorizontalRadios2"
		              />

		              <Form.Check
		                type="radio"
		                label="Funeral/Life Celebration"
		                name="formHorizontalRadios"
		                id="formHorizontalRadios3"
		              />
		                 
		              <Form.Check
		  	type="radio"
		  	label="Other"
		  	name="formHorizontalRadios"
		  	id="formHorizontalRadios4"
		  />
		            </Col>
		          </Form.Group>
		        </fieldset>

		        <Form.Group as={Row} className="mb-3">
		          <Col sm={{ span: 10, offset: 2 }}>
		            <Button type="submit">Send</Button>
		          </Col>
		        </Form.Group>
		      </Form>
		    );
}

export default Contact;
