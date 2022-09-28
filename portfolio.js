import emoji from "react-easy-emoji";

export const greetings = {
	name: "Atef Haque",
	title: "Hi! I'm Atef Haque",
	description:
		"I am a technology enthusiast with a curious mind who is always eager to learn and acquire new skills in order to solve the more difficult problems. \
		Seeking out tough challenges interest me as they have taught me the most valuable lessons in life. \
		I'm extremely passionate about technologies that help shape the web. I've been a professional full stack web developer for more than 9 years. \
		In recent times I have been quite intrigued by AI and it’s impact on our society. \
		\
		Some of my hobbies are to play the guitar and I immensely enjoy science fiction, history, and the arts. \
		",
	resumeLink:
		"./pdf/resume.pdf",
};

export const openSource = {
	githubUserName: "atefth",
};

export const contact = {};

export const socialLinks = {
	url: "https://atefhaque.github.io/",
	linkedin: "https://www.linkedin.com/in/atef-haque/",
	github: "https://github.com/atefth",
	"stack-overflow": "https://stackoverflow.com/users/2251689/atefth",
	facebook: "https://www.facebook.com/mighty.sparrow",
	twitter: "https://twitter.com/atefHaque",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"Design solutions for the web that can scale easily in the cloud",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", 
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Node, Ruby and PHP"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "threeJs",
					fontAwesomeClassname: "logos:threejs",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Node",
					fontAwesomeClassname: "logos:nodejs",
				},
				{
					skillName: "Ruby",
					fontAwesomeClassname: "logos:ruby",
				},
				{
					skillName: "PHP",
					fontAwesomeClassname: "logos:php",
				},
				{
					skillName: "MySql",
					fontAwesomeClassname: "logos:mysql",
				},
				{
					skillName: "Postgres",
					fontAwesomeClassname: "logos:postgresql",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience with Heorku, AWS and Azure"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Apache",
					fontAwesomeClassname: "logos:apache",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		// {
		// 	title: "Blockchain",
		// 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji(
		// 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
		// 		),
		// 		emoji(
		// 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
		// 		),
		// 		emoji(
		// 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
		// 		),
		// 		emoji(
		// 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
		// 		),
		// 		emoji(
		// 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "Ethereum",
		// 			fontAwesomeClassname: "logos:ethereum",
		// 		},
		// 		{
		// 			skillName: "Solidity",
		// 			fontAwesomeClassname: "logos:solidity",
		// 		},
		// 		{
		// 			skillName: "Web3js",
		// 			fontAwesomeClassname: "logos:web3js",
		// 		},
		// 		{
		// 			skillName: "Metamask",
		// 			fontAwesomeClassname: "logos:metamask-icon",
		// 		},
		// 		{
		// 			skillName: "Ganache",
		// 			fontAwesomeClassname: "logos:ganache-icon",
		// 		},
		// 	],
		// },
	],
};

export const SkillBars = [
	{
		Stack: "AngularJs",
		progressPercentage: "90",
	},
	{
		Stack: "Angular",
		progressPercentage: "70",
	},
	{
		Stack: "RxJs",
		progressPercentage: "50",
	},
	{
		Stack: "ReactJs",
		progressPercentage: "80",
	},
	{
		Stack: "Redux",
		progressPercentage: "70",
	},
	{
		Stack: "ThreeJs",
		progressPercentage: "60",
	},
	{
		Stack: "Node.js",
		progressPercentage: "80",
	},
	{
		Stack: "RubyOnRails",
		progressPercentage: "70",
	},
	{
		Stack: "Laravel",
		progressPercentage: "70",
	},
	{
		Stack: ".NET",
		progressPercentage: "50",
	},
	{
		Stack: "Spring Boot",
		progressPercentage: "40",
	},
	{
		Stack: "Flask",
		progressPercentage: "40",
	},
	{
		Stack: "MySQL",
		progressPercentage: "75",
	},
	{
		Stack: "Postgres",
		progressPercentage: "70",
	},
	{
		Stack: "Oracle",
		progressPercentage: "65",
	},
	{
		Stack: "Mongo",
		progressPercentage: "45",
	},
	{
		Stack: "Redis",
		progressPercentage: "60",
	},
	{
		Stack: "Docker",
		progressPercentage: "60",
	},
	{
		Stack: "AWS",
		progressPercentage: "80",
	},
	{
		Stack: "Heroku",
		progressPercentage: "65",
	},
	{
		Stack: "Azure",
		progressPercentage: "50",
	},
];

export const educationInfo = [
	{
		schoolName: "BRAC University, Dhaka, Bangladesh",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "Spring, 2010 - Fall, 2016",
		desc: "Graduated with a CGPA of 3.01",
		grade: "3.01 / 4.0",
		descBullets: [
			"Received merit based scholarship through spring, summer and fall of 2010",
			"Received Vice Chancellor's award in Summer 2010",
			"Received Erasmus scholarship and attended exchange program in Sibiu, Romania in 2013",
		],
	},
	{
		schoolName: "The Cambridge School, Calcutta, India",
		subHeader: "GCE 'A' Levels",
		duration: "2007 - 2009",
		desc: "Took Physics, Chemistry and Mathematics",
		grade: "2 As and 1 B",
		descBullets: [
			"Also took History in AS levels",
		],
	},
	{
		schoolName: "Bridge International School, Calcutta, India",
		subHeader: "GCE 'O' Levels",
		duration: "2006 - 2007",
		desc: "Took 9 subjects",
		grade: "4 As, 3 Bs and 2 Cs",
		descBullets: [
			"Realised my potential for the creative fields",
		],
	},
];

