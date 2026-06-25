export const personalInfo = {
  name: "J Prapanch",
  firstName: "Prapanch",
  role: "Software Engineer",
  tagline: "Building apps that solve real problems.",
  location: "Trivandrum, Kerala",
  email: "prapanchappuse789@gmail.com",
  phone: "+91 9778259149",
  linkedin: "https://www.linkedin.com/in/prapanch-j",
  github: "https://github.com/prapanch07",
  website: "https://prapanchj789.web.app",
  bio: "I’m a software engineer focused on building clean, reliable, and user-friendly applications. I enjoy turning real-world problems into simple digital experiences, with most of my work centered around Flutter, Firebase, Django, and full-stack development.\n\nI care about writing readable code, solving edge cases properly, and creating products that feel smooth for the people using them.",
  shortBio:
    "Software Engineer specializing in mobile and web applications. Currently building large-scale booking systems at Lascade. Passionate about clean architecture, API design, and creating delightful user experiences.",
};

export const experiences = [
  {
    company: "Lascade",
    role: "Flutter Developer",
    period: "Feb 2025 – Present",
    type: "FULL-TIME",
    color: "primary" as const,
    highlights: [
      "Working on large booking applications where performance, reliability, and smooth user flow are important.",
      "Fixing real production issues related to app state, API responses, validations, and edge-case user actions.",
      "Collaborating with backend and product teams to improve booking flows, error handling, and overall app stability.",
    ],
  },
  {
    company: "Peaktew",
    role: "Flutter Developer Intern",
    period: "Aug 2024 – Jan 2025",
    type: "INTERNSHIP",
    color: "secondary" as const,
    highlights: [
      "Built and improved Flutter screens with a focus on clean UI, responsiveness, and better user experience.",
      "Connected frontend features with backend APIs and handled data flow across different parts of the app.",
      "Learned how to debug real app issues, improve existing features, and work closely with project requirements.",
    ],
  },
  {
    company: "Brototype",
    role: "Campus Lead",
    period: "Apr 2023 – Oct 2023",
    type: "LEADERSHIP",
    color: "accent" as const,
    highlights: [
      "Started and managed a campus initiative to create a stronger technical learning environment among students.",
      "Organized technical sessions and guided a small team to plan, coordinate, and run campus activities.",
      "Improved my leadership, communication, and team management skills through practical event experience.",
    ],
  },
];

export const projects = [
  {
    title: "Social Media Management Tool",
    description:
      "To make professional social media tracking simple, I built a self-hosted Instagram analytics web application using Django and Flutter Web. The platform allows users to search public profiles or link their own accounts to monitor post engagement, view counts, and follower trends over time. With automated backend updates and interactive charts, the app provides creators with a complete, interactive dashboard to analyze their social footprint without any subscription fees.",
    longDescription: "",
    tech: ["Flutter", "Firebase", "Firestore", "REST APIs"],
    color: "primary" as const,
    github: "https://github.com/prapanch07/social-media-manager",
    live: "",
    beta: true,
  },
  {
    title: "Nakshatra — Offline-First Vedic Astrology App",
    description:
      "it is a premium, offline-first mobile app built with Flutter that bridges centuries-old astronomical math with modern UI design. Powered by the Swiss Ephemeris engine, the app performs precise Vedic astrology calculations to generate interactive birth charts (Kundli), compatibility matching, and daily Panchang details completely offline. To make these insights accessible, it integrates LLaMA 3.3 (via Groq API) to act as an AI Jyotishi, translating complex planetary placements, dignities, and Vimshottari dasha timelines into highly personalized, conversational readings.",
    longDescription: "",
    tech: ["Flutter", "AI/ML", "LLaMA 3.3", "Groq API", "Swiss Ephemeris"],
    color: "primary" as const,
    github: "https://github.com/prapanch07/Nakshatra",
    live: "",
    beta: true,
  },
  {
    title: "MedLens",
    description:
      "I built MedLens, a Flutter app that makes it easier for people to understand their medicines. You can search any medicine, take a photo to identify it, compare prices across pharmacies, find nearby stores, set reminders for your doses, use voice search for hands-free lookup, and read up on medical research — with everything synced to the cloud across devices.",
    longDescription: "",
    tech: ["Flutter", "AI/ML", "Firebase", "OpenStreetMap", "REST APIs"],
    color: "secondary" as const,
    github: "https://github.com/prapanch07/MedLens",
    live: "https://github.com/prapanch07/MedLens/releases/tag/android-release",
    beta: false,
  },
  {
    title: "Medicharoo - Wishlist Platform",
    description:
      "It was a really fun project to build. It's a social wishlist platform where you can post something you want (wish) — a gadget, a trip, literally anything — and your friends or even strangers can chip in directly via UPI. No middleman, no fees, just a QR code and a tap. I built it with React, Vite, and Firebase, keeping everything serverless and real-time.",
    longDescription: "",
    tech: ["React", "Vite", "Firebase"],
    color: "accent" as const,
    github: "https://github.com/prapanch07/Medicharo",
    live: "https://medicharoo.web.app",
    beta: false,
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
  { name: "C", category: "Languages" },
  { name: "Java", category: "Languages" },
];

export const education = [
  {
    institution: "Rajadhani Institute of Engineering and Technology",
    degree: "Bachelor of Technology in Computer Science Engineering",
    field: "",
    period: "2020 – 2024",
  },
  {
    institution: "Navabharath Higher Secondary School",
    degree: "Higher Secondary Education",
    field: "Science",
    period: "2018 – 2020",
  },
];

export const courses = [
  {
    title: "Full-Stack Web Development with Python, Django, and React",
    provider: "Mashupstack, Kochi",
    period: "July 2024 – Jan 2025",
    description:
      "Completed a hands-on full-stack development program focused on building practical web applications using Django and React. The course helped me strengthen my backend fundamentals, frontend development skills, and understanding of real-world project structure.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
