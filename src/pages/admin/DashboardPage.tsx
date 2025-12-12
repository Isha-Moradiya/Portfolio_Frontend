"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AdminLayout } from "../../components/AdminLayout"
import { DEMO_DATA } from "../../api/portfolioApi"
import { LayoutDashboard, User, Zap, Briefcase, FolderOpen, ArrowRight } from "lucide-react"
import { Card } from "../../components/shared/Card"

export default function DashboardPage() {
  const [stats, setStats] = useState({
    aboutItems: 0,
    skillsItems: 0,
    experiencesItems: 0,
    projectsItems: 0,
  })

  useEffect(() => {
    setStats({
      aboutItems: 1,
      skillsItems: DEMO_DATA.skills.length,
      experiencesItems: DEMO_DATA.experiences.length,
      projectsItems: DEMO_DATA.projects.length,
    })
  }, [])

  const navigate = useNavigate()

  const cards = [
    {
      label: "About",
      value: stats.aboutItems,
      path: "/admin/about",
      icon: User,
      color: "text-purple-primary",
    },
    {
      label: "Skills",
      value: stats.skillsItems,
      path: "/admin/skills",
      icon: Zap,
      color: "text-purple-primary",
    },
    {
      label: "Experiences",
      value: stats.experiencesItems,
      path: "/admin/experiences",
      icon: Briefcase,
      color: "text-purple-primary",
    },
    {
      label: "Projects",
      value: stats.projectsItems,
      path: "/admin/projects",
      icon: FolderOpen,
      color: "text-purple-primary",
    },
  ]

  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <Card
              key={card.path}
              variant="light"
              hoverable
              className="cursor-pointer animate-fade-in"
              // onClick={() => navigate(card.path)}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Icon className={`w-8 h-8 ${card.color}`} />
                  <ArrowRight className="w-5 h-5 text-purple-primary opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="text-left">
                  <p className="text-gray-600 text-sm font-medium">{card.label}</p>
                  <p className="text-4xl font-bold text-gray-900 mt-1">{card.value}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Quick Stats Overview */}
      {/* <div className="grid md:grid-cols-2 gap-6">
        <Card variant="light" hoverable>
          <div className="p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5 text-purple-primary" />
              Content Overview
            </h3>
            <div className="space-y-3">
              {cards.map((card) => (
                <div
                  key={card.label}
                  className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0"
                >
                  <span className="text-sm font-medium text-gray-700">{card.label}</span>
                  <span className="text-2xl font-bold text-purple-primary">{card.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card variant="light" hoverable>
          <div className="p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              {cards.map((card) => {
                const Icon = card.icon
                return (
                  <button
                    key={card.path}
                    onClick={() => navigate(card.path)}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 hover:bg-purple-primary/10 text-gray-700 hover:text-purple-primary rounded-lg transition group border border-gray-200 hover:border-purple-primary/30"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium flex-1 text-left">Manage {card.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                )
              })}
            </div>
          </div>
        </Card>
      </div> */}
    </AdminLayout>
  )
}
