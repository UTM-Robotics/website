import React, { useEffect, useState } from 'react';

import StarryNight from './backgrounds/StarryNight'
import Header from './Header'
import Events from './Events'

import "../styles/Home.css"

const Home = () => {
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

		</div>
	);
}

export default Home;
