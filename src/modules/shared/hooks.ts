import { RefObject, useEffect, useState } from 'react'
import { TailwindBreakpoints } from './types'

export function useWindowWidth(): TailwindBreakpoints {
  // Initialize state with undefined width/height so server and client renders match
  const [windowWidth, setWindowWidth] = useState(0)

  const tailwindSizes = (width: number): TailwindBreakpoints => {
    if (width < 640) return 'sm'
    if (width < 768) return 'md'
    if (width < 1024) return 'lg'
    if (width < 1280) return 'xl'
    return '2xl'
  }

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowWidth(window.innerWidth)
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return tailwindSizes(windowWidth)
}

export function useOnScreen(ref: RefObject<HTMLDivElement>): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  const width = useWindowWidth()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    )
    if (!ref?.current) return
    observer.observe(ref.current as Element)

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [width])

  return isIntersecting
}
