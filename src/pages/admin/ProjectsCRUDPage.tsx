"use client"

import { useState } from "react"
import { AdminLayout } from "../../components/AdminLayout"
import { Modal } from "../../components/Modal"
import { useCrud } from "../../hooks/useCrud"
import { DEMO_DATA } from "../../api/portfolioApi"
import { Trash2, Edit2, Plus } from "lucide-react"
import { Button } from "../../components/shared/Button"
import { Input } from "../../components/shared/Input"
import { Textarea } from "../../components/shared/Textarea"
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

export default function ProjectsCRUDPage() {
  const { data, createItem, updateItem, deleteItem } = useCrud<Project>(DEMO_DATA.projects)
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    github: "",
    demo: "",
    thumbnail: "",
  })
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)

  const handleOpenModal = (project?: Project) => {
    if (project) {
      setEditingId(project.id)
      setFormData({
        title: project.title,
        description: project.description,
        techStack: project.techStack,
        github: project.github,
        demo: project.demo,
        thumbnail: project.thumbnail,
      })
    } else {
      setEditingId(null)
      setFormData({
        title: "",
        description: "",
        techStack: "",
        github: "",
        demo: "",
        thumbnail: "",
      })
    }
    setShowModal(true)
  }

  const handleSave = async () => {
    if (!formData.title.trim()) return

    if (editingId) {
      await updateItem(editingId, formData)
    } else {
      await createItem(formData)
    }
    setShowModal(false)
  }

  return (
    <AdminLayout title="Manage Projects">
      <div className="space-y-6">
        <Button variant="primary" size="md" onClick={() => handleOpenModal()}>
          <Plus size={16} />
          Add Project
        </Button>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {data.length === 0 ? (
            <Card variant="light" hoverable className="col-span-full p-12 text-center text-gray-500">
              <p>No projects yet. Showcase your work!</p>
            </Card>
          ) : (
            data.map((project) => (
              <Card key={project.id} variant="light" hoverable className="flex flex-col overflow-hidden">
                {project.thumbnail && (
                  <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                )}

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-primary transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mt-1">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.split(",").map((tech, idx) => (
                      <Badge key={idx} variant="light">
                        {tech.trim()}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2 mt-auto">
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="flex-1 px-3 py-2 bg-[#f1ecf3] hover:bg-[#dacbe0] text-purple-primary rounded-lg text-sm font-semibold transition flex items-center justify-center gap-1"
                    >
                      <Edit2 className="w-3 h-3" /> Edit
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(project.id)}
                      className="flex-1 px-3 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Delete
                    </button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>

      <Modal
        isOpen={showModal}
        title={editingId ? "Edit Project" : "Add Project"}
        onClose={() => setShowModal(false)}
        onSubmit={handleSave}
      >
        <div className="space-y-4">
          <Input
            label="Project Title"
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            variant="light"
            placeholder="Project name"
          />

          <Textarea
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            variant="light"
            placeholder="Describe your project"
            rows={3}
          />

          <Input
            label="Tech Stack"
            type="text"
            value={formData.techStack}
            onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
            variant="light"
            placeholder="React, Node.js, MongoDB (comma separated)"
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="GitHub Link"
              type="url"
              value={formData.github}
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
              variant="light"
              placeholder="https://github.com/..."
            />
            <Input
              label="Demo Link"
              type="url"
              value={formData.demo}
              onChange={(e) => setFormData({ ...formData, demo: e.target.value })}
              variant="light"
              placeholder="https://demo.example.com"
            />
          </div>

          <Input
            label="Thumbnail URL"
            type="url"
            value={formData.thumbnail}
            onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
            variant="light"
            placeholder="https://..."
          />
          {formData.thumbnail && (
            <img
              src={formData.thumbnail || "/placeholder.svg"}
              alt="Preview"
              className="mt-3 w-full h-32 rounded-lg object-cover border-2 border-purple-primary/20"
            />
          )}
        </div>
      </Modal>

      {deleteConfirm && (
        <Modal
          isOpen={true}
          title="Delete Project"
          onClose={() => setDeleteConfirm(null)}
          onSubmit={() => {
            deleteItem(deleteConfirm)
            setDeleteConfirm(null)
          }}
          submitText="Delete"
        >
          <p className="text-gray-700">Are you sure you want to delete this project? This action cannot be undone.</p>
        </Modal>
      )}
    </AdminLayout>
  )
}
