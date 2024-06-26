import React from 'react';
import EVENTS from './details/eventDetails';

import "../styles/Events.css"
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';



import redirect from '../assets/svg/arrow-up-right-from-square-solid.svg';


const Events = () => {
	
	return (
		<div id='eventContainer'>
			<h1 id='header'>Events</h1>
			<div id="events">
			{EVENTS.map(event => (
				<div class='grid'>
					<div className='card'>
						<div id='body'>
							<div id='cardface'>
								<img src={event.image} style={{width: '100%'}}></img>
								<div id='detailContainer'>
									<span id='title'>{event.name}</span>
									<span id='dateTime'>{event.date} <br></br> {event.startTime}</span>
								</div>
							</div>
							<div id='cardback'>
							<div id='details'>
								<h1 className='eventTitle'>{event.name}</h1>
								<p className='eventTag'>{event.tag}</p>
								<p className='eventDesc'>{event.description}</p>
								<p className='eventHost'><b>Hosted by: </b>{event.host}</p>
								<p>{event.date}</p>
								<button className='eventLink' onClick={() => window.open(event.url)}>{`View Details`}<img id='redirectSVG' src={redirect}></img></button>
							</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
	);
}

export default Events;
