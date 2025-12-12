// "use client"

// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import { DEMO_DATA } from "../../api/portfolioApi"
// import { Github, Linkedin, Mail, ExternalLink, ArrowRight, FileDown } from "lucide-react"
// import Header from "../../components/Header"
// import Footer from "../../components/Footer"
// import { Button } from "../../components/shared/Button"
// import { Badge } from "../../components/shared/Badge"
// import { Section } from "../../components/shared/Section"
// import { Card } from "../../components/shared/Card"

// interface About {
//   id: number
//   title: string
//   description: string
//   image: string
// }

// interface Skill {
//   id: number
//   name: string
//   level: number
//   image: string
// }

// interface Experience {
//   id: number
//   company: string
//   role: string
//   duration: string
//   description: string
// }

// interface Project {
//   id: number
//   title: string
//   description: string
//   techStack: string
//   github: string
//   demo: string
//   thumbnail: string
// }

// export default function HomePage() {
//   const [about, setAbout] = useState<About | null>(null)
//   const [skills, setSkills] = useState<Skill[]>([])
//   const [experiences, setExperiences] = useState<Experience[]>([])
//   const [projects, setProjects] = useState<Project[]>([])

//   useEffect(() => {
//     setAbout(DEMO_DATA.about)
//     setSkills(DEMO_DATA.skills)
//     setExperiences(DEMO_DATA.experiences)
//     setProjects(DEMO_DATA.projects)
//   }, [])

//   const downloadResume = () => {
//   }

//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       <Header />

//       {/* Hero Section */}
//       <Section variant="gradient" className="pt-16 pb-20 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             {/* Left Side - Text Content */}
//             <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full w-fit">
//                 <span className="w-2 h-2 bg-purple-primary rounded-full animate-pulse-soft"></span>
//                 <p className="text-sm text-purple-primary font-medium">Welcome to my portfolio</p>
//               </div>

//               <div className="space-y-3 md:space-y-4">
//                 <p className="text-lg md:text-xl text-gray-600 font-medium">Hello, I'm</p>
//                 <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">Isha Moradiya</h1>
//                 <p className="text-xl md:text-3xl text-purple-primary font-semibold">Frontend Developer</p>
//               </div>

//               <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
//                 I craft beautiful, high-performance web applications. Specializing in React, TypeScript, and modern web
//                 technologies to bring your ideas to life.
//               </p>

//               {/* CTA buttons - using new Button component */}
//               <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
//                 <Button size="md" onClick={downloadResume}>
//                   <FileDown size={18} />
//                   Download Resume
//                 </Button>
//                 <Button variant="outline" size="md" onClick={() => (window.location.href = "/projects")}>
//                   View My Work
//                   <ArrowRight size={18} />
//                 </Button>
//               </div>

//               {/* Social Icons */}
//               <div className="flex gap-3 pt-4 sm:pt-6">
//                 <a
//                   href="#"
//                   className="p-3 bg-gray-100 hover:bg-purple-primary/10 border border-gray-200 hover:border-purple-primary/30 rounded-lg transition text-gray-700 hover:text-purple-primary"
//                   aria-label="GitHub"
//                 >
//                   <Github size={20} />
//                 </a>
//                 <a
//                   href="#"
//                   className="p-3 bg-gray-100 hover:bg-purple-primary/10 border border-gray-200 hover:border-purple-primary/30 rounded-lg transition text-gray-700 hover:text-purple-primary"
//                   aria-label="LinkedIn"
//                 >
//                   <Linkedin size={20} />
//                 </a>
//                 <a
//                   href="#"
//                   className="p-3 bg-gray-100 hover:bg-purple-primary/10 border border-gray-200 hover:border-purple-primary/30 rounded-lg transition text-gray-700 hover:text-purple-primary"
//                   aria-label="Email"
//                 >
//                   <Mail size={20} />
//                 </a>
//               </div>
//             </div>

//             {/* Right Side - Hero Image with Cutout */}
//             <div className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] flex items-center justify-center animate-slide-in order-1 lg:order-2">
//               <div className="relative w-full h-full max-w-lg">
//                 <div className="absolute inset-0 -z-10">
//                   <div className="absolute inset-0 bg-purple-gradient rounded-3xl blur-2xl opacity-60"></div>
//                   <div
//                     className="absolute inset-0 bg-purple-gradient rounded-3xl blur-3xl opacity-40"
//                     style={{ transform: "scale(1.2)" }}
//                   ></div>
//                 </div>

//                 {/* Image Container with Cutout */}
//                 <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-purple-primary/20 shadow-2xl animate-glow group">
//                   <img
//                     src="/profile.png"
//                     alt="Isha Moradiya - Frontend Developer"
//                     className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 pointer-events-none"></div>
//                 </div>

