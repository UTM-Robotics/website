import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

import '../styles/Header.css';

import roboticsLogo from "../assets/robotics-logo.png"

const Header = () => {
	const navigate = useNavigate();

	const handleHomeLinkClick = () => {
		navigate('/');
	
		setTimeout(() => {
		  	window.scrollTo({ top: 0, behavior: 'smooth' });
		}, 100);
	};

	const handleEventsLinkClick = () => {
		navigate('/');
	
		setTimeout(() => {
		  	const element = document.getElementById('events');
		  	if (element) {
				const offset = element.offsetTop + 50;
				window.scrollTo({
					top: offset,
					behavior: 'smooth',
				});
			}
		}, 100);
	};

	const handleAboutLinkClick = () => {
		navigate('/about');

		window.scrollTo({ top: 0, behavior: 'instant' });
	};

	const handleContactLinkClick = () => {
		navigate('/contact');

		window.scrollTo({ top: 0, behavior: 'instant' });
	};

	return (
		<nav className='headerContainer'>
			<div id='logoContainer' onClick={handleHomeLinkClick}>
				<img className='logo' src={roboticsLogo} alt="Robotics Logo"></img>
			</div>
		</nav>
	);
}

export default Header;
