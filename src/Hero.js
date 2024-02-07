import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import photographerImage from './heroImage.jpg';

const Hero = () => {
	  const [fadeIn, setFadeIn] = useState(false);

	  useEffect(() => {
		       const delay = setTimeout(() => {
		            setFadeIn(true);
		                }, 500);
		  
		                    // Clear the timeout to avoid memory leaks
		                        return () => clearTimeout(delay);
		                         }, []);
		  
		                             const containerStyle = {
		                                position: 'relative',
		                                    height: '100vh',
		                                        margin: '0',
		                                            fontFamily: 'Arial, Helvetica, sans-serif',
		                                               };



 const backgroundImageStyle = {
	     background: `url(${photographerImage}) center/cover no-repeat`,
	     filter: 'blur(8px)',
	     WebkitFilter: 'blur(8px)',
	     height: '100%',
	   };

  const overlayTextStyle = {
	      color: 'white',
	      fontWeight: 'bold',
	      borderRadius: '11px',
	      position: 'absolute',
	      top: '50%',
	      left: '50%',
	      transform: 'translate(-50%, -50%)',
	      zIndex: '2',
	      width: '80%',
	      padding: '20px',
	      textAlign: 'center',
	      opacity: fadeIn ? 1 : 0, // Apply fade-in opacity
	      transition: 'opacity 1s ease-in-out', // Add a smooth transition
	    };

  const headingStyle = {
	      fontSize: '50px',
	    };



return (
<div style={containerStyle}>
	      <div style={backgroundImageStyle}></div>
	      <div style={overlayTextStyle}>
	               <FontAwesomeIcon icon={faCalendarDays} size="lg" style={{ color: "#FFCC99" }} />  
	        <h1 style={{ ...headingStyle, opacity: fadeIn ? 1 : 0 }}>

	          Event planning and Fashion Consulting
        </h1>
	        <h4
          style={{
		              textDecoration: 'underline',
			              opacity: fadeIn ? 1 : 0,
			              transition: 'opacity 1s ease-in-out', // Add a smooth transition
			            }}
        >
	          By Mavis Simpson
        </h4>
	      </div>
	    </div>
	  );
};

export default Hero;
