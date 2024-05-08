import { list } from "postcss"

// Jumbotron constants
export const index = {
    location: 'index',
    title: 'RBG Development',
    subtitle: 'HTML, CSS, PHP, SQL & More',
    url: '/sign-up',
    button: 'Join',
    btnStyle: 'btn--primary',
}
export const about = {
    location: 'about',
    title: 'About RBG',
    subtitle: 'Development, responsiveness, vision & more.',
    url: '/projects',
    button: 'Projects',
    btnStyle: 'btn--info',
}
export const services = {
    location: 'services',
    title: 'Services',
    subtitle: 'Web design, Web development, Security & many more',
    url: '/projects',
    button: 'Projects',
    btnStyle: 'btn--info',
}
export const projects = {
    location: 'projects',
    title: 'Latest Projects',
    subtitle: 'View the latest projects carried on by RBG Development',
    url: '/services',
    button: 'Services',
    btnStyle: 'btn--info',
}
export const contact = {
    location: 'contact',
    title: 'Contact',
    subtitle: 'Contact us for more details',
    url: '#contact',
    button: 'Contact',
    btnStyle: 'btn--primary',
}

// HeroSections constants for all the pages
// index page
export const homeObjOne = {
	hasTop: false,
	hasBottom: true,
	lightBg: false,
	topLine: 'WELCOME TO RBG DEVELOPMENT',
	headline: 'About RBG',
	description: {
		p1: 'On the front end of web development in order to create the overall layout of the website, HTML & CSS are used and combined. Furthermore, JavaScript more specifically jQuery, is used to animate and smooth out the website design, thus creating a pleasant user experience.',
		p2: ' On the back end of web development, PHP and MySql are used to bring functionality into the website and sort and store relevant information in databases.',
	},
	buttonLink: '/about',
	buttonLabel: 'Get Started',
	buttonStyle: 'btn--primary',
	imgStart: false,
	img: '/images/a1.png',
	alt: 'Confidential',
};

export const homeObjTwo = {
	hasTop: true,
	hasBottom: true,
	lightBg: true,
	topLine: '100% SECURE',
	headline: 'Stay protected 24/7 anywhere anytime',
	description: {
		p1: 'On the front end of web development in order to create the overall layout of the website, HTML & CSS are used and combined. Furthermore, JavaScript more specifically jQuery, is used to animate and smooth out the website design, thus creating a pleasant user experience.',
		p2: ' On the back end of web development, PHP and MySql are used to bring functionality into the website and sort and store relevant information in databases.',
	},
	buttonLink: '/about',
	buttonLabel: 'Get Started',
	buttonStyle: 'btn--primary',
	imgStart: true,
	img: 'images/svg-5.svg',
	alt: 'Vault',
};

// about page
export const aboutObjOne = {
    hasTop: false,
    hasBottom: true,
    lightBg: false,
    topLine: 'WELCOME TO RBG DEVELOPMENT',
    headline: 'About RBG',
    description:{
      p1:'On the front end of web development in order to create the overall layout of the website, HTML & CSS are used and combined. Furthermore, JavaScript more specifically jQuery, is used to animate and smooth out the website design, thus creating a pleasant user experience.',
      p2:' On the back end of web development, PHP and MySql are used to bring functionality into the website and sort and store relevant information in databases.'
    },
    buttonLink: '/about',
    buttonLabel: 'Get Started',
    buttonStyle: 'btn--primary',
    imgStart: false,
    img: '/images/a1.png',
    alt: 'Confidential'
};
  
export const aboutObjTwo = {
    hasTop: false,
    hasBottom: true,
    lightBg: false,
    topLine: 'WELCOME TO RBG DEVELOPMENT',
    headline: 'About RBG',
    description:{
      p1:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quam dolores, aperiam natus earum eligendi illum perferendis quis recusandae vero.',
      p2:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quam dolores, aperiam natus earum eligendi illum perferendis quis recusandae vero.',
    },
    buttonLink: '/about',
    buttonLabel: 'Get Started',
    buttonStyle: 'btn--primary',
    imgStart: false,
    img: '/images/a1.png',
    alt: 'Confidential'
};
  
// services page
export const serviceObjOne = {
  hasTop: false,
  hasBottom: true,
  lightBg: false,
  topLine: 'Exclusive Access',
  headline: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees',
  buttonLink: '/about',
  buttonLabel: 'Get Started',
  buttonStyle: 'btn--primary',
  imgStart: false,
  img: 'images/svg-1.svg',
  alt: 'Credit Card'
};

export const serviceObjTwo = {
  hasTop: true,
  hasBottom: true,
  lightBg: false,
  topLine: '100% SECURE',
  headline: 'Stay protected 24/7 anywhere anytime',
  description:
    'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime',
  buttonLink: '/about',
  buttonLabel: 'Get Started',
  buttonStyle: 'btn--primary',
  imgStart: false,
  img: 'images/svg-5.svg',
  alt: 'Vault'
};

