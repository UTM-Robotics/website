import React from 'react';

import '../styles/Footer.css';

import insta from '../assets/svg/instagram-white-icon.svg';
import linkedin from '../assets/svg/linkedin-app-white-icon.svg';
import github from '../assets/svg/github-mark-white.svg';
import discord from '../assets/svg/discord-white-seeklogo-4.svg';

const Footer = () => {
	return (
		<nav className='footerContainer'>
			<p className='copyright'>UTM Robotics 2024</p>
			<div className='socials'>
				<a href='https://www.instagram.com/utm_robotics/' target='_blank'><img src ={insta}></img></a>
				<a href='https://www.linkedin.com/company/utmrobotics/mycompany/' target='_blank'><img src = {linkedin}></img></a>
				<a href='https://github.com/UTM-Robotics/' target='_blank'><img src= {github}></img></a>
				<a href='https://discord.gg/wFbtZhcXFQ' target='_blank'><img src = {discord}></img></a>
			</div>
		</nav>
	);
}

export default Footer;
