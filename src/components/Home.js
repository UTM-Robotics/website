import React, { useEffect } from 'react';

import Header from './Header'
import Hero from './Hero'
import Blurb from './Blurb'
import Events from './Events'
import Footer from './Footer'

import "../styles/Home.css"

const Home = () => {
	// Fade in and up.
	useEffect(() => {
		const mainContainer = document.querySelector('.homeContainer');
		mainContainer.classList.add('fade-in-up');
	}, []);

	return (
		<div>

		<Header/>

		<div id="main">
			
			<Hero/>


			<Events id="#events"/>
			
			<Blurb/>

		</div>

		<Footer/>

		</div>
	);
}

export default Home;