export const experience = [
	{
		role: "Senior Software Engineer",
		company: "Aize",
		companylogo: "/img/icons/common/aize.svg",
		date: "Apr 2021 – August 2022",
		desc: "My primary role and responsibilities at Aize are to rapidly build components for the Digital Twin Suite for which I rely upon my experience with Javascript, ThreeJS and my prolonged exposure to various backend frameworks. I can proudly say that not having much professional experience with the java framework Spring or .NET has not had any effect on my performance as I'm among the few full stack engineers in the company who work across multiple products and as such have to deal with numerous tools.",
	},
	{
		role: "Senior Software Engineer",
		company: "Insidemaps Inc",
		companylogo: "/img/icons/common/im.png",
		date: "Jul 2020 – Apr 2021",
		desc: "My core responsibilities at Insidemaps was as a full stack engineer primarily working on the MERN stack and learning and diving into ThreeJS. I would work on the various helper tools built in-house that supports the virtual 3D tours. Often times I would write mongo queries, create express APIs and consume it with react and later manipulate scenes. Occasionally, I'd set up EC2 instances on AWS and serve isolated tools using SQS to broadcast crucial data across the helper tools.",
	},
	{
		role: "Freelance Software Engineer",
		company: "Upwork",
		companylogo: "/img/icons/common/upwork.svg",
		date: "Jan 2020 - Jul 2020",
		desc: "I mostly did some RubyOnRails, React and Docker gigs during this short time.",
	},
	{
		role: "Lead Software Engineer",
		company: "HashKloud Bangladesh Limited",
		companylogo: "/img/icons/common/hk.png",
		date: "Jul 2017 - Jan 2020",
		desc: "I was one of the first engineers in the company and helped form my own team of five. Having worked in Malaysia with the company's management I was uniquely equipped with the domain knowledge and the other products in the market. My primary role was to lead the team to build a payment platform, designing the processes, database and outlining the architecture. I built APIs with RubyOnRails, frontend components with AngularJs and subsequently with React. I was also responsible for all our infrastructure in AWS.",
	},
	{
		role: "Senior Software Engineer",
		company: "HashKloud Pty Ltd",
		companylogo: "/img/icons/common/hk.png",
		date: "Feb 2016 - Jun 2017",
		desc: "I worked as a full stack engineer working with RubyOnRails and AngularJs and was responsible for devOps using AWS. I worked on multiple products focusing on digital services in various industries like education and banking. I picked up a lot of domain knowledge and processes.",
	},
	{
		role: "Lead Software Engineer",
		company: "Mayalogy Pvt Ltd",
		companylogo: "/img/icons/common/maya.jpeg",
		date: "Jan 2015 - Dec 2015",
		desc: "I led a team of six to build and support the core product of Maya which is a messaging service. I helped build the Laravel backend and the admin panel using AngularJs. I liaised and designed APIs for the mobile app which has over 100,000 downloads in the Android app store. The other aspect for my role was to shift to AWS and essentially all of devOps.",
	},
	{
		role: "Software Engineer",
		company: "InfraBlue Technologies, Bangladesh",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "2013 - 2014",
		desc: "I was hired here after being a part time intern as a web developer. Throughout the year I had worked with PHP, .NET, JQuery and RubyOnRails on various projects.",
	},
];

export const projects = [
	// {
	// 	name: "developer-portfolio",
	// 	desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
	// 	github: "https://github.com/1Atef100/developer-portfolio",
	// 	link: "https://developer-portfolio-1Atef100.vercel.app/",
	// },
	// {
	// 	name: "AtlasMart",
	// 	desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
	// 	github: "https://github.com/1Atef100/Django-React-Marketplace",
	// },
	// {
	// 	name: "Technota (Forum)",
	// 	desc: "Get hands-on experience in technical skills with Technota",
	// 	github: "https://github.com/1Atef100/django-react-forum",
	// },
	// {
	// 	name: "Shopaza (Ecommerce)",
	// 	desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
	// 	github: "https://github.com/1Atef100/Django-ecommerce",
	// },
];

export const feedbacks = [
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Atef Haque",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Atef Haque",
	image: "https://avatars.githubusercontent.com/u/2331530?s=400&u=fd9ad5622ad5e9e37d3e01c793682612f1e8ff55&v=4",
	url: "https://atefhaque.space",
	keywords: [
		"Atef",
		"Atef Haque",
		"@Atef",
		"@AtefHaque",
		"Portfolio",
		"Atef Portfolio ",
		"Atef Haque Portfolio",
	],
}
