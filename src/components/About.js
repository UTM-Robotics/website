import React, { useEffect } from 'react';

import StarryNight from './backgrounds/StarryNight';
import Header from './Header';

import "../styles/About.css"

import teamPhoto from '../assets/team_photo.jpg'
import aaron from '../assets/Aaron.jpeg'
import alex from '../assets/Alex.jpg'
import damon from '../assets/Damon.JPG'
import ido from '../assets/Ido.jpg'
import max from '../assets/Max.JPG'
import razeen from '../assets/Razeen.JPG'
import travis from '../assets/Travis.jpeg'

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
		bio: 'I am Maksym Woychyshyn, President if the robotics club at UTM! I originally became interested in robotics in high school and this has led to me studying cs robotics courses at UTM. Looking forward to the semester',
		image: max
	},
	{
		id: 2,
		name: 'Usha',
		role: 'Exec Communication',
		bio: 'I\'ve lived in six countries'
	},
	{
		id: 3,
		name: 'Razeen',
		role: 'Exec Events',
		bio: '3rd year CS and Math student. I enjoy working on robotics, automation and Software Dev.',
		image: razeen
	},
	{
		id: 4,
		name: 'Travis',
		role: 'Exec Finance',
		bio: 'Hi! My name is Travis, a fifth year CS Spec. I\'ll be your finance exec this remaining semester.',
		image: travis
	},
	{
		id: 5,
		name: 'Ido',
		role: 'Exec Coordination',
		bio: 'I used to have two cats',
		image: ido
	},
	{
		id: 6,
		name: 'Alex Apostolu',
		role: 'Tech',
		bio: 'Member at UofT Bees Club',
		image: alex,
	},
	{
		id: 8,
		name: 'Damon',
		role: 'Tech',
		bio: '',
		image: damon
	},
	{
		id: 9,
		name: 'Yajan',
		role: 'Tech',
		bio: 'Music (Played Drums for 5yrs), Programming/Engineering, JiuJitsu/Muay Thai'
	},
	{
		id: 7,
		name: 'Ayman',
		role: 'Graphics',
		bio: 'Hello hello, my name is Ayman, and I like to design and code! (or both, when it comes to frontend)'
	},
	{
		id: 10,
		name: 'Aaron',
		role: 'Logistics',
		bio: 'Always striving to be the most satisfying partner to work with, and always excited for the passionate talks with problem-solvers and dreamers, so come chat!',
		image: aaron
	},
	{
		id: 11,
		name: 'Daksh',
		role: 'Mentor',
		bio: ''
	},
	{
		id: 12,
		name: 'Hamza',
		role: 'Mentor',
		bio: 'I love talking about all sorts of fun and interesting topics, so feel free to reach out to me @hamza.pp on discord to chat!'
	},
	{
		id: 11,
		name: 'Sammy',
		role: 'Mentor',
		bio: 'I love low-level development and tinkering around with hardware, and I also love languages, both natural and programming. Feel free to say hi!'
	}
];



const About = () => {
	// Fade in and up.
	useEffect(() => {
		const aboutContainer = document.querySelector('.aboutContainer');
		aboutContainer.classList.add('fade-in-up');
	}, []);

	return (
		<div>
			{/* <StarryNight/> */}
			<Header/>
			<div className='content'></div>
			<div className="aboutContainer">
				<img src={teamPhoto} alt="Robotics Team"></img>

				<div id="aboutusDiv">
					<h2>About Us</h2>

					<p>UTM's home for robotics enthusiasts, hobbyists, and newcomers alike!</p>
				</div>

				<div id="goalsDiv">
					<h2>Our Goals</h2>

					<div id="goalGrid">
						<GoalCell
							title="Workshops"
							description="We offer workshops throughout the academic year on a variety of topics, including Intro to Arduino, The Floor is Lava, and more! Our events are catered to students of all types, with a strong focus on beginner-friendly workshops."/>
						<GoalCell
							title="Projects"
							description="UTM Robotics connects students and mentors with UofT Robotics professors to complete for-credit project courses."/>
						<GoalCell
							title="Students"
							description="We aim to foster student interest and engagement in the field of Robotics through different events. Apart from workshops, we also offer general meetings where we host speakers, watch Battlebots, and help students interested in tinkering with Arduinos."/>
						<GoalCell
							title="Collaborations"
							description=""/>
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
