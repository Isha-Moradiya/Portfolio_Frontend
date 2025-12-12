"use client"

import type React from "react"

import { useState } from "react"
import { AdminLayout } from "../../components/AdminLayout"
import { DEMO_DATA } from "../../api/portfolioApi"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "../../components/shared/Button"
import { Input } from "../../components/shared/Input"
import { Textarea } from "../../components/shared/Textarea"
import { Card } from "../../components/shared/Card"

interface ContactDetail {
  email: string
  phone: string
  address: string
  responseTime: string
  social: {
    github: string
    linkedin: string
    twitter: string
  }
}

export default function ContactDetailsCRUDPage() {
  const [editData, setEditData] = useState<ContactDetail>(DEMO_DATA.contactDetails)
  const [isEditing, setIsEditing] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name.startsWith("social.")) {
      const socialKey = name.split(".")[1] as keyof typeof editData.social
      setEditData((prev) => ({
        ...prev,
        social: { ...prev.social, [socialKey]: value },
      }))
    } else {
      setEditData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSave = () => {
    console.log("Saving contact details:", editData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <AdminLayout title="Manage Contact Details">
      <div className="space-y-6">
        {submitted && (
          <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg animate-fade-in">
            <p className="text-green-700 font-semibold">Contact details updated successfully!</p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Mail, label: "Email", value: editData.email, key: "email" },
            { icon: Phone, label: "Phone", value: editData.phone, key: "phone" },
            { icon: MapPin, label: "Location", value: editData.address, key: "address" },
          ].map((item, idx) => {
            const IconComponent = item.icon
            return (
              <Card
                key={item.key}
                variant="light"
                hoverable
                className="animate-fade-in hover-purple-lift"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-purple-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-purple-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{item.label}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Current {item.label.toLowerCase()}:</p>
                  <p className="text-purple-primary font-semibold text-sm break-all">{item.value}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <Card variant="light" className="p-6 md:p-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Edit Contact Information</h2>
            <Button variant={isEditing ? "outline" : "primary"} size="sm" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Cancel" : "Edit"}
            </Button>
          </div>

          {isEditing ? (
            <form className="space-y-6">
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
                variant="light"
              />

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={editData.phone}
                onChange={handleChange}
                variant="light"
              />

              <Input
                label="Address"
                type="text"
                name="address"
                value={editData.address}
                onChange={handleChange}
                variant="light"
              />

              <Textarea
                label="Response Time Message"
                name="responseTime"
                value={editData.responseTime}
                onChange={handleChange}
                variant="light"
                rows={3}
              />

              {/* Social Links */}
              <div className="space-y-4 border-t-2 border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-primary rounded-full"></span>
                  Social Media Links
                </h3>

                <Input
                  label="GitHub URL"
                  type="url"
                  name="social.github"
                  value={editData.social.github}
                  onChange={handleChange}
                  variant="light"
                  placeholder="https://github.com/username"
                />

                <Input
                  label="LinkedIn URL"
                  type="url"
                  name="social.linkedin"
                  value={editData.social.linkedin}
                  onChange={handleChange}
                  variant="light"
                  placeholder="https://linkedin.com/in/username"
                />

                <Input
                  label="Twitter URL"
                  type="url"
                  name="social.twitter"
                  value={editData.social.twitter}
                  onChange={handleChange}
                  variant="light"
                  placeholder="https://twitter.com/username"
                />
              </div>

              <Button variant="primary" size="lg" fullWidth onClick={handleSave}>
                Save Changes
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 text-sm mb-2 font-semibold">Email</p>
                  <p className="text-gray-900 text-base">{editData.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2 font-semibold">Phone</p>
                  <p className="text-gray-900 text-base">{editData.phone}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 text-sm mb-2 font-semibold">Address</p>
                  <p className="text-gray-900 text-base">{editData.address}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 text-sm mb-2 font-semibold">Response Time</p>
                  <p className="text-gray-900 text-base">{editData.responseTime}</p>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-6">
                <p className="text-gray-600 text-sm mb-4 font-semibold">Social Links</p>
                <div className="space-y-3">
                  <p className="text-gray-900 text-sm flex items-center gap-3">
                    <Github className="w-5 h-5 text-purple-primary flex-shrink-0" />
                    <span className="truncate">{editData.social.github}</span>
                  </p>
                  <p className="text-gray-900 text-sm flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-purple-primary flex-shrink-0" />
                    <span className="truncate">{editData.social.linkedin}</span>
                  </p>
                  <p className="text-gray-900 text-sm flex items-center gap-3">
                    <Twitter className="w-5 h-5 text-purple-primary flex-shrink-0" />
                    <span className="truncate">{editData.social.twitter}</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </AdminLayout>
  )
}
