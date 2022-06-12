import { Ref, useEffect, useRef, useState } from 'react'
import { useOnScreen } from '../shared/hooks'

export const useGetIntersectingZone = (): [
  Ref<HTMLDivElement> | undefined,
  boolean,
] => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useOnScreen(ref)

  useEffect((): void => {
    setIsOpen(isIntersecting)
  }, [isIntersecting])

  return [ref, isOpen]
}
