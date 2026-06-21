export const personalInfo = {
  name: "J Prapanch",
  firstName: "Prapanch",
  role: "Software Engineer",
  tagline: "Building apps that solve real problems.",
  location: "Trivandrum, Kerala",
  email: "prapanchj789@gmail.com",
  phone: "+91 9778259149",
  linkedin: "https://www.linkedin.com/in/prapanch-j",
  github: "https://github.com/prapanch07",
  website: "https://prapanchj789.web.app",
  bio: "I'm a software engineer passionate about building scalable applications that make a real impact. With experience in Flutter, Django, and full-stack web development, I thrive at the intersection of clean code and great user experience. I love turning complex problems into elegant, intuitive solutions.",
  shortBio:
    "Software Engineer specializing in mobile and web applications. Currently building large-scale booking systems at Lascade. Passionate about clean architecture, API design, and creating delightful user experiences.",
};

export const experiences = [
  {
    company: "Lascade",
    role: "Flutter Developer",
    period: "Feb 2025 – Present",
    type: "Full-time",
    color: "primary" as const,
    highlights: [
      "Contributing to the development of large-scale booking applications handling real-world transaction workflows and user concurrency scenarios.",
      "Identified and resolved complex production issues related to state management, API failures, and edge-case user flows.",
      "Collaborated closely with backend and product teams to refine booking logic, validation rules, and error-handling mechanisms across multiple applications.",
    ],
  },
  {
    company: "Peaktew",
    role: "Flutter Developer Intern",
    period: "Aug 2024 – Jan 2025",
    type: "Internship",
    color: "secondary" as const,
    highlights: [
      "Integrated APIs to ensure smooth communication between the frontend and backend.",
      "Designed and implemented user interfaces that enhanced user experience and aligned with project goals.",
    ],
  },
  {
    company: "Brototype",
    role: "Campus Lead",
    period: "Apr 2023 – Oct 2023",
    type: "Leadership",
    color: "accent" as const,
    highlights: [
      "Founded the Brototype Campus Initiative, establishing a strong technical community on campus.",
      "Hosted technical events and led a team of six students to drive engagement and learning.",
      "Demonstrated leadership, event planning, and team management skills through successful initiatives.",
    ],
  },
];

export const projects = [
  {
    title: "Social Media Management Tool",
    description:
      "Built a scalable social media analytics dashboard with a custom time-series snapshot engine that enables historical engagement tracking beyond platform API limits.",
    longDescription:
      "Implemented dual-mode analytics (lifetime vs period), optimized Firestore queries, and reactive UI rendering for large content datasets.",
    tech: ["Flutter", "Firebase", "Firestore", "REST APIs"],
    color: "primary" as const,
    github: "https://github.com/prapanch07",
    live: "",
  },
  {
    title: "Medlens",
    description:
      "Built a medicine intelligence app using a hybrid SerpApi + Groq AI pipeline for real-time drug information, price comparison across Indian pharmacies, and visual medicine identification via image recognition.",
    longDescription:
      "Implemented dual-API key rotation, rolling-window alarm scheduling for medicine reminders, nearby pharmacy discovery with OpenStreetMap, Firebase cloud sync, voice search, and a research hub powered by Europe PMC.",
    tech: ["Flutter", "AI/ML", "Firebase", "OpenStreetMap", "REST APIs"],
    color: "secondary" as const,
    github: "https://github.com/prapanch07",
    live: "",
  },
];

export const skills = [
  { name: "Flutter", category: "Frontend" },
  { name: "Django", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Web Development", category: "Frontend" },
  { name: "Firebase", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "CI/CD", category: "Tools" },
  { name: "REST APIs", category: "Backend" },
  { name: "Python", category: "Languages" },
  { name: "Dart", category: "Languages" },
];

export const education = [
  {
    institution: "Rajadhani Institute of Engineering and Technology",
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    period: "2020 – 2024",
  },
  {
    institution: "Navabharath Higher Secondary School",
    degree: "Higher Secondary",
    field: "Science",
    period: "2018 – 2020",
  },
];

export const courses = [
  {
    title: "Full-Stack Web Development in Python Django with React",
    provider: "Mashupstack, Kochi",
    period: "July 2024 – Jan 2025",
    description:
      "Completed a 6-month intensive program focused on backend development with Django and frontend development using React. Gained hands-on experience in building full-stack web applications.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
