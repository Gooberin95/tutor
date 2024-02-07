import Carousel from 'react-bootstrap/Carousel';
import testpic from './testpic.jpg'; // Importing the image

function Orange() {
	  return (
		 	<>
		      <Carousel>
		        <Carousel.Item>
		          <img
		            className="d-block w-100"
		            src={testpic} // Using the imported image here
		            alt="First slide"
		          />
		          <Carousel.Caption>
		            <h3>First slide label</h3>
		            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		          </Carousel.Caption>
		        </Carousel.Item>
		        {/* Similarly, update the src attribute for other Carousel.Items */}
		        <Carousel.Item>
		          <img
		            className="d-block w-100"
		            src={testpic} // Using the imported image here
		            alt="Second slide"
		          />
		          <Carousel.Caption>
		            <h3>Second slide label</h3>
		            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		          </Carousel.Caption>
		        </Carousel.Item>
		        <Carousel.Item>
		          <img
		            className="d-block w-100"
		            src={testpic} // Using the imported image here
		            alt="Third slide"
		          />
		          <Carousel.Caption>
		            <h3>Third slide label</h3>
		            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		          </Carousel.Caption>
		        </Carousel.Item>
		      </Carousel>
		  </>
		    );
}

export default Orange;

