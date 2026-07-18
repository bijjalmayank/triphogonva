import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "triphogonva:wishlist"

function readStoredIds(): string[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function useWishlist() {
  const [ids, setIds] = useState<string[]>(readStoredIds)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  }, [ids])

  const isWishlisted = useCallback((id: string) => ids.includes(id), [ids])

  const toggle = useCallback((id: string) => {
    setIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }, [])

  return { ids, isWishlisted, toggle }
}
