import React from 'react';
import EVENTS from './details/eventDetails';

import "../styles/Events.css"
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';



import redirect from '../assets/svg/arrow-up-right-from-square-solid.svg';


const Events = () => {
	
	return (
		<div id='eventContainer'>
			<h1 id='header'>Upcoming events</h1>
			<div id="events">
			{EVENTS.map(event => (
					<div className='card'>
						<div id='cardface'>
							<p>{event.name}</p>
						</div>
						<div id='cardHeader' className='overlay'>
							<label id='eventName'>{event.name}</label>
						</div>
						<div id='cardFooter' className='overlay'>
							<div id='footDetails'>
								<label id='eventDetails'>{event.description}</label>
								<div id='venueGrid'>
									<label id='a'>{event.venue}</label>
									<label>{event.startTime}</label>
									<label id='c'>{event.date}</label>
								</div>
								<button id='redirect'>View Details</button>
							</div>
						</div>
					</div>
			))}
		</div>
	</div>
	);
}

export default Events;
