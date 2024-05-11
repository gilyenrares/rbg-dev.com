
// Jumbotron constants
export const index = {
    location: 'index',
    title: 'RBG Development',
    subtitle: 'NextJs, React, JavaScript, Php, Sql, Tailwind & More',
    url: '/about',
    button: 'More',
    btnStyle: 'btn--info',
}
export const about = {
    location: 'about',
    title: 'About RBG',
    subtitle: 'Development, Maintenance , Features,  Vision & more.',
    url: '/projects',
    button: 'Examples',
    btnStyle: 'btn--warning',
}
export const services = {
    location: 'services',
    title: 'Our Web Services',
    subtitle: 'Design, Development, Maintenance, Security & more',
    url: '/contact',
    button: 'Contact Us',
    btnStyle: 'btn--success',
}
export const projects = {
    location: 'projects',
    title: 'Latest Projects',
    subtitle: 'View our full projects portfolio up to date, our services in action',
    url: '/services',
    button: 'Services',
    btnStyle: 'btn--danger',
}
export const contact = {
    location: 'contact',
    title: 'Contact',
    subtitle: 'Contact us for more details not available on our website',
    url: '/about',
    button: 'About us',
    btnStyle: 'btn--primary',
}

// HeroSections constants for all the pages
// index page
export const homeObjOne = {
	hasTop: false,
	hasBottom: true,
	lightBg: false,
	topLine: 'WELCOME TO RBG DEVELOPMENT',
	headline: 'The RBG Way',
	description: {
		p1: 'RBG is focused on providing the right solution for any of our clients needs. Starting from s simple website tweak to full website solution including maintenance, seo management, hosting and many more.',
    p2: 'YOU bring the IDEA, RBG provides the SOLUTION, YOU tell us the VISION, RBG transform it to REALITY.',
		p3: 'RBG full web service provides a multitude of options for the client to choose from. For more information check out our services page.',
	},
	buttonLink: '/services',
	buttonLabel: 'Our Services',
	buttonStyle: 'btn--success',
	imgStart: false,
	img: '/images/cloud-server.svg',
	alt: 'Server Logo',
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
    topLine: 'DISCOVER RBG DEVELOPMENT',
    headline: 'About RBG',
    description:{
      p1:'On the front end of web development in order to create the overall layout of the website, HTML & CSS are used and combined. Furthermore, JavaScript more specifically jQuery, is used to animate and smooth out the website design, thus creating a pleasant user experience.',
      p2:' On the back end of web development, PHP and MySql are used to bring functionality into the website and sort and store relevant information in databases.'
    },
    buttonLink: '/about',
    buttonLabel: 'Get Started',
    buttonStyle: 'btn--primary',
    imgStart: false,
    img: '/images/disk-left.svg',
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
  topLine: 'Our Exclusive Services',
  headline: 'Solutions for visions',
  description:{
    p1: 'Get a good look at our exclusive services and choose the one which serves you best. You can choose either one of then or even multiples.',
    p2: 'For more information on each service make sure to check out the Find out more section. If that fails do not worry, just contact us using any of our communication channels.',
    p3: 'Furthermore, our projects page is a perfect place to see RBG service being implemented.',
  },
  buttonLink: '/projects',
  buttonLabel: 'Our Projects',
  buttonStyle: 'btn--danger',
  imgStart: false,
  img: 'images/cloud-server-active.svg',
  alt: 'Server logo'
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
  topLine: 'Our Recent Projects',
  headline: 'Visions to Reality',
  description: {
    p1:  'We provide a multitude of services for our customers from: design to development, accessibility to responsiveness, content to maintenance, and more.',
    p2: 'On this page you can find the latest of our projects as well as behind the scenes of you own project if you are Logged in.',
    p3: 'If you like what you see, Contact Us, yo can find more about RBG on the about us page',
  },
  buttonLink: '/about',
  buttonLabel: 'About Us',
  buttonStyle: 'btn--light',
  imgStart: false,
  img: '/images/code.svg',
  alt: 'Website coding'
};
export const projectObjTwo = {
  hasTop: true,
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

export const projectObjThree = {
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

export const projectObjFour = {
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

export const projectObjFive = {
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
    title: 'NextJs',
    type: 'Framework',
    img: '/images/nextjs.svg',
    p1: 'Next.js is an open-source web development framework to create fast, full-stack web applications.',
    url: 'hhttps://nextjs.org/',
  },
  { 
    id: 2,
    title: 'React',
    type: 'Library',
    img: '/images/react.svg',
    p1: 'React is a open-source front-end JavaScript library for building user interfaces based on components.',
    url: 'https://react.dev/',
  },
  {
    id:3,
    title: 'Java Script',
    type: 'Scripting',
    img: '/images/javascript.svg',
    p1: 'JavaScript is a scripting language that enables the creation of dynamic web page content.',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
  },
  {
    id:4,
    title: 'PHP',
    type: 'Scripting',
    img: '/images/php.svg',
    p1: 'PHP (recursive acronym for PHP: Hypertext Preprocessor)is a open source scripting language',
    url: 'https://www.php.net/manual/en/intro-whatis.php',
  },
  { 
    id:5,
    title: 'HTML 5',
    type: 'Language',
    img: '/images/html5.svg',
    p1: 'HTML5 is a markup language used for structuring and presenting hypertext documents on the World Wide Web.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  {
    id:6,
    title: 'TypeScript',
    type: 'Language',
    img: '/images/typescript.svg',
    p1: 'TypeScript is a open-source high-level JavaScript programming language developed by Microsoft',
    url: 'https://www.typescriptlang.org/',
  },
  {
    id:7,
    title: 'jQuery',
    type: 'Library',
    img: '/images/jquery.svg',
    p1: 'jQuery is a fast, small, and feature-rich JavaScript library.',
    url: 'https://jquery.com/',
  },
  {
    id:8,
    title: 'MySql',
    type: 'Database',
    img: '/images/mysql.svg',
    p1: 'MySQL is one of the most popular open source database in the world.',
    url: 'https://docs.microsoft.com/en-us/sql/sql-server/sql-server-ver15-release-notes?view=sqlallproducts-allversions',
  },
  { 
    id: 9,
    title: 'Tailwind',
    type: 'Framework',
    img: '/images/tailwindcss.svg',
    p1: 'Tailwind css is a utility-first CSS framework packed with classes that make it fast to create websites.',
    url: 'https://tailwindcss.com/',
  },
  {
    id:10,
    title: 'Bootstrap',
    type: 'framework',
    img: '/images/bootstrap.svg',
    p1: 'Bootstrap is a open-source CSS framework directed at responsive, mobile-first front-end web development.',
    url: 'https://getbootstrap.com/',
  },
  {
    id:11,
    title: 'CSS 3',
    type: 'Language',
    img: '/images/css3.svg',
    p1: 'CSS Cascading Style Sheets language and is used to stylize elements written in HTML.',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS',
  },
  {
    id:12,
    title: 'Sass',
    type: 'Extension',
    img: '/images/sass.svg',
    p1: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
    url: 'https://sass-lang.com/',
  },
  {
    id:13,
    title: 'Firebase',
    type: 'Platform',
    img: '/images/firebase.svg',
    p1: 'Firebase is a platform developed by Google that provides tools and services for building web and mobile applications.',
    url: 'https://firebase.google.com/',
  },
  {
    id:14,
    title: 'Postman',
    type: 'Platform',
    img: '/images/postman.svg',
    p1: 'Postman is an API platform for building and using APIs(application programming interface).',
    url: 'https://www.postman.com/',
  },
  {
    id:15,
    title: 'Json',
    type: 'Format',
    img: '/images/json.svg',
    p1: 'JSON (JavaScript Object Notation) is a text-based format for storing and exchanging data.',
    url: 'https://www.json.org/json-en.html',
  },
  
];

// service cards information
export const servicesCards =[
  { 
    id: 1,
    title: 'Basic Web Page',
    type: 'Static',
    img: '/images/badge-html5.png',
    display:'services',
    price: '50£/each',
    itemList: [
      {id: 1, isIncluded: true, name: 'Functional website'},
      {id: 2, isIncluded: true, name: 'Responsive design'},
      {id: 3, isIncluded: true, name: 'SEO Friendly'},
      {id: 4, isIncluded: true, name: 'Up to 5 Sections'},
      {id: 5, isIncluded: true, name: 'Contact form'},
      {id: 6, isIncluded: false, name: 'Opt-in form'},
      {id: 7, isIncluded: false, name: 'Reviews functionality'},
      {id: 8, isIncluded: false, name: 'User Account System'},
      {id: 9, isIncluded: false, name: 'eCommerce functionality'},
      {id:10, isIncluded: false, name: 'Payment processing'},
    ],
    url: '/',
  },
  {
    id:2,
    title: 'Standard Web Page',
    type: 'Dynamic',
    img: '/images/badge-css3.png',
    display:'services',
    price: '80£/each',
    itemList: [
      {id: 1, isIncluded: true, name: 'Functional website'},
      {id: 2, isIncluded: true, name: 'Responsive design'},
      {id: 3, isIncluded: true, name: 'SEO Friendly'},
      {id: 4, isIncluded: true, name: 'Up to 7 Sections'},
      {id: 5, isIncluded: true, name: 'Contact form'},
      {id: 6, isIncluded: true, name: 'Opt-in form'},
      {id: 7, isIncluded: true, name: 'Reviews functionality'},
      {id: 8, isIncluded: false, name: 'User Account System'},
      {id: 9, isIncluded: false, name: 'eCommerce functionality'},
      {id:10, isIncluded: false, name: 'Payment processing'},
    ],
    url: 'https://developer.mozilla.org/en-US/docs/Archive/CSS3',
  },
  {
    id:3,
    title: 'Premium Web Page',
    type: 'Interactive',
    img: '/images/badge-php.png',
    display:'services',
    price: '100£/each',
    itemList: [
      {id: 1, isIncluded: true, name: 'Functional website'},
      {id: 2, isIncluded: true, name: 'Responsive design'},
      {id: 3, isIncluded: true, name: 'SEO Friendly'},
      {id: 4, isIncluded: true, name: 'Up to 10 Sections'},
      {id: 5, isIncluded: true, name: 'Contact form'},
      {id: 6, isIncluded: true, name: 'Opt-in form'},
      {id: 7, isIncluded: true, name: 'Reviews functionality'},
      {id: 8, isIncluded: true, name: 'User Account System'},
      {id: 9, isIncluded: true, name: 'eCommerce functionality'},
      {id:10, isIncluded: true, name: 'Payment processing'},
    ],
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
// temporarily array of languages
const tempCards =[
  { 
    id: 1,
    title: 'NextJs',
    img: '/images/nextjs.svg',
    p1: 'HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.',
    p2: 'This set is sometimes called HTML5 & friends and often shortened to just HTML5.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  { 
    id: 2,
    title: 'React',
    img: '/images/react.svg',
    p1: 'HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.',
    p2: 'This set is sometimes called HTML5 & friends and often shortened to just HTML5.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  {
    id:3,
      title: 'Java Script',
      img: '/images/javascript.svg',
      p1: 'JavaScript is a resource built by the Pluralsight team for the JavaScript community.Because JavaScript is a great language for coding beginners, we have gathered some of the best learning resources around and built a JavaScript course to help new developers get up and running.',
      p2: 'With the help of community members contributing content to the site, JavaScript.com aims to also keep more advanced developers up to date on news, frameworks, and libraries.',
      url: 'https://www.php.net/manual/en/intro-whatis.php',
  },
  {
    id:4,
      title: 'PHP',
      img: '/images/php.svg',
      p1: 'PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.',
      p2: 'What distinguishes PHP from something like client-side JavaScript is that the code is executed on the server, generating HTML which is then sent to the client. The client would receive the results of running that script, but would not know what the underlying code was.',
      p3: 'You can even configure your web server to process all your HTML files with PHP, and then there is really no way that users can tell what you have up your sleeve.',
      url: 'https://www.php.net/manual/en/intro-whatis.php',
  },
  { 
    id:5,
    title: 'HTML 5',
    img: '/images/html5.svg',
    p1: 'HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.',
    p2: 'This set is sometimes called HTML5 & friends and often shortened to just HTML5.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  {
    id:6,
      title: 'Json',
      img: '/images/json.svg',
      p1: 'WordPress allows you to build a website that meets your unique needs. Start a blog, business site, portfolio, online store, or anything else you can imagine. With built‑in optimization and responsive, mobile‑ready themes, there’s no limit to who you can reach with your new website.',
      p2: 'Create a simple website for you or your family where you sell products around the world—it’s up to you.',
      url: 'https://wordpress.com/',
  },
  {
    id:7,
      title: 'jQuery',
      img: '/images/jquery.svg',
      p1: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
      p2: ' With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.',
      url: 'https://jquery.com/',
  },
  {
    id:8,
      title: 'Sql',
      img: '/images/mysql.svg',
      p1: 'Sql Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network (including the Internet).',
      p2: ' Microsoft markets at least a dozen different editions of Microsoft SQL Server, aimed at different audiences and for workloads ranging from small single-machine applications to large Internet-facing applications with many concurrent users.',
      url: 'https://docs.microsoft.com/en-us/sql/sql-server/sql-server-ver15-release-notes?view=sqlallproducts-allversions',
  },
  { 
    id: 9,
    title: 'Tailwind',
    img: '/images/tailwindcss.svg',
    p1: 'HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.',
    p2: 'This set is sometimes called HTML5 & friends and often shortened to just HTML5.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  {
    id:10,
      title: 'Bootstrap',
      img: '/images/bootstrap.svg',
      p1: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally)JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.',
      p2: 'Bootstrap is the third-most-starred project on GitHub, with more than 135,000 stars, behind only freeCodeCamp (almost 305,000 stars) and marginally behind Vue.js framework.According to Alexa Rank, Bootstrap getbootstrap.com is in the top-2000 in US while vuejs.org is in top-7000 in US.',
      url: 'https://getbootstrap.com/',
  },
  {
    id:11,
      title: 'CSS 3',
      img: '/images/css3.svg',
      p1: 'CSS is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.',
      p2: 'Experimental parts are vendor-prefixed and should either be avoided in production environments, or used with extreme caution as both their syntax and semantics can change in the future.',
      url: 'https://developer.mozilla.org/en-US/docs/Archive/CSS3',
  },
  {
    id:12,
      title: 'Sass',
      img: '/images/sass.svg',
      p1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes',
      p2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs',
      url: 'https://reactjs.org/',
  },
];
