"use client"

import { useState } from "react"
import { AdminLayout } from "../../components/AdminLayout"
import { Modal } from "../../components/Modal"
import { useCrud } from "../../hooks/useCrud"
import { DEMO_DATA } from "../../api/portfolioApi"
import { Trash2, Edit2, Plus, Briefcase } from "lucide-react"
import { Button } from "../../components/shared/Button"
import { Input } from "../../components/shared/Input"
import { Textarea } from "../../components/shared/Textarea"
import { Card } from "../../components/shared/Card"

interface Experience {
  id: number
  company: string
  role: string
  duration: string
  description: string
}

export default function ExperiencesCRUDPage() {
  const { data, createItem, updateItem, deleteItem } = useCrud<Experience>(DEMO_DATA.experiences)
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ company: "", role: "", duration: "", description: "" })
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)

  const handleOpenModal = (exp?: Experience) => {
    if (exp) {
      setEditingId(exp.id)
      setFormData({ company: exp.company, role: exp.role, duration: exp.duration, description: exp.description })
    } else {
      setEditingId(null)
      setFormData({ company: "", role: "", duration: "", description: "" })
    }
    setShowModal(true)
  }

  const handleSave = async () => {
    if (!formData.company.trim() || !formData.role.trim()) return

    if (editingId) {
      await updateItem(editingId, formData)
    } else {
      await createItem(formData)
    }
    setShowModal(false)
  }

  return (
    <AdminLayout title="Manage Experiences">
      <div className="space-y-6">
        <Button variant="primary" size="md" onClick={() => handleOpenModal()}>
          <Plus size={16} />
          Add Experience
        </Button>

        <div className="space-y-4 animate-fade-in">
          {data.length === 0 ? (
            <Card variant="light" hoverable className="p-12 text-center text-gray-500">
              <p>No experiences yet. Add your first experience!</p>
            </Card>
          ) : (
            data.map((exp, idx) => (
              <Card
                key={exp.id}
                variant="light"
                hoverable
                className="p-6"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div className="flex gap-4 flex-1 min-w-0">
                    <div className="p-3 bg-purple-primary/10 rounded-lg h-fit flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-purple-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-purple-primary transition line-clamp-1">
                        {exp.role}
                      </h3>
                      <p className="text-purple-primary font-semibold text-sm">{exp.company}</p>
                      <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                    </div>
                  </div>
                  <div className="space-x-2 flex flex-shrink-0">
                    <button
                      onClick={() => handleOpenModal(exp)}
                      className="p-2 hover:bg-[#f1ecf3] text-purple-primary rounded-lg transition"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(exp.id)}
                      className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">{exp.description}</p>
              </Card>
            ))
          )}
        </div>
      </div>

      <Modal
        isOpen={showModal}
        title={editingId ? "Edit Experience" : "Add Experience"}
        onClose={() => setShowModal(false)}
        onSubmit={handleSave}
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              variant="light"
              placeholder="Company name"
            />
            <Input
              label="Job Title"
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              variant="light"
              placeholder="Your role"
            />
          </div>

          <Input
            label="Duration"
            type="text"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            variant="light"
            placeholder="e.g., Jan 2022 - Present"
          />

          <Textarea
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            variant="light"
            placeholder="Describe your role and achievements"
            rows={4}
          />
        </div>
      </Modal>

      {deleteConfirm && (
        <Modal
          isOpen={true}
          title="Delete Experience"
          onClose={() => setDeleteConfirm(null)}
          onSubmit={() => {
            deleteItem(deleteConfirm)
            setDeleteConfirm(null)
          }}
          submitText="Delete"
        >
          <p className="text-gray-700">
            Are you sure you want to delete this experience? This action cannot be undone.
          </p>
        </Modal>
      )}
    </AdminLayout>
  )
}
