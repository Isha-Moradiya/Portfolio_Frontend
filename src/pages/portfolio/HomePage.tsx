"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DEMO_DATA } from "../../api/portfolioApi"
import { Github, Linkedin, Mail, ArrowRight, Briefcase, Brain, Code2, MonitorSmartphone, Zap } from "lucide-react"
import { Button } from "../../components/shared/Button"
import { Badge } from "../../components/shared/Badge"
import { Card } from "../../components/shared/Card"
import { PortfolioLayout } from "../../components/PortfolioLayout"

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

  return (
    <PortfolioLayout>
      {/* Hero Section */}
      <div className="bg-linear-to-r from-pink-100 via-purple-100 to-cyan-50 pt-24 pb-32 px-4 md:px-8 min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-12 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-12 left-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="space-y-2">
                <div className="relative inline-flex items-center mb-8">
                  <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 blur-md opacity-40 animate-pulse-soft" />
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <span className="absolute inset-y-0 -left-full w-1/2 bg-linear-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
                  </div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-3 px-5 py-2 rounded-full bg-white/70 backdrop-blur border border-purple-200 text-purple-primary text-sm font-semibold">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-purple-primary opacity-75 animate-ping"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-primary"></span>
                    </span>
                    Building Modern Web Experiences
                  </span>
                </div>

                <p className="text-purple-primary font-semibold text-lg tracking-wide uppercase">Hello, I'm</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 leading-none">
                  Isha<br />
                  <span className="text-purple-primary">Moradiya</span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700 font-light pt-2">Frontend Developer</p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                I craft beautiful, high-performance web applications. Specializing in React, TypeScript, and modern web
                technologies to bring your ideas to life.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => (window.location.href = "/contact")} className="mt-6">
                  Let's Talk
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>

            <div className="relative h-[450px] lg:h-[650px] flex items-center justify-center animate-slide-in order-1 lg:order-2">
              <div className="relative w-full h-full max-w-lg">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-linear-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-20 animate-pulse-soft"></div>

                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white border-8 border-white shadow-2xl">
                  <img
                    src="/profile.png"
                    alt="Isha Moradiya"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-6 py-3 border-2 border-purple-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-primary rounded-xl flex items-center justify-center">
                      <Briefcase className="text-white" size={20} />
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
      </div>

      {/* Skills Section */}
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

      {/* About Section */}
      {about && (
        <section className="bg-white py-20 px-4 md:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 md:order-1 group">
                <div className="absolute -inset-4 bg-linear-to-r from-purple-400 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition"></div>
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
                    { label: "Problem Solving", icon: <Brain className="w-4 h-4" /> },
                    { label: "Clean Code", icon: <Code2 className="w-4 h-4" /> },
                    { label: "Responsive Design", icon: <MonitorSmartphone className="w-4 h-4" /> },
                    { label: "Performance", icon: <Zap className="w-4 h-4" /> }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                      <span className="w-8 h-8 bg-purple-primary text-white rounded-lg flex items-center justify-center font-bold">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </div>
                  ))}
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
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {experiences.length > 0 && (
        <section className="bg-purple-50 py-20 px-4 md:px-8 relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-primary rounded-full text-sm font-semibold mb-4">
                Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Work Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                My professional journey and contributions across different organizations
              </p>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative pl-10 border-l-2 border-purple-200 scroll-animation"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Dot */}
                  <div className="absolute -left-[10px] top-0 w-5 h-5 border-4 border-purple-200 bg-purple-primary rounded-full shadow-md"></div>

                  {/* Card */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                          {exp.role}
                        </h3>
                        <p className="text-purple-primary font-semibold">
                          {exp.company}
                        </p>
                      </div>

                      <span className="inline-block px-4 py-2 bg-purple-100 text-purple-primary rounded-full text-sm font-semibold">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <section className="bg-white py-20 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {/* <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div> */}
            {/* <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div> */}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-primary rounded-full text-sm font-semibold mb-4">
                  Showcase
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Featured Projects</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Explore some of my recent work and the impact I've created for clients and users
                </p>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-primary text-white rounded-xl font-semibold hover:shadow-lg transition whitespace-nowrap"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project, idx) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group scroll-animation"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <Card variant="light" hoverable className="flex flex-col h-full overflow-hidden">
                    <div className="relative h-56 overflow-hidden bg-linear-to-br from-blue-100 to-purple-100">
                      <img
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
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
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-purple-50 py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 -left-48 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 -right-48 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Ready to <span className="text-purple-primary">Build Something Great?</span> 
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's collaborate and create something that makes an impact. I'm excited to hear about your next project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "mailto:hello@example.com")}
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              <Mail size={20} />
              Email Me
            </Button>
          </div>
        </div>
      </section>

    </PortfolioLayout>
  )
}
