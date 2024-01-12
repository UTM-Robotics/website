import React, { useEffect } from 'react';

import StarryNight from './backgrounds/StarryNight'
import Header from './Header'
import Events from './Events'
import Footer from './Footer'

import "../styles/Home.css"

const Home = () => {
	// Fade in and up.
	useEffect(() => {
		const mainContainer = document.querySelector('#main');
		mainContainer.classList.add('fade-in-up');
	}, []);

	return (
		<div>
			
		<StarryNight/>
		<Header/>

		<div id="main">

			<h1 id="title">UTM ROBOTICS</h1>
			
			<div id="desc">
				<h2>Welcome to UTM Robotics.</h2>

				<p>We host robotic workshops and casual meetups.<br/>Check out our Instagram!</p>
			</div>

			<Events id="#events"/>

		</div>

		<Footer/>

		</div>
	);
}

export default Home;
