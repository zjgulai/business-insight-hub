import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: '市场洞察', path: '/market' },
  { label: '创新方案', path: '/solutions' },
  { label: '行业案例', path: '/cases' },
  { label: '洞察框架', path: '/market#frameworks' },
]

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
}

const menuVariants = {
  hidden: { x: '100%', opacity: 0.8 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: {
    x: '100%',
    opacity: 0.8,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(251,247,243,0.92)] backdrop-blur-[16px] border-b border-[rgba(201,169,161,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <span className="font-display text-2xl font-bold text-[#2D2422]">
              Nurture
            </span>
            <span className="font-display text-2xl font-bold text-[#A67E75]">
              Link
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative font-body text-[0.9375rem] font-medium text-[#6B5E5A] hover:text-[#A67E75] transition-colors duration-250 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#A67E75] transition-all duration-250 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/solutions"
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-[#C9A9A1] text-white font-body text-sm font-medium hover:bg-[#E8D5D0] hover:scale-[1.02] transition-all duration-200"
          >
            探索方案
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2D2422] relative z-[70]"
            aria-label="切换菜单"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.25 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[65] md:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[rgba(45,36,34,0.3)] backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            {/* Slide-in panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-[#FBF7F3] shadow-xl p-6 pt-[92px] flex flex-col gap-2"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    to={link.path}
                    className="block font-body text-lg font-medium text-[#2D2422] hover:text-[#A67E75] py-3 border-b border-[rgba(201,169,161,0.15)] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to="/solutions"
                  className="mt-4 flex items-center justify-center px-6 py-3 rounded-full bg-[#C9A9A1] text-white font-body text-sm font-medium hover:bg-[#E8D5D0] transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  探索方案
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
