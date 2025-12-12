"use client"

import { useState, useEffect } from "react"
import { AdminLayout } from "../../components/AdminLayout"
import { Modal } from "../../components/Modal"
import { DEMO_DATA } from "../../api/portfolioApi"
import { Button } from "../../components/shared/Button"
import { Input } from "../../components/shared/Input"
import { Textarea } from "../../components/shared/Textarea"
import { Card } from "../../components/shared/Card"

interface AboutData {
  id: number
  title: string
  description: string
  image: string
}

export default function AboutCRUDPage() {
  const [about, setAbout] = useState<AboutData | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ title: "", description: "", image: "" })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const data = DEMO_DATA.about
    setAbout(data)
    setFormData({
      title: data.title,
      description: data.description,
      image: data.image,
    })
  }, [])

  const handleEdit = () => {
    if (about) {
      setFormData({
        title: about.title,
        description: about.description,
        image: about.image,
      })
      setShowModal(true)
    }
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      if (about) {
        setAbout({
          ...about,
          title: formData.title,
          description: formData.description,
          image: formData.image,
        })
      }
      setShowModal(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminLayout title="Manage About Section">
      <div className="space-y-6">
        {about && (
          <Card variant="light" hoverable className="overflow-hidden animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 md:gap-0">
              <div className="relative bg-gray-100 h-64 md:h-auto overflow-hidden">
                <img
                  src={about.image || "/placeholder.svg"}
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-purple-gradient pointer-events-none opacity-20"></div>
              </div>

              <div className="p-6 md:p-8 space-y-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-primary mb-2">{about.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{about.description}</p>
                </div>

                <Button variant="primary" size="md" onClick={handleEdit}>
                  Edit About
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>

      <Modal
        isOpen={showModal}
        title="Edit About Section"
        onClose={() => setShowModal(false)}
        onSubmit={handleSave}
        isLoading={loading}
      >
        <div className="space-y-4">
          <Input
            label="Title"
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            variant="light"
            placeholder="Your professional title"
          />

          <Textarea
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            variant="light"
            placeholder="Tell your story..."
            rows={5}
          />

          <Input
            label="Profile Image URL"
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            variant="light"
            placeholder="https://..."
          />
          {formData.image && (
            <img
              src={formData.image || "/placeholder.svg"}
              alt="Preview"
              className="mt-3 w-24 h-24 rounded-lg object-cover border-2 border-purple-primary/20"
            />
          )}
        </div>
      </Modal>
    </AdminLayout>
  )
}
