import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section
      ref={ref}
      className="relative w-full py-16 lg:py-[6rem] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FBF7F3 0%, #F5EDE6 50%, #E8D5D0 100%)',
      }}
    >
      {/* Decorative floating blobs */}
      <div
        className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A9A1, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-[80px] -left-[80px] w-[250px] h-[250px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A8B5A0, transparent 70%)' }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #2D2422 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="relative z-10 max-w-[640px] mx-auto px-4 sm:px-6 text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] }}
          className="w-14 h-14 rounded-full bg-[#C9A9A1] flex items-center justify-center mx-auto mb-6"
        >
          <Mail className="w-6 h-6 text-white" />
        </motion.div>

        <h2 className="font-display text-h3 text-[#2D2422]">
          洞察前沿，引领趋势
        </h2>
        <p className="font-body text-body text-[#6B5E5A] mt-3 max-w-[480px] mx-auto">
          每月获取母婴AI创新、市场趋势与反直觉产品思维的深度洞察。
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="输入您的邮箱"
                className="w-full px-5 py-3.5 rounded-full bg-white border border-[rgba(201,169,161,0.3)] font-body text-[0.9375rem] text-[#2D2422] placeholder:text-[#9A8E88] focus:outline-none focus:border-[#C9A9A1] focus:ring-2 focus:ring-[#C9A9A1]/20 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-body text-[0.9375rem] font-medium transition-all duration-300 shadow-md ${
                submitted
                  ? 'bg-[#A8B5A0] text-white'
                  : 'bg-[#C9A9A1] text-white hover:bg-[#A67E75] hover:scale-[1.02]'
              }`}
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  已订阅
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  订阅
                </>
              )}
            </button>
          </div>
        </form>

        <p className="font-body text-xs text-[#9A8E88] mt-4">
          无垃圾邮件。随时取消订阅。与2000+创新者同行。
        </p>
      </motion.div>
    </section>
  )
}
