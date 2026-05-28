import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import {
  Heart, Activity, Cpu, Battery,
  Check, ArrowRight, X, Waves,
  Smartphone, RotateCcw
} from 'lucide-react'

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

/* ─── AnimatedSection wrapper ─── */
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 1: Hero
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full gradient-hero" style={{ minHeight: '70vh' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-[72px]">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 py-16 lg:py-24">
          {/* Left — Content */}
          <motion.div
            className="flex-1 lg:max-w-[55%]"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={staggerChild} className="flex items-center gap-2 mb-4">
              <Link to="/" className="font-body text-sm text-[#9A8E88] hover:text-[#A67E75] transition-colors">首页</Link>
              <span className="text-[#9A8E88]">/</span>
              <Link to="/solutions" className="font-body text-sm text-[#9A8E88] hover:text-[#A67E75] transition-colors">解决方案</Link>
              <span className="text-[#9A8E88]">/</span>
              <span className="font-body text-sm text-[#9A8E88]">Heartbeat Cocoon</span>
            </motion.div>

            <motion.div variants={staggerChild} className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C9A9A1] text-white text-overline">
                01
              </span>
            </motion.div>

            <motion.h1 variants={staggerChild} className="font-display text-h1 text-[#2D2422]">
              Heartbeat Cocoon
            </motion.h1>
            <motion.p variants={staggerChild} className="font-body text-xl text-[#9A8E88] mt-1">
              心跳茧
            </motion.p>

            <motion.p variants={staggerChild} className="font-body text-lg font-medium text-[#A67E75] mt-4">
              无语音。无屏幕。无云端。唯心跳而已。
            </motion.p>

            <motion.p variants={staggerChild} className="font-body text-body text-[#6B5E5A] max-w-[480px] mt-4">
              母亲的心跳同步手环与宝宝的触觉安抚玩偶。当分离焦虑同时袭向母子，是生物学——而非技术——给出了答案。
            </motion.p>

            <motion.div variants={staggerChild} className="flex flex-wrap gap-6 mt-6">
              {[
                { num: '$0.46', label: '执行器成本' },
                { num: '¥399-599', label: '目标售价' },
                { num: '12个月', label: 'MVP周期' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-mono text-lg font-bold text-[#C9A9A1]">{s.num}</span>
                  <span className="font-body text-xs text-[#9A8E88]">{s.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={staggerChild} className="mt-6">
              <a
                href="#insight"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#C9A9A1] text-white font-body font-medium hover:bg-[#E8D5D0] hover:scale-[1.02] transition-all duration-200"
              >
                探索科学原理 <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Product Image */}
          <motion.div
            className="flex-1 lg:max-w-[45%]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] }}
          >
            <div className="relative animate-float">
              <img
                src="/heartbeat-cocoon-hero.jpg"
                alt="Heartbeat Cocoon - 脉冲手环与安抚玩偶"
                className="w-full rounded-[32px] shadow-xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 2: Core Insight
   ═══════════════════════════════════════════════════════════ */
function InsightSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const evidenceCards = [
    {
      title: '视频对婴儿不可见',
      text: '婴儿无法理解"看得见但摸不着"。视频画面带来视觉刺激，却无法提供情感安抚——在某些情况下反而加剧焦虑。',
      source: '儿童发展研究',
    },
    {
      title: '心跳同步皮质醇',
      text: '母婴皮质醇同步是有文献记载的生物现象。分离时，双方的压力激素都会升高。心跳重新连接可降低双方压力。',
      source: '心理神经内分泌学研究',
    },
    {
      title: 'NICU研究证实效果',
      text: '将母亲心跳录音播放给NICU早产儿，显著降低了心率变异性压力指标。效果是真实、可测量且即时的。',
      source: 'NICU临床试验',
    },
  ]

  return (
    <section id="insight" className="w-full bg-[#FBF7F3] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection>
          <span className="text-overline text-[#A67E75]">核心洞察</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">
            视频安抚不了宝宝。心跳可以。
          </h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Left — Scientific Evidence */}
          <div className="flex-1">
            <AnimatedSection delay={0.1}>
              <p className="font-body text-body-lg text-[#2D2422] font-medium">
                148亿美元的婴儿监视器市场建立在一个错误的前提上：看到宝宝就等于安抚宝宝。研究证明并非如此。
              </p>
            </AnimatedSection>

            <div className="flex flex-col gap-4 mt-8">
              {evidenceCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * (i + 1), ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="bg-white rounded-[16px] p-5 shadow-md"
                >
                  <h4 className="font-body text-base font-semibold text-[#2D2422]">{card.title}</h4>
                  <p className="font-body text-sm text-[#6B5E5A] mt-2 leading-relaxed">{card.text}</p>
                  <span className="inline-block mt-3 font-body text-xs text-[#9A8E88] bg-[#F5EDE6] px-2 py-1 rounded-full">{card.source}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Visual Comparison */}
          <AnimatedSection delay={0.3} className="flex-1">
            <div className="flex items-stretch gap-0 rounded-[24px] overflow-hidden shadow-lg">
              {/* Traditional Monitor */}
              <div className="flex-1 bg-[rgba(201,123,123,0.08)] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone size={20} className="text-[#C97B7B]" />
                  <span className="font-body text-sm font-semibold text-[#C97B7B]">传统监视器</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {['$400 高清摄像头', '单向视频', '依赖云端', '无法安抚宝宝'].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-body text-sm text-[#6B5E5A]">
                      <X size={14} className="text-[#C97B7B] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* VS Divider */}
              <div className="flex items-center justify-center px-4 bg-[#FBF7F3]">
                <div className="w-12 h-12 rounded-full bg-[#F5EDE6] flex items-center justify-center">
                  <span className="font-mono text-lg text-[#9A8E88]">对比</span>
                </div>
              </div>

              {/* Heartbeat Cocoon */}
              <div className="flex-1 bg-[rgba(201,169,161,0.12)] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart size={20} className="text-[#C9A9A1]" />
                  <span className="font-body text-sm font-semibold text-[#A67E75]">Heartbeat Cocoon</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {['¥399-599 手环+玩偶', '双向触觉同步', '零云端，仅蓝牙', '生物本能安抚'].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-body text-sm text-[#A67E75]">
                      <Check size={14} className="text-[#8BA88A] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 3: Product Design — Two Devices
   ═══════════════════════════════════════════════════════════ */
function ProductDesignSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="w-full bg-[#F5EDE6] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection className="text-center">
          <span className="text-overline text-[#A67E75]">产品设计</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">两件设备。一种连接。</h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Mother's Device */}
          <motion.div
            className="flex-1 bg-white rounded-[32px] p-8 shadow-md"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] }}
          >
            <div className="w-12 h-12 rounded-full bg-[#E8D5D0] flex items-center justify-center mb-4">
              <Activity size={24} className="text-[#C9A9A1]" />
            </div>
            <h3 className="font-body text-2xl font-semibold text-[#2D2422]">脉冲手环</h3>
            <p className="font-body text-sm text-[#9A8E88] mt-1">佩戴于母亲手腕</p>
            <p className="font-body text-body text-[#6B5E5A] mt-4">
              轻巧舒适的手环，通过光学传感器持续捕捉母亲心跳。当宝宝挤压安抚玩偶时，母亲手腕上感受到轻柔的触觉脉冲——一种可触摸的连接提醒。
            </p>
            <ul className="flex flex-col gap-2 mt-6">
              {[
                '光学心跳捕捉（PPG传感器）',
                '触觉反馈马达（双向）',
                '7天续航',
                'IP67防水',
                '可更换表带（3种尺寸）',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 font-body text-sm text-[#6B5E5A]">
                  <Check size={14} className="text-[#A8B5A0]" /> {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-6 mt-6 pt-4 border-t border-[#EDE4DA]">
              {[{ n: '12g', l: '重量' }, { n: '3mm', l: '厚度' }, { n: 'BLE 5.2', l: '连接' }].map((s) => (
                <div key={s.l}>
                  <span className="font-mono text-base font-bold text-[#C9A9A1]">{s.n}</span>
                  <span className="block font-body text-xs text-[#9A8E88]">{s.l}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Baby's Device */}
          <motion.div
            className="flex-1 bg-white rounded-[32px] p-8 shadow-md"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] }}
          >
            <div className="w-12 h-12 rounded-full bg-[#E8D5D0] flex items-center justify-center mb-4">
              <Heart size={24} className="text-[#C9A9A1]" />
            </div>
            <h3 className="font-body text-2xl font-semibold text-[#2D2422]">茧型玩偶</h3>
            <p className="font-body text-sm text-[#9A8E88] mt-1">宝宝的安抚伙伴</p>
            <p className="font-body text-body text-[#6B5E5A] mt-4">
              柔软安全的安抚玩偶，内置触觉执行器，实时还原母亲心跳。当宝宝挤压玩偶时，母亲会收到轻柔的触觉通知。玩偶表面保持温和温度，模拟体温。
            </p>
            <ul className="flex flex-col gap-2 mt-6">
              {[
                '实时心跳还原',
                '压感挤压检测',
                '温和温度模拟（36°C）',
                '可机洗外壳',
                '医用级硅胶内芯',
                '平静30分钟后自动关机',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 font-body text-sm text-[#6B5E5A]">
                  <Check size={14} className="text-[#A8B5A0]" /> {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-6 mt-6 pt-4 border-t border-[#EDE4DA]">
              {[{ n: '85g', l: '重量' }, { n: '15cm', l: '高度' }, { n: '5天', l: '续航' }].map((s) => (
                <div key={s.l}>
                  <span className="font-mono text-base font-bold text-[#C9A9A1]">{s.n}</span>
                  <span className="block font-body text-xs text-[#9A8E88]">{s.l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 4: User Experience — 4-Step Journey
   ═══════════════════════════════════════════════════════════ */
function UXSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const steps = [
    { num: '1', title: '实时同步', desc: '母亲佩戴脉冲手环，宝宝拥有茧型玩偶。心跳通过蓝牙实时同步。即使分离，双方也能感受到彼此。', duration: '第1-4周', color: '#C9A9A1' },
    { num: '2', title: '定时同步', desc: '仅在午睡和睡眠时间同步心跳。逐步减少同步时间，帮助双方适应更长的分离时段。', duration: '第5-12周', color: '#A67E75' },
    { num: '3', title: '按需安抚', desc: '仅在宝宝挤压玩偶（焦虑信号）或母亲主动发起时激活同步。孩子学会自我安抚。', duration: '第3-6个月', color: '#A8B5A0' },
    { num: '4', title: '毕业阶段', desc: '茧型玩偶成为普通安抚物——无需技术辅助。从技术辅助到自然独立的过渡完成。', duration: '第6个月+', color: '#D4A574' },
  ]

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection className="text-center">
          <span className="text-overline text-[#A67E75]">用户体验</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">分离训练之旅</h2>
          <p className="font-body text-body text-[#6B5E5A] max-w-[560px] mx-auto mt-4">
            Heartbeat Cocoon 不是永久依赖。它是帮助逐步建立独立性的训练工具——对母亲和孩子都是如此。
          </p>
        </AnimatedSection>

        {/* 4 Steps */}
        <div className="relative mt-16">
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px]"
            style={{ background: 'linear-gradient(90deg, #C9A9A1, #A8B5A0, #D4A574)' }}
          />
          {/* Connecting line — mobile */}
          <div
            className="lg:hidden absolute top-0 bottom-0 left-10 w-[2px]"
            style={{ background: 'linear-gradient(180deg, #C9A9A1, #A8B5A0, #D4A574)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.15 * i, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white font-mono text-2xl font-bold z-10 shrink-0"
                  style={{ backgroundColor: step.color }}
                >
                  {step.num}
                </div>
                <div className="mt-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-overline mb-2"
                    style={{ backgroundColor: `${step.color}20`, color: step.color }}
                  >
                    {step.duration}
                  </span>
                  <h4 className="font-body text-lg font-semibold text-[#2D2422]">{step.title}</h4>
                  <p className="font-body text-sm text-[#6B5E5A] mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bidirectional Flow */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="bg-[#F5EDE6] rounded-[24px] p-8 max-w-[640px] mx-auto">
            <h4 className="font-body text-base font-semibold text-[#2D2422] text-center mb-6">双向连接</h4>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8D5D0] flex items-center justify-center mx-auto">
                  <Activity size={24} className="text-[#A67E75]" />
                </div>
                <span className="font-body text-xs text-[#6B5E5A] mt-2 block">母亲（脉冲手环）</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1">
                  <Heart size={14} className="text-[#C9A9A1]" />
                  <span className="font-body text-xs text-[#A67E75]">心跳</span>
                </div>
                <div className="w-24 h-[2px] bg-[#C9A9A1] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#C9A9A1] animate-pulse" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-body text-xs text-[#A67E75]">挤压信号</span>
                  <RotateCcw size={14} className="text-[#C9A9A1]" />
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8D5D0] flex items-center justify-center mx-auto">
                  <Heart size={24} className="text-[#A67E75]" />
                </div>
                <span className="font-body text-xs text-[#6B5E5A] mt-2 block">宝宝（茧型玩偶）</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 5: Technology — Dark Stack
   ═══════════════════════════════════════════════════════════ */
function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const techCards = [
    {
      icon: <Waves size={40} className="text-[#C9A9A1]" />,
      title: '触觉同步',
      desc: 'Bond Touch 已验证市场：100万+远距离关系触觉手环售出。我们的执行器成本仅$0.46-$7.65，可精确还原心跳节律。',
      spec: 'ERM/LRA 执行器',
      specVal: '$0.46-7.65',
    },
    {
      icon: <Cpu size={40} className="text-[#A8B5A0]" />,
      title: '纯本地处理',
      desc: '所有心跳信号处理均在设备端完成。数据不会离开蓝牙连接。零云端依赖意味着零隐私风险和零服务中断风险。',
      spec: 'Nordic nRF52840',
      specVal: 'BLE 5.2',
    },
    {
      icon: <Battery size={40} className="text-[#D4A574]" />,
      title: '超长续航',
      desc: '脉冲手环：单次充电7天。茧型玩偶：5天。USB-C充电，90分钟充满。设备陪伴母子——而非拴在充电器上。',
      spec: '7天 / 5天',
      specVal: 'USB-C 90分钟',
    },
  ]

  return (
    <section className="w-full gradient-dark py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection className="text-center">
          <span className="text-overline text-[rgba(251,247,243,0.5)]">技术</span>
          <h2 className="font-display text-h2 text-white mt-2">极简设计，有意为之。</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {techCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-[rgba(251,247,243,0.05)] border border-[rgba(251,247,243,0.1)] rounded-[24px] p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {card.icon}
              <h3 className="font-body text-lg font-semibold text-white mt-4">{card.title}</h3>
              <p className="font-body text-sm text-[rgba(251,247,243,0.7)] mt-3 leading-relaxed">{card.desc}</p>
              <div className="mt-4 pt-4 border-t border-[rgba(251,247,243,0.1)]">
                <span className="font-mono text-sm text-[#C9A9A1]">{card.spec}</span>
                <span className="block font-mono text-xs text-[rgba(251,247,243,0.5)]">{card.specVal}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 6: Medical Path — FDA Roadmap
   ═══════════════════════════════════════════════════════════ */
function MedicalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection>
          <span className="text-overline text-[#A67E75]">医疗认证路径</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">
            从消费级设备到医用级监护仪
          </h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Owlet's Path */}
          <motion.div
            className="flex-1 bg-[#F5EDE6] rounded-[24px] p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <h3 className="font-body text-xl font-semibold text-[#2D2422]">Owlet 智能袜</h3>
            <p className="font-body text-body text-[#6B5E5A] mt-3">
              FDA De Novo 认证——唯一具有医疗级资质的婴儿监视器。建立的信任支撑了$400+的定价。创造了竞争对手无法跨越的护城河。
            </p>
            <span className="inline-block mt-4 font-mono text-sm text-[#8BA88A] bg-[#D4DBD0] px-3 py-1 rounded-full">
              估值超10亿美元
            </span>
          </motion.div>

          {/* Our Path */}
          <motion.div
            className="flex-1 bg-white border-2 border-[#C9A9A1] rounded-[24px] p-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <h3 className="font-body text-xl font-semibold text-[#A67E75]">Heartbeat Cocoon</h3>
            <p className="font-body text-body text-[#6B5E5A] mt-3">
              第一阶段：消费级安抚设备（¥399-599）。第二阶段：焦虑缓解临床试验。第三阶段：FDA/NMPA 医疗级分离焦虑管理设备认证。
            </p>
            <span className="inline-block mt-4 font-mono text-sm text-[#C9A9A1] bg-[#E8D5D0] px-3 py-1 rounded-full">
              12-18个月路径
            </span>
          </motion.div>
        </div>

        {/* Certification Roadmap Timeline */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
            {/* Line */}
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-[#EDE4DA]" />

            {[
              { label: '消费级上市', month: '第12个月', color: '#C9A9A1' },
              { label: '临床验证', month: '第18个月', color: '#A8B5A0' },
              { label: 'FDA/NMPA申请', month: '第24个月', color: '#D4A574' },
            ].map((phase, i) => (
              <div key={phase.label} className="flex-1 flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: phase.color }}>
                  <span className="text-white font-mono text-sm font-bold">{i + 1}</span>
                </div>
                <span className="font-body text-sm font-semibold text-[#2D2422] mt-3">{phase.label}</span>
                <span className="font-mono text-xs text-[#9A8E88]">{phase.month}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 7: Business Model
   ═══════════════════════════════════════════════════════════ */
function BusinessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="w-full bg-[#F5EDE6] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection>
          <span className="text-overline text-[#A67E75]">商业模式</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">「安心」溢价</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Pricing */}
          <motion.div
            className="bg-white rounded-[24px] p-6 shadow-md"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <h3 className="font-body text-lg font-semibold text-[#2D2422]">定价</h3>
            <div className="mt-4">
              {isInView ? (
                <span className="font-mono text-[2.5rem] font-bold text-[#C9A9A1]">¥399-599</span>
              ) : (
                <span className="font-mono text-[2.5rem] font-bold text-[#C9A9A1]">¥0</span>
              )}
              <p className="font-body text-sm text-[#6B5E5A]">一次性购买</p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#EDE4DA]">
              <p className="font-body text-sm font-medium text-[#9A8E88]">对比：</p>
              <p className="font-body text-sm text-[#6B5E5A] mt-1">$50 基础监视器 → $400+ 高端监视器</p>
              <p className="font-body text-sm font-medium text-[#A67E75] mt-2">8倍情感价值溢价由生理学差异化支撑</p>
            </div>
          </motion.div>

          {/* Accessories */}
          <motion.div
            className="bg-white rounded-[24px] p-6 shadow-md"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <h3 className="font-body text-lg font-semibold text-[#2D2422]">持续收入</h3>
            <ul className="flex flex-col gap-3 mt-4">
              {[
                { item: '替换玩偶外壳（季节设计）', price: '¥89-129' },
                { item: '额外表带（风格/颜色）', price: '¥49-79' },
                { item: '便携收纳盒', price: '¥59' },
                { item: '充电底座', price: '¥39' },
              ].map((a) => (
                <li key={a.item} className="flex justify-between font-body text-sm text-[#6B5E5A]">
                  <span>{a.item}</span>
                  <span className="font-mono text-[#C9A9A1] font-medium">{a.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Market Size */}
          <motion.div
            className="bg-white rounded-[24px] p-6 shadow-md"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <h3 className="font-body text-lg font-semibold text-[#2D2422]">市场规模</h3>
            <div className="mt-4">
              {isInView ? (
                <CountUp end={14.8} decimals={1} suffix="M" duration={2} className="font-mono text-[2.5rem] font-bold text-[#C9A9A1]" />
              ) : (
                <span className="font-mono text-[2.5rem] font-bold text-[#C9A9A1]">0M</span>
              )}
              <p className="font-body text-sm text-[#6B5E5A]">目标市场年新生儿数量</p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#EDE4DA]">
              <p className="font-body text-sm font-medium text-[#A67E75]">1%渗透率 = ¥5900万收入</p>
              <p className="font-body text-sm font-medium text-[#A67E75]">5%渗透率 = ¥2.96亿收入</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 8: MVP Roadmap — 12-Month Timeline
   ═══════════════════════════════════════════════════════════ */
function MVPSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const phases = [
    {
      label: '原型',
      months: '第1-3个月',
      color: '#C9A9A1',
      tasks: [
        '脉冲手环PCB原型（心跳采集+触觉输出）',
        '茧型玩偶软原型（执行器集成）',
        '蓝牙同步协议开发',
        '3对母婴进行初步测试',
      ],
    },
    {
      label: '测试',
      months: '第4-8个月',
      color: '#A8B5A0',
      tasks: [
        '50个家庭Beta测试项目',
        '睡眠质量与焦虑测量（已验证量表）',
        '工业设计优化',
        '制造合作伙伴筛选',
      ],
    },
    {
      label: '上市',
      months: '第9-12个月',
      color: '#D4A574',
      tasks: [
        '众筹活动（验证需求）',
        '规模化生产（1000台）',
        '产科医院渠道合作',
        'FDA/NMPA预提交会议',
      ],
    },
  ]

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection>
          <span className="text-overline text-[#A67E75]">MVP路线图</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">12个月实现产品-市场匹配</h2>
        </AnimatedSection>

        <div className="flex flex-col gap-8 mt-12">
          {phases.map((phase, pi) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * pi, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="flex flex-col md:flex-row gap-6"
            >
              {/* Phase Label */}
              <div className="md:w-[200px] shrink-0">
                <span
                  className="inline-block px-4 py-2 rounded-full text-white font-body text-sm font-semibold"
                  style={{ backgroundColor: phase.color }}
                >
                  {phase.label}
                </span>
                <span className="block font-mono text-xs text-[#9A8E88] mt-2">{phase.months}</span>
              </div>

              {/* Tasks */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {phase.tasks.map((task, ti) => (
                  <motion.div
                    key={task}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.08 * ti + 0.2 + pi * 0.15 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#D4DBD0] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#8BA88A]" />
                    </div>
                    <span className="font-body text-sm text-[#6B5E5A]">{task}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 9: Why It Works — CTA Banner
   ═══════════════════════════════════════════════════════════ */
function WhyItWorksSection() {
  return (
    <section className="w-full gradient-accent py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-display text-h2 text-white">因为生物学终将获胜</h2>
          <p className="font-body text-body text-[rgba(255,255,255,0.85)] max-w-[600px] mx-auto mt-4">
            148亿美元的监视器市场看着宝宝，却没有一件产品通过真正有效的渠道安抚他们：母亲的心跳。Heartbeat Cocoon 不是更智能的技术——而是更智慧的设计。
          </p>
          <div className="mt-8">
            <Link
              to="/solutions/dadquest"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#A67E75] font-body font-medium hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              下一个：DadQuest <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Main Page Component
   ═══════════════════════════════════════════════════════════ */
export default function HeartbeatCocoon() {
  return (
    <main className="w-full">
      <HeroSection />
      <InsightSection />
      <ProductDesignSection />
      <UXSection />
      <TechSection />
      <MedicalSection />
      <BusinessSection />
      <MVPSection />
      <WhyItWorksSection />
    </main>
  )
}