export const serviceObjThree = {
  hasTop: true,
  hasBottom: true,
  lightBg: true,
  topLine: 'EASY SETUP',
  headline: 'Super fast and simple onboarding process',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLink: '/about',
  buttonLabel: 'Get Started',
  buttonStyle: 'btn--primary',
  imgStart: true,
  img: 'images/svg-7.svg',
  alt: 'Vault'
};

export const serviceObjFour = {
  hasTop: true,
  hasBottom: true,
  lightBg: false,
  topLine: 'DATA ANALYTICS',
  headline: 'Every transaction is stored on our secure cloud database',
  description:
    'Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.',
  buttonLink: '/about',
  buttonLabel: 'Get Started',
  buttonStyle: 'btn--primary',
  imgStart: true,
  img: '/images/svg-8.svg',
  alt: 'Vault'
};

// project page
export const projectObjOne = {
  hasTop: false,
  hasBottom: true,
  lightBg: false,
  topLine: 'eseuribac.ro',
  headline: 'Highschool education and forum platform',
  description:
    'We provide worldwide shipping to all countries. If there are any issues, just issue a refund and we will process your request',
  buttonLink: '/',
  buttonLabel: 'Simulation',
  buttonStyle: 'btn--primary',
  imgStart: false,
  img: '/images/svg-4.svg',
  alt: 'Credit Card'
};

export const projectObjTwo = {
  hasTop: true,
  hasBottom: true,
  lightBg: true,
  topLine: 'mirasoil.ro',
  headline: 'Shop for lavender natural products',
  description:'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime',
  buttonLink: '/',
  buttonLabel: 'Learn More',
  buttonStyle: 'btn--primary',
  imgStart: true,
  img: '/images/svg-5.svg',
  alt: 'Vault'
};

export const projectObjThree = {
  hasTop: true,
  hasBottom: true,
  lightBg: false,
  topLine: 'toproofersltd.co.uk',
  headline: 'Roofing services website',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLink: '/',
  buttonLabel: 'Start Now',
  buttonStyle: 'btn--primary',
  imgStart: true,
  img: '/images/svg-7.svg',
  alt: 'Vault'
};

export const projectObjFour = {
  hasTop: true,
  hasBottom: true,
  lightBg: true,
  topLine: 'RBG-DEV.COM',
  headline: 'Every transaction is stored on our secure cloud database',
  description:
    'Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.',
    buttonLink: '/',
  buttonLabel: 'Sign Up Now',
  buttonStyle: 'btn--primary',
  imgStart: true,
  img: '/images/svg-8.svg',
  alt: 'Vault'
};

// contact page
export const contactObjOne = {
  hasTop: false,
  hasBottom: true,
  lightBg: false,
  topLine: 'SIGN UP TODAY',
  headline: 'Join today to receive an exclusive offer',
  description:
    'Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees',
  buttonLink: '/about',
  buttonLabel: 'Get Started',
  buttonStyle: 'btn--primary',
  imgStart: false,
  img: 'images/svg-6.svg',
  alt: 'Credit Card'
};

export const contactObjTwo = {
  hasTop: true,
  hasBottom: true,
  lightBg: true,
  topLine: 'SIGN UP TODAY',
  headline: 'Join today to receive an exclusive offer',
  description:
    'Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees',
  buttonLink: '/about',
  buttonLabel: 'Get Started',
  buttonStyle: 'btn--primary',
  imgStart: true,
  img: 'images/svg-6.svg',
  alt: 'Credit Card'
}; 

export const contactObjThree = {
  hasTop: true,
  hasBottom: true,
  lightBg: false,
  topLine: 'SIGN UP TODAY',
  headline: 'Join today to receive an exclusive offer',
  description:
    'Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees',
  buttonLink: '/about',
  buttonLabel: 'Get Started',
  buttonStyle: 'btn--primary',
  imgStart: false,
  img: 'images/svg-6.svg',
  alt: 'Credit Card'
};

