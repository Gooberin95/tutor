import Carousel from 'react-bootstrap/Carousel';
import guyMagazine from './guyMagazine.jpg';
import heroImage from './heroImage.jpg';
import mavisFive from './mavisFive.jpg';
import mavisFour from './mavisFour.jpg';
import mavisMagazine from './mavisMagazine.jpg';
import mavisOne from './mavisOne.jpg';
import mavisSeven from './mavisSeven.jpg';
import mavisSix from './mavisSix.jpg';
import mavisThree from './mavisThree.jpg';
import mavisTwo from './mavisTwo.jpg';
import billBoard from './billBoard.jpg';
import posterCard from './posterCard.jpg';
import posterCardTwo from './posterCardTwo.jpg';

function Orange() {
    // Array containing imported image paths
    const images = [
        guyMagazine,
        heroImage,
        mavisFive,
        mavisFour,
        mavisMagazine,
        mavisOne,
        mavisSeven,
        mavisSix,
        mavisThree,
        mavisTwo,
        billBoard,
        posterCard,
        posterCardTwo
    ];
	const carouselStyles = {
		carousel: {
				    width: "100%",
				        maxWidth: "800px", /* Set your desired maximum width */
					    height: "400px" /* Set your desired height */
				    },


		carouselItem:  {
			    		        maxWidth: "100%",
			    			    maxHeight: "100%",
			    			        objectFit: "cover" /* Maintain aspect ratio while covering */
			    			}
	};
    return (
        <>
            <Carousel style={carouselStyles.carousel}>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={carouselStyles.carouselItem} // Adjust max height and object fit as needed
                        />
                        <Carousel.Caption>
                            <h3>{`Slide ${index + 1} label`}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default Orange;
