import React, { useState, useEffect } from 'react';

import Header from './Header'
import Footer from './Footer'

import '../styles/Contact.css';

const Contact = () => {
	useEffect(() => {
		const aboutContainer = document.querySelector('.contactContainer');
		aboutContainer.classList.add('fade-in-up');
	}, []);

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});
	
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();

		// Handle form submission here. We probably need like node.js and express
		//
		//



		// Clear the form after submission.
		setFormData({ name: '', email: '', message: '' });
	};
	
	return (
		<div>
			<Header/>

			<div className='contactContainer'>
				<h2 id='title'>Email us directly, or contact us using the form anonymously!</h2>

				<div className='info'>
					<div className='contactInfo'>

						<h2>Email</h2>
						<p>robotics@utmsu.ca</p>

						<h2>Address</h2>
						<p>???</p>
					</div>

					<form className='contactForm' onSubmit={handleSubmit}>
						<label>
							Name:
							<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							/>
						</label>

						<label>
							Email:
							<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							/>
						</label>
						<br/>

						<label>
							Message:
							<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							/>
						</label>
						<br />
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>

			<Footer/>
		</div>
	);
}

export default Contact;
