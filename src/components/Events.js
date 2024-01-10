import React from 'react'

import "../styles/Events.css"

import sample1 from '../assets/sample1.jpg';
import sample2 from '../assets/sample2.jpg';
import sample3 from '../assets/sample3.jpg';
import sample4 from '../assets/sample4.jpeg';

const eventDetails = [
	{
		id: 1,
		name: "Battle Bots",
		image: sample1,
		description: "This is a battle bot. They battle. They bot."
	},
	{
		id: 2,
		name: "Arduino Workshop",
		image: sample2,
		description: "The floor is not lava, but you can change that!"
	},
	{
		id: 3,
		name: "Robot Dog Accesibility!",
		image: sample3,
		description: "They literally got that DAWG in them fr."
	},
	{
		id: 4,
		name: "Nuclear Reactor",
		image: sample4,
		description: "Come with us to make a full hydrogen atomic bomb in 17 minutes! Ask PETA."
	}
]

const Events = () => {
	return (
		<div id='event container'>
			<h1>Events</h1>
			<div id="events">
			{eventDetails.map(event => (
				<div class='grid'>
					<img src={event.image} alt={event.description}></img>
					<h1>{event.name}</h1>
					<p>{event.description}</p>
				</div>
			))}
		</div>
	</div>
	);
}

export default Events;
