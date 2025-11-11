export interface experienceDataType {
  name: string;
  logo: string;
  website: string;
  date: string;
  role: string;
  location: string;
  description: string;
}
export interface projectDataType {
  thumbnail: string;
  name: string;
  live: string;
  github: string;
  tags: string[];
  description: string;
}

export const experienceData: experienceDataType[] = [
  {
    name: "Awwaltech",
    logo: "/images/awwaltech_logo.jpg",
    website: "https://www.awwaltech.com/",
    role: "Frontend Developer Intern",
    date: "July 2025 - October 2025",
    location: "Noida (Remote)",
    description:
      "I developed and optimized responsive web pages using React.js, Next.js, and Tailwind CSS to ensure consistent performance across browsers and devices. By resolving critical frontend issues and applying efficient logic, I significantly improved the application’s stability and overall user experience. I also implemented smooth UI animations using GSAP to enhance interactivity and engagement. Leveraging Git and GitHub for version control, I maintained clean, well-documented code throughout the development process. Collaborating closely with senior developers in an Agile environment, I contributed to sprint planning and daily meetings, ensuring timely delivery and high-quality outcomes",
  },
];

export const projectData: projectDataType[] = [
  {
    thumbnail: "/images/netflix_pro.png",
    name: "Netflix UI Clone",
    live: "https://netflix-clone-demo.vercel.app/",
    github: "https://github.com/SufiyanMogal07/netflix-ui-clone",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive Netflix landing page clone built using pure HTML, CSS, and JavaScript. Focused on UI replication, responsive layouts, and smooth transitions to enhance front-end skills.",
  },
  {
    thumbnail: "/images/netflix_pro.png",
    name: "Ecommerce Store",
    live: "https://ecommerce-demo.vercel.app/",
    github: "https://github.com/SufiyanMogal07/ecommerce-store",
    tags: ["Next.js", "React", "MongoDB", "Stripe", "Html", "Css"],
    description:
      "A full-stack eCommerce web app featuring product filtering, user authentication, and Stripe payment integration. Built with Next.js and MongoDB for a fast and secure shopping experience.",
  },
  {
    thumbnail: "/images/netflix_pro.png",
    name: "Personal Portfolio v2",
    live: "https://sufiyan-portfolio.vercel.app/",
    github: "https://github.com/SufiyanMogal07/portfolio-v2",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    description:
      "A sleek personal portfolio website built with Next.js and Tailwind CSS, showcasing projects, experience, and contact details with smooth animations using Framer Motion.",
  },
  {
    thumbnail: "/images/netflix_pro.png",
    name: "Weather App",
    live: "https://weatherx-demo.vercel.app/",
    github: "https://github.com/SufiyanMogal07/weather-app",
    tags: ["React", "API", "OpenWeatherMap"],
    description:
      "A weather forecast app that fetches real-time weather data using OpenWeatherMap API. Includes dynamic background updates, responsive design, and city-based search.",
  },
  {
    thumbnail: "/images/netflix_pro.png",
    name: "Blog Platform",
    live: "https://blogify-demo.vercel.app/",
    github: "https://github.com/SufiyanMogal07/blog-platform",
    tags: ["Next.js", "Sanity CMS", "TailwindCSS"],
    description:
      "A modern blog platform integrated with Sanity CMS for content management. Supports rich text editing, category filtering, and SEO-friendly pages.",
  },
];

