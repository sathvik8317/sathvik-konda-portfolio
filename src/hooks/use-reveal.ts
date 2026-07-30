import * as React from "react"

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = React.useRef<T>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible] as const
}