//                 {/* Decorative corner elements */}
//                 <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 border-t-3 border-r-3 border-purple-primary/40 rounded-tr-3xl"></div>
//                 <div className="absolute -bottom-2 -left-2 w-12 h-12 sm:w-16 sm:h-16 border-b-3 border-l-3 border-purple-primary/40 rounded-bl-3xl"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* Skills Section - Updated with image logos and auto-scrolling carousel */}
//       {skills.length > 0 && (
//         <Section title="Skills & Expertise" variant="gradient">
//           <div className="relative w-full overflow-hidden carousel-container py-14">

//             <div
//               className="flex gap-12 md:gap-16 animate-scroll"
//               style={{ animationDuration: `${skills.length * 4}s` }}
//             >
//               {[...skills, ...skills].map((skill, idx) => (
//                 <div
//                   key={idx}
//                   className="relative group flex flex-col items-center overflow-visible min-h-[150px]"
//                 >
//                   {/* Tooltip */}
//                   <div
//                     className="
//         absolute -top-12 left-1/2 -translate-x-1/2
//         bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow-lg
//         opacity-0 group-hover:opacity-100 transition-all
//         duration-200 z-50 whitespace-nowrap
//       "
//                   >
//                     {skill.level}% proficient
//                   </div>

//                   {/* Icon With Purple Neon Glow */}
//                   <div
//                     className="
//         relative flex items-center justify-center
//         w-20 h-20 md:w-24 md:h-24
//         rounded-full
//         transition duration-300
//         group-hover:scale-110
//       "
//                   >
//                     <div
//                       className="
//           absolute inset-0 rounded-full
//           bg-purple-100/40 blur-xs
//           group-hover:bg-purple-100/50 transition
//         "
//                     ></div>

//                     <img
//                       src={skill.image}
//                       alt={skill.name}
//                       className="
//           relative w-14 h-14 md:w-16 md:h-16
//           object-contain z-10
//         "
//                     />
//                   </div>

//                   {/* Name */}
//                   <p className="mt-3 font-semibold text-gray-800 text-sm md:text-base text-center">
//                     {skill.name}
//                   </p>
//                 </div>
//               ))}

//             </div>
//           </div>
//         </Section>
//       )}

//       {/* About Section - using Section and Card components */}
//       {about && (
//         <Section id="about" title="About Me">
//           <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
//             <div className="relative order-2 md:order-1">
//               <div className="absolute inset-0 bg-purple-gradient rounded-2xl blur-2xl"></div>
//               <img
//                 src={about.image || "/placeholder.svg"}
//                 alt="Isha Moradiya"
//                 className="relative rounded-2xl shadow-lg w-full h-64 md:h-[30rem] object-cover border-2 border-purple-primary/20"
//               />
//             </div>
//             <div className="space-y-4 md:space-y-6 order-1 md:order-2">
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{about.title}</h3>
//               <p className="text-base md:text-lg text-gray-600 leading-relaxed">{about.description}</p>
//               <div className="pt-4 space-y-3">
//                 <p className="font-semibold text-gray-900">Key strengths:</p>
//                 <ul className="grid grid-cols-2 gap-2 md:gap-3">
//                   {["Problem Solving", "Clean Code", "Responsive Design", "Performance"].map((item) => (
//                     <li key={item} className="flex items-center gap-2">
//                       <span className="w-2 h-2 bg-purple-primary rounded-full flex-shrink-0"></span>
//                       <span className="text-sm md:text-base text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </Section>
//       )}

//       {/* Experience Section - using Section component */}
//       {experiences.length > 0 && (
//         <Section id="experience" title="Experience" variant="gradient">
//           <div className="max-w-5xl mx-auto">
//             <div className="space-y-12">

//               {experiences.map((exp, index) => (
//                 <div
//                   key={exp.id}
//                   className="
//               relative flex gap-6 md:gap-10
//               opacity-0 translate-y-6
//               animate-slide-up
//             "
//                   style={{ animationDelay: `${index * 0.15}s` }}
//                 >

//                   {/* Vertical Line + Dot */}
//                   <div className="flex flex-col items-center flex-shrink-0 relative">

//                     {/* Dot */}
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-purple-400/40 blur-xl rounded-full"></div>
//                       <div className="w-5 h-5 bg-purple-primary border-4 border-white rounded-full shadow-lg"></div>
//                     </div>

//                     {/* Line */}
//                     {index < experiences.length - 1 && (
//                       <div className="w-1 h-28 md:h-36 mt-2 bg-gradient-to-b from-purple-primary/70 via-purple-primary/40 to-transparent rounded-full"></div>
//                     )}
//                   </div>

