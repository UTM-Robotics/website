import Aaron from '$lib/assets/team/Aaron.jpg';
import Alex from '$lib/assets/team/Alex.jpg';
import Ayman from '$lib/assets/team/Ayman.jpg';
import Ido from '$lib/assets/team/Ido.jpg';
import Max from '$lib/assets/team/Max.jpg';
import Prottoy from '$lib/assets/team/Prottoy.jpg';
import Razeen from '$lib/assets/team/Razeen.jpg';
import Travis from '$lib/assets/team/Travis.jpg';
import Usha from '$lib/assets/team/Usha.jpg';

export interface TeamMemberProps {
	name: string;
	role?: string;
	bio?: string;
	image: string;
	linkedin?: string;
	github?: string;
}

export const team = [
	{
		name: 'Max',
		role: 'President',
		bio: 'I originally became interested in robotics in high school, and this has led to me studying CompSci Robotics courses at UTM. Looking forward to the semester!',
		image: Max,
		linkedin: 'https://www.linkedin.com/in/maksym-woychyshyn-a14836197/'
	},
	{
		name: 'Usha',
		role: 'Exec Communication',
		bio: "I've lived in six countries.",
		image: Usha,
		linkedin: 'https://www.linkedin.com/in/ushasj/',
		github: 'https://github.com/usha-sj/'
	},
	{
		name: 'Razeen',
		role: 'Exec Events',
		bio: '3rd year CS and Math student. I enjoy working on robotics, automation and Software Dev.',
		image: Razeen,
		linkedin: 'https://www.linkedin.com/in/razeenali/',
		github: 'https://github.com/r4z33n4l1'
	},
	{
		name: 'Travis',
		role: 'Exec Finance',
		bio: "Hi! My name is Travis, a fifth year CS Spec. I'll be your finance exec this remaining semester.",
		image: Travis,
		linkedin: 'https://www.linkedin.com/in/travis-shao-442620173/',
		github: 'https://github.com/FourFourSquareSquare'
	},
	{
		name: 'Ido',
		role: 'Exec Coordination',
		bio: 'I used to have two cats.',
		image: Ido,
		linkedin: 'https://www.linkedin.com/in/idobenhaim/',
		github: 'https://github.com/ggggg'
	},
	{
		name: 'Alex Apostolu',
		role: 'Tech',
		bio: 'Executive member of the UofT Bees Club.',
		image: Alex,
		linkedin: 'https://www.linkedin.com/in/apostolu/',
		github: 'https://www.github.com/alexapostolu'
	},
	{
		name: 'Damon',
		role: 'Tech',
		linkedin: 'https://www.linkedin.com/in/damon-d-ma/',
		github: 'https://github.com/Damon-D-Ma'
	},
	{
		name: 'Yajan',
		role: 'Tech',
		bio: 'Music (Played Drums for 5yrs), Programming/Engineering, JiuJitsu/Muay Thai',
		linkedin: 'https://www.linkedin.com/in/yajansingh/',
		github: 'https://github.com/yajan-singh'
	},
	{
		name: 'Ayman Mohammed',
		role: 'Graphics',
		bio: 'I sleep excessively, code obsessively, and amass my divine inspirations within the universal malloc.',
		image: Ayman,
		linkedin: 'https://github.com/omnipotentsock',
		github: 'https://www.linkedin.com/in/ayman-ahmed-mohammed'
	},
	{
		name: 'Aaron',
		role: 'Logistics',
		bio: 'Always striving to be the most satisfying partner to work with, and always excited for the passionate talks with problem-solvers and dreamers, so come chat!',
		linkedin: 'https://www.linkedin.com/in/aaronwu000/',
		image: Aaron,
		github: 'https://github.com/aaronwu001'
	},
	{
		name: 'Prottoy',
		role: 'Events',
		image: Prottoy,
		bio: 'I have never once lost a game of thumb wars.'
	},
	{
		name: 'Daksh',
		role: 'Mentor',
		linkedin: 'https://www.linkedin.com/in/daksh-malhotra',
		github: 'https://github.com/DakshChan'
	},
	{
		name: 'Hamza',
		role: 'Mentor',
		bio: 'I love talking about all sorts of fun and interesting topics, so feel free to reach out to me @hamza.pp on discord to chat!',
		github: 'https://github.com/gondalm1'
	},
	{
		name: 'Sammy',
		role: 'Mentor',
		bio: 'I love low-level development and tinkering around with hardware, and I also love languages, both natural and programming. Feel free to say hi!'
	}
];
