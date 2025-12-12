"use client"

import type React from "react"

import { useState, useRef } from "react"
import { AdminLayout } from "../../components/AdminLayout"
import { Modal } from "../../components/Modal"
import { useCrud } from "../../hooks/useCrud"
import { DEMO_DATA } from "../../api/portfolioApi"
import { Trash2, Edit2, Plus, Upload } from "lucide-react"
import { Button } from "../../components/shared/Button"
import { Input } from "../../components/shared/Input"
import { Card } from "../../components/shared/Card"

interface Skill {
  id: number
  name: string
  level: number
  image: string
}

export default function SkillsCRUDPage() {
  const { data, createItem, updateItem, deleteItem } = useCrud<Skill>(DEMO_DATA.skills)
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", level: 50, image: "" })
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleOpenModal = (skill?: Skill) => {
    if (skill) {
      setEditingId(skill.id)
      setFormData({ name: skill.name, level: skill.level, image: skill.image })
    } else {
      setEditingId(null)
      setFormData({ name: "", level: 50, image: "" })
    }
    setShowModal(true)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFormData({ ...formData, image: event.target?.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = async () => {
    if (!formData.name.trim() || !formData.image.trim()) return

    if (editingId) {
      await updateItem(editingId, formData)
    } else {
      await createItem(formData)
    }
    setShowModal(false)
  }

  return (
    <AdminLayout title="Manage Skills">
      <div className="space-y-6">
        <Button variant="primary" size="md" onClick={() => handleOpenModal()}>
          <Plus size={16} />
          Add Skill
        </Button>

        <Card variant="light" hoverable className="overflow-hidden animate-fade-in">
          {data.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <p className="text-base">No skills yet. Create your first skill!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold text-gray-900">Logo</th>
                    <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold text-gray-900">Skill Name</th>
                    <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold text-gray-900">Proficiency</th>
                    <th className="px-4 md:px-6 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((skill, idx) => (
                    <tr
                      key={skill.id}
                      className="border-b border-gray-100 hover:bg-purple-primary/5"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <td className="px-4 md:px-6 py-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                          {skill.image ? (
                            <img
                              src={skill.image || "/placeholder.svg"}
                              alt={skill.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-xs text-gray-400">No logo</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4">
                        <p className="font-semibold text-gray-900 text-sm md:text-base">{skill.name}</p>
                      </td>
                      <td className="px-4 md:px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 min-w-24">
                            <div
                              className="bg-purple-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <span className="text-purple-primary font-bold text-sm min-w-fit">{skill.level}%</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => handleOpenModal(skill)}
                            className="p-2 hover:bg-purple-primary/10 text-purple-primary rounded-lg transition duration-200"
                            title="Edit skill"
                          >
                            <Edit2 className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(skill.id)}
                            className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition duration-200"
                            title="Delete skill"
                          >
                            <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>

      <Modal
        isOpen={showModal}
        title={editingId ? "Edit Skill" : "Add Skill"}
        onClose={() => setShowModal(false)}
        onSubmit={handleSave}
      >
        <div className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-gray-900 block mb-3">Skill Logo</label>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full border-2 border-dashed border-purple-primary/30 hover:border-purple-primary/60 rounded-lg p-5 text-center transition bg-gray-50 hover:bg-purple-primary/5"
            >
              {formData.image ? (
                <div className="space-y-2">
                  <img
                    src={formData.image || "/placeholder.svg"}
                    alt="Preview"
                    className="w-14 h-14 mx-auto object-cover rounded-lg"
                  />
                  <p className="text-xs text-gray-600">Click to change image</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="w-8 h-8 mx-auto text-purple-primary/50" />
                  <p className="text-sm text-gray-600 font-medium">Click to upload image</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                </div>
              )}
            </button>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </div>

          <Input
            label="Skill Name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            variant="light"
            placeholder="e.g., React, TypeScript"
          />

          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-semibold text-gray-900">Proficiency Level</label>
              <span className="text-lg font-bold text-purple-primary">{formData.level}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: Number.parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-primary"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-3">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Expert</span>
            </div>
          </div>
        </div>
      </Modal>

      {deleteConfirm && (
        <Modal
          isOpen={true}
          title="Delete Skill"
          onClose={() => setDeleteConfirm(null)}
          onSubmit={() => {
            deleteItem(deleteConfirm)
            setDeleteConfirm(null)
          }}
          submitText="Delete"
        >
          <p className="text-gray-700">Are you sure you want to delete this skill? This action cannot be undone.</p>
        </Modal>
      )}
    </AdminLayout>
  )
}
