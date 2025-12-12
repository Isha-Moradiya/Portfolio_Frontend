export const API = {
  login: "/api/auth/login",
  about: "/api/about",
  skills: "/api/skills",
  experiences: "/api/experiences",
  projects: "/api/projects",
  contact: "/api/contact",
}

export const DEMO_DATA = {
  about: {
    id: 1,
    title: "Full Stack Developer",
    description:
      "I am a passionate developer with 5+ years of experience building beautiful and functional web applications. I specialize in React, Node.js, and modern web technologies.",
    image: "/profile.png",
  },
  contactDetails: {
    email: "hello@example.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, California, USA",
    responseTime: "I typically respond within 24 hours during business days",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  skills: [
    { id: 1, name: "React", level: 95, image: "https://reactjs.org/logo-og.png" },
    { id: 2, name: "TypeScript", level: 90, image: "https://www.typescriptlang.org/favicon.ico" },
    { id: 3, name: "Node.js", level: 88, image: "https://nodejs.org/static/images/logo.svg" },
    { id: 4, name: "Tailwind CSS", level: 92, image: "https://tailwindcss.com/favicons/favicon-32x32.png" },
    {
      id: 5,
      name: "MongoDB",
      level: 85,
      image: "https://webimages.mongodb.com/_com_assets/cms/kuyjf7n4dewa14x57/MongoDB_Logo_FullGreen_RGB.svg",
    },
    {
      id: 6,
      name: "PostgreSQL",
      level: 87,
      image: "https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.540x557.png",
    },
  ],
  experiences: [
    {
      id: 1,
      company: "Tech Company Inc",
      role: "Senior Developer",
      duration: "2022 - Present",
      description:
        "Leading a team of developers to build scalable web applications. Implemented modern architecture patterns and improved performance by 40%.",
    },
    {
      id: 2,
      company: "StartUp Labs",
      role: "Full Stack Developer",
      duration: "2020 - 2022",
      description:
        "Built multiple full-stack applications from scratch. Worked with React, Node.js, and PostgreSQL. Led frontend architecture improvements.",
    },
    {
      id: 3,
      company: "Web Solutions Ltd",
      role: "Junior Developer",
      duration: "2019 - 2020",
      description:
        "Started my career developing responsive web applications. Learned modern web development practices and collaborated with senior developers.",
    },
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A fully functional e-commerce platform with product catalog, shopping cart, and payment integration.",
      techStack: "React, Node.js, MongoDB, Stripe",
      github: "https://github.com",
      demo: "https://demo.example.com",
      thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Social Media App",
      description: "A real-time social media application with messaging, notifications, and user profiles.",
      techStack: "React, Firebase, Tailwind CSS",
      github: "https://github.com",
      demo: "https://demo.example.com",
      thumbnail: "https://images.unsplash.com/photo-1611095461304-7fe8f0f89b4b?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      techStack: "React, Node.js, PostgreSQL, Socket.io",
      github: "https://github.com",
      demo: "https://demo.example.com",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
  ],
}