//                   {/* Card */}
//                   <Card variant="light" hoverable className="flex-1 p-6 md:p-7">
//                     <div className="space-y-3">
//                       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
//                         <div>
//                           <h3 className="text-lg md:text-xl font-bold text-gray-900">
//                             {exp.role}
//                           </h3>
//                           <p className="text-purple-primary font-semibold text-sm">
//                             {exp.company}
//                           </p>
//                         </div>

//                         <span className="text-gray-500 text-xs md:text-sm font-medium whitespace-nowrap">
//                           {exp.duration}
//                         </span>
//                       </div>

//                       <p className="text-sm md:text-base text-gray-700 leading-relaxed">
//                         {exp.description}
//                       </p>
//                     </div>
//                   </Card>

//                 </div>
//               ))}

//             </div>
//           </div>
//         </Section>
//       )}

//       {/* Projects Section - using Section component */}
//       {projects.length > 0 && (
//         <Section id="work" title="Featured Work" 
//         button={
//         <Link
//           to="/projects"
//           className="text-purple-primary hover:text-purple-primary/80 font-semibold flex items-center gap-2 text-sm md:text-base whitespace-nowrap"
//         >
//           View All <ArrowRight size={18} />
//         </Link>}>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {projects.slice(0, 3).map((project) => (
//               <Card key={project.id} variant="light" hoverable className="flex flex-col h-full overflow-hidden">
//                 <div className="relative h-40 md:h-48 overflow-hidden bg-gray-100">
//                   <img
//                     src={project.thumbnail || "/placeholder.svg"}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                   />
//                 </div>
//                 <div className="flex-1 p-4 md:p-6 space-y-3 md:space-y-4 flex flex-col">
//                   <h3 className="font-bold text-lg md:text-xl text-gray-900">{project.title}</h3>
//                   <p className="text-sm md:text-base text-gray-600 flex-grow">{project.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.techStack.split(", ").map((tech) => (
//                       <Badge key={tech} variant="light">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                   <div className="flex gap-2 md:gap-3 pt-2 md:pt-4">
//                     <Button variant="primary" size="sm" fullWidth onClick={() => window.open(project.github)}>
//                       <Github size={14} /> Code
//                     </Button>
//                     <Button variant="outline" size="sm" fullWidth onClick={() => window.open(project.demo)}>
//                       <ExternalLink size={14} /> Live
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </Section>
//       )}

//       {/* Let's Connect Section - using Section component */}
//       <Section variant="gradient" className="text-center">
//         <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
//           <div className="space-y-3 md:space-y-4">
//             <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
//             <p className="text-base md:text-lg text-gray-600">
//               I'm always interested in hearing about new projects and opportunities.
//             </p>
//           </div>
//           <Button size="lg" onClick={() => (window.location.href = "/contact")}>
//             Get In Touch
//           </Button>
//         </div>
//       </Section>

//       <Footer />
//     </div>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DEMO_DATA } from "../../api/portfolioApi"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, FileDown, Briefcase } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Button } from "../../components/shared/Button"
import { Badge } from "../../components/shared/Badge"
import { Section } from "../../components/shared/Section"
import { Card } from "../../components/shared/Card"

interface About {
  id: number
  title: string
  description: string
  image: string
}

interface Skill {
  id: number
  name: string
  level: number
  image: string
}

interface Experience {
  id: number
  company: string
  role: string
  duration: string
  description: string
}

interface Project {
  id: number
  title: string
  description: string
  techStack: string
  github: string
  demo: string
  thumbnail: string
}

