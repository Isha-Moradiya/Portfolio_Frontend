"use client"

import { useState, useCallback } from "react"

export interface UseCrudReturn<T> {
  data: T[]
  loading: boolean
  error: string | null
  fetchAll: () => Promise<void>
  createItem: (item: Omit<T, "id">) => Promise<void>
  updateItem: (id: number, item: Omit<T, "id">) => Promise<void>
  deleteItem: (id: number) => Promise<void>
}

export function useCrud<T extends { id: number }>(initialData: T[]): UseCrudReturn<T> {
  const [data, setData] = useState<T[]>(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchAll = useCallback(async () => {
    setLoading(true)
    try {
      // In a real app, this would fetch from an API
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [])

  const createItem = useCallback(
    async (item: Omit<T, "id">) => {
      setLoading(true)
      try {
        const newItem = {
          ...item,
          id: Math.max(...data.map((d) => d.id), 0) + 1,
        } as T
        setData((prev) => [...prev, newItem])
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to create item")
      } finally {
        setLoading(false)
      }
    },
    [data],
  )

  const updateItem = useCallback(async (id: number, item: Omit<T, "id">) => {
    setLoading(true)
    try {
      setData((prev) => prev.map((d) => (d.id === id ? ({ ...d, ...item } as T) : d)))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update item")
    } finally {
      setLoading(false)
    }
  }, [])

  const deleteItem = useCallback(async (id: number) => {
    setLoading(true)
    try {
      setData((prev) => prev.filter((d) => d.id !== id))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete item")
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error, fetchAll, createItem, updateItem, deleteItem }
}
