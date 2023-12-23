import React from 'react';
import StarryNight from './StarryNight'
import Header from './Header';
import "../styles/App.css"

const App = () => {
	return (
		<div>
		
		<StarryNight/>
		<Header/>

		<div id="main">
			<hr/>

			<h1>UTM ROBOTICS</h1>
			
			<h2>Welcome to UTM Robotics!</h2>

			<p id="desc">Here you'll find all the necessary resources to get started.
				The links above provide quick access to important information, while the description below will give
				an overview of this club.</p>

			<hr/>

			<h2>Upcoming Events</h2>

			<p class="desc">BATTLE BOTS.</p>

			<hr/>

			<h2>Past Events</h2>

			<p class="desc">Arduino workshop.</p>

		</div>

		</div>
	);
}

export default App;
