import { useState, useEffect } from "react"

export default function useMousePosition(containerRef: React.RefObject<HTMLElement>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateMousePosition = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }

    container.addEventListener("mousemove", updateMousePosition)
    return () => container.removeEventListener("mousemove", updateMousePosition)
  }, [containerRef])

  return mousePosition
}
