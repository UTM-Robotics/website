import React from 'react'

import "../styles/Events.css"
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';


import sample1 from '../assets/sample1.jpg';
import sample2 from '../assets/sample2.jpg';
import sample3 from '../assets/sample3.jpg';
import sample4 from '../assets/sample4.jpeg';

const eventDetails = [
	{
		id: 1,
		name: "Battle Bots",
		image: sample1,
		description: "This is a battle bot. They battle. They bot.",
		date: "Feb 14th 2023",
		url: `https://github.com/omnipotentsock`
	},
	{
		id: 2,
		name: "Arduino Workshop",
		image: sample2,
		description: "The floor is not lava, but you can change that!",
		date: "Feb 14th 2023",
		url: `https://github.com/omnipotentsock`
	},
	{
		id: 3,
		name: "Robot Dog Accesibility!",
		image: sample3,
		description: "They literally got that DAWG in them fr.",
		date: "Feb 14th 2023",
		url: `https://github.com/omnipotentsock`
	},
	{
		id: 4,
		name: "Nuclear Reactor",
		image: sample4,
		description: "Come with us to make a full hydrogen atomic bomb in 17 minutes! Ask PETA.",
		date: "Feb 14th 2023",
		url: `https://github.com/omnipotentsock`
	}
]
const Events = () => {
	
	return (
		<div id='eventContainer'>
			<h1>Events</h1>
			<div id="events">
			{eventDetails.map(event => (
				<div class='grid'>
					<div className='card'>
						<div id='details'>
							<h1 className='eventTitle'>{event.name}</h1>
							<p>{event.date}</p>
							<p className='eventDesc'>{event.description}</p>
							<Link to={{pathname: event.url}} />
						</div>
						<button style={{backgroundImage: sample1, backgroundColor: '#00221e'}} onClick={() => window.open(event.url)}></button>
						{/* <img src={event.image} alt={event.description} onClick={() => window.location.href = event.url}></img> */}
					</div>
				</div>
			))}
		</div>
	</div>
	);
}

export default Events;
