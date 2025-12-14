"use client"

import type React from "react"
import { useState } from "react"
import { PortfolioLayout } from "../../components/PortfolioLayout"
import { Button } from "../../components/shared/Button"
import { Card } from "../../components/shared/Card"
import { Input } from "../../components/shared/Input"
import { Textarea } from "../../components/shared/Textarea"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { DEMO_DATA } from "../../api/portfolioApi"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const contactDetails = DEMO_DATA.contactDetails

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <PortfolioLayout>
      <section className="py-20 px-4 md:px-8 bg-linear-to-br from-gray-50 via-white to-purple-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-primary rounded-full text-sm font-semibold mb-4">
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Let's Start a <span className="text-purple-primary">Conversation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card variant="light" hoverable className="p-8 text-center">
              <div className="w-16 h-15 bg-purple-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-0.5">Email Me</h3>
              <p className="text-gray-600 mb-4 text-sm">Send me an email anytime</p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-purple-primary hover:text-purple-primary/80 font-semibold"
              >
                {contactDetails.email}
              </a>
            </Card>

            <Card variant="light" hoverable className="p-8 text-center">
              <div className="w-16 h-15 bg-purple-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-0.5">Call Me</h3>
              <p className="text-gray-600 mb-4 text-sm">Available on weekdays</p>
              <a
                href={`tel:${contactDetails.phone}`}
                className="text-purple-primary hover:text-purple-primary/80 font-semibold"
              >
                {contactDetails.phone}
              </a>
            </Card>

            <Card variant="light" hoverable className="p-8 text-center">
              <div className="w-16 h-15 bg-purple-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-0.5">Visit Me</h3>
              <p className="text-gray-600 mb-4 text-sm">Come say hello</p>
              <p className="text-purple-primary font-semibold">{contactDetails.address}</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to bring your ideas to life?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you have a project in mind, need consultation, or just want to say hello,
                  I'm always excited to connect with new people and discuss opportunities.
                </p>
              </div>

              <Card variant="light" className="p-6 bg-linear-to-br from-purple-50 to-purple-100 border-purple-200">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-purple-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Response Time</h3>
                    <p className="text-gray-600 text-sm">{contactDetails.responseTime}</p>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">What happens next?</h3>
                <div className="space-y-3">
                  {[
                    { step: "1", text: "I'll review your message carefully" },
                    { step: "2", text: "Get back to you within 24 hours" },
                    { step: "3", text: "We'll discuss your project details" },
                    { step: "4", text: "Start planning the next steps together" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-purple-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card variant="light" className="p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send a Message</h3>
              <p className="text-gray-600 mb-8">Fill out the form below and I'll get back to you soon.</p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                  <p className="text-green-700 font-semibold">Thanks! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Your Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="light"
                    placeholder="John Doe"
                  />
                  <Input
                    label="Your Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="light"
                    placeholder="john@example.com"
                  />
                </div>

                <Input
                  label="Subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  variant="light"
                  placeholder="What's this about?"
                />

                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  variant="light"
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                />

                <Button type="submit" size="lg" fullWidth className="shadow-lg">
                  <Send size={20} />
                  Send Message
                </Button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-6">
                Your information is safe and will never be shared with third parties.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </PortfolioLayout>
  )
}

