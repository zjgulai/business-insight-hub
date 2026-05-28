import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Check, Cpu, BrainCircuit, Fingerprint, ShieldCheck, Mic, Pill } from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

/* ─── Floating Blob ─── */
function FloatingBlob({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`absolute rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-[#E8D5D0] opacity-[0.15] animate-blob-drift pointer-events-none ${className}`}
      style={{ willChange: 'transform', ...style }}
    />
  )
}

/* ─── Scroll Reveal Wrapper ─── */
function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const initial =
    direction === 'up'
      ? { opacity: 0, y: 40 }
      : direction === 'left'
        ? { opacity: 0, x: -30 }
        : { opacity: 0, x: 40 }

  const animate =
    direction === 'up'
      ? { opacity: 1, y: 0 }
      : direction === 'left'
        ? { opacity: 1, x: 0 }
        : { opacity: 1, x: 0 }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 1: HERO
   ═══════════════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden gradient-hero">
      <FloatingBlob className="w-[400px] h-[400px] -top-[100px] -left-[80px]" />
      <FloatingBlob className="w-[350px] h-[350px] top-[50%] -right-[80px]" style={{ animationDelay: '-7s' } as React.CSSProperties} />
      <FloatingBlob className="w-[250px] h-[250px] top-[20%] left-[15%]" style={{ animationDelay: '-14s' } as React.CSSProperties} />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #2D2422 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center pt-[72px] py-20">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="inline-block text-overline text-[#A67E75] mb-6"
        >
          五大创新方案
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="font-display text-h1 text-[#2D2422] font-semibold"
        >
          五大突破
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="font-display text-h1 text-[#A67E75] font-semibold mt-2"
        >
          源于反直觉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="font-body text-body-lg text-[#6B5E5A] max-w-[640px] mx-auto mt-6"
        >
          每个方案将市场盲区转化为产品机遇。每个都挑战行业固有认知。共同构成母婴AI的新范式。
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-6 font-body text-[0.875rem] text-[#9A8E88]"
        >
          <Link to="/" className="hover:text-[#A67E75] transition-colors">首页</Link>
          <span className="mx-2">/</span>
          <span>方案概览</span>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 2: SOLUTIONS GRID
   ═══════════════════════════════════════════════════════════════════════════════ */
interface SolutionCardData {
  num: string
  nameCn: string
  nameEn: string
  oneLiner: string
  description: string
  keyNumber: string
  keyLabel: string
  price: string
  accent: string
  image: string
  link: string
}

const solutionsData: SolutionCardData[] = [
  {
    num: '01',
    nameCn: '心跳茧',
    nameEn: 'Heartbeat Cocoon',
    oneLiner: '无语音 · 无屏幕 · 无云端',
    description: '母亲心跳同步手环+婴儿安抚玩偶。通过生理机制而非技术堆叠解决分离焦虑。',
    keyNumber: '$0.46',
    keyLabel: '执行器成本',
    price: '¥399-599',
    accent: '#C9A9A1',
    image: '/solution-preview-heartbeat.jpg',
    link: '/solutions/heartbeat',
  },
  {
    num: '02',
    nameCn: '爸任务',
    nameEn: 'DadQuest',
    oneLiner: '不做给妈妈，做给爸爸',
    description: '专为父亲设计的游戏化AI育儿平台。语音优先、任务驱动、竞争性社交。',
    keyNumber: '4300:10',
    keyLabel: 'App比例',
    price: '免费增值 ¥19-49/月',
    accent: '#D4A574',
    image: '/solution-preview-dadquest.jpg',
    link: '/solutions/dadquest',
  },
  {
    num: '03',
    nameCn: '安心盒',
    nameEn: 'SafeBox',
    oneLiner: '数据永不上云',
    description: '本地边缘AI育儿设备。所有处理在家中完成。隐私不是功能——它是基石。',
    keyNumber: '$1',
    keyLabel: '边缘AI芯片',
    price: '溢价20-30%',
    accent: '#A8B5A0',
    image: '/solution-preview-safebox.jpg',
    link: '/solutions/safebox',
  },
  {
    num: '04',
    nameCn: '暖妈',
    nameEn: 'WarmMom',
    oneLiner: '不做孩子的AI，做妈妈的AI',
    description: '母亲AI心理健康伴侣。基于CBT、情绪监测、需要时转介专业帮助。',
    keyNumber: '1.5-2M',
    keyLabel: '每年受影响妈妈数',
    price: '¥199-499/月',
    accent: '#A67E75',
    image: '/solution-preview-warmmom.jpg',
    link: '/solutions/warmmom',
  },
  {
    num: '05',
    nameCn: '家桥',
    nameEn: 'FamilyBridge',
    oneLiner: '不为核心家庭，为三代同堂',
    description: '跨代育儿协调平台。化解冲突、传承智慧、弥合数字鸿沟。',
    keyNumber: '82.6%',
    keyLabel: '祖辈照护率',
    price: '¥29-49/家庭/月',
    accent: '#8BA88A',
    image: '/solution-preview-familybridge.jpg',
    link: '/solutions/familybridge',
  },
]

function SolutionCard({ solution, index }: { solution: SolutionCardData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
    >
      <Link
        to={solution.link}
        className="group block bg-[#F5EDE6] rounded-[24px] border border-[rgba(201,169,161,0.2)] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
      >
        {/* Image Area */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
          <img
            src={solution.image}
            alt={solution.nameEn}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.06]"
          />
          {/* Number Badge */}
          <div
            className="absolute -bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-mono text-sm font-semibold z-10"
            style={{ backgroundColor: solution.accent }}
          >
            {solution.num}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <h3 className="font-body text-[1.25rem] font-semibold text-[#2D2422]">
            {solution.nameCn}
          </h3>
          <p className="font-body text-[0.875rem] text-[#9A8E88] mt-0.5">
            {solution.nameEn}
          </p>
          <p className="font-body text-[0.9375rem] font-medium mt-3" style={{ color: solution.accent }}>
            {solution.oneLiner}
          </p>
          <p className="font-body text-[0.875rem] text-[#6B5E5A] mt-2 line-clamp-2 leading-relaxed">
            {solution.description}
          </p>

          <div className="my-4 h-px bg-[rgba(201,169,161,0.2)]" />

          {/* Stats Row */}
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-[1.25rem] font-bold" style={{ color: solution.accent }}>
                {solution.keyNumber}
              </span>
              <span className="block font-body text-[0.75rem] text-[#9A8E88] mt-0.5">
                {solution.keyLabel}
              </span>
            </div>
            <span className="font-body text-[0.9375rem] font-medium text-[#2D2422]">
              {solution.price}
            </span>
          </div>

          {/* CTA */}
          <div
            className="mt-4 w-full text-center py-3 rounded-[16px] border border-[rgba(201,169,161,0.3)] font-body text-[0.875rem] font-medium text-[#A67E75] transition-all duration-300 group-hover:bg-[#A67E75] group-hover:text-white group-hover:border-[#A67E75]"
          >
            探索方案 &rarr;
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function SolutionsGridSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-[var(--space-2xl)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:grid-rows-[auto_auto]">
        {solutionsData.slice(0, 3).map((solution, i) => (
          <SolutionCard key={solution.num} solution={solution} index={i} />
        ))}
        <div className="sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-center gap-6">
          {solutionsData.slice(3).map((solution, i) => (
            <div key={solution.num} className="w-full sm:max-w-[calc(50%-12px)] lg:max-w-[380px]">
              <SolutionCard solution={solution} index={i + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 3: COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════════════════════ */
const comparisonData = {
  dimensions: [
    '目标用户',
    '核心形态',
    '关键技术',
    '数据策略',
    '价格定位',
    'MVP时间线',
    '核心情感',
    '竞争壁垒',
  ],
  solutions: ['Heartbeat Cocoon', 'DadQuest', 'SafeBox', 'WarmMom', 'FamilyBridge'],
  accentColors: ['#C9A9A1', '#D4A574', '#A8B5A0', '#A67E75', '#8BA88A'],
  rows: [
    ['母亲+婴儿', '父亲', '注重隐私的父母', '新手妈妈', '三代家庭'],
    ['手环+玩偶', '移动App', '桌面设备', '移动App+可穿戴', '多平台'],
    ['触觉同步+边缘', '语音AI+游戏化', '本地LLM+边缘AI', '情绪AI+CBT', '调解AI+语音'],
    ['无云端，仅蓝牙', '云端（匿名化）', '零云端，完全本地', '加密云端', '家庭控制'],
    ['¥399-599一次性', '¥19-49/月', '¥499-699一次性', '¥199-499/月', '¥29-49/家庭/月'],
    ['12个月', '3-6个月', '12个月', '6个月', '18个月'],
    ['安心', '成就', '信任', '疗愈', '和谐'],
    ['医疗认证路径', '父亲社区', '隐私品牌', '临床验证', '网络效应'],
  ],
}

function ComparisonTableSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="w-full bg-[#F5EDE6] py-[var(--space-2xl)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block text-overline text-[#A67E75] mb-4">横向对比</span>
          <h2 className="font-display text-h2 text-[#2D2422] font-semibold">五大方案如何对比</h2>
          <p className="font-body text-body text-[#6B5E5A] mt-4 max-w-[600px] mx-auto">
            每个方案针对不同盲区采用不同方法。在关键维度上进行比较。
          </p>
        </ScrollReveal>

        <div ref={ref} className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <motion.tr
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <th className="sticky left-0 z-10 bg-[#FBF7F3] text-left px-4 py-4 font-body text-[0.875rem] font-semibold text-[#2D2422] rounded-tl-[12px]">
                  维度
                </th>
                {comparisonData.solutions.map((name, i) => (
                  <th
                    key={name}
                    className="text-center px-4 py-4 font-body text-[0.875rem] font-semibold rounded-t-[12px]"
                    style={{ color: comparisonData.accentColors[i] }}
                  >
                    {name}
                  </th>
                ))}
              </motion.tr>
            </thead>
            <tbody>
              {comparisonData.rows.map((row, rowIndex) => (
                <motion.tr
                  key={rowIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.05 * (rowIndex + 1),
                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  }}
                  className={
                    rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#FBF7F3]'
                  }
                  style={{ borderBottom: '1px solid rgba(201, 169, 161, 0.1)' }}
                >
                  <td className="sticky left-0 z-10 bg-inherit px-4 py-4 font-body text-[0.875rem] font-medium text-[#2D2422]">
                    {comparisonData.dimensions[rowIndex]}
                  </td>
                  {row.map((cell, cellIndex) => {
                    const isHighlight =
                      (rowIndex === 0 && cellIndex === 4) ||
                      (rowIndex === 2 && cellIndex === 1) ||
                      (rowIndex === 3 && cellIndex === 2) ||
                      (rowIndex === 7 && cellIndex === 0)
                    return (
                      <td
                        key={cellIndex}
                        className="text-center px-4 py-4 font-body text-[0.875rem] text-[#6B5E5A]"
                        style={
                          isHighlight
                            ? {
                                backgroundColor: 'rgba(201, 169, 161, 0.08)',
                                fontWeight: 500,
                              }
                            : {}
                        }
                      >
                        {cell}
                      </td>
                    )
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 4: PRICING OVERVIEW
   ═══════════════════════════════════════════════════════════════════════════════ */
const pricingData = [
  {
    name: 'Heartbeat Cocoon',
    price: '¥399-599',
    note: '一次性购买',
    props: ['无订阅费', '7天续航', '医疗级认证路径'],
    accent: '#C9A9A1',
    link: '/solutions/heartbeat',
  },
  {
    name: 'DadQuest',
    price: '¥19-49/月',
    note: '免费增值模式',
    props: ['免费AI问答', '任务游戏化', '父亲社区'],
    accent: '#D4A574',
    link: '/solutions/dadquest',
  },
  {
    name: 'SafeBox',
    price: '¥499-699',
    note: '一次性 +20-30% vs 云端产品',
    props: ['零数据上传', '离线可用', 'COPPA合规'],
    accent: '#A8B5A0',
    link: '/solutions/safebox',
  },
  {
    name: 'WarmMom',
    price: '¥199-499/月',
    note: '分级订阅',
    props: ['CBT基础疗法', '情绪监测', '专业转介'],
    accent: '#A67E75',
    link: '/solutions/warmmom',
  },
  {
    name: 'FamilyBridge',
    price: '¥29-49/月',
    note: '按家庭账户计费',
    props: ['无限家庭成员', '三代调解', '智慧传承'],
    accent: '#8BA88A',
    link: '/solutions/familybridge',
  },
]

function PricingSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-[var(--space-2xl)]">
      <ScrollReveal className="text-center mb-12">
        <span className="inline-block text-overline text-[#A67E75] mb-4">定价策略</span>
        <h2 className="font-display text-h2 text-[#2D2422] font-semibold">每个价位都有价值</h2>
      </ScrollReveal>

      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {pricingData.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="min-w-[240px] flex-shrink-0 snap-start"
          >
            <Link
              to={plan.link}
              className="block bg-white rounded-[24px] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 h-full"
            >
              <div className="h-1 w-full rounded-full mb-6" style={{ backgroundColor: plan.accent }} />
              <h3 className="font-body text-[1rem] font-semibold text-[#2D2422]">{plan.name}</h3>
              <p
                className="font-mono text-[clamp(1.5rem,2.5vw,2rem)] font-bold mt-3"
                style={{ color: plan.accent }}
              >
                {plan.price}
              </p>
              <p className="font-body text-[0.75rem] text-[#9A8E88] mt-1">{plan.note}</p>
              <div className="my-4 h-px bg-[rgba(201,169,161,0.2)]" />
              <ul className="space-y-2">
                {plan.props.map((prop) => (
                  <li key={prop} className="flex items-center gap-2">
                    <Check size={14} className="text-[#A8B5A0] flex-shrink-0" />
                    <span className="font-body text-[0.8125rem] text-[#6B5E5A]">{prop}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-[0.875rem] font-medium mt-6" style={{ color: plan.accent }}>
                了解更多 &rarr;
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 5: MVP TIMELINE
   ═══════════════════════════════════════════════════════════════════════════════ */
const timelinePhases = [
  {
    label: '短期',
    timeline: '0-6个月',
    color: '#C9A9A1',
    items: [
      { name: 'WarmMom', detail: 'AI对话小程序' },
      { name: 'DadQuest', detail: 'AI问答小程序' },
    ],
  },
  {
    label: '中期',
    timeline: '6-12个月',
    color: '#A8B5A0',
    items: [
      { name: 'Heartbeat Cocoon', detail: '手环+玩偶原型' },
      { name: 'SafeBox', detail: '本地AI设备原型' },
      { name: 'WarmMom', detail: '情绪追踪+医院合作' },
      { name: 'DadQuest', detail: '任务系统+社区' },
    ],
  },
  {
    label: '长期',
    timeline: '12-18个月',
    color: '#D4A574',
    items: [
      { name: 'FamilyBridge', detail: '完整平台' },
      { name: 'Heartbeat Cocoon', detail: 'FDA认证路径' },
      { name: 'SafeBox', detail: '全面上市' },
    ],
  },
]

function TimelineSection() {
  return (
    <section className="w-full bg-[#2D2422] py-[var(--space-2xl)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #FBF7F3 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-overline text-[rgba(251,247,243,0.5)] mb-4">
            实施路线图
          </span>
          <h2 className="font-display text-h2 text-white font-semibold">
            从原型到产品
          </h2>
          <p className="font-body text-body text-[rgba(251,247,243,0.7)] mt-4 max-w-[640px] mx-auto">
            每个方案遵循分阶段MVP方法——从最小可行测试开始，逐步走向产品市场匹配。
          </p>
        </ScrollReveal>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Horizontal line */}
          <div className="absolute top-20 left-[10%] right-[10%] h-[3px] rounded-full"
            style={{
              background: 'linear-gradient(90deg, #C9A9A1 0%, #A8B5A0 50%, #D4A574 100%)',
            }}
          />

          <div className="grid grid-cols-3 gap-8">
            {timelinePhases.map((phase, phaseIdx) => (
              <div key={phase.label} className="relative">
                {/* Phase Marker */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: phaseIdx * 0.3,
                    ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number],
                  }}
                  className="w-6 h-6 rounded-full mx-auto mb-8 relative z-10"
                  style={{
                    backgroundColor: phase.color,
                    boxShadow: `0 0 0 4px #2D2422, 0 0 0 6px ${phase.color}`,
                  }}
                />

                <div className="text-center mb-6">
                  <span className="text-overline block" style={{ color: phase.color }}>
                    {phase.label}
                  </span>
                  <span className="font-body text-[0.75rem] text-[rgba(251,247,243,0.4)] mt-1 block">
                    {phase.timeline}
                  </span>
                </div>

                <div className="space-y-3">
                  {phase.items.map((item, itemIdx) => (
                    <motion.div
                      key={`${item.name}-${itemIdx}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: phaseIdx * 0.3 + itemIdx * 0.1,
                        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                      }}
                      className="bg-[rgba(251,247,243,0.08)] border border-[rgba(251,247,243,0.1)] rounded-[16px] px-4 py-3"
                    >
                      <p className="font-body text-[0.875rem] font-medium text-[rgba(251,247,243,0.9)]">
                        {item.name}
                      </p>
                      <p className="font-body text-[0.75rem] text-[rgba(251,247,243,0.5)] mt-0.5">
                        {item.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden space-y-12">
          {timelinePhases.map((phase) => (
            <div key={phase.label} className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ backgroundColor: phase.color }} />
              <div
                className="absolute left-[-5px] top-0 w-3 h-3 rounded-full"
                style={{ backgroundColor: phase.color }}
              />
              <span className="text-overline" style={{ color: phase.color }}>
                {phase.label}
              </span>
              <span className="block font-body text-[0.75rem] text-[rgba(251,247,243,0.4)] mt-1 mb-4">
                {phase.timeline}
              </span>
              <div className="space-y-3">
                {phase.items.map((item, itemIdx) => (
                  <motion.div
                    key={`${item.name}-${itemIdx}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: itemIdx * 0.1,
                      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                    }}
                    className="bg-[rgba(251,247,243,0.08)] border border-[rgba(251,247,243,0.1)] rounded-[16px] px-4 py-3"
                  >
                    <p className="font-body text-[0.875rem] font-medium text-[rgba(251,247,243,0.9)]">
                      {item.name}
                    </p>
                    <p className="font-body text-[0.75rem] text-[rgba(251,247,243,0.5)] mt-0.5">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 6: COUNTER-INTUITIVE HOOKS
   ═══════════════════════════════════════════════════════════════════════════════ */
const hooksData = [
  {
    num: '01',
    hook: '最好的AI育儿产品完全没有AI界面。',
    explanation:
      '心跳茧零语音、零屏幕、零云端。连接通过触觉心跳同步实现——这种生物信号比技术早存在数百万年。',
    validated: 'LOVOT（90%留存率，无语音）',
    accent: '#C9A9A1',
  },
  {
    num: '02',
    hook: '最大的未开发育儿市场不是母亲——是父亲。',
    explanation:
      '67.8%的父亲每天使用育儿App，但专为设计的不到10个。供给（4300+妈妈App）与需求（父亲参与度）之间的差距前所未有。',
    validated: 'fatherli, DadHack, 老爸带娃产品线',
    accent: '#D4A574',
  },
  {
    num: '03',
    hook: '最有价值的功能是你无法使用的——不存在的数据。',
    explanation:
      '安心盒的核心价值主张是负空间：数据永不离开设备。在数据泄露频发的时代，缺失成为终极卖点。',
    validated: 'Moxie变砖事件（反模式）',
    accent: '#A8B5A0',
  },
  {
    num: '04',
    hook: '最需要AI的母亲不是为孩子买AI的那位。',
    explanation:
      '产后抑郁率17.98%，每年150-200万受影响，零专用AI产品。每个母婴AI公司都盯着宝宝。暖妈盯着母亲。',
    validated: 'Woebot（EPDS随机对照试验↓5+分）',
    accent: '#A67E75',
  },
  {
    num: '05',
    hook: '最需要帮助的家庭单元有三代人，不是两代。',
    explanation:
      '82.6%的0-3岁儿童接受祖辈照护。60%+的隔代家庭存在育儿冲突。然而100%的产品瞄准核心家庭。',
    validated: '亲宝宝（1亿用户，成长记录）',
    accent: '#8BA88A',
  },
]

function HooksSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-[var(--space-2xl)]">
      <ScrollReveal className="text-center mb-12">
        <span className="inline-block text-overline text-[#A67E75] mb-4">为何有效</span>
        <h2 className="font-display text-h2 text-[#2D2422] font-semibold">
          反直觉的力量
        </h2>
      </ScrollReveal>

      <div className="space-y-6 max-w-[800px] mx-auto">
        {hooksData.map((hook, i) => (
          <motion.div
            key={hook.num}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            style={{
              marginLeft: i % 2 === 1 ? '60px' : '0',
            }}
            className="bg-white rounded-[24px] shadow-sm p-6 flex gap-4 border-l-4 sm:ml-0!"
          >
            <span
              className="font-mono text-[2.5rem] font-bold flex-shrink-0 w-[60px] hidden sm:block"
              style={{ color: hook.accent, opacity: 0.3 }}
            >
              {hook.num}
            </span>
            <div>
              <p className="font-display text-[1.25rem] text-[#2D2422] italic leading-snug">
                &ldquo;{hook.hook}&rdquo;
              </p>
              <p
                className="font-body text-[0.9375rem] text-[#6B5E5A] mt-3 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: hook.explanation }}
              />
              <p className="font-body text-[0.8125rem] font-medium mt-4" style={{ color: hook.accent }}>
                验证来源：{hook.validated}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 639px) {
          .sm\\:ml-0\\! { margin-left: 0 !important; }
        }
      `}</style>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 7: TECH ENABLERS
   ═══════════════════════════════════════════════════════════════════════════════ */
const techEnablersData = [
  {
    icon: Cpu,
    title: '边缘AI芯片',
    description: '集成NPU的微控制器批量价已低于1美元。本地推理不再是高端功能——而是默认配置。',
    data: '<$1/颗',
    accent: '#C9A9A1',
  },
  {
    icon: BrainCircuit,
    title: '端侧大模型',
    description: 'Phi-3 Mini（3.8B）在仅1.8GB中达到GPT-3.5水平。完整AI助手可装入火柴盒大小的设备。',
    data: '1.8GB存储',
    accent: '#A67E75',
  },
  {
    icon: Fingerprint,
    title: '触觉执行器',
    description: '触觉反馈组件成本0.46-7.65美元。Bond Touch售出100万+件证明触觉连接市场需求。',
    data: '$0.46-$7.65',
    accent: '#D4A574',
  },
  {
    icon: ShieldCheck,
    title: '隐私监管',
    description: 'COPPA 2025罚款高达每童51,744美元。中国儿童数据保护政策 favor 本地处理。法律顺风。',
    data: '$51,744/童',
    accent: '#A8B5A0',
  },
  {
    icon: Mic,
    title: '语音AI成熟度',
    description: '成人语音识别准确率超95%。男性优化的语音识别技术赋能父亲专属产品。',
    data: '>95%识别率',
    accent: '#C9A9A1',
  },
  {
    icon: Pill,
    title: '数字疗法验证',
    description: 'Woebot证明AI CBT在随机对照试验中将产后抑郁评分降低5+分。数字心理健康临床有效。',
    data: 'EPDS ↓5+分',
    accent: '#A67E75',
  },
]

function TechEnablersSection() {
  return (
    <section className="w-full bg-[#F5EDE6] py-[var(--space-2xl)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block text-overline text-[#A67E75] mb-4">为何是现在</span>
          <h2 className="font-display text-h2 text-[#2D2422] font-semibold">
            技术时机恰到好处
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techEnablersData.map((tech, i) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="bg-white rounded-[24px] shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${tech.accent}20` }}
                >
                  <Icon size={20} style={{ color: tech.accent }} />
                </div>
                <h3 className="font-body text-[1.125rem] font-semibold text-[#2D2422] mt-4">
                  {tech.title}
                </h3>
                <p className="font-body text-[0.875rem] text-[#6B5E5A] mt-2 leading-relaxed">
                  {tech.description}
                </p>
                <p className="font-mono text-[1.25rem] font-bold mt-4" style={{ color: tech.accent }}>
                  {tech.data}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 8: INVESTMENT PRIORITY
   ═══════════════════════════════════════════════════════════════════════════════ */
const priorityData = [
  {
    phase: '短期',
    timeline: '0-6个月',
    borderColor: '#C9A9A1',
    solutions: [
      {
        name: 'WarmMom',
        rationale: '技术门槛最低。B2B付费模式（医院/企业）提供清晰变现路径。心理健康危机需要立即响应。',
        badge: '最快ROI',
        badgeColor: '#C9A9A1',
      },
      {
        name: 'DadQuest',
        rationale: '微信小程序获客成本最低。验证父亲付费意愿。技术风险最小。',
        badge: '最低风险',
        badgeColor: '#D4A574',
      },
    ],
  },
  {
    phase: '中期',
    timeline: '6-12个月',
    borderColor: '#A8B5A0',
    solutions: [
      {
        name: 'Heartbeat Cocoon',
        rationale: '差异化潜力最大。需要供应链投入，但创建FDA认证壁垒。最具防御性的长期产品。',
        badge: '最强壁垒',
        badgeColor: '#A8B5A0',
      },
      {
        name: 'SafeBox',
        rationale: '隐私监管顺风。规模化验证纯本地AI。信任支撑硬件溢价。',
        badge: '监管顺风',
        badgeColor: '#A8B5A0',
      },
    ],
  },
  {
    phase: '长期',
    timeline: '12-18个月',
    borderColor: '#D4A574',
    solutions: [
      {
        name: 'FamilyBridge',
        rationale: '需要用户基础和多边协调。复杂度最高但瞄准最大结构性市场缺口。网络效应随时间复合增长。',
        badge: '最大TAM',
        badgeColor: '#D4A574',
      },
    ],
  },
]

function InvestmentPrioritySection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-[var(--space-2xl)]">
      <ScrollReveal className="text-center mb-12">
        <span className="inline-block text-overline text-[#A67E75] mb-4">推荐顺序</span>
        <h2 className="font-display text-h2 text-[#2D2422] font-semibold">
          从何开始
        </h2>
      </ScrollReveal>

      <div className="space-y-4 max-w-[900px] mx-auto">
        {priorityData.map((priority, i) => (
          <motion.div
            key={priority.phase}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="bg-white rounded-[24px] shadow-md p-6 flex flex-col sm:flex-row gap-6"
            style={{ borderLeft: `4px solid ${priority.borderColor}` }}
          >
            {/* Left — Phase Label */}
            <div className="sm:w-[160px] flex-shrink-0">
              <p className="font-body text-[1rem] font-semibold text-[#2D2422]">{priority.phase}</p>
              <p className="font-body text-[0.875rem] text-[#9A8E88] mt-1">{priority.timeline}</p>
            </div>

            {/* Right — Solutions */}
            <div className="flex-1 flex flex-col sm:flex-row gap-4">
              {priority.solutions.map((sol) => (
                <div
                  key={sol.name}
                  className="flex-1 bg-[#F5EDE6] rounded-[16px] p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-body text-[0.9375rem] font-semibold text-[#2D2422]">
                      {sol.name}
                    </h4>
                    <span
                      className="font-body text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: sol.badgeColor }}
                    >
                      {sol.badge}
                    </span>
                  </div>
                  <p className="font-body text-[0.8125rem] text-[#6B5E5A] leading-relaxed">
                    {sol.rationale}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 9: FAQ ACCORDION
   ═══════════════════════════════════════════════════════════════════════════════ */
const faqData = [
  {
    question: '这些方案为何是"反直觉"的？',
    answer:
      '每个方案都挑战一个根深蒂固的行业假设：心跳茧去除语音/屏幕/云端（少即是多），爸任务瞄准父亲而非母亲（被忽视的多数），安心盒坚持本地而非云端优先（隐私即功能），暖妈关注母亲而非宝宝（照护照护者），家桥服务三代人而非核心家庭。',
  },
  {
    question: '这些方案背后的技术成熟度如何？',
    answer:
      '所有五个方案都依赖已验证的商用技术：边缘AI芯片批量价低于1美元，端侧大模型如Phi-3 Mini可在1.8GB中运行，触觉执行器成本0.46-7.65美元，成人语音识别准确率超95%。创新在产品设计，而非技术发明。',
  },
  {
    question: '上市时间线是怎样的？',
    answer:
      '短期（0-6个月）：暖妈和爸任务作为AI小程序，技术门槛最低。中期（6-12个月）：心跳茧手环原型和安心盒本地AI设备。长期（12-18个月）：家桥完整平台，需要多方协调和网络效应。',
  },
  {
    question: '如何解决数据隐私问题？',
    answer:
      '安心盒引领"零云端"架构——所有AI处理在本地低于1美元的边缘芯片上完成。对于需要云端连接的方案（爸任务、暖妈），我们采用匿名化数据、加密传输和家庭控制同意。COPPA 2025每童51,744美元罚款使隐私成为商业要务，不仅是伦理要求。',
  },
  {
    question: '为何瞄准父亲，当母亲才是主要购买者？',
    answer:
      '正因为4300+App瞄准母亲而不到10个瞄准父亲——然而67.8%的父亲每天使用育儿App，TGI付费意愿>120。供需缺口前所未有。父亲不是"次要家长"；他们是被忽视的高参与度、高消费潜力市场。',
  },
  {
    question: '有哪些证据支持心跳茧的方法？',
    answer:
      'NICU心跳研究证实婴儿压力降低40%。Bond Touch售出100万+件证明触觉连接需求。LOVOT无语音设计实现90%三年留存。148亿美元监护市场100%单向——双向生理连接是蓝海。',
  },
]

function FAQSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="w-full bg-[#F5EDE6] py-[var(--space-2xl)]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block text-overline text-[#A67E75] mb-4">有问必答</span>
          <h2 className="font-display text-h2 text-[#2D2422] font-semibold">
            常见问题
          </h2>
          <p className="font-body text-body text-[#6B5E5A] mt-4 max-w-[520px] mx-auto">
            关于反直觉方法、技术准备度和实施策略的常见问题。
          </p>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqData.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-[16px] border border-[rgba(201,169,161,0.15)] px-5 shadow-sm data-[state=open]:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="font-body text-[0.9375rem] font-semibold text-[#2D2422] hover:text-[#A67E75] hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-[0.875rem] text-[#6B5E5A] leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════════ */
export default function SolutionsPage() {
  return (
    <div>
      <HeroSection />
      <SolutionsGridSection />
      <ComparisonTableSection />
      <PricingSection />
      <TimelineSection />
      <HooksSection />
      <TechEnablersSection />
      <InvestmentPrioritySection />
      <FAQSection />
    </div>
  )
}