export default function HomePage() {
  const [about, setAbout] = useState<About | null>(null)
  const [skills, setSkills] = useState<Skill[]>([])
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    setAbout(DEMO_DATA.about)
    setSkills(DEMO_DATA.skills)
    setExperiences(DEMO_DATA.experiences)
    setProjects(DEMO_DATA.projects)
  }, [])

  const navigate = useNavigate()

  const downloadResume = () => {
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 text-gray-900">
      <Header />

      {/* Hero Section - Modern Minimalist Design */}
      <Section variant="gradient" className="pt-24 pb-32 px-4 md:px-8 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="space-y-2">
                <p className="text-purple-primary font-semibold text-lg tracking-wide uppercase">Hello, I'm</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-none">
                  Isha<br />
                  <span className="text-purple-primary">Moradiya</span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700 font-light pt-2">Frontend Developer</p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                I craft beautiful, high-performance web applications. Specializing in React, TypeScript, and modern web
                technologies to bring your ideas to life.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" onClick={downloadResume} className="shadow-lg">
                  <FileDown size={20} />
                  Download CV
                </Button>
                <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")} className="shadow-lg">
                  <Mail size={20} />
                  Contact Me
                </Button>
              </div>

              <div className="flex gap-4 pt-6">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-purple-primary border-2 border-gray-200 hover:border-purple-primary rounded-xl transition text-gray-700 hover:text-white shadow-sm"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-purple-primary border-2 border-gray-200 hover:border-purple-primary rounded-xl transition text-gray-700 hover:text-white shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-purple-primary border-2 border-gray-200 hover:border-purple-primary rounded-xl transition text-gray-700 hover:text-white shadow-sm"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center animate-slide-in order-1 lg:order-2">
              <div className="relative w-full h-full max-w-md">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse-soft"></div>

                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 border-4 border-white shadow-2xl">
                  <img
                    src="/profile.png"
                    alt="Isha Moradiya"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border-2 border-purple-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-primary rounded-xl flex items-center justify-center">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">3+</p>
                      <p className="text-sm text-gray-600">Years Exp.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* About Section - Clean Two Column */}
      {about && (
        <Section id="about" title="About Me" className="bg-white">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 md:order-1 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition"></div>
              <img
                src={about.image || "/placeholder.svg"}
                alt="About Isha Moradiya"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover border-4 border-white"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-primary rounded-full text-sm font-semibold">
                Get to know me
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{about.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{about.description}</p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Problem Solving", icon: "✓" },
                  { label: "Clean Code", icon: "✓" },
                  { label: "Responsive Design", icon: "✓" },
                  { label: "Performance", icon: "✓" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                    <span className="w-8 h-8 bg-purple-primary text-white rounded-lg flex items-center justify-center font-bold">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" onClick={() => (window.location.href = "/contact")} className="mt-6">
                Let's Talk
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </Section>
      )}

      {/* Skills Section - Auto-scrolling Carousel */}
      {skills.length > 0 && (
        <div className="bg-white py-20 px-4 md:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-primary rounded-full text-sm font-semibold mb-4">
                Expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Skills & Technologies</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tools and technologies I use to build amazing digital experiences
              </p>
            </div>

            <div className="relative w-full overflow-hidden carousel-container py-14">
              <div
                className="flex gap-12 md:gap-16 animate-scroll"
                style={{ animationDuration: `${skills.length * 4}s` }}
              >
                {[...skills, ...skills].map((skill, idx) => (
                  <div
                    key={idx}
                    className="relative group flex flex-col items-center overflow-visible min-h-[150px]"
                  >
                    <div
                      className="
          absolute -top-12 left-1/2 -translate-x-1/2
          bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow-lg
          opacity-0 group-hover:opacity-100 transition-all
          duration-200 z-50 whitespace-nowrap
        "
                    >
                      {skill.level}% proficient
                    </div>

                    <div
                      className="
          relative flex items-center justify-center
          w-20 h-20 md:w-24 md:h-24
          rounded-full
          transition duration-300
          group-hover:scale-110
        "
                    >
                      <div
                        className="
            absolute inset-0 rounded-full
            bg-purple-100/40 blur-xs
            group-hover:bg-purple-100/50 transition
          "
                      ></div>

                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="
            relative w-14 h-14 md:w-16 md:h-16
            object-contain z-10
          "
                      />
                    </div>

                    <p className="mt-3 font-semibold text-gray-800 text-sm md:text-base text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Experience Section - Timeline Design */}
      {experiences.length > 0 && (
        <Section id="experience" title="Work Experience" className="bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 md:pl-12 border-l-4 border-purple-200 hover:border-purple-primary transition"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-primary rounded-full border-4 border-white shadow-lg"></div>

                <Card variant="light" hoverable className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                      <p className="text-lg text-purple-primary font-semibold">{exp.company}</p>
                    </div>
                    <span className="inline-block px-4 py-2 bg-purple-100 text-purple-primary rounded-full text-sm font-semibold whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Projects Section - Card Grid */}
      {projects.length > 0 && (
        <Section
          id="work"
          title="Featured Projects"
          variant="gradient"
          button={
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-primary rounded-xl font-semibold hover:shadow-lg transition"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Card variant="light" hoverable className="flex flex-col h-full overflow-hidden">
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200">
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                  <div className="flex-1 p-6 space-y-4 flex flex-col">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-purple-primary transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 flex-grow line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.split(", ").slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="light">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-purple-primary font-semibold pt-2" onClick={() => navigate(`/projects/${project.id}`)}>
                      View Details
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-purple-50 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Let's Work Together</h2>
          <p className="text-xl text-gray-600">
            Have a project in mind? Let's create something amazing together.
          </p>
          <Button
            size="lg"
            onClick={() => (window.location.href = "/contact")}
            className="shadow-lg"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  )
}

