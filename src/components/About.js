import React, { useEffect } from 'react';
import Header from './Header';
import Blurb from './Blurb';

import "../styles/About.css"

import teamPhoto from '../assets/member_photos/team_photo.jpg'
import { MEMBERS } from './details/teamDetails';

import Blurb from './Blurb';

const GoalCell = ({ title, description }) => (
	<div className="goalCell">
		<h3 className="goalTitle">{title}</h3>
		<p className="goalDescription">{description}</p>
	</div>
);





const About = () => {
	// Fade in and up.
	useEffect(() => {
		const aboutContainer = document.querySelector('.aboutContainer');
		aboutContainer.classList.add('fade-in-up');
	}, []);

	return (
		<div>
			<Header/>
			<div className='content'></div>
			<div className="aboutContainer">
				<img src={teamPhoto} alt="Robotics Team"></img>
				<Blurb/>

				<div id="teamDiv">
					<h1 className='ul'>Meet the Team</h1>

					<div id="teamContainer">
						{MEMBERS.map((member) => (
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
