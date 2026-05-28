import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ChevronDown, Minus, Activity, User, Brain, Users, Check, ArrowRight } from 'lucide-react'
import CountUp from 'react-countup'
import TypewriterText from '@/components/TypewriterText'
import MagneticButton from '@/components/MagneticButton'
import TiltCard from '@/components/TiltCard'
import ParallaxImage from '@/components/ParallaxImage'

/* ─── Animation Helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}
void fadeUp

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const staggerChild = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

/* ─── Animated Text Reveal Component ─── */
function AnimatedText({ text, className = '', as: Tag = 'h2', delay = 0 }: {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })
  const words = text.split(' ')

  const Component = Tag as keyof React.JSX.IntrinsicElements

  return (
    <div ref={ref}>
      <Component className={className}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              initial={{ y: '100%' }}
              animate={isInView ? { y: 0 } : { y: '100%' }}
              transition={{
                duration: 0.5,
                delay: delay + i * 0.06,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Component>
    </div>
  )
}

/* ─── Floating Blob (CSS-driven, isolated) ─── */
function FloatingBlob({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`absolute rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-[#E8D5D0] opacity-[0.12] animate-blob-drift pointer-events-none ${className}`}
      style={{ willChange: 'transform', ...style }}
    />
  )
}

/* ─── Section 1: Hero ─── */
function HeroSection() {
  const scrollToNext = () => {
    const statsSection = document.getElementById('market-stats')
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Floating blobs */}
      <FloatingBlob className="w-[500px] h-[500px] -top-[150px] -left-[100px]" />
      <FloatingBlob className="w-[400px] h-[400px] top-[60%] -right-[100px]" style={{ animationDelay: '-7s' } as React.CSSProperties} />
      <FloatingBlob className="w-[300px] h-[300px] top-[30%] left-[10%]" style={{ animationDelay: '-14s' } as React.CSSProperties} />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #2D2422 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center pt-[72px]">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="inline-block text-overline text-[#A67E75] tracking-[0.12em] mb-6"
        >
          从洞察到产品
        </motion.span>

        <AnimatedText
          text="重新定义母婴AI"
          as="h1"
          className="font-display text-hero text-[#2D2422] font-bold"
          delay={0.4}
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="font-display text-hero text-[#A67E75] font-bold mt-1"
        >
          当关怀遇见创新
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="font-body text-body-lg text-[#6B5E5A] max-w-[640px] mx-auto mt-6"
        >
          <TypewriterText
            text="对566亿美元市场的深度研究，揭示了五个反直觉的真相——以及它们所启发的产品。"
            speed={35}
            delay={1200}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <MagneticButton
            className="ripple-btn inline-flex items-center px-8 py-3.5 rounded-full bg-[#C9A9A1] text-white font-body text-[0.9375rem] font-medium hover:bg-[#E8D5D0] hover:scale-[1.02] transition-all duration-200 shadow-md"
            strength={0.25}
          >
            <Link to="/solutions" className="flex items-center">探索五大方案</Link>
          </MagneticButton>
          <MagneticButton
            className="inline-flex items-center px-8 py-3.5 rounded-full border-[1.5px] border-[#C9A9A1] text-[#A67E75] font-body text-[0.9375rem] font-medium hover:bg-[#E8D5D0] hover:text-white transition-all duration-200"
            strength={0.25}
          >
            <Link to="/market" className="flex items-center">阅读市场分析</Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer bg-transparent border-none"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-[#9A8E88]" />
        </motion.div>
      </motion.button>
    </section>
  )
}

