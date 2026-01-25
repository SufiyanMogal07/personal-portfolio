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
    logo: "/images/logos/awwaltech_logo.jpg",
    website: "https://www.awwaltech.com/",
    role: "Frontend Developer Intern",
    date: "July 2025 - October 2025",
    location: "Noida (Remote)",
    description:
      "I developed and optimized responsive web pages using React.js, Next.js, and Tailwind CSS to ensure consistent performance across browsers and devices. By resolving critical frontend issues and applying efficient logic, I significantly improved the application’s stability and overall user experience. Leveraging Git and GitHub for version control, I maintained clean, well-documented code throughout the development process. Collaborating closely with senior developers in an Agile environment, I contributed to sprint planning and daily meetings, ensuring timely delivery and high-quality outcomes",
  }, {
    name: "Awwaltech",
    logo: "/images/logos/awwaltech_logo.jpg",
    website: "https://www.awwaltech.com/",
    role: "Frontend Developer Intern",
    date: "July 2025 - October 2025",
    location: "Noida (Remote)",
    description:
      "I developed and optimized responsive web pages using React.js, Next.js, and Tailwind CSS to ensure consistent performance across browsers and devices. By resolving critical frontend issues and applying efficient logic, I significantly improved the application’s stability and overall user experience. Leveraging Git and GitHub for version control, I maintained clean, well-documented code throughout the development process. Collaborating closely with senior developers in an Agile environment, I contributed to sprint planning and daily meetings, ensuring timely delivery and high-quality outcomes",
  },
];

export const projectData: projectDataType[] = [
  {
    thumbnail: "/images/projects/joblogs.png",
    name: "JobLogs - Job Tracker Application",
    live: "https://joblogs-frontend.vercel.app/",
    github: "https://github.com/SufiyanMogal07/joblogs-frontend",
    tags: ["Next.js", "Tailwind CSS", "Typescript", "React Hook"],
    description:
      "A scalable frontend job-tracking platform featuring advanced filtering logic, type-safe data modeling with TypeScript, and enterprise-grade form management. Designed with modular Next.js architecture and state-driven UI transitions for a seamless, robust user experience.",
  },
  {
    thumbnail: "/images/projects/crm_dashboard.png",
    name: "CRM (Customer Relationship Management)",
    live: "https://tour-verse-crm.infinityfreeapp.com/",
    github: "https://github.com/SufiyanMogal07/travel-crm",
    tags: ["PHP", "JavaScript", "jQuery", "Bootstrap", "MYSQL", "JWT"],
    description:
      "A full-stack CRM system featuring JWT-based authentication, role-based access, and in-app notifications using Pusher. Designed with modular RESTful architecture and multi-admin data isolation for scalability.",
  },
];