// Cards information constants for different pages 
// about cards information
export const aboutCards =[
  { 
    id: 1,
    title: 'HTML 5',
    img: '/images/badge-html5.png',
    p1: 'HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.',
    p2: 'This set is sometimes called HTML5 & friends and often shortened to just HTML5.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  {
    id:2,
      title: 'CSS 3',
      img: '/images/badge-css3.png',
      p1: 'CSS is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.',
      p2: 'Experimental parts are vendor-prefixed and should either be avoided in production environments, or used with extreme caution as both their syntax and semantics can change in the future.',
      url: 'https://developer.mozilla.org/en-US/docs/Archive/CSS3',
  },
  {
    id:3,
      title: 'PHP',
      img: '/images/badge-php.png',
      p1: 'PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.',
      p2: 'What distinguishes PHP from something like client-side JavaScript is that the code is executed on the server, generating HTML which is then sent to the client. The client would receive the results of running that script, but would not know what the underlying code was.',
      p3: 'You can even configure your web server to process all your HTML files with PHP, and then there is really no way that users can tell what you have up your sleeve.',
      url: 'https://www.php.net/manual/en/intro-whatis.php',
  },
  {
    id:4,
      title: 'jQuery',
      img: '/images/badge-jquery.png',
      p1: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
      p2: ' With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.',
      url: 'https://jquery.com/',
  },
  {
    id:5,
      title: 'WordPress',
      img: '/images/badge-wordpress.png',
      p1: 'WordPress allows you to build a website that meets your unique needs. Start a blog, business site, portfolio, online store, or anything else you can imagine. With built‑in optimization and responsive, mobile‑ready themes, there’s no limit to who you can reach with your new website.',
      p2: 'Create a simple website for you or your family where you sell products around the world—it’s up to you.',
      url: 'https://wordpress.com/',
  },
  {
    id:6,
      title: 'Java Script',
      img: '/images/badge-javascript.png',
      p1: 'JavaScript is a resource built by the Pluralsight team for the JavaScript community.Because JavaScript is a great language for coding beginners, we have gathered some of the best learning resources around and built a JavaScript course to help new developers get up and running.',
      p2: 'With the help of community members contributing content to the site, JavaScript.com aims to also keep more advanced developers up to date on news, frameworks, and libraries.',
      url: 'https://www.php.net/manual/en/intro-whatis.php',
  },
  {
    id:7,
      title: 'Sql',
      img: '/images/badge-sql.png',
      p1: 'Sql Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network (including the Internet).',
      p2: ' Microsoft markets at least a dozen different editions of Microsoft SQL Server, aimed at different audiences and for workloads ranging from small single-machine applications to large Internet-facing applications with many concurrent users.',
      url: 'https://docs.microsoft.com/en-us/sql/sql-server/sql-server-ver15-release-notes?view=sqlallproducts-allversions',
  },
  {
    id:8,
      title: 'Bootstrap',
      img: '/images/badge-bootstrap.png',
      p1: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally)JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.',
      p2: 'Bootstrap is the third-most-starred project on GitHub, with more than 135,000 stars, behind only freeCodeCamp (almost 305,000 stars) and marginally behind Vue.js framework.According to Alexa Rank, Bootstrap getbootstrap.com is in the top-2000 in US while vuejs.org is in top-7000 in US.',
      url: 'https://getbootstrap.com/',
  },
  {
    id:9,
      title: 'React',
      img: '/images/badge-react.png',
      p1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes',
      p2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs',
      url: 'https://reactjs.org/',
  },
];

// service cards information
export const servicesCards =[
  { 
    id: 1,
    title: 'Bronze',
    img: '/images/badge-html5.png',
    p1: 'HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.',
    p2: 'This set is sometimes called HTML5 & friends and often shortened to just HTML5.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  {
    id:2,
      title: 'Silver',
      img: '/images/badge-css3.png',
      p1: 'CSS is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.',
      p2: 'Experimental parts are vendor-prefixed and should either be avoided in production environments, or used with extreme caution as both their syntax and semantics can change in the future.',
      url: 'https://developer.mozilla.org/en-US/docs/Archive/CSS3',
  },
  {
    id:3,
      title: 'Gold',
      img: '/images/badge-php.png',
      p1: 'PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.',
      p2: 'What distinguishes PHP from something like client-side JavaScript is that the code is executed on the server, generating HTML which is then sent to the client. The client would receive the results of running that script, but would not know what the underlying code was.',
      p3: 'You can even configure your web server to process all your HTML files with PHP, and then there is really no way that users can tell what you have up your sleeve.',
      url: 'https://www.php.net/manual/en/intro-whatis.php',
  },
];

// Footer links
export const footerLinks=[
  {
    id:1,
    title:'About Us',
    links: [
      {title: 'How it works', url: '/'},
      {title: 'Testimonials', url: '/'},
      {title: 'Cookies', url: '/'},
      {title: 'Privacy Policy', url: '/'},
      {title: 'Terms of Service', url: '/'},
    ],
  },
  {
    id:2,
    title:'Services',
    links: [
      {title: 'Development', url: '/'},
      {title: 'Maintenance', url: '/'},
      {title: 'Marketing', url: '/'},
      {title: 'SEO', url: '/'},
      {title: 'Hosting', url: '/'},
    ],
  },
  {
    id:3,
    title:'Projects',
    links: [
      {title: 'New', url: '/'},
      {title: 'Finished', url: '/'},
      {title: 'Ongoing', url: '/'},
      {title: 'Status', url: '/'},
    ],
  },
  {
    id:4,
    title:'Contact Us',
    links: [
      {title: 'Contact', url: '/'},
      {title: 'Support', url: '/'},
      {title: 'Destinations', url: '/'},
      {title: 'Sponsorships', url: '/'},
    ],
  },
  {
    id:5,
    title:'Social Media',
    links: [
      {title: 'Facebook', url: '/'},
      {title: 'Instagram', url: '/'},
      {title: 'Youtube', url: '/'},
      {title: 'X (Twitter)', url: '/'},
    ],
  },
]

// Form projects list
export const formProjectsList =[
  {
    title: 'Select Project',
    options:[
      {option: 'EseuriBac'},
      {option: 'EasyFixPM'},
      {option: 'TopRoofers'},
      {option: 'MiraSoil'},
    ],
  }
]