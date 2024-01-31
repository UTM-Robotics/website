import sample1 from '../../assets/sample1.jpg';
import sample2 from '../../assets/sample2.jpg';
import sample3 from '../../assets/sample3.jpg';
import sample4 from '../../assets/sample4.jpeg';

const eventDetails = [
	{
		id: 1,
		name: "Battle Bots",
		image: sample1,
		tag: "IN PERSON",
		description: "This is a battle bot. They battle. They bot.",
		host: "Jerma",
		date: "Feb 14th 2023",
		url: `https://github.com/omnipotentsock`
	},
	{
		id: 2,
		name: "Arduino Workshop",
		image: sample2,
		tag: "IN PERSON",
		description: "The floor is not lava, but you can change that!",
		host: "Jerma",
		date: "Feb 14th 2023",
		url: `https://github.com/omnipotentsock`
	},
	{
		id: 3,
		name: "Robot Dog Accesibility!",
		image: sample3,
		tag: "HYBRID",
		description: "They literally got that DAWG in them fr.",
		host: "Jerma",
		date: "Feb 14th 2023",
		url: `https://github.com/omnipotentsock`
	},
	{
		id: 4,
		name: "Nuclear Reactor",
		image: sample4,
		tag: "IN PERSON",
		description: "Come with us to make a full hydrogen atomic bomb in 17 minutes! Ask PETA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		host: "Jerma",
		date: "Feb 14th 2023",
		url: `https://github.com/omnipotentsock`
	}
]

export const EVENTS = eventDetails;
export default eventDetails;