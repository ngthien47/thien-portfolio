import project1 from "../assets/projects/restaurantProject.png";
import project2 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
