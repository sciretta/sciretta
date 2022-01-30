import React, {
  createContext,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
}

function getAnimationSettings(originXA: number, originXB: number) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  }
}

export const Fireworks = forwardRef((_, ref) => {
  const refAnimationInstance = useRef<any>(null)
  const [intervalId, setIntervalId] = useState<any>()

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance
  }, [])

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3))
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9))
    }
  }, [])

  const startAnimation = useCallback(
    (customTime) => {
      if (!intervalId) {
        setIntervalId(setInterval(nextTickAnimation, 400))
        setTimeout(() => {
          pauseAnimation()
        }, customTime || 1500)
      }
    },
    [intervalId, nextTickAnimation],
  )

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId)
    setIntervalId(null)
  }, [intervalId])

  useImperativeHandle(ref, () => ({
    startAnimation,
  }))

  useEffect(() => {
    return () => {
      clearInterval(intervalId)
    }
  }, [intervalId])

  return (
    // @ts-ignore
    <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
  )
})

export const FireworksContext = createContext<{
  startAnimation: ((customTime?: number) => void) | undefined
} | null>(null)
