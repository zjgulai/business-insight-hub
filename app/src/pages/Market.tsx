import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, BarChart, Bar, Legend,
} from 'recharts'
import {
  ChevronDown, Link2, Baby, User, XCircle,
  CheckCircle2,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ──────────────────────────────── DATA ──────────────────────────────── */

const marketSizeData = [
  { year: '2025', size: 5.66 },
  { year: '2027', size: 8.5 },
  { year: '2029', size: 12.8 },
  { year: '2031', size: 19.2 },
  { year: '2033', size: 28.8 },
  { year: '2035', size: 42 },
]

const trackChartData = [
  { name: '智能监护', marketSize: 14.8, diffScore: 6 },
  { name: 'AI教育', marketSize: 8.2, diffScore: 3 },
  { name: 'AI陪伴', marketSize: 6.5, diffScore: 1 },
  { name: '健康监测', marketSize: 4.8, diffScore: 5 },
  { name: '亲子平台', marketSize: 2.1, diffScore: 6 },
]

const dataGridStats = [
  { number: 17.98, suffix: '%', label: '产后抑郁率', context: '每年150-200万新妈妈受影响', color: '#C97B7B' },
  { number: 6.2, suffix: '%', label: '父亲作为主要照护人', context: '对比52.7%母亲、32%祖父母', color: '#D4A574' },
  { number: 67.8, suffix: '%', label: '父亲日活育儿App使用率', context: 'TGI付费意愿>120', color: '#D4A574' },
  { number: 82.6, suffix: '%', label: '祖辈照护率', context: '0-3岁儿童', color: '#A8B5A0' },
  { numberLabel: '4300:10', label: '妈妈App vs 爸爸App', context: '系统性产品盲区', color: '#C9A9A1' },
  { numberLabel: '30-40', suffix: '%', label: 'AI玩具退货率', context: '同质化导致买家后悔', color: '#C97B7B' },
  { numberLabel: '$51,744', label: 'COPPA 2025单童罚款', context: '监管压力加大数据合规要求', color: '#A67E75' },
  { numberLabel: '<$1', label: '边缘AI芯片价格', context: 'TI MSPM0G5187批量价', color: '#A8B5A0' },
]

const frameworks = [
  {
    num: '01',
    title: '减法设计',
    accent: '#C9A9A1',
    oneliner: '战略性减法比功能堆叠创造更强的连接。',
    description: '行业习惯给每个产品叠加AI、语音、屏幕和云端。但我们的研究揭示了相反的事实：战略性减法创造更强的连接。去除语音交互、屏幕和云端依赖，产品反而更专注、更可靠、更具情感共鸣。',
    evidence: [
      'LOVOT无语音设计实现90%三年留存率',
      'Hello Kitty 50年无嘴策略打造800亿美元帝国',
      '123亿美元无屏幕音频播放器市场证明需求存在',
    ],
    data: { value: '90%', label: 'LOVOT三年留存率（无语音）' },
    related: '心跳茧、安心盒',
    relatedPath: '/solutions/heartbeat',
  },
  {
    num: '02',
    title: '生理连接',
    accent: '#A67E75',
    oneliner: '母亲的心跳声是婴儿最强大的分离安抚力量。',
    description: '148亿美元的监护市场建立在视频之上。但研究表明视频对婴儿几乎无用——他们无法理解"看得见却摸不着"。母亲的心跳声是最强大的分离安抚。NICU研究证实心跳音频可降低婴儿压力指标40%。',
    evidence: [
      'NICU心跳研究显示压力降低40%',
      'Bond Touch凭借触觉连接售出100万+件',
      '皮质醇同步研究证实双向效应',
    ],
    data: { value: '$14.8B', label: '100%单向的监护市场' },
    related: '心跳茧',
    relatedPath: '/solutions/heartbeat',
  },
  {
    num: '03',
    title: '父亲蓝海',
    accent: '#D4A574',
    oneliner: '4300+育儿App瞄准母亲，不到10个瞄准父亲。',
    description: '4300+育儿App瞄准母亲，不到10个瞄准父亲。然而67.8%的父亲每天使用育儿App，TGI付费意愿>120。供需差距惊人。父亲不是"次要家长"——他们是被忽视的高参与度市场。',
    evidence: [
      'CFPS 2020证实67.8%父亲日活App使用率',
      'fatherli/DadHack在英国/美国验证需求',
      '"父亲产品"3个月内突破1000万营收',
    ],
    data: { value: '4300:10', label: '妈妈App vs 爸爸App比例' },
    related: '爸任务',
    relatedPath: '/solutions/dadquest',
  },
  {
    num: '04',
    title: '增强而非替代',
    accent: '#A8B5A0',
    oneliner: 'Moxie的8000万美元证明"替代人类照护"是死刑判决。',
    description: 'Moxie的8000万美元证明"替代人类照护"是死刑判决。脚手架理论指出，支持应随能力增长而消退。AI必须是催化剂，不是替代品。增强人类关系的产品 outperform 替代它们的产品。',
    evidence: [
      '维果茨基最近发展区理论：支持随能力增长而消退',
      'JME框架证实AI作为催化剂模型',
      'eaSEL AI介导的社会情感学习验证',
    ],
    data: { value: '$80M', label: 'Moxie失败前融资额' },
    related: '所有方案',
    relatedPath: '/solutions',
  },
  {
    num: '05',
    title: '无云信任',
    accent: '#8BA88A',
    oneliner: '云端优先的育儿AI时代正在终结。边缘AI是未来。',
    description: '68.6%的中国家长担忧儿童照片隐私。COPPA 2025罚款高达每童51,744美元。边缘AI芯片现已低于1美元。云端优先的育儿AI时代正在终结。隐私不再是功能——它是基础。',
    evidence: [
      'COPPA 2025：每童违规罚款51,744美元',
      'UNICEF AI指南要求数据最小化',
      'Moxie变砖事件：云端依赖=消费者创伤',
      'TI MSPM0G5187边缘AI芯片批量价<$1',
    ],
    data: { value: '68.6%', label: '担忧儿童数据隐私的家长比例' },
    related: '安心盒',
    relatedPath: '/solutions/safebox',
  },
]

/* ──────────────────────────────── COMPONENT ──────────────────────────────── */

export default function Market() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [expandedFramework, setExpandedFramework] = useState<number | null>(null)
  const [countsStarted, setCountsStarted] = useState(false)
  const countersTriggered = useRef(false)

  const toggleFramework = useCallback((idx: number) => {
    setExpandedFramework((prev) => (prev === idx ? null : idx))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('data-grid-section')
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.75 && !countersTriggered.current) {
        countersTriggered.current = true
        setCountsStarted(true)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ───── GSAP Scroll Animations ───── */
  useGSAP(() => {
    // Hero stagger reveal
    gsap.to('.hero-overline', { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: 'power2.out' })
    gsap.to('.hero-headline', { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: 'power2.out' })
    gsap.to('.hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: 'power2.out' })
    gsap.to('.hero-breadcrumb', { opacity: 1, y: 0, duration: 0.5, delay: 0.8, ease: 'power2.out' })

    // Section reveals
    const revealSections = gsap.utils.toArray<HTMLElement>('.gsap-reveal')
    revealSections.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        }
      )
    })

    // Stagger children
    const staggerContainers = gsap.utils.toArray<HTMLElement>('.gsap-stagger')
    staggerContainers.forEach((container) => {
      const children = container.querySelectorAll('.gsap-stagger-child')
      gsap.fromTo(children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            once: true,
          },
        }
      )
    })

    // Floating cards pop in
    gsap.utils.toArray<HTMLElement>('.float-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.5, delay: i * 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card.closest('.float-card-container'),
            start: 'top 80%',
            once: true,
          },
        }
      )
    })

    // Chart area slide in
    gsap.fromTo('.chart-area-wrap',
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.chart-area-wrap', start: 'top 80%', once: true },
      }
    )

    gsap.fromTo('.context-cards-wrap',
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power2.out',
        scrollTrigger: { trigger: '.context-cards-wrap', start: 'top 80%', once: true },
      }
    )

    // Bridge gradient line
    gsap.fromTo('.bridge-line',
      { scaleX: 0 },
      {
        scaleX: 1, duration: 0.8, delay: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: '.bridge-line', start: 'top 90%', once: true },
      }
    )

    // Moxie section
    gsap.fromTo('.moxie-image',
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.moxie-image', start: 'top 80%', once: true },
      }
    )

    gsap.fromTo('.moxie-text',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: '.moxie-text', start: 'top 80%', once: true },
      }
    )

    // Center blind spot card
    gsap.fromTo('.center-card',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, scale: 1, duration: 0.7, delay: 0.2, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.center-card', start: 'top 80%', once: true },
      }
    )

    // Quote border draw
    gsap.fromTo('.quote-block',
      { opacity: 0, x: -20 },
      {
        opacity: 1, x: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.quote-block', start: 'top 85%', once: true },
      }
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="bg-[#FBF7F3]">

      {/* ═══════════════════════════════════ SECTION 1: HERO ═══════════════════════════════════ */}
      <section className="relative min-h-[50dvh] flex items-center justify-center overflow-hidden gradient-dark">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `linear-gradient(rgba(251,247,243,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,247,243,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        {/* Subtle dots */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(251,247,243,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 text-center">
          <p className="hero-overline opacity-0 translate-y-4 text-overline text-[rgba(251,247,243,0.5)] mb-4">
            市场洞察
          </p>
          <h1 className="hero-headline opacity-0 translate-y-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold text-white leading-[1.1] tracking-[-0.015em]">
            万亿盲区的真相
          </h1>
          <p className="hero-sub opacity-0 translate-y-4 font-body text-[1.125rem] text-[rgba(251,247,243,0.7)] max-w-[600px] mx-auto mt-6 leading-relaxed">
            566亿美元的市场洪流中，60%正在流向错误的方向。数据揭示了母婴AI的真实图景。
          </p>
          <nav className="hero-breadcrumb opacity-0 translate-y-4 mt-6">
            <Link to="/" className="font-body text-[0.875rem] text-[rgba(251,247,243,0.4)] hover:text-[rgba(251,247,243,0.7)] transition-colors">
              首页
            </Link>
            <span className="font-body text-[0.875rem] text-[rgba(251,247,243,0.3)] mx-2">/</span>
            <span className="font-body text-[0.875rem] text-[rgba(251,247,243,0.5)]">市场分析</span>
          </nav>
        </div>
      </section>

      {/* ═══════════════════════════════════ SECTION 2: MARKET SIZE ═══════════════════════════════════ */}
      <section className="py-[4rem] md:py-[6rem] lg:py-[8rem] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Chart Area */}
            <div className="chart-area-wrap lg:col-span-3 opacity-0">
              <div className="bg-white rounded-[var(--radius-lg)] p-4 sm:p-6 shadow-md">
                <ResponsiveContainer width="100%" height={380}>
                  <AreaChart data={marketSizeData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C9A9A1" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#C9A9A1" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,169,161,0.15)" vertical={false} />
                    <XAxis
                      dataKey="year"
                      tick={{ fill: '#6B5E5A', fontSize: 12, fontFamily: 'Inter' }}
                      axisLine={{ stroke: 'rgba(201,169,161,0.2)' }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: '#6B5E5A', fontSize: 12, fontFamily: 'Inter' }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `$${v}B`}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (!active || !payload?.length) return null
                        return (
                          <div className="bg-[#2D2422] rounded-xl px-4 py-3 shadow-xl border border-[rgba(201,169,161,0.2)]">
                            <p className="font-body text-[0.75rem] text-[rgba(251,247,243,0.5)] mb-1">
                              {label}年
                            </p>
                            <p className="font-mono text-[1.125rem] font-bold text-[#FBF7F3]">
                              ${payload[0].value}B
                            </p>
                            <p className="font-body text-[0.6875rem] text-[rgba(251,247,243,0.4)] mt-0.5">
                              全球AI育儿市场
                            </p>
                          </div>
                        )
                      }}
                      cursor={{ stroke: '#C9A9A1', strokeWidth: 1, strokeDasharray: '4 4' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="size"
                      stroke="#A67E75"
                      strokeWidth={2.5}
                      fill="url(#areaGradient)"
                      dot={(props) => {
                        const { cx, cy, index } = props
                        const isLast = index === marketSizeData.length - 1
                        return (
                          <g>
                            <circle cx={cx} cy={cy} r={isLast ? 7 : 5} fill="#C9A9A1" stroke="#fff" strokeWidth={2} />
                            {isLast && (
                              <circle cx={cx} cy={cy} r={12} fill="none" stroke="#C9A9A1" strokeWidth={1} opacity={0.3}>
                                <animate attributeName="r" from={7} to={16} dur="1.5s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from={0.4} to={0} dur="1.5s" repeatCount="indefinite" />
                              </circle>
                            )}
                          </g>
                        )
                      }}
                      activeDot={{ r: 9, fill: '#A67E75', stroke: '#fff', strokeWidth: 3, filter: 'drop-shadow(0 2px 4px rgba(166,126,117,0.4))' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Context Cards */}
            <div className="context-cards-wrap lg:col-span-2 flex flex-col gap-4 opacity-0">
              {[
                { value: '$56.6B', label: '2025年全球AI育儿市场规模', color: '#C9A9A1' },
                { value: '22.3%', label: '2025-2035年复合增长率', color: '#A8B5A0' },
                { value: '$42B', label: '2035年预计市场规模', color: '#D4A574' },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-white rounded-[var(--radius-md)] p-6 shadow-md"
                  style={{ borderTop: `3px solid ${card.color}` }}
                >
                  <p className="font-mono text-[2rem] font-bold" style={{ color: card.color }}>
                    {card.value}
                  </p>
                  <p className="font-body text-[0.875rem] text-[#6B5E5A] mt-1">
                    {card.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ SECTION 3: TRACK COMPARISON ═══════════════════════════════════ */}
      <section className="py-[4rem] md:py-[6rem] lg:py-[8rem] px-4 sm:px-6 lg:px-8 bg-[#F5EDE6]">
        <div className="max-w-[1280px] mx-auto gsap-reveal opacity-0">
          <p className="text-overline text-[#A67E75] mb-3">五大拥挤赛道</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold text-[#2D2422] leading-[1.15] tracking-[-0.01em]">
            市场热度 vs. 产品差异化
          </h2>
          <p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#6B5E5A] mt-4 max-w-[640px] leading-relaxed">
            增长最快的赛道差异化最低。逆向关系揭示了创新可以突破的方向。
          </p>

          <div className="mt-10 bg-white rounded-[var(--radius-lg)] p-4 sm:p-6 shadow-md overflow-x-auto">
            <ResponsiveContainer width="100%" height={320} minWidth={500}>
              <BarChart data={trackChartData} margin={{ top: 10, right: 20, left: 10, bottom: 0 }} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,169,161,0.15)" horizontal={false} />
                <XAxis type="number" tick={{ fill: '#6B5E5A', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={100}
                  tick={{ fill: '#2D2422', fontSize: 12, fontWeight: 500 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: '#2D2422', border: 'none', borderRadius: '12px',
                    color: '#FBF7F3', fontFamily: 'Inter', fontSize: '0.875rem',
                  }}
                />
                <Legend
                  wrapperStyle={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#6B5E5A' }}
                  formatter={(value) => (value === 'marketSize' ? '市场规模（十亿美元）' : '差异化评分（1-10）')}
                />
                <Bar dataKey="marketSize" fill="#C9A9A1" fillOpacity={0.8} radius={[0, 4, 4, 0]} name="marketSize" />
                <Bar dataKey="diffScore" fill="#A8B5A0" fillOpacity={0.8} radius={[0, 4, 4, 0]} name="diffScore" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Insight Callout */}
          <div className="mt-8 max-w-[700px] mx-auto">
            <div
              className="bg-white p-6 rounded-r-[var(--radius-md)] shadow-md"
              style={{ borderLeft: '4px solid #C9A9A1' }}
            >
              <p className="font-body text-[1rem] font-medium text-[#2D2422] leading-relaxed">
                AI陪伴赛道以33.6%的年复合增长率增长——却是差异化评分最低的领域。这正是反直觉设计可以获胜的地方。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ SECTION 4: HOMOGENIZATION CRISIS ═══════════════════════════════════ */}
      <section className="py-[4rem] md:py-[6rem] lg:py-[8rem] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Visual Collage */}
            <div className="float-card-container relative gsap-reveal opacity-0">
              <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-lg">
                <img
                  src="/market-homogenization.jpg"
 alt="商店货架上摆放着一模一样的AI毛绒玩具"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating Stat Cards */}
              <div className="float-card absolute -top-4 -left-4 bg-white rounded-[var(--radius-md)] p-4 shadow-lg opacity-0" style={{ transform: 'rotate(-3deg)' }}>
                <p className="font-mono text-[1.25rem] font-bold text-[#C97B7B]">30-40%</p>
                <p className="font-body text-[0.75rem] text-[#6B5E5A]">AI玩具退货率</p>
              </div>
              <div className="float-card absolute top-1/3 -right-4 bg-white rounded-[var(--radius-md)] p-4 shadow-lg opacity-0">
                <p className="font-mono text-[1.25rem] font-bold text-[#D4A574]">60%</p>
                <p className="font-body text-[0.75rem] text-[#6B5E5A]">产品同质化率</p>
              </div>
              <div className="float-card absolute -bottom-4 left-8 bg-white rounded-[var(--radius-md)] p-4 shadow-lg opacity-0" style={{ transform: 'rotate(3deg)' }}>
                <p className="font-mono text-[1.25rem] font-bold text-[#C97B7B]">&lt;5%</p>
                <p className="font-body text-[0.75rem] text-[#6B5E5A]">硬件复购率</p>
              </div>
            </div>

            {/* Right — Text Content */}
            <div className="gsap-reveal opacity-0">
              <p className="text-overline text-[#A67E75] mb-3">同质化危机</p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold text-[#2D2422] leading-[1.15] tracking-[-0.01em] mb-6">
                当创新沦为复制粘贴
              </h2>
              <div className="flex flex-col gap-4">
                <p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#6B5E5A] leading-[1.7]">
                  母婴AI市场表面繁荣——全球566亿美元，年增22.3%。但表层之下，同质化危机正威胁整个行业。六成产品共享同一套DNA：大语言模型、毛绒外壳、语音交互。
                </p>
                <p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#6B5E5A] leading-[1.7]">
                  结果对消费者和企业都是毁灭性的。AI玩具退货率徘徊在30-40%，买家发现"智能"玩具只是套着可爱外壳的聊天机器人后深感后悔。第一代儿童AI硬件复购率不足5%——明确信号表明当前产品未能创造持久价值。
                </p>
                <p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#6B5E5A] leading-[1.7]">
                  驱动同质化的技术栈人所共知：乐鑫芯片、涂鸦云连接、小智AI语音套件。华强北"30天出货"能力让任何创意都来不及建立壁垒就被复制。真正的差异化需要深入技术层之下——进入用户心理、家庭动态和数据 alone 无法揭示的未说出的需求。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ SECTION 5: MOXIE FAILURE ═══════════════════════════════════ */}
      <section className="py-[4rem] md:py-[6rem] lg:py-[8rem] px-4 sm:px-6 lg:px-8 gradient-dark">
        <div className="max-w-[1280px] mx-auto gsap-reveal opacity-0">
          <p className="text-overline text-[rgba(251,247,243,0.4)] mb-3">8000万美元的教训</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold text-white leading-[1.15] tracking-[-0.01em] mb-10">
            Moxie：云端崩塌之日
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left — Image */}
            <div className="lg:col-span-2 moxie-image opacity-0">
              <div className="relative rounded-[var(--radius-lg)] overflow-hidden">
                <img
                  src="/moxie-failure.jpg"
                  alt="孩子看着一个熄灭无反应的机器人玩具"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-[#C97B7B] text-white font-body text-[0.75rem] font-semibold px-3 py-1 rounded-full">
                  案例分析
                </span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="lg:col-span-3 moxie-text opacity-0">
              <p className="font-body text-[1.125rem] font-medium text-[rgba(251,247,243,0.8)] leading-relaxed">
                由前iRobot CTO创立。Intel Capital、Amazon Alexa Fund、Sony、Toyota注资8000万美元。2024年11月死亡。
              </p>

              <ul className="mt-8 flex flex-col gap-4">
                {[
                  '100%依赖云端——关停数天内变成电子砖头',
                  '过度拟人化设计——儿童形成深厚情感联结后被暴力切断',
                  '$800硬件+$60/月订阅——不可持续的单位经济模型',
                  '"替代人类照护"定位——违背发展心理学原理',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle size={20} className="text-[#C97B7B] shrink-0 mt-0.5" />
                    <span className="font-body text-[0.9375rem] text-[rgba(251,247,243,0.7)]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Quote Block */}
              <blockquote className="quote-block mt-8 bg-[rgba(251,247,243,0.05)] p-6 rounded-[var(--radius-md)] border-l-[3px] border-[#C9A9A1] opacity-0">
                <p className="font-body text-[1rem] italic text-[rgba(251,247,243,0.7)] leading-relaxed">
                  "我们痴迷于让机器人'更像人'，却忘记了孩子真正需要的是'更像伙伴'。"
                </p>
                <cite className="block mt-3 font-body text-[0.875rem] text-[rgba(251,247,243,0.5)] not-italic">
                  —— Moxie CEO Pirjanian
                </cite>
              </blockquote>

              {/* Lessons */}
              <div className="mt-8">
                <p className="font-body text-[1rem] font-semibold text-white mb-4">
                  Moxie、Jibo、Kuri、Aldebaran共有的三大失败模式：
                </p>
                <ol className="flex flex-col gap-3">
                  {[
                    '高硬件成本+云端依赖=公司死亡=消费者创伤',
                    '"替代父母"定位违背脚手架理论——支持应消退，而非持续',
                    '与拟人化AI的情感联结在服务结束时造成独特伤害',
                  ].map((lesson, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-mono text-[0.875rem] font-bold text-[#C9A9A1] shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-body text-[0.9375rem] text-[rgba(251,247,243,0.7)]">{lesson}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ SECTION 6: INDUSTRY BLIND SPOT ═══════════════════════════════════ */}
      <section className="py-[4rem] md:py-[6rem] lg:py-[8rem] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center gsap-reveal opacity-0">
            <p className="text-overline text-[#A67E75] mb-3">行业悖论</p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold text-[#2D2422] leading-[1.15] tracking-[-0.01em]">
              人人连接妈妈——却无人连接妈妈与宝宝
            </h2>
            <p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#6B5E5A] mt-4 max-w-[640px] mx-auto leading-relaxed">
              市场上充斥着面向母亲的产品和面向孩子的产品。但最重要的连接——他们之间的连接——却始终空白。
            </p>
          </div>

          {/* Three-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 gsap-stagger">
            {/* Column 1 — For Moms Only */}
            <div className="gsap-stagger-child bg-[#F5EDE6] rounded-[var(--radius-lg)] p-8 opacity-0">
              <User size={48} className="text-[#C9A9A1] mb-4" />
              <h3 className="font-body text-[1.125rem] font-semibold text-[#2D2422] mb-4">妈妈专属产品</h3>
              <ul className="flex flex-col gap-2 mb-4">
                {['育儿知识App（4300+）', '社区平台', '成长记录工具', 'AI排班助手'].map((item) => (
                  <li key={item} className="font-body text-[0.875rem] text-[#6B5E5A] flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C9A9A1] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-[0.875rem] font-bold text-[#C9A9A1] mb-2">妈妈用户占比13-80%</p>
              <p className="font-body text-[0.875rem] text-[#C97B7B] flex items-center gap-1">
                <XCircle size={14} /> 孩子是被动接收者
              </p>
            </div>

            {/* Column 2 — The Missing Link (center, emphasized) */}
            <div className="center-card bg-white rounded-[var(--radius-lg)] p-8 shadow-xl border-2 border-[#C9A9A1] opacity-0 md:-translate-y-2">
              <Link2 size={64} className="text-[#A67E75] mb-4" />
              <h3 className="font-display text-[1.5rem] font-semibold text-[#A67E75] mb-2">双向连接缺口</h3>
              <p className="font-mono text-[clamp(2.5rem,4vw,4rem)] font-bold text-[#A67E75] leading-none">0</p>
              <p className="font-body text-[0.875rem] text-[#6B5E5A] mb-4">市场上双向连接产品</p>
              <p className="font-body text-[0.875rem] text-[#6B5E5A] leading-relaxed">
                研究证实：母婴皮质醇同步是真实的。分离焦虑是双向回路。然而148亿美元的监护市场100%是单向的。
              </p>
            </div>

            {/* Column 3 — For Kids Only */}
            <div className="gsap-stagger-child bg-[#F5EDE6] rounded-[var(--radius-lg)] p-8 opacity-0">
              <Baby size={48} className="text-[#A8B5A0] mb-4" />
              <h3 className="font-body text-[1.125rem] font-semibold text-[#2D2422] mb-4">儿童专属产品</h3>
              <ul className="flex flex-col gap-2 mb-4">
                {['AI玩具（BubblePal、AI喜羊羊）', '教育机器人', '讲故事设备', '智能陪伴'].map((item) => (
                  <li key={item} className="font-body text-[0.875rem] text-[#6B5E5A] flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#A8B5A0] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-[0.875rem] font-bold text-[#C97B7B] mb-2">退货率30-40%</p>
              <p className="font-body text-[0.875rem] text-[#C97B7B] flex items-center gap-1">
                <XCircle size={14} /> 妈妈只是购买者
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ SECTION 7: INSIGHT FRAMEWORKS ═══════════════════════════════════ */}
      <section className="py-[4rem] md:py-[6rem] lg:py-[8rem] px-4 sm:px-6 lg:px-8 bg-[#F5EDE6]">
        <div className="max-w-[1280px] mx-auto">
          <div className="gsap-reveal opacity-0">
            <p className="text-overline text-[#A67E75] mb-3">五大洞察框架</p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold text-[#2D2422] leading-[1.15] tracking-[-0.01em]">
              打破行业共识的原则
            </h2>
            <p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#6B5E5A] mt-4 max-w-[640px] leading-relaxed">
              每个框架都诞生于市场数据与人类真相之间的缝隙。它们共同构成五大产品方案的基石。
            </p>
          </div>

          {/* Accordion Cards */}
          <div className="mt-10 flex flex-col gap-4 gsap-stagger">
            {frameworks.map((fw, idx) => {
              const isOpen = expandedFramework === idx
              return (
                <div
                  key={fw.num}
                  className="gsap-stagger-child bg-white rounded-[var(--radius-lg)] border border-[rgba(201,169,161,0.2)] overflow-hidden opacity-0"
                >
                  {/* Header */}
                  <button
                    onClick={() => toggleFramework(idx)}
                    className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-[rgba(201,169,161,0.04)] transition-colors duration-200"
                  >
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold text-white shrink-0"
                      style={{ backgroundColor: fw.accent }}
                    >
                      {fw.num}
                    </span>
                    <span className="font-body text-[1.25rem] font-semibold text-[#2D2422] flex-1 min-w-0">
                      {fw.title}
                    </span>
                    <span className="hidden sm:block font-body text-[0.9375rem] text-[#6B5E5A] max-w-[300px] truncate shrink-0 mr-4">
                      {fw.oneliner}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-[#9A8E88] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Expanded Content */}
                  <div
                    className="overflow-hidden transition-all duration-400 ease-out"
                    style={{ maxHeight: isOpen ? '800px' : '0', opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[rgba(201,169,161,0.15)]">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Text side */}
                        <div className="lg:col-span-3">
                          <p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#6B5E5A] leading-[1.7] mb-4">
                            {fw.description}
                          </p>
                          <ul className="flex flex-col gap-2 mb-4">
                            {fw.evidence.map((ev) => (
                              <li key={ev} className="flex items-start gap-2">
                                <CheckCircle2 size={16} className="text-[#A8B5A0] shrink-0 mt-0.5" />
                                <span className="font-body text-[0.9375rem] text-[#6B5E5A]">{ev}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center gap-2 mt-4">
                            <span className="font-body text-[0.875rem] text-[#9A8E88]">相关产品：</span>
                            <Link
                              to={fw.relatedPath}
                              className="font-body text-[0.875rem] font-medium hover:underline transition-colors"
                              style={{ color: fw.accent }}
                            >
                              {fw.related}
                            </Link>
                          </div>
                        </div>

                        {/* Data side */}
                        <div className="lg:col-span-2 flex items-start justify-center lg:justify-end">
                          <div className="bg-[#F5EDE6] rounded-[var(--radius-md)] p-6 text-center min-w-[180px]">
                            <p className="font-mono text-[clamp(1.75rem,3vw,2.5rem)] font-bold" style={{ color: fw.accent }}>
                              {fw.data.value}
                            </p>
                            <p className="font-body text-[0.875rem] text-[#6B5E5A] mt-2">{fw.data.label}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ SECTION 8: KEY DATA POINTS ═══════════════════════════════════ */}
      <section id="data-grid-section" className="py-[4rem] md:py-[6rem] lg:py-[8rem] px-4 sm:px-6 lg:px-8 bg-[#F5EDE6]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center gsap-reveal opacity-0">
            <p className="text-overline text-[#A67E75] mb-3">关键数据</p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold text-[#2D2422] leading-[1.15] tracking-[-0.01em]">
              倒逼新思维的数据
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-10 gsap-stagger">
            {dataGridStats.map((stat, i) => (
              <div
                key={i}
                className="gsap-stagger-child bg-white rounded-[var(--radius-md)] p-5 sm:p-6 shadow-sm opacity-0"
                style={{ borderTop: `3px solid ${stat.color}` }}
              >
                <p className="font-mono text-[clamp(1.75rem,3vw,2.5rem)] font-bold" style={{ color: stat.color }}>
                  {countsStarted ? (
                    stat.number !== undefined ? (
                      <CountUp end={stat.number} suffix={stat.suffix || ''} duration={2} decimals={stat.number % 1 !== 0 ? 1 : 0} />
                    ) : (
                      stat.numberLabel
                    )
                  ) : (
                    '0'
                  )}
                </p>
                <p className="font-body text-[0.875rem] text-[#6B5E5A] mt-2">{stat.label}</p>
                <p className="font-body text-[0.75rem] text-[#9A8E88] mt-1">{stat.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ SECTION 9: FROM PROBLEM TO SOLUTION ═══════════════════════════════════ */}
      <section className="py-[4rem] md:py-[6rem] lg:py-[8rem] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto text-center gsap-reveal opacity-0">
          <p className="text-overline text-[#A67E75] mb-3">下一步</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold text-[#2D2422] leading-[1.15] tracking-[-0.01em]">
            每个问题都内含其解
          </h2>
          <p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#6B5E5A] max-w-[600px] mx-auto mt-4 leading-relaxed">
            五大反直觉洞察。五大具体产品方案。每一个都诞生于市场供给与家庭真实需求之间的缺口。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to="/solutions"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#C9A9A1] text-white font-body text-[0.9375rem] font-medium hover:bg-[#E8D5D0] hover:scale-[1.02] transition-all duration-200"
            >
              探索五大方案
            </Link>
            <Link
              to="/cases"
              className="inline-flex items-center px-8 py-3.5 rounded-full border-[1.5px] border-[#C9A9A1] text-[#A67E75] font-body text-[0.9375rem] font-medium hover:bg-[#E8D5D0] hover:text-white transition-all duration-200"
            >
              查看行业案例
            </Link>
          </div>

          {/* Decorative gradient line */}
          <div className="mt-12 mx-auto max-w-[200px] h-[2px] gradient-accent bridge-line origin-center" />
        </div>
      </section>
    </div>
  )
}
