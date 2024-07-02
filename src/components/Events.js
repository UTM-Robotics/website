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
					<div className='card'>
						<div id='cardImg'><img src={event.image} width={'100%'} height={'400px'}></img></div>
						<div id='cardHeader' className='overlay'>Title: We do be like that doe.</div>
						<div id='cardFooter' className='overlay'>lorem ipsum dolor sit amet.</div>
					</div>
			))}
		</div>
	</div>
	);
}

export default Events;
