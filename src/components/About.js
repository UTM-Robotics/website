import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import Header from './Header';
import Footer from './Footer'
import Blurb from './Blurb';

import "../styles/About.css"
import teamPhoto from '../assets/memberPhotos/teamPhoto.jpg'
import { MEMBERS } from './details/teamDetails';

const About = () => {
	// Fade in and up.
	useEffect(() => {
		const aboutContainer = document.querySelector('.aboutContainer');
		aboutContainer.classList.add('fade-in-up');
	}, []);

	return (
		<div>
			<Header/>
			<div className="aboutContainer">

				<Blurb/>

				<div className="team-section-container">
					<h1 className='meet-the-team'>Meet the Team</h1>

					<div className="teamContainer">
						{MEMBERS.map((member) => (
							<div key={member.id} className="teamMember">
								<img src={member.image} alt={member.name}/>
								<div className="desc">
									<div className="title">
										<h3 className="name">{member.name}</h3>
										<div className="social-icons">
											<a href={`${member.linkedin}`} target="_blank" rel="noopener noreferrer">
												<FaLinkedin className="linkedin-icon" />
											</a>
			
											<a href={`${member.github}`} target="_blank" rel="noopener noreferrer">
												<FaGithub className="github-icon"/>
											</a>
										</div>
									</div>
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
