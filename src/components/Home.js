import React, { useEffect } from 'react';

import Header from './Header'
import Hero from './Hero'
import About from './About'
import Contact from './Contact'
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
			
		{/* <StarryNight/> */}
		<Header/>

		<div id="main">
			
			<Hero/>
			<Events id="#events"/>
			<About/>
			<Contact/>

		</div>

		<Footer/>

		</div>
	);
}

export default Home;