import React from 'react';

import '../styles/Footer.css';

const Footer = () => {
	return (
		<nav className='footerContainer'>
			<p className='copyright'>UTM Robotics 2024</p>
			<div className='socials'>
				<a href='https://www.instagram.com/utm_robotics/' target='_blank'>Instagram</a>
				<a href='https://www.linkedin.com/company/utmrobotics/mycompany/' target='_blank'>LinkedIn</a>
				<a href='https://github.com/UTM-Robotics/' target='_blank'>Github</a>
			</div>
		</nav>
	);
}

export default Footer;
