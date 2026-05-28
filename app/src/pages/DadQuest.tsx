import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import {
  ArrowRight, Shield, Brain, Smartphone,
  Mic, BarChart3, Gamepad2, Trophy, Users,
  MessageSquare, Target, Zap, Check, X,
  XCircle, ChevronRight,
  Star, TrendingUp, Swords
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
   Section 1: Hero — Dark Masculine
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full" style={{ background: 'linear-gradient(135deg, #2D2422 0%, #3D322F 100%)', minHeight: '70vh' }}>
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
              <Link to="/" className="font-body text-sm text-[rgba(251,247,243,0.4)] hover:text-[#D4A574] transition-colors">首页</Link>
              <span className="text-[rgba(251,247,243,0.3)]">/</span>
              <Link to="/solutions" className="font-body text-sm text-[rgba(251,247,243,0.4)] hover:text-[#D4A574] transition-colors">解决方案</Link>
              <span className="text-[rgba(251,247,243,0.3)]">/</span>
              <span className="font-body text-sm text-[rgba(251,247,243,0.4)]">DadQuest</span>
            </motion.div>

            <motion.div variants={staggerChild} className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#D4A574] text-white text-overline">
                02
              </span>
            </motion.div>

            <motion.h1 variants={staggerChild} className="font-display text-h1 text-white">
              DadQuest
            </motion.h1>
            <motion.p variants={staggerChild} className="font-body text-xl text-[rgba(251,247,243,0.5)] mt-1">
              爸任务
            </motion.p>

            <motion.p variants={staggerChild} className="font-body text-xl font-medium text-[#D4A574] mt-4">
              育儿，升级打怪。
            </motion.p>

            <motion.p variants={staggerChild} className="font-body text-base text-[rgba(251,247,243,0.7)] max-w-[480px] mt-4">
              首个为父亲打造的AI育儿平台——不是事后想起，而是以父亲为核心设计原则。语音优先。任务驱动。竞技社交。因为67.8%的爸爸每天使用育儿应用，但为他们设计的应用不到10款。
            </motion.p>

            <motion.div variants={staggerChild} className="flex flex-wrap gap-6 mt-6">
              {[
                { num: '4300:10', label: '妈妈:爸爸应用比' },
                { num: '67.8%', label: '爸爸日活跃率' },
                { num: '>120', label: '付费TGI' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-mono text-lg font-bold text-[#D4A574]">{s.num}</span>
                  <span className="font-body text-xs text-[rgba(251,247,243,0.5)]">{s.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={staggerChild} className="mt-6">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#D4A574] text-white font-body font-medium hover:bg-[#D4A574]/90 hover:scale-[1.02] transition-all duration-200"
              >
                看看旅程 <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            className="flex-1 lg:max-w-[45%]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] }}
          >
            <img
              src="/dadquest-hero.jpg"
              alt="DadQuest - 父亲与宝宝欢乐互动"
              className="w-full rounded-[32px] shadow-xl"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 2: Core Insight — 6.2% vs 67.8% + 3 Barrier Cards
   ═══════════════════════════════════════════════════════════ */
function InsightSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const barriers = [
    {
      icon: <Shield size={32} className="text-[#C97B7B]" />,
      title: '母亲守门效应',
      text: '母亲无意识中控制父亲参与度：「爸爸做不好」→ 爸爸永远没机会。下一代父亲缺席率高42%。',
    },
    {
      icon: <Brain size={32} className="text-[#D4A574]" />,
      title: '能力焦虑',
      text: '68%的父亲表示「复杂操作令人不知所措。」缺乏育儿知识产生恐惧 → 回避。产品设计未考虑男性学习模式。',
    },
    {
      icon: <Smartphone size={32} className="text-[#C9A9A1]" />,
      title: '产品性别偏见',
      text: '粉色调界面、情感社区、长篇文章。父亲三大痛点：「太复杂」「太尴尬」「直接给我方案」。',
    },
  ]

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection>
          <span className="text-overline text-[#D4A574]">核心洞察</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">
            父亲没有缺席——产品缺席了。
          </h2>
        </AnimatedSection>

        {/* Data Pair Visualization */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {isInView ? (
              <CountUp end={6.2} decimals={1} suffix="%" duration={2.5} className="font-mono font-bold text-[#C97B7B]" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' } as React.CSSProperties} />
            ) : (
              <span className="font-mono font-bold text-[#C97B7B]" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>0%</span>
            )}
            <p className="font-body text-body text-[#6B5E5A] mt-2">父亲作为主要照护者</p>
            <p className="font-body text-sm text-[#9A8E88] mt-1">对比 52.7% 母亲，32% 祖父母</p>
          </motion.div>

          <div className="text-[#9A8E88] font-mono text-3xl">≠</div>

          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isInView ? (
              <CountUp end={67.8} decimals={1} suffix="%" duration={2.5} className="font-mono font-bold text-[#D4A574]" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' } as React.CSSProperties} />
            ) : (
              <span className="font-mono font-bold text-[#D4A574]" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>0%</span>
            )}
            <p className="font-body text-body text-[#6B5E5A] mt-2">父亲每日使用育儿应用</p>
            <p className="font-body text-sm text-[#9A8E88] mt-1">每日多次使用，付费意愿TGI &gt;120</p>
          </motion.div>
        </div>

        {/* 3 Barrier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {barriers.map((b, i) => (
            <motion.div
              key={b.title}
              className="bg-[#F5EDE6] rounded-[24px] p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {b.icon}
              <h4 className="font-body text-lg font-semibold text-[#2D2422] mt-3">{b.title}</h4>
              <p className="font-body text-sm text-[#6B5E5A] mt-2 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 3: Product Design — 7 Core Modules
   ═══════════════════════════════════════════════════════════ */
function ModulesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const modules = [
    { num: '01', title: 'AI问答', desc: '语音输入，结构化3步答案。ASR针对男性语音模式优化。', color: '#D4A574', icon: <MessageSquare size={20} /> },
    { num: '02', title: '每日任务', desc: '每天3个个性化任务。渐进难度。接受/跳过/完成 三态流程。', color: '#D4A574', icon: <Target size={20} /> },
    { num: '03', title: '徽章系统', desc: '解锁「7天睡眠大师」「第一次独立喂奶」。可分享到微信。', color: '#D4A574', icon: <Trophy size={20} /> },
    { num: '04', title: '排行榜', desc: '区域/同龄父亲排行榜。匿名ID。前10%获得专属徽章。', color: '#D4A574', icon: <TrendingUp size={20} /> },
    { num: '05', title: '技能树', desc: '5大领域 × 20等级：喂养/安抚/早教/健康/沟通。', color: '#A8B5A0', icon: <Zap size={20} /> },
    { num: '06', title: '家庭竞赛', desc: '爸爸vs妈妈积分对战。妈妈可见但不可控制爸爸的任务流。', color: '#C9A9A1', icon: <Swords size={20} /> },
    { num: '07', title: '爸爸社交', desc: '问题导向社区。不聊情感，只讲实用建议。', color: '#A8B5A0', icon: <Users size={20} /> },
  ]

  return (
    <section className="w-full bg-[#F5EDE6] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection className="text-center">
          <span className="text-overline text-[#D4A574]">产品设计</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">7大模块。一个使命。</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {modules.map((m, i) => (
            <motion.div
              key={m.num}
              className="relative bg-white rounded-[16px] p-5 shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[#C9A9A1]">{m.icon}</span>
                <span className="font-mono text-xs text-[#9A8E88]">{m.num}</span>
              </div>
              <h4 className="font-body text-base font-semibold text-[#2D2422] mt-3">{m.title}</h4>
              <p className="font-body text-sm text-[#6B5E5A] mt-1 line-clamp-2">{m.desc}</p>
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 4: User Journey — 8-Stage Timeline
   ═══════════════════════════════════════════════════════════ */
function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const stages = [
    { name: '触发', day: '第0天', desc: '宝宝哭了，妻子在睡，爸爸慌了。打开微信搜索。', psych: '焦虑', color: '#C97B7B' },
    { name: '激活', day: '第1天', desc: 'AI给出3步答案。宝宝不哭。第一个徽章解锁。', psych: '胜任感', color: '#D4A574' },
    { name: '首任务', day: '第2天', desc: '推送3个任务。完成→即时积分+进度条。', psych: '目标导向', color: '#D4A574' },
    { name: '习惯', day: '第7天', desc: '7天连续徽章。区域排名上升。解锁进阶任务。', psych: '成就感', color: '#D4A574' },
    { name: '社交', day: '第14天', desc: '周挑战。排行榜可见。获得前20%徽章。', psych: '社交认同', color: '#A8B5A0' },
    { name: '成长', day: '第30天', desc: '技能树Lv.5。早教分支开启。推荐爸爸游戏。', psych: '成长感', color: '#A8B5A0' },
    { name: '家庭', day: '第60天', desc: '家庭竞赛模式。爸爸vs妈妈月度对战。贡献仪表盘。', psych: '团队认同', color: '#C9A9A1' },
    { name: '身份', day: '第90天+', desc: '无需推送通知。主动参与。资深爸爸导师。', psych: '身份认同', color: '#A8B5A0' },
  ]

  return (
    <section id="journey" className="w-full bg-[#FBF7F3] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection>
          <span className="text-overline text-[#D4A574]">用户旅程</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">从应急到认同</h2>
          <p className="font-body text-body text-[#6B5E5A] max-w-[640px] mt-4">
            8个阶段。每个阶段都旨在转变父亲与育儿的关系——从焦虑到自信，从任务到认同。
          </p>
        </AnimatedSection>

        {/* Journey Cards */}
        <div className="mt-12 overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-[1200px] lg:min-w-0">
            {stages.map((s, i) => (
              <motion.div
                key={s.name}
                className="flex-1 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.08 * i }}
              >
                <div className="bg-white rounded-[16px] p-4 w-full min-w-[140px] min-h-[160px] shadow-sm flex flex-col">
                  <span className="font-body text-sm font-semibold text-[#2D2422]">{s.name}</span>
                  <span className="font-mono text-xs text-[#9A8E88] mt-1">{s.day}</span>
                  <p className="font-body text-xs text-[#6B5E5A] mt-2 leading-relaxed flex-1">{s.desc}</p>
                  <span className="font-body text-xs font-medium mt-2" style={{ color: s.color }}>{s.psych}</span>
                </div>
                {i < stages.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center h-6">
                    <ChevronRight size={14} className="text-[#D4A574]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 5: Gamification Engine
   ═══════════════════════════════════════════════════════════ */
function GamificationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const mechanisms = [
    { title: '积分与进度', need: '目标导向', desc: '动画进度条填充', icon: <Star size={32} className="text-[#D4A574]" /> },
    { title: '徽章与成就', need: '成就驱动', desc: '徽章墙，已解锁/待解锁状态', icon: <Trophy size={32} className="text-[#D4A574]" /> },
    { title: '排行榜', need: '竞争本能', desc: '排名数字，上升/下降箭头', icon: <TrendingUp size={32} className="text-[#D4A574]" /> },
    { title: '技能树', need: '成长感', desc: '树状图，5大分支 × 20等级', icon: <Zap size={32} className="text-[#A8B5A0]" /> },
    { title: '家庭竞赛', need: '社交认可', desc: '爸爸vs妈妈积分柱状图', icon: <Swords size={32} className="text-[#C9A9A1]" /> },
  ]

  return (
    <section className="w-full gradient-dark py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection className="text-center">
          <span className="text-overline text-[rgba(251,247,243,0.5)]">游戏化引擎</span>
          <h2 className="font-display text-h2 text-white mt-2">不是娱乐——是赋能</h2>
          <p className="font-body text-body text-[rgba(251,247,243,0.7)] max-w-[600px] mx-auto mt-4">
            每个游戏机制都对应真实的心理需求。游戏是载体，父亲成长是目的地。
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-6 mt-12">
          {mechanisms.map((m, i) => (
            <motion.div
              key={m.title}
              className="flex-1 bg-[rgba(251,247,243,0.05)] border border-[rgba(251,247,243,0.1)] rounded-[24px] p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {m.icon}
              <h3 className="font-body text-lg font-semibold text-white mt-4">{m.title}</h3>
              <p className="font-body text-sm text-[rgba(251,247,243,0.5)] mt-1">{m.need}</p>
              <p className="font-body text-sm text-[rgba(251,247,243,0.7)] mt-3">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 6: Visual Design — Before/After Comparison
   ═══════════════════════════════════════════════════════════ */
function VisualDesignSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection>
          <span className="text-overline text-[#D4A574]">视觉设计</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">去母性化。有意为之。</h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Traditional App */}
          <motion.div
            className="flex-1 rounded-[24px] p-8 border-2 border-[#C9A9A1]"
            style={{ background: 'rgba(232, 213, 208, 0.3)' }}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <XCircle size={18} className="text-[#C97B7B]" />
              <span className="font-body text-sm font-medium text-[#C97B7B]">父亲排斥的</span>
            </div>
            <div className="bg-white/60 rounded-[16px] p-6 text-center">
              <p className="font-display text-lg text-[#C9A9A1] italic">「宝宝今天怎么样？」</p>
              <div className="flex justify-center gap-1 mt-2">
                <div className="w-3 h-3 rounded-full bg-[#E8D5D0]" />
                <div className="w-3 h-3 rounded-full bg-[#C9A9A1]" />
                <div className="w-3 h-3 rounded-full bg-[#E8D5D0]" />
              </div>
            </div>
            <ul className="flex flex-col gap-2 mt-6">
              {[
                '粉色调 → 心理门槛',
                '情感化语言 → 不适',
                '复杂导航 → 立即退出',
                '女性社区 → 无共鸣',
              ].map((r) => (
                <li key={r} className="flex items-center gap-2 font-body text-sm text-[#6B5E5A]">
                  <X size={14} className="text-[#C97B7B] shrink-0" /> {r}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DadQuest */}
          <motion.div
            className="flex-1 rounded-[24px] p-8 border-2 border-[#D4A574] bg-[#F5EDE6]"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Check size={18} className="text-[#8BA88A]" />
              <span className="font-body text-sm font-medium text-[#8BA88A]">父亲拥抱的</span>
            </div>
            <div className="bg-[#2D2422] rounded-[16px] p-6 text-center">
              <p className="font-mono text-lg text-[#D4A574]">任务完成率 87%</p>
              <div className="w-full h-2 bg-[#3D322F] rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-[#D4A574] rounded-full" style={{ width: '87%' }} />
              </div>
            </div>
            <ul className="flex flex-col gap-2 mt-6">
              {[
                '深色科技风 → 熟悉领地',
                '任务导向文案 → 行动驱动',
                '数据可视化 → 进度可见',
                '成就系统 → 竞争本能',
              ].map((r) => (
                <li key={r} className="flex items-center gap-2 font-body text-sm text-[#6B5E5A]">
                  <Check size={14} className="text-[#8BA88A] shrink-0" /> {r}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 7: Technology — 3 Tech Layers
   ═══════════════════════════════════════════════════════════ */
function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const layers = [
    {
      icon: <Mic size={40} className="text-[#D4A574]" />,
      title: '语音优先交互',
      desc: 'ASR针对男性语音模式优化：语速快、音调低、句子短。3步回答格式：没有大段文字。通勤、办公、 errands 时语音输入。',
      spec: '>95% ASR准确率',
      specVal: '男性语音优化',
    },
    {
      icon: <BarChart3 size={40} className="text-[#A8B5A0]" />,
      title: '个性化任务引擎',
      desc: '基于技能树进度、任务完成率和育儿偏好（父亲更关注体格发育和独立性）。动态难度调整。',
      spec: '5大领域 × 20等级',
      specVal: '实时调整',
    },
    {
      icon: <Gamepad2 size={40} className="text-[#D4A574]" />,
      title: '事件驱动游戏化',
      desc: '每个动作触发游戏事件。积分、徽章解锁、排行榜更新、技能树升级——全部实时计算。家庭竞赛计分引擎。',
      spec: '实时',
      specVal: '事件驱动架构',
    },
  ]

  return (
    <section className="w-full bg-[#F5EDE6] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection>
          <span className="text-overline text-[#D4A574]">技术</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">为父亲的沟通方式而建</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {layers.map((l, i) => (
            <motion.div
              key={l.title}
              className="bg-white rounded-[24px] p-6 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {l.icon}
              <h3 className="font-body text-lg font-semibold text-[#2D2422] mt-4">{l.title}</h3>
              <p className="font-body text-sm text-[#6B5E5A] mt-3 leading-relaxed">{l.desc}</p>
              <div className="mt-4 pt-4 border-t border-[#EDE4DA]">
                <span className="font-mono text-sm text-[#D4A574] font-medium">{l.spec}</span>
                <span className="block font-mono text-xs text-[#9A8E88]">{l.specVal}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 8: Business Model — Freemium + B2B
   ═══════════════════════════════════════════════════════════ */
function BusinessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection>
          <span className="text-overline text-[#D4A574]">商业模式</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">免费增值 + B2B：双收入流</h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* C端 Freemium */}
          <motion.div
            className="flex-1 bg-white rounded-[24px] p-8 shadow-md"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] }}
          >
            <h3 className="font-body text-xl font-semibold text-[#2D2422]">C端 免费增值</h3>
            <div className="flex flex-col gap-3 mt-6">
              {[
                { tier: '免费', desc: 'AI问答 + 3个日任务 + 基础徽章' },
                { tier: '¥19/月', desc: '高级任务包 + 个性化报告 + 专属徽章' },
                { tier: '¥49/月', desc: '专家咨询 + 家庭竞赛 + 优先客服' },
              ].map((t) => (
                <div key={t.tier} className="flex items-start gap-3">
                  <span className="font-mono text-sm font-bold text-[#D4A574] w-16 shrink-0">{t.tier}</span>
                  <span className="font-body text-sm text-[#6B5E5A]">{t.desc}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-[#EDE4DA]">
              <p className="font-body text-sm font-medium text-[#D4A574]">爸爸付费TGI &gt;120，支撑定价</p>
              <p className="font-body text-xs text-[#9A8E88] mt-1">8-11%转化率（AI工具行业标准）</p>
            </div>
          </motion.div>

          {/* B端 Enterprise */}
          <motion.div
            className="flex-1 bg-white rounded-[24px] p-8 shadow-md"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] }}
          >
            <h3 className="font-body text-xl font-semibold text-[#2D2422]">B端 企业版</h3>
            <div className="mt-6">
              <h4 className="font-body text-base font-semibold text-[#2D2422]">企业父亲福利</h4>
              <p className="font-body text-sm text-[#6B5E5A] mt-1">科技企业员工福利包。男性员工比例高的科技/金融公司。「父亲加油站」模式。</p>
            </div>
            <div className="mt-4">
              <h4 className="font-body text-base font-semibold text-[#2D2422]">月子中心合作</h4>
              <p className="font-body text-sm text-[#6B5E5A] mt-1">月子中心父亲课程的数字化工具。解决现有课程父亲参与率低的问题。</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EDE4DA]">
              <p className="font-body text-sm font-medium text-[#8BA88A]">为机构买家提供可量化的参与度指标</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 9: MVP Roadmap — 3-6-12 Month Phases
   ═══════════════════════════════════════════════════════════ */
function MVPSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const phases = [
    {
      label: 'AI问答小程序',
      months: '第1-3个月',
      color: '#D4A574',
      desc: '语音输入 + AI即时回答 + 3步指导',
      goal: '1万+日活，>40%次日留存',
    },
    {
      label: '任务系统',
      months: '第4-6个月',
      color: '#A8B5A0',
      desc: '每日3任务 + 积分 + 基础徽章',
      goal: '>30% 7日留存，>60%任务完成率',
    },
    {
      label: '社交 + 变现',
      months: '第7-12个月',
      color: '#C9A9A1',
      desc: '排行榜 + 家庭竞赛 + 付费订阅 + B端销售',
      goal: '>8%转化率，B端收入覆盖运营成本',
    },
  ]

  return (
    <section className="w-full bg-[#F5EDE6] py-16 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection>
          <span className="text-overline text-[#D4A574]">MVP路线图</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-2">3-6-12个月冲刺</h2>
        </AnimatedSection>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-[#EDE4DA]" />

          <div className="flex flex-col md:flex-row gap-8 md:gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.label}
                className="flex-1 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center z-10" style={{ backgroundColor: phase.color }}>
                  <span className="text-white font-mono text-sm font-bold">{i + 1}</span>
                </div>
                <span className="inline-block mt-4 px-4 py-2 rounded-full text-white font-body text-sm font-semibold" style={{ backgroundColor: phase.color }}>
                  {phase.label}
                </span>
                <span className="font-mono text-xs text-[#9A8E88] mt-2">{phase.months}</span>
                <p className="font-body text-sm text-[#6B5E5A] mt-3 max-w-[280px]">{phase.desc}</p>
                <p className="font-body text-xs font-medium text-[#A67E75] mt-2">{phase.goal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section 10: Next Solution CTA Banner
   ═══════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="w-full gradient-accent py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-display text-h2 text-white">爸爸的蓝海</h2>
          <p className="font-body text-body text-[rgba(255,255,255,0.85)] max-w-[600px] mx-auto mt-4">
            4300款妈妈应用。10款爸爸应用。67.8%日活跃率。DadQuest不在母婴产品的红海中竞争——它创造了一个全新的品类，专为父亲实际的思考、学习和成长方式设计。
          </p>
          <div className="mt-8">
            <Link
              to="/solutions/safebox"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#A67E75] font-body font-medium hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              下一个：SafeBox <ArrowRight size={16} />
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
export default function DadQuest() {
  return (
    <main className="w-full">
      <HeroSection />
      <InsightSection />
      <ModulesSection />
      <JourneySection />
      <GamificationSection />
      <VisualDesignSection />
      <TechSection />
      <BusinessSection />
      <MVPSection />
      <CTASection />
    </main>
  )
}
