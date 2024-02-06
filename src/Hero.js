import React from 'react';
import photographerImage from './heroImage.jpg';

const Hero = () => {
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
		      backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
		    };

	  const headingStyle = {
		      fontSize: '50px',
		    };

	  return (
		      <div style={containerStyle}>
		        <div style={backgroundImageStyle}></div>
		        <div style={overlayTextStyle}>
		          <h1 style={headingStyle}>Event planning and Fashion Consulting</h1>
		          <h4 style={{textDecoration: "underline"}}>By Mavis Simpson</h4>
		        </div>
		      </div>
		    );
};

export default Hero;

