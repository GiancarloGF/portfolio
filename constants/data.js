import { v4 as uuidv4 } from 'uuid';

const userData = {
	githubUsername: 'GiancarloGF',
	name: 'Giancarlo Guerra',
	designation: 'Front-End Developer',
	avatarUrl: '/avatar.png',
	email: 'gianguerraf@gmail.com',
	phone: '+51 960965214',
	address: 'La Perla, Callao, Perú.',
	navItems: [
		{ title: 'Home', to: '/' },
		{ title: 'About', to: '/about' },
		{ title: 'Projects', to: '/projects' },
		{ title: 'Experience', to: '/experience' },
		{ title: 'Contact', to: '/contact' },
	],
	projects: [
		{
			title: 'Notex',
			link: 'https://notexapp.herokuapp.com/',
			imgUrl: 'https://i.imgur.com/bOyF3Qm.png',
		},
		{
			title: 'Shanty E-Shop',
			link: 'https://ecommerce-shanty.vercel.app/',
			imgUrl: 'https://i.imgur.com/7ciRu4S.png',
		},
		// {
		// 	title: 'Portfolio',
		// 	link: 'https://manuarora.in',
		// 	imgUrl: '/portfolio.png',
		// },
		{
			title: 'Chore Door Game',
			link: 'https://giancarlogf.github.io/Chore-Door/choreDoor.html',
			imgUrl: 'https://i.imgur.com/0MB5FLA.png',
		},

		{
			title: 'Job Filter',
			link: 'https://joblisting-app.herokuapp.com/',
			imgUrl: 'https://i.imgur.com/hqwn3gC.png',
		},
	],

	about: {
		title: "I'm a growing frontend developer who loves building web applications.",
		description: [
			`I have been a frontend developer for 2 years now. I studied business management engineering, worked in a bank in the finance area, but one day I learned about programming and web development, I fell in love with this new world and my life took a 360-degree turn. Since that day, I began to train and learn new technologies for web development day by day, hoping to create web and mobile applications that can help and facilitate the lives of many people and I also hope to be able to teach from my experience to many people who want to start in this wonderful and sometimes stressful world of programming. I am a lover of development with Javascript and its respective libraries and frameworks, such as React, Nextjs, Nodejs, Typescript, etc. oh, and I also like to follow modern UI design patterns.`,
		],
		currentProject: 'Notex',
		currentProjectUrl: 'https://notexapp.herokuapp.com/',
	},
	experience: [
		{
			title: 'Javascript programmer',
			company: 'Attachmedia',
			year: '2021 - Now',
			companyLink: 'https://attachmedia.com/',
			desc: "Programmer with Javascript to perform A/B tests (with HTML and CSS), web analytics, web scraping, tag elements on the web page for analysis. I also handle SQL with GCP's BigQuery.",
		},
		{
			title: 'React Frontend developer - Freelancer',
			company: 'Cirbox',
			year: '2021',
			companyLink: 'https://www.cirbox.es/',
			desc: 'Developed UI components for new user and admin dashboard, whit React, Hooks, Redux, Css Modules, React Icons, and more.',
		},
		{
			title: 'Senior Financial Representative',
			company: 'Interbank',
			year: '2018-2021',
			companyLink: 'https://interbank.pe/',
			desc: 'Attention of personal banking operations.Evaluation and negotiation of requested credits, issuing a resolution on the request or recommendation to higher committees for resolution.',
		},
	],
	resumeUrl: 'https://drive.google.com/file/d/1XaYeSJ781F8jcZcYCJUCXbDPBqZt5Qko/view?usp=sharing',
	socialLinks: {
		instagram: 'https://instagram.com/maninthere',
		twitter: 'https://twitter.com/mannupaaji',
		linkedin: 'https://linkedin.com/in/giancarloguerraf',
		github: 'https://github.com/GiancarloGF',
		facebook: 'https://facebook.com/',
	},
};

export default userData;
