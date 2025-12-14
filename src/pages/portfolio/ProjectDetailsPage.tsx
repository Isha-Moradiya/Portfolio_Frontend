"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { DEMO_DATA } from "../../api/portfolioApi"
import { Github, ExternalLink, ArrowLeft, Calendar, Tag } from "lucide-react"
import { PortfolioLayout } from "../../components/PortfolioLayout"
import { Button } from "../../components/shared/Button"
import { Badge } from "../../components/shared/Badge"
import { Card } from "../../components/shared/Card"

interface Project {
  id: number
  title: string
  description: string
  techStack: string
  github: string
  demo: string
  thumbnail: string
}

export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const [project, setProject] = useState<Project | null>(null)
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([])

  useEffect(() => {
    const foundProject = DEMO_DATA.projects.find((p) => p.id === Number(id))
    setProject(foundProject || null)

    if (foundProject) {
      const related = DEMO_DATA.projects
        .filter((p) => p.id !== foundProject.id)
        .slice(0, 3)
      setRelatedProjects(related)
    }
  }, [id])

  if (!project) {
    return (
      <PortfolioLayout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500 text-lg">Project not found</p>
        </div>
      </PortfolioLayout>
    )
  }

  return (
    <PortfolioLayout>
      <section className="py-16 px-4 md:px-8 bg-linear-to-br from-gray-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-purple-primary hover:text-purple-primary/80 font-semibold mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
            Back to Projects
          </Link>

          <div className="mb-12">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-8 bg-linear-to-br from-purple-100 to-purple-200">
              <img
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <Button
                      size="md"
                      onClick={() => window.open(project.github, "_blank")}
                      className="bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <Github size={18} />
                      View Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => window.open(project.demo, "_blank")}
                      className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <Card variant="light" className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Project</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{project.description}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {[
                        "Responsive design that works on all devices",
                        "Modern UI with smooth animations and transitions",
                        "Optimized performance for fast loading times",
                        "Clean and maintainable code architecture",
                        "Comprehensive testing and quality assurance"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-purple-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Challenges</h3>
                    <p className="text-gray-600 leading-relaxed">
                      This project presented unique challenges in terms of scalability and performance optimization.
                      Through careful architecture planning and implementation of best practices, we achieved
                      excellent results that exceeded initial expectations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Results & Impact</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-purple-50 rounded-xl text-center">
                        <p className="text-3xl font-bold text-purple-primary mb-1">95%</p>
                        <p className="text-sm text-gray-600">Performance Score</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-xl text-center">
                        <p className="text-3xl font-bold text-purple-primary mb-1">50K+</p>
                        <p className="text-sm text-gray-600">Active Users</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-xl text-center">
                        <p className="text-3xl font-bold text-purple-primary mb-1">4.8/5</p>
                        <p className="text-sm text-gray-600">User Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card variant="light" className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Tag className="text-purple-primary" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.split(",").map((tech, idx) => (
                    <Badge key={idx} variant="light" className="text-sm">
                      {tech.trim()}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card variant="light" className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-purple-primary" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Project Info</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Timeline</p>
                    <p className="font-semibold text-gray-900">3-4 weeks</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Role</p>
                    <p className="font-semibold text-gray-900">Lead Developer</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Category</p>
                    <p className="font-semibold text-gray-900">Web Application</p>
                  </div>
                </div>
              </Card>

              <Card variant="light" className="p-6 bg-linear-to-br from-purple-50 to-purple-100 border-purple-200">
                <h3 className="text-xl font-bold mb-3">Interested in similar work?</h3>
                <p className="text-gray-600 mb-4">
                  Let's discuss how I can help with your project.
                </p>
                <Button
                  size="md"
                  fullWidth
                  onClick={() => (window.location.href = "/contact")}
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  Get in Touch
                </Button>
              </Card>
            </div>
          </div>

          {relatedProjects.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Projects</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/projects/${relatedProject.id}`}
                    className="group"
                  >
                    <Card variant="light" hoverable className="flex flex-col h-full overflow-hidden">
                      <div className="relative h-48 overflow-hidden bg-linear-to-br from-purple-100 to-purple-200">
                        <img
                          src={relatedProject.thumbnail || "/placeholder.svg"}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                      </div>
                      <div className="p-5 space-y-3">
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-primary transition">
                          {relatedProject.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{relatedProject.description}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PortfolioLayout>
  )
}
