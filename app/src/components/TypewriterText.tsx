import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  showCursor?: boolean
  onComplete?: () => void
}

export default function TypewriterText({
  text,
  className = '',
  speed = 40,
  delay = 0,
  showCursor = true,
  onComplete,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const indexRef = useRef(0)

  useEffect(() => {
    if (!isInView || started) return
    const timer = setTimeout(() => {
      setStarted(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [isInView, started, delay])

  useEffect(() => {
    if (!started) return
    indexRef.current = 0
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayed('')
    setDone(false)

    const interval = setInterval(() => {
      indexRef.current += 1
      if (indexRef.current <= text.length) {
        setDisplayed(text.slice(0, indexRef.current))
      } else {
        clearInterval(interval)
        setDone(true)
        onComplete?.()
      }
    }, speed)

    return () => clearInterval(interval)
  }, [started, text, speed, onComplete])

  return (
    <span ref={ref} className={className}>
      {displayed}
      {showCursor && !done && <span className="typewriter-cursor" />}
    </span>
  )
}
