import { useRef, useEffect, useState } from 'react'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  aspectRatio?: string
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.8,
  aspectRatio,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distance = elementCenter - viewportCenter
      setOffset(distance * (1 - speed))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div
      ref={ref}
      className={`parallax-wrapper overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          transform: `translateY(${offset}px) scale(1.15)`,
          willChange: 'transform',
        }}
        loading="lazy"
      />
    </div>
  )
}
