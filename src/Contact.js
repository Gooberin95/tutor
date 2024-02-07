import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

 
function Contact() {
		    const [show, setShow] = useState(false);
		    const [validated, setValidated] = useState(false);
		    const handleClose = () => setShow(false);
		    const handleShow = (e) => {
			    		            e.preventDefault();
			    		            setShow(true);
			    		        };

		    const form = useRef();

		    const sendEmail = (e) => {
			    		            const formElement = form.current;
			    		            e.preventDefault();
			    		            if (formElement.checkValidity() === false) {
							    				                e.stopPropagation();
							    				            } else {
													    						                emailjs
													    						                    .sendForm('***', '***', formElement, {
																						    									                        publicKey: '***',
																						    									                    })
													    						                    .then(
																						    									                        () => {
																																																                        console.log('SUCCESS!');
																																																                    },
																						    									                        (error) => {
																																																                        console.log('FAILED...', error.text);
																																																                    },
																						    									                    );
													    						                handleShow(e);
													    						            }
			    		            setValidated(true);
			    		        };

		    return (
			    		            <>
			    		                <Container style={{ height: "500px" }} >
			    		                    <Row>
			    		                        <Col style={{ paddingRight: "20px" }}>
			    		                            <h1 style={{ paddingLeft: '500px', textDecoration: "underline" }}>Contact form</h1>
			    		                            <Form ref={form} onSubmit={sendEmail} noValidate validated={validated}>
			    		                                <Form.Group className="mb-3" controlId="formGroupEmail">
			    		                                    <Form.Label>Email address</Form.Label>
			    		                                    <Form.Control required type="email" name="user_email" placeholder="Enter email" />
			    		                                    <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
			    		                                </Form.Group>
			    		                                <Form.Group className="mb-3" controlId="formGroupName">
			    		                                    <Form.Label>Full Name</Form.Label>
			    		                                    <Form.Control required type="text" name="user_name" placeholder="Enter Full Name" />
			    		                                    <Form.Control.Feedback type="invalid">Please provide your full name.</Form.Control.Feedback>
			    		                                </Form.Group>
			    		                                <Form.Group className="mb-3" controlId="formGroupMessage">
			    		                                    <Form.Label>Message</Form.Label>
			    		                                    <Form.Control required as="textarea" name="message" rows={3} placeholder="Message" />
			    		                                    <Form.Control.Feedback type="invalid">Please enter your message.</Form.Control.Feedback>
			    		                                </Form.Group>
			    		                                <Form.Group className="mb-3" controlId="formGroupSubmit">
			    		                                    <Button variant="primary" type="submit" value="Send">
			    		                                        Submit
			    		                                    </Button>
			    		                                </Form.Group>
			    		                            </Form>
			    		                        </Col>
			    		                    </Row>
			    		                </Container>
			    		                <Modal show={show} onHide={handleClose}>
			    		                    <Modal.Header closeButton>
			    		                        <Modal.Title style={{ paddingLeft: "150px" }}>Sent successfully!</Modal.Title>
			    		                    </Modal.Header>
			    		                    <Modal.Body style={{ paddingLeft: "90px" }}>
			    		                        I will be reaching out to you as soon as I can!
			    		                    </Modal.Body>
			    		                    <Modal.Footer>
			    		                        <Button variant="secondary" onClick={handleClose}>
			    		                            Close
			    		                        </Button>
			    		                    </Modal.Footer>
			    		                </Modal>
			    		            </>
			    		        );
};

export default Contact;
