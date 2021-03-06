import { useEffect, useState, useRef } from 'react'

export default function useNearScreen({ distance = '30px' }) {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      },
      { rootMargin: distance }
    )
    element.current && observer.observe(element.current)
    return () => observer && observer.disconnect()
  }, [element])

  return [show, element]
}
