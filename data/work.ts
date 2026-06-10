export interface experienceDataType {
  name: string;
  logo: string;
  website: string;
  linkedin: string;
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
    linkedin: "https://www.linkedin.com/company/awwaltech/",
    role: "Frontend Developer Intern",
    date: "July 2025 - October 2025 (4 months)",
    location: "Noida (Remote)",
    description:
      "Contributed to a live vehicle marketplace platform by building frontend features with Next.js, React, TypeScript, and TailwindCSS. Integrated APIs, improved search and filtering experiences, resolved production issues, and collaborated closely with backend developers in an Agile",
  },
];

export const projectData: projectDataType[] = [
  {
    thumbnail: "/images/projects/joblogs_dashboard.png",
    name: "JobLog - Job Application Tracker",
    live: "https://joblogs.sufiyanmogal.me/",
    github: "https://github.com/SufiyanMogal07/joblogs-frontend",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
   description:
  "A full-stack job application tracking platform built with Next.js, Node.js, PostgreSQL, and Prisma. Features authentication, job tracking, notes, favourites, and dashboard statistics to help users monitor applications and interview progress.",
  },
  {
    thumbnail: "/images/projects/crm_dashboard.png",
    name: "CRM (Customer Relationship Management)",
    live: "https://tour-verse-crm.infinityfreeapp.com/",
    github: "https://github.com/SufiyanMogal07/travel-crm",
    tags: [
      "PHP",
      "MySQL",
      "JWT",
      "REST API",
      "Bootstrap",
      "RBAC",
    ],
    description:
  "A full-stack CRM system built to manage customer workflows securely across multiple organizations. Features JWT authentication, role-based access control, multi-admin data isolation, and modular REST APIs designed for scalability and maintainability.",
  },
  // {
  //   thumbnail: "/images/projects/gsap_creative_website.png",
  //   name: "Creative GSAP Website",
  //   live: "https://gsap-creative-website.vercel.app/",
  //   github: "https://github.com/SufiyanMogal07/gsap-creative-website",
  //   tags: ["HTML", "CSS", "JavaScript", "GSAP"],
  //   description:
  //     "A creative web experience exploring advanced animations, scroll interactions, and modern motion design using GSAP. Built to experiment with engaging user interfaces commonly found in marketing and creative agency websites.",
  // },
];
