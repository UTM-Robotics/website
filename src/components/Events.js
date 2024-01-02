import React from 'react'

import "../styles/Events.css"

import sample1 from '../assets/sample1.jpg';
import sample2 from '../assets/sample2.jpg';
import sample3 from '../assets/sample3.jpg';
import sample4 from '../assets/sample4.jpeg';

const Events = () => {
	return (
		<div id="events">


			<h2>Upcoming Events</h2>
			
			
			<p>BATTLE BOTS.</p>
			<img src={sample1} alt="Description of the image"></img>

			<p>Arduino Workshop.</p>
			<img src={sample2} alt="Description of the image"></img>

			<p>Arduino Workshop.</p>
			<img src={sample3} alt="Description of the image"></img>

			<p>Arduino Workshop.</p>
			<img src={sample4} alt="Description of the image"></img>





			


			<h2>Past Events</h2>

			<p>Arduino workshop.</p>



		</div>
	);
}

export default Events;
