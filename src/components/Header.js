import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

import '../styles/Header.css';

import roboticsLogo from "../assets/robotics-logo.png"

const Header = () => {
	const navigate = useNavigate();

	const handleHomeLinkClick = () => {
		// Navigate to the home page.
		navigate('/');
	
		// Scroll to the top of the page after a short delay.
		setTimeout(() => {
		  	window.scrollTo({ top: 0, behavior: 'smooth' });
		}, 100);
	};

	const handleEventsLinkClick = () => {
		// Navigate to the home page.
		navigate('/');
	
		// Scroll to the "Events" section after a short delay.
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

		window.scrollTo({
			top: 0,
			behavior: 'instant',
		});
	};

	return (
		<nav>
			<div id='logo'><img src={roboticsLogo} alt="Robotics Logo"></img></div>
			<div id='nav_links'>
				<button onClick={handleHomeLinkClick} id='redirect'>Home</button>
				<button onClick={handleEventsLinkClick} id='redirect'>Events</button>
				<Link to="/about" id='redirect'>About</Link>
			</div>
		</nav>
	);
}

export default Header;
