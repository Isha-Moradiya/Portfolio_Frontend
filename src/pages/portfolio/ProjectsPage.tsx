// "use client"

// import { useEffect, useState } from "react"
// import { DEMO_DATA } from "../../api/portfolioApi"
// import { Github, ExternalLink } from "lucide-react"
// import { PortfolioLayout } from "../../components/PortfolioLayout"

// interface Project {
//   id: number
//   title: string
//   description: string
//   techStack: string
//   github: string
//   demo: string
//   thumbnail: string
// }

// export default function ProjectsPage() {
//   const [projects, setProjects] = useState<Project[]>([])

//   useEffect(() => {
//     setProjects(DEMO_DATA.projects)
//   }, [])

//   return (
//     <PortfolioLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}>
//       <section className="py-16 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-12">
//             <h2 className="text-5xl font-bold text-gray-900 mb-4">All Projects</h2>
//             <p className="text-lg text-gray-600">Explore all of my recent work and side projects</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="group bg-white rounded-2xl overflow-hidden border-2 border-purple-primary/20 hover:border-purple-primary/50 transition shadow-md hover:shadow-lg hover-purple-lift flex flex-col h-full"
//               >
//                 {project.thumbnail && (
//                   <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
//                     <img
//                       src={project.thumbnail || "/placeholder.svg"}
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                     />
//                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
//                   </div>
//                 )}
//                 <div className="p-6 space-y-4 flex-1 flex flex-col">
//                   <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-primary transition">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed flex-1">{project.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.techStack.split(",").map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="text-xs px-3 py-1 bg-purple-primary/10 text-purple-primary rounded-full border border-purple-primary/20 font-semibold"
//                       >
//                         {tech.trim()}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-3 pt-4">
//                     {project.github && (
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 px-4 py-2 bg-purple-primary text-white rounded-lg font-semibold hover:bg-purple-primary/90 transition flex items-center justify-center gap-2 text-sm"
//                       >
//                         <Github size={16} /> Code
//                       </a>
//                     )}
//                     {project.demo && (
//                       <a
//                         href={project.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 px-4 py-2 border-2 border-purple-primary text-purple-primary rounded-lg font-semibold hover:bg-purple-primary/5 transition flex items-center justify-center gap-2 text-sm"
//                       >
//                         <ExternalLink size={16} /> Live
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </PortfolioLayout>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DEMO_DATA } from "../../api/portfolioApi"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { PortfolioLayout } from "../../components/PortfolioLayout"
import { Card } from "../../components/shared/Card"
import { Badge } from "../../components/shared/Badge"

interface Project {
  id: number
  title: string
  description: string
  techStack: string
  github: string
  demo: string
  thumbnail: string
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState<string>("All")

  const navigate = useNavigate()

  useEffect(() => {
    setProjects(DEMO_DATA.projects)
  }, [])

  const categories = ["All", "Web App", "Mobile", "UI/UX", "Full Stack"]

  return (
    <PortfolioLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}>
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-primary rounded-full text-sm font-semibold mb-4">
              Portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              My <span className="text-purple-primary">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my recent work, showcasing expertise in modern web development and design
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition ${
                  filter === category
                    ? "bg-purple-primary text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <Card variant="light" hoverable className="flex flex-col h-full overflow-hidden">
                  <div className="relative h-56 bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden">
                    {project.thumbnail && (
                      <img
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 bg-white text-gray-900 rounded-lg flex items-center justify-center hover:bg-purple-primary hover:text-white transition"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 bg-white text-gray-900 rounded-lg flex items-center justify-center hover:bg-purple-primary hover:text-white transition"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-6 space-y-4 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-primary transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.split(",").map((tech, idx) => (
                        <Badge key={idx} variant="light">
                          {tech.trim()}
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

          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </PortfolioLayout>
  )
}

