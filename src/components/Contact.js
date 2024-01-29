import React, { useState, useEffect, useRef } from 'react';

import Header from './Header'
import Footer from './Footer'

import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

	const serviceId = process.env.REACT_APP_SERVICE_ID;
	const templateId = process.env.REACT_APP_TEMPLATE_ID;
	const publicKey = process.env.REACT_APP_PUBLIC_KEY;

	useEffect(() => {
		const aboutContainer = document.querySelector('.contactContainer');
		aboutContainer.classList.add('fade-in-up');
	}, []);

	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault(); // prevents the page from reloading when you hit “Send”
   
	  emailjs.sendForm(serviceId, templateId, form.current, publicKey)
		.then((result) => {
			alert("Thanks for contacting us! We'll be in touch within 1-2 business days");
		}, (error) => {
			alert("Oops, something went wrong! Please email us manually instead");
		});
	};
	
	return (
		<div>
			<Header/>

			<div className='contactContainer'>
				<h2 className='desc'>Email us directly, or contact us using the form anonymously!</h2>

				<div className='contact'>
					<div className='contactInfo'>

						<h2>Email</h2>
						<p>robotics@utmsu.ca</p>

						<h2>Address</h2>
						<p>HackLab, Deerfield Hall,<br/>North Bldg, Mississauga, ON L5L 3E2</p>
					</div>

					<form ref={form} onSubmit={sendEmail} className='contactForm'>
						<label>
							<span>Name</span>
							<input
								type="text"
								name="from_name"
							/>
						</label>

						<label>
							<span>Email</span>
							<input
								type="email"
								name="from_email"
							/>
						</label>

						<label>
							<span>Message</span>
							<textarea
								name="message"
							/>
						</label>
						<button type="submit" value="Send">Submit</button>
					</form>
				</div>
			</div>

			<Footer/>
		</div>
	);
}

export default Contact;
  
