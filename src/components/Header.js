import React from 'react';
import { BrowserRouter as Link, useNavigate } from 'react-router-dom';

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
				const offset = element.offsetTop - 90;
				window.scrollTo({
					top: offset,
					behavior: 'smooth',
				});
			}
		}, 100);
	};

	return (
		<div className="header">
			<img src={roboticsLogo} alt="Robotics Logo"></img>

			<nav>
				<ul>
					<li><button onClick={handleHomeLinkClick}>Home</button></li>
					<li><button onClick={handleEventsLinkClick}>Events</button></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
