import React, { useEffect } from 'react';

import StarryNight from './backgrounds/StarryNight';
import Header from './Header';

import "../styles/About.css"

import teamPhoto from '../assets/team_photo.jpg'
import alex from '../assets/alex.jpg'

const GoalCell = ({ title, description }) => (
	<div className="goalCell">
		<h3 className="goalTitle">{title}</h3>
		<p className="goalDescription">{description}</p>
	</div>
);

const teamMembers = [
	{
		id: 1,
		name: 'Max',
		role: 'President',
		bio: ''
	},
	{
		id: 2,
		name: 'Usha',
		role: 'Exec Communication',
		bio: ''
	},
	{
		id: 3,
		name: 'Razeen',
		role: 'Exec Events',
		bio: ''
	},
	{
		id: 4,
		name: 'Travis',
		role: 'Exec Finance',
		bio: ''
	},
	{
		id: 5,
		name: 'Ido',
		role: 'Exec Coordination',
		bio: ''
	},
	{
		id: 6,
		name: 'Alex Apostolu',
		role: 'Tech',
		bio: 'Member at UofT Bee Club',
		image: alex,
	},
	{
		id: 7,
		name: 'Ayman',
		role: 'Tech',
		bio: ''
	},
	{
		id: 8,
		name: 'Damon',
		role: 'Tech',
		bio: ''
	},
	{
		id: 9,
		name: 'Yajan',
		role: 'Tech',
		bio: ''
	},
	{
		id: 10,
		name: 'Aaron',
		role: 'Logistics',
		bio: ''
	},
];



const About = () => {
	// Fade in and up.
	useEffect(() => {
		const aboutContainer = document.querySelector('.aboutContainer');
		aboutContainer.classList.add('fade-in-up');
	}, []);

	return (
		<div>
			<StarryNight/>
			<Header/>

			<div className="aboutContainer">
				<img src={teamPhoto} alt="Robotics Team"></img>

				<div id="aboutusDiv">
					<h2>About Us</h2>

					<p>We are the robotics club.</p>
				</div>

				<div id="goalsDiv">
					<h2>Our Goals</h2>

					<div id="goalGrid">
						<GoalCell
							title="Workshops"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
						<GoalCell
							title="Projects"
							description="Ut volutpat sapien sit amet magna fermentum, ut auctor mi tempus."/>
						<GoalCell
							title="Students"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
						<GoalCell
							title="Collaborations"
							description="Ut volutpat sapien sit amet magna fermentum, ut auctor mi tempus."/>
					</div>
				</div>

				<div id="teamDiv">
					<h1>Meet the Team</h1>

					<div id="teamContainer">
						{teamMembers.map((member) => (
							<div key={member.id} className="teamMember">
								<img src={member.image} alt={member.name}/>
								<div className="desc">
									<h3 className="name">{member.name}</h3>
									<p className="role">{member.role}</p>
									<p className="bio">{member.bio}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
  

export default About;
