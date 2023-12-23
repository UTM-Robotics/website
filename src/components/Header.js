import React from 'react';
import '../styles/Header.css';
import '../index.css'

const Header = () => {
	return (
		<nav>
			<ul>
				<li><a href="#home">Home</a></li>
				<li><a href="#resources">Resources</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	);
}

export default Header;
