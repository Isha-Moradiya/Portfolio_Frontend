"use client"

import type React from "react"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  title: string
  children: React.ReactNode
  onClose: () => void
  onSubmit?: () => void
  submitText?: string
  isLoading?: boolean
}

export function Modal({
  isOpen,
  title,
  children,
  onClose,
  onSubmit,
  submitText = "Save",
  isLoading = false,
}: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full border border-gray-200/50 animate-modal-enter">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-5 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg p-1.5 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5">{children}</div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 flex gap-3 justify-end bg-gray-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition text-sm font-medium"
          >
            Cancel
          </button>
          {onSubmit && (
            <button
              onClick={onSubmit}
              disabled={isLoading}
              className="px-4 py-2 bg-purple-primary hover:bg-purple-primary/90 text-white rounded-lg transition disabled:opacity-50 text-sm font-medium shadow-md hover:shadow-lg"
            >
              {isLoading ? "Loading..." : submitText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
