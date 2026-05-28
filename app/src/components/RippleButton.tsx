import { useRef, type ReactNode, type MouseEvent } from 'react'

interface RippleButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  to?: string
}

export default function RippleButton({ children, className = '', onClick }: RippleButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null)

  const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current
    if (!btn) return

    const rect = btn.getBoundingClientRect()
    const ripple = document.createElement('span')
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.35);
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      transform: scale(0);
      animation: ripple-anim 0.6s linear;
      pointer-events: none;
    `
    ripple.classList.add('ripple')

    const existing = btn.getElementsByClassName('ripple')
    if (existing.length > 0) {
      existing[0].remove()
    }

    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)

    onClick?.()
  }

  return (
    <button
      ref={btnRef}
      onClick={createRipple}
      className={`ripple-btn btn-sweep ${className}`}
    >
      {children}
    </button>
  )
}
