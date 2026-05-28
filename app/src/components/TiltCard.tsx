import { useRef, useCallback, type ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltAmount?: number
}

export default function TiltCard({
  children,
  className = '',
  tiltAmount = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY
      const rotateX = (-mouseY / (rect.height / 2)) * tiltAmount
      const rotateY = (mouseX / (rect.width / 2)) * tiltAmount
      ref.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    },
    [tiltAmount]
  )

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
  }, [])

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease-out', willChange: 'transform' }}
    >
      <div className="tilt-card-inner">
        {children}
      </div>
    </div>
  )
}
