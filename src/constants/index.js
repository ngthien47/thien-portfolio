import project1 from "../assets/projects/restaurantProject.png";
import project2 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate and motivated web developer with strong skills in both frontend and backend development. I have hands-on experience with technologies like Wordpress, PHP, ReactJS, .NET and MySQL, and I’m comfortable working with modern tools like GitHub, Figma, and various AI-driven tools such as ChatGPT, ClaudeAI, Copilot, and CursorAI.`;

export const ABOUT_TEXT = `My goal is to secure a professional position as a web developer at an exciting tech company where I can apply my skills to build intuitive and dynamic websites in the real world. In the next few years, I aim to become an expert in web fullstack development and evolve into a lead developer role over time. I am a self-starter who works well independently and collaboratively. I am really excited to bring passion to my frontend or backend development career.`;

export const EXPERIENCES = [
  {
    year: "2/2025 - 4/2025",
    role: "Backend Developer",
    company: "Askany",
    description: `Integrate APIs with ChatGPT's systems. Build and optimize databases (MySQL, PostgreSQL) for storing conversations, user data, permissions, and system logs. Develop admin dashboards for chatbot data management, reporting, and performance tracking. Implement key features such as user management, conversation analytics, and AI training tools.`,
    technologies: ["PHP"],
  },
  {
    year: "7/2024 - 10/2024",
    role: "Frontend Intern",
    company: "Fuzitavn Co.,LTD",
    description: `Design prototypes for websites and applications. Implement web design and development principles for building software stable. Fix issue related to the user interface. Develop and maintain frontend functionality for websites.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "8/2023 - 12/2023",
    role: "Javascript Intern",
    company: "Le Du Group Co.,LTD",
    description: `Resolved complex technical issues promptly, maintaining an average bug resolution time of under 24 hours. Developed and implemented new frontend features, resulting in a 15% increase in user engagement. Contributed to the development of a mobile-responsive design, increasing mobile users' conversion rate by 12%.`,
    technologies: ["Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Le Corto Restaurant",
    image: project1,
    description:
      "A full-stack restaurant system software, primarily focusing on storing and  managing staff, customers, and revenue. The software should allow customers to order food at their tables and feature a user-friendly interface for both staff and customers. ",
    technologies: ["Java", "Spring"],
  },
  {
    title: "Portfolio",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["ReactJS", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "Vung Tau City",
  phoneNo: "093 217 0319",
  email: "ngthien47@gmail.com",
};