/* ─── Section 2: Market Stats Bar ─── */
function MarketStatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-30% 0px' })

  const stats = [
    { number: 56.6, prefix: '$', suffix: 'B', label: '全球AI育儿市场（2025）', color: 'text-[#C9A9A1]' },
    { number: 22.3, prefix: '', suffix: '%', label: '2035年复合年增长率', color: 'text-[#A8B5A0]' },
    { number: 7.63, prefix: '', suffix: '\u4E07\u4EBF', label: '中国母婴市场规模', color: 'text-[#D4A574]' },
    { number: 5, prefix: '', suffix: '', label: '反直觉解决方案', color: 'text-[#A67E75]', suffixNode: <span className="text-[0.5em] ml-0.5">{`\u4E2A`}</span> },
  ]

  return (
    <section id="market-stats" ref={ref} className="w-full bg-[#F5EDE6] py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center justify-center gap-4 lg:gap-0">
              {/* Divider */}
              {i > 0 && (
                <div className="hidden lg:block w-px h-[60%] bg-[rgba(201,169,161,0.25)] mr-6" />
              )}
              <div className="text-center lg:text-left">
                <div className={`font-mono text-data ${stat.color} flex items-baseline justify-center lg:justify-start`}>
                  <span>{stat.prefix}</span>
                  {isInView ? (
                    <CountUp start={0} end={stat.number} decimals={stat.number % 1 !== 0 ? 1 : 0} duration={2.5} separator="," />
                  ) : (
                    <span>0</span>
                  )}
                  {stat.suffix && !stat.suffixNode && <span>{stat.suffix}</span>}
                  {stat.suffixNode}
                </div>
                <p className="font-body text-caption text-[#6B5E5A] mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: The Problem ─── */
function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })

  const bullets = [
    '三大拥挤赛道：智能监护、AI教育、AI陪伴',
    '产品差异化与市场热度成反比',
    '"取代人类照护"的假设——已被证明大错特错',
  ]

  return (
    <section ref={ref} className="w-full bg-[#FBF7F3] py-16 lg:py-[8rem]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-overline text-[#A67E75] tracking-[0.12em]">市场迷思</span>
            <AnimatedText
              text="当所有人朝同一个方向奔跑"
              as="h2"
              className="font-display text-h2 text-[#2D2422] mt-4"
              delay={0.1}
            />
            <p className="font-body text-body text-[#6B5E5A] mt-6 leading-relaxed">
              全球母婴AI市场估值566亿美元——然而60%的产品都是同一个公式：大模型+毛绒外壳+语音对话。结果呢？AI玩具退货率高达30-40%，融资8000万美元的机器人沦为"电子砖头"，万亿级市场呼唤真正的创新。
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {bullets.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4DBD0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#8BA88A]" />
                  </div>
                  <span className="font-body text-[0.9375rem] font-medium text-[#2D2422]">{text}</span>
                </div>
              ))}
            </div>
            <Link
              to="/market"
              className="inline-flex items-center gap-2 mt-8 font-body text-[0.9375rem] font-medium text-[#A67E75] hover:underline transition-all"
            >
              深入了解市场分析
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right - Image with floating card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative"
          >
            <div className="relative rounded-[24px] overflow-hidden shadow-md">
              <ParallaxImage
                src="/market-homogenization.jpg"
                alt="商店货架上AI玩具的同质化现象"
                className="w-full h-auto"
                speed={0.85}
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl shadow-lg p-4"
            >
              <p className="font-body text-caption text-[#6B5E5A]">AI玩具退货率</p>
              <p className="font-mono text-2xl font-bold text-[#C97B7B] mt-1">30-40%</p>
              <p className="font-body text-caption text-[#9A8E88] mt-0.5">由同质化导致</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 4: Five Insight Frameworks ─── */
function InsightFrameworksSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })

  const frameworks = [
    {
      icon: <Minus className="w-5 h-5" />,
      title: '减法 > 加法',
      description: '去掉语音、屏幕和云端——用更少创造更强的连接，而非更多',
      accent: '#C9A9A1',
      bg: '#FBF7F3',
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: '生理 > 信息',
      description: '母亲的心跳比高清视频更 soothing。在生物层面实现同步。',
      accent: '#A67E75',
      bg: '#FBF7F3',
    },
    {
      icon: <User className="w-5 h-5" />,
      title: '父亲的蓝海',
      description: '67.8%的父亲每天使用育儿App——但只有6.2%是主要照护者。为父亲设计。',
      accent: '#D4A574',
      bg: '#FBF7F3',
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: '母亲心理健康优先',
      description: '产后抑郁率17.98%，每年150-200万新妈妈受影响。照护母亲，而非仅关注孩子。',
      accent: '#A8B5A0',
      bg: '#D4DBD0',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: '三代人，一座桥',
      description: '82.6%的0-3岁幼儿由祖父母照护。为整个家庭构建。',
      accent: '#8BA88A',
      bg: '#D4DBD0',
    },
  ]

  return (
    <section ref={ref} className="relative w-full gradient-hero py-16 lg:py-[8rem] overflow-hidden">
      {/* Floating decorative blobs */}
      <FloatingBlob className="w-[350px] h-[350px] -top-[100px] right-[5%]" style={{ animationDelay: '-5s', backgroundColor: '#C9A9A1' } as React.CSSProperties} />
      <FloatingBlob className="w-[250px] h-[250px] bottom-[10%] -left-[50px]" style={{ animationDelay: '-12s', backgroundColor: '#A8B5A0' } as React.CSSProperties} />
      <FloatingBlob className="w-[200px] h-[200px] top-[40%] right-[15%]" style={{ animationDelay: '-18s', backgroundColor: '#D4A574' } as React.CSSProperties} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-overline text-[#A67E75] tracking-[0.12em]"
          >
            五大反直觉洞察
          </motion.span>
          <AnimatedText
            text="打破常规的原则"
            as="h2"
            className="font-display text-h2 text-[#2D2422] mt-4"
            delay={0.1}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-body text-[#6B5E5A] max-w-[600px] mx-auto mt-4"
          >
            每个洞察都挑战行业共识——并打开一扇无人涉足的门。
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {frameworks.map((fw, i) => (
            <motion.div
              key={i}
              variants={staggerChild}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(45, 36, 34, 0.08)' }}
              className="group bg-white rounded-[24px] p-6 shadow-md border border-[rgba(201,169,161,0.1)] flex flex-col min-h-[280px] transition-all duration-300 cursor-default hover:border-[rgba(201,169,161,0.3)]"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: fw.bg }}
              >
                <span style={{ color: fw.accent }}>{fw.icon}</span>
              </div>
              <h3 className="font-body text-lg font-semibold text-[#2D2422] mt-4">{fw.title}</h3>
              <p className="font-body text-sm text-[#6B5E5A] mt-2 leading-relaxed line-clamp-4">{fw.description}</p>
              <div className="mt-auto pt-4">
                <div className="w-full h-[3px] rounded-full transition-all duration-300 group-hover:h-[4px]" style={{ backgroundColor: fw.accent }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 5: Solutions Preview ─── */
function SolutionsPreviewSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })

  const solutions = [
    {
      num: '01',
      title: 'Heartbeat Cocoon',
      tagline: '无语音。无屏幕。无云端。只有心跳。',
      metric: '$0.46',
      metricLabel: '触觉执行器成本',
      price: '\u00A5399-599',
      link: '/solutions/heartbeat',
      image: '/solution-preview-heartbeat.jpg',
      accent: '#C9A9A1',
    },
    {
      num: '02',
      title: 'DadQuest',
      tagline: '游戏化AI育儿——为父亲设计，而非母亲。',
      metric: '4300:10',
      metricLabel: '妈妈App vs 爸爸App',
      price: 'Freemium \u00A519-49/mo',
      link: '/solutions/dadquest',
      image: '/solution-preview-dadquest.jpg',
      accent: '#D4A574',
    },
    {
      num: '03',
      title: 'SafeBox',
      tagline: '"您孩子的数据永不触碰云端。"',
      metric: '$1',
      metricLabel: '边缘AI芯片成本',
      price: 'Hardware +20-30% premium',
      link: '/solutions/safebox',
      image: '/solution-preview-safebox.jpg',
      accent: '#A8B5A0',
    },
    {
      num: '04',
      title: 'WarmMom',
      tagline: "AI关注母亲心理健康，而非孩子的考试分数。",
      metric: '1.5-2M',
      metricLabel: '每年受影响的新妈妈',
      price: '\u00A5199-499/mo',
      link: '/solutions/warmmom',
      image: '/solution-preview-warmmom.jpg',
      accent: '#A67E75',
    },
    {
      num: '05',
      title: 'FamilyBridge',
      tagline: '三代人。一个AI。零冲突。',
      metric: '82.6%',
      metricLabel: '祖父母照护比例',
      price: '\u00A529-49/family/mo',
      link: '/solutions/familybridge',
      image: '/solution-preview-familybridge.jpg',
      accent: '#8BA88A',
    },
  ]

  return (
    <section ref={ref} className="relative w-full bg-[#FBF7F3] py-16 lg:py-[8rem] overflow-hidden">
      {/* Floating decorative blobs */}
      <FloatingBlob className="w-[400px] h-[400px] -top-[120px] -left-[100px]" style={{ animationDelay: '-8s', backgroundColor: '#A8B5A0' } as React.CSSProperties} />
      <FloatingBlob className="w-[300px] h-[300px] top-[50%] -right-[80px]" style={{ animationDelay: '-15s', backgroundColor: '#D4A574' } as React.CSSProperties} />
      <FloatingBlob className="w-[250px] h-[250px] bottom-[5%] left-[20%]" style={{ animationDelay: '-20s', backgroundColor: '#C9A9A1' } as React.CSSProperties} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-overline text-[#A67E75] tracking-[0.12em]"
          >
            五大创新方案
          </motion.span>
          <AnimatedText
            text="From Insight to Product"
            as="h2"
            className="font-display text-h2 text-[#2D2422] mt-4"
            delay={0.1}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-body text-[#6B5E5A] max-w-[640px] mt-4"
          >
            每个方案都将反直觉洞察转化为具体产品——包含清晰的定位、定价和MVP路线图。
          </motion.p>
        </div>

        {/* Grid: 3 cols first row, 2 cols second row centered */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.slice(0, 3).map((sol) => (
            <SolutionCard key={sol.num} solution={sol} />
          ))}
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-[calc(66.666%-0.75rem)] mx-auto"
        >
          {solutions.slice(3).map((sol) => (
            <SolutionCard key={sol.num} solution={sol} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SolutionCard({ solution }: { solution: {
  num: string
  title: string
  tagline: string
  metric: string
  metricLabel: string
  price: string
  link: string
  image: string
  accent: string
} }) {
  return (
    <motion.div variants={staggerChild}>
      <TiltCard tiltAmount={6}>
        <Link
          to={solution.link}
          className="group block bg-[#F5EDE6] rounded-[24px] border border-[rgba(201,169,161,0.2)] overflow-hidden shadow-md transition-all duration-400 hover:shadow-xl hover:-translate-y-2 hover:border-[rgba(201,169,161,0.5)]"
          style={{ '--tw-shadow-color': `${solution.accent}20` } as React.CSSProperties}
        >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8D5D0]/30 to-[#C9A9A1]/20 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" style={{ backdropFilter: 'blur(8px)' }} />
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Rose glow border on hover */}
          <div
            className="absolute inset-0 rounded-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
            style={{
              boxShadow: `inset 0 0 0 2px ${solution.accent}40, inset 0 0 30px ${solution.accent}15`,
            }}
          />
          {/* Badge */}
          <span
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-semibold z-30 transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: solution.accent }}
          >
            {solution.num}
          </span>
        </div>
        {/* Content */}
        <div className="p-6">
          <h3 className="font-body text-xl font-semibold text-[#2D2422] transition-colors duration-300 group-hover:text-[#A67E75]">{solution.title}</h3>
          <p className="font-body text-sm text-[#6B5E5A] mt-1 truncate">{solution.tagline}</p>
          <p className="font-mono text-2xl font-bold mt-4" style={{ color: solution.accent }}>
            {solution.metric}
          </p>
          <p className="font-body text-xs text-[#9A8E88]">{solution.metricLabel}</p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[rgba(201,169,161,0.15)]">
            <span className="font-body text-sm font-medium text-[#2D2422]">{solution.price}</span>
            <span className="font-body text-sm font-medium text-[#A67E75] group-hover:underline flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
              探索 <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
      </TiltCard>
    </motion.div>
  )
}

/* ─── Section 6: Success Cases Teaser ─── */
function SuccessCasesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })

  const cases = [
    {
      image: '/cases-owlet.jpg',
      title: 'Owlet智能袜',
      lesson: '反直觉的形态因子胜过传统智慧',
      metric: '估值超10亿美元',
    },
    {
      image: '/cases-lovot.jpg',
      title: 'LOVOT情感机器人',
      lesson: '无语音交互创造更深的情感纽带',
      metric: '3000美元+定价，日均拥抱1小时',
    },
    {
      image: '/cases-xiaotiancai.jpg',
      title: '小天才手表',
      lesson: '封闭式社交网络胜过开放式AI功能',
      metric: '35.3%市场份额',
    },
  ]

  return (
    <section ref={ref} className="w-full bg-[#F5EDE6] rounded-t-[32px] py-16 lg:py-[8rem]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-overline text-[#A67E75] tracking-[0.12em]"
          >
            行业验证
          </motion.span>
          <AnimatedText
            text="成功是什么样子"
            as="h2"
            className="font-display text-h2 text-[#2D2422] mt-4"
            delay={0.1}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-body text-[#6B5E5A] max-w-[600px] mt-4"
          >
            这些案例验证了我们的反直觉方法。赢家打破了其他人遵循的规则。
          </motion.p>
        </div>

        {/* Case Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
                },
              }}
              className="group bg-white rounded-[24px] shadow-md overflow-hidden hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8D5D0]/20 to-[#C9A9A1]/15 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" style={{ backdropFilter: 'blur(6px)' }} />
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#D4DBD0] text-[#8BA88A] text-overline text-[0.65rem]">
                  成功案例
                </span>
                <h3 className="font-body text-lg font-semibold text-[#2D2422] mt-3">{c.title}</h3>
                <p className="font-body text-sm text-[#6B5E5A] mt-2">{c.lesson}</p>
                <p className="font-mono text-xl font-bold text-[#A8B5A0] mt-4">{c.metric}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 font-body text-[0.9375rem] font-medium text-[#A67E75] hover:underline transition-all"
          >
            查看全部案例
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 7: Research Journey Timeline ─── */
function ResearchJourneySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })

  const steps = [
    {
      icon: '\u{1F50D}',
      title: '市场深度调研',
      description: '从10个维度分析566亿美元市场。发现60%产品同质化。揭穿"取代照护"的迷思。',
    },
    {
      icon: '\u{1F4A1}',
      title: '反直觉洞察',
      description: '从失败尸检（Moxie 8000万美元教训）和成功考古（Owlet、LOVOT、Hello Kitty）中提取5个框架。',
    },
    {
      icon: '\u{1F527}',
      title: '产品设计',
      description: '每个洞察转化为具体产品：形态因子、UX流程、技术架构、定价模型、MVP时间线。',
    },
    {
      icon: '\u{1F680}',
      title: '市场落地',
      description: '清晰的实施路线图：短期（6个月）、中期（12个月）、长期（18个月），附带优先级排序。',
    },
  ]

  return (
    <section ref={ref} className="w-full gradient-dark py-16 lg:py-[8rem]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-overline text-[rgba(251,247,243,0.5)] tracking-[0.12em]"
          >
            我们的方法论
          </motion.span>
          <AnimatedText
            text="从数据到设计"
            as="h2"
            className="font-display text-h2 text-white mt-4"
            delay={0.1}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-body text-[rgba(251,247,243,0.7)] max-w-[640px] mx-auto mt-4"
          >
            穿越市场数据、用户心理学和产品哲学的严谨研究之旅——抵达五大突破性解决方案。
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[600px] mx-auto">
          {/* Vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-[2px] hidden sm:block">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="w-full h-full origin-top"
              style={{
                background: 'linear-gradient(180deg, #C9A9A1 0%, #A8B5A0 100%)',
              }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              className="relative flex items-start gap-6 mb-12 last:mb-0"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.2,
                  ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number],
                }}
                className="relative z-10 w-14 h-14 rounded-full bg-[rgba(201,169,161,0.15)] flex items-center justify-center shrink-0"
              >
                <span className="text-xl">{step.icon}</span>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
                className="pt-2"
              >
                <h3 className="font-body text-xl font-semibold text-white">{step.title}</h3>
                <p className="font-body text-[0.9375rem] text-[rgba(251,247,243,0.6)] max-w-[480px] mt-2 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 8: CTA Banner ─── */
function CTABannerSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })

  return (
    <section
      ref={ref}
      className="relative w-full py-16 lg:py-[6rem] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #E8D5D0 0%, #C9A9A1 50%, #A67E75 100%)',
        backgroundSize: '200% 100%',
      }}
    >
      {/* Shimmer effect via CSS animation */}
      <div
        className="absolute inset-0 animate-shimmer opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          backgroundSize: '200% 100%',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <AnimatedText
          text="准备好看见照护的未来了吗？"
          as="h2"
          className="font-display text-h2 text-white"
          delay={0.1}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-body text-body text-[rgba(255,255,255,0.85)] max-w-[560px] mx-auto mt-4"
        >
          探索诞生于深度市场研究的五大产品方案。每一个都在挑战行业的固有认知。
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <MagneticButton
            className="ripple-btn inline-flex items-center px-8 py-3.5 rounded-full bg-white text-[#A67E75] font-body text-[0.9375rem] font-medium hover:bg-[rgba(255,255,255,0.9)] hover:scale-[1.02] transition-all duration-200 shadow-md"
            strength={0.25}
          >
            <Link to="/solutions" className="flex items-center">探索全部方案</Link>
          </MagneticButton>
          <MagneticButton
            className="inline-flex items-center px-8 py-3.5 rounded-full border-[1.5px] border-[rgba(255,255,255,0.5)] text-white font-body text-[0.9375rem] font-medium hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200"
            strength={0.25}
          >
            <Link to="/market" className="flex items-center">阅读完整分析</Link>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  )
}

/* ─── Main Home Page ─── */
export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <MarketStatsBar />
      <ProblemSection />
      <InsightFrameworksSection />
      <SolutionsPreviewSection />
      <SuccessCasesSection />
      <ResearchJourneySection />
      <CTABannerSection />
    </div>
  )
}