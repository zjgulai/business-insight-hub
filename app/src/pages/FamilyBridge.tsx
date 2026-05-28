import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  Users, Tablet, Smartphone, Baby, BookOpen, Target, Handshake, Heart,
  Mic, Sparkles, BookMarked, Infinity as InfinityIcon, Languages, Scale, MessageCircle,
  Check, ArrowRight, ChevronDown, Camera, BarChart3, Radio
} from 'lucide-react'

/* ─── Reusable Animation Wrapper ─── */
function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px' })

  const dirMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Section 1: Hero ─── */
function HeroSection() {
  return (
    <section className="w-full min-h-[70vh] gradient-hero pt-[72px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <motion.div
            className="flex-1 max-w-[580px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-caption text-[#9A8E88] mb-4">
              <Link to="/" className="hover:text-[#A67E75] transition-colors">首页</Link>
              <span>/</span>
              <Link to="/solutions" className="hover:text-[#A67E75] transition-colors">解决方案</Link>
              <span>/</span>
              <span className="text-[#6B5E5A]">FamilyBridge</span>
            </div>

            {/* Solution Number Badge */}
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#A8B5A0] text-white font-mono font-bold text-sm mb-4">
              05
            </span>

            {/* Headline */}
            <h1 className="font-display text-h1 text-[#2D2422] mb-1">
              FamilyBridge
            </h1>
            <p className="font-body text-xl text-[#9A8E88] mb-3">家桥</p>

            {/* Tagline */}
            <p className="font-body text-lg font-medium text-[#A8B5A0] mb-4">
              三代人。一个AI。零冲突。
            </p>

            {/* Description */}
            <p className="font-body text-body text-[#6B5E5A] max-w-[480px] mb-6 leading-relaxed">
              82.6% 有3岁以下儿童的中国家庭依赖祖父母照护。
              超过60%经历代际育儿冲突。FamilyBridge是
              首款为全家设计的AI平台——调解分歧、
              传承智慧、弥合代际数字鸿沟。
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <p className="font-mono text-2xl font-bold text-[#A8B5A0]">82.6%</p>
                <p className="text-caption text-[#9A8E88]">祖父母照护</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-[#A8B5A0]">60%+</p>
                <p className="text-caption text-[#9A8E88]">存在冲突</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-[#A8B5A0]">&yen;29-49</p>
                <p className="text-caption text-[#9A8E88]">每家庭/月</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#A8B5A0] text-white font-body font-medium hover:bg-[#8BA88A] hover:scale-[1.02] transition-all duration-200"
            >
              看看如何搭桥
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 max-w-[520px] w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number],
            }}
          >
            <img
              src="/familybridge-hero.jpg"
              alt="多代家庭欢聚一堂"
              className="w-full rounded-[32px] shadow-xl object-cover aspect-[4/3]"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2: Core Insight ─── */
function CoreInsightSection() {
  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <p className="text-overline text-[#A8B5A0] mb-3">核心洞察</p>
          <h2 className="font-display text-h2 text-[#2D2422] max-w-[600px]">
            为两代家庭设计的产品。现实：三代家庭。
          </h2>
        </FadeIn>

        {/* Venn Diagram */}
        <FadeIn delay={0.2} className="mt-10 flex justify-center">
          <div className="relative w-[320px] h-[200px] sm:w-[420px] sm:h-[240px]">
            {/* Left Circle */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full bg-[rgba(201,169,161,0.15)] border border-[rgba(201,169,161,0.3)] flex items-center justify-center">
              <div className="text-center px-6">
                <p className="font-mono text-sm sm:text-lg font-bold text-[#C9A9A1]">7.63&times;10<sup>4</sup>&times;</p>
                <p className="text-caption text-[#6B5E5A] mt-1">母婴市场</p>
              </div>
            </div>
            {/* Right Circle */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full bg-[rgba(168,181,160,0.15)] border border-[rgba(168,181,160,0.3)] flex items-center justify-center">
              <div className="text-center px-6">
                <p className="font-mono text-sm sm:text-lg font-bold text-[#A8B5A0]">30&times;10<sup>4</sup>&times;</p>
                <p className="text-caption text-[#6B5E5A] mt-1">银发经济</p>
              </div>
            </div>
            {/* Overlap */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full bg-[rgba(212,165,116,0.3)] border border-[rgba(212,165,116,0.5)] flex items-center justify-center z-10">
              <div className="text-center">
                <p className="font-body text-xs sm:text-sm font-bold text-[#D4A574]">Family</p>
                <p className="font-body text-xs sm:text-sm font-bold text-[#D4A574]">Bridge</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="text-center mt-4">
          <p className="font-body text-body text-[#6B5E5A]">
            两大万亿市场的交汇点——完全未被满足
          </p>
        </FadeIn>

        {/* Three Generation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Grandparents */}
          <FadeIn delay={0.1}>
            <div className="bg-[#F5EDE6] rounded-[24px] p-6 h-full">
              <Users size={48} className="text-[#A8B5A0] mb-4" />
              <h3 className="font-body text-xl font-semibold text-[#2D2422] mb-3">
                祖父母
              </h3>
              <p className="font-body text-sm text-[#6B5E5A] leading-relaxed mb-4">
                82.6% 参与0-3岁照护。丰富的实践经验。
                常被数字世界排除在外。可能存在过时的安全做法。
              </p>
              <div className="flex flex-wrap gap-2">
                {['数字鸿沟', '沟通障碍', '感到不被重视'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[rgba(168,181,160,0.2)] text-[#6B5E5A] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Parents */}
          <FadeIn delay={0.25}>
            <div className="bg-[#F5EDE6] rounded-[24px] p-6 h-full">
              <Users size={48} className="text-[#C9A9A1] mb-4" />
              <h3 className="font-body text-xl font-semibold text-[#2D2422] mb-3">
                父母
              </h3>
              <p className="font-body text-sm text-[#6B5E5A] leading-relaxed mb-4">
                核心照护者，拥有现代育儿知识。职业需求限制时间。
                对祖父母照护质量心存矛盾。
              </p>
              <div className="flex flex-wrap gap-2">
                {['与祖父母冲突', '没时间协调', '担忧一致性'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[rgba(201,169,161,0.2)] text-[#6B5E5A] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeIn>

          {/* Children */}
          <FadeIn delay={0.4}>
            <div className="bg-[#F5EDE6] rounded-[24px] p-6 h-full">
              <Baby size={48} className="text-[#D4A574] mb-4" />
              <h3 className="font-body text-xl font-semibold text-[#2D2422] mb-3">
                孩子
              </h3>
              <p className="font-body text-sm text-[#6B5E5A] leading-relaxed mb-4">
                接受多位风格迥异的照护者照顾。
                缺乏统一指导。可能因冲突规则感到困惑。
              </p>
              <div className="flex flex-wrap gap-2">
                {['照护不一致', '无统一记录', '情绪压力'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[rgba(212,165,116,0.2)] text-[#6B5E5A] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Three Terminals ─── */
function ThreeTerminalsSection() {
  const terminals = [
    {
      icon: <Tablet size={48} className="text-[#A8B5A0]" />,
      accent: '#A8B5A0',
      title: '祖父母端',
      subtitle: '语音优先，大字体，方言支持',
      features: [
        '语音优先交互（点击说话）',
        '大字体模式（18pt最小）',
        '方言识别（普通话 + 7大方言）',
        '子女远程协助',
        '一键拍照分享',
      ],
    },
    {
      icon: <Smartphone size={48} className="text-[#C9A9A1]" />,
      accent: '#C9A9A1',
      title: '父母端',
      subtitle: '全功能应用，管理中枢',
      features: [
        '完整功能访问',
        '家庭协调仪表盘',
        '冲突调解请求',
        '成长里程碑追踪',
        '祖父母活动监测',
      ],
    },
    {
      icon: <Radio size={48} className="text-[#D4A574]" />,
      accent: '#D4A574',
      title: '孩子端',
      subtitle: '简化交互，安全内容',
      features: [
        '给祖父母发语音消息',
        '简单绘画分享',
        '适龄内容',
        '紧急联系按钮',
        '无广告，无外部链接',
      ],
    },
  ]

  return (
    <section id="how-it-works" className="w-full bg-[#F5EDE6] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <p className="text-overline text-[#A8B5A0] mb-3">三端设计</p>
          <h2 className="font-display text-h2 text-[#2D2422]">
            为每一代人量身打造
          </h2>
        </FadeIn>

        {/* Terminal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {terminals.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.15}>
              <div className="bg-white rounded-[32px] p-8 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <div
                  className="w-full h-1 rounded-full mb-6"
                  style={{ backgroundColor: t.accent }}
                />
                <div className="mb-4">{t.icon}</div>
                <h3 className="font-body text-xl font-semibold text-[#2D2422] mb-1">
                  {t.title}
                </h3>
                <p className="text-caption text-[#9A8E88] mb-5">{t.subtitle}</p>
                <ul className="space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={16} className="text-[#A8B5A0] mt-0.5 shrink-0" />
                      <span className="font-body text-sm text-[#6B5E5A]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 4: Core Functions ─── */
function CoreFunctionsSection() {
  const functions = [
    {
      icon: <Camera size={40} className="text-[#C9A9A1]" />,
      title: '协作成长记录',
      desc: '多用户相册： grandparents 记录瞬间，父母添加里程碑，AI按时间线整理。自动生成成长时间线和"去年今日"回忆。',
    },
    {
      icon: <Target size={40} className="text-[#A8B5A0]" />,
      title: '角色化知识推送',
      desc: '同一育儿主题，不同视角：祖父母看到"传统智慧 + 现代安全更新"，父母看到"循证指导 + 实操技巧"。',
    },
    {
      icon: <Handshake size={40} className="text-[#D4A574]" />,
      title: '智能冲突调解',
      desc: 'AI检测到育儿分歧模式，提供中立、循证的建议引导家庭达成共识。从不站队。',
    },
    {
      icon: <BookOpen size={40} className="text-[#A67E75]" />,
      title: '智慧传承档案馆',
      desc: '祖父母口述的育儿故事经AI转录整理，汇编成家传育儿智慧书——留给后代的数字遗产。',
    },
  ]

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <p className="text-overline text-[#A8B5A0] mb-3">核心功能</p>
          <h2 className="font-display text-h2 text-[#2D2422] mb-10">
            家庭和谐的四大支柱
          </h2>
        </FadeIn>

        {/* Function Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {functions.map((fn, i) => (
            <FadeIn key={fn.title} delay={i * 0.12}>
              <div className="bg-white rounded-[24px] p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="mb-4">{fn.icon}</div>
                <h3 className="font-body text-lg font-semibold text-[#2D2422] mb-2">
                  {fn.title}
                </h3>
                <p className="font-body text-sm text-[#6B5E5A] leading-relaxed">
                  {fn.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 5: AI Mediation Engine ─── */
function AIMediationSection() {
  const steps = [
    {
      icon: <BarChart3 size={40} className="text-[#C9A9A1]" />,
      title: '检测',
      desc: '模式识别：喂养、睡眠、管教上的反复分歧。家庭消息情绪分析。频率 + 强度评分。',
    },
    {
      icon: <Scale size={40} className="text-[#A8B5A0]" />,
      title: '建议',
      desc: '来自儿科指南的循证建议。同时尊重传统智慧和现代科学。从不给任何一方贴上"错误"标签。',
    },
    {
      icon: <Heart size={40} className="text-[#D4A574]" />,
      title: '凝聚',
      desc: '家庭会议安排。共同目标设定。进度追踪。庆祝微小共识，逐步建立信任。',
    },
  ]

  return (
    <section className="w-full bg-[#2D2422] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <p className="text-overline text-[rgba(251,247,243,0.5)] mb-3">AI调解引擎</p>
          <h2 className="font-display text-h2 text-white">
            中立。循证。始终尊重。
          </h2>
        </FadeIn>

        {/* 3-Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="bg-[rgba(232,213,208,0.1)] border border-[rgba(251,247,243,0.1)] rounded-[24px] p-6 text-center h-full">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="font-body text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[rgba(251,247,243,0.7)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Arrows between steps (desktop) */}
        <div className="hidden md:flex justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-[rgba(251,247,243,0.3)]">
            <span className="text-sm">冲突检测</span>
            <ArrowRight size={16} />
            <span className="text-sm">中立建议</span>
            <ArrowRight size={16} />
            <span className="text-sm">家庭共识</span>
          </div>
        </div>

        {/* Example Mediation */}
        <FadeIn delay={0.4}>
          <div className="max-w-[640px] mx-auto bg-[rgba(251,247,243,0.05)] rounded-[24px] p-6 border border-[rgba(251,247,243,0.08)]">
            <h4 className="font-body text-base font-semibold text-white mb-4">
              示例：喂养冲突
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Users size={18} className="text-[#A8B5A0] shrink-0 mt-0.5" />
                <p className="font-body text-sm text-[rgba(251,247,243,0.8)]">
                  <span className="font-medium text-[#A8B5A0]">奶奶：</span>
                  &ldquo;米汤对宝宝好。我们以前都这样做。&rdquo;
                </p>
              </div>
              <div className="flex gap-3">
                <Heart size={18} className="text-[#C9A9A1] shrink-0 mt-0.5" />
                <p className="font-body text-sm text-[rgba(251,247,243,0.8)]">
                  <span className="font-medium text-[#C9A9A1]">妈妈：</span>
                  &ldquo;儿科医生说6个月前不加辅食。&rdquo;
                </p>
              </div>
              <div className="flex gap-3">
                <Sparkles size={18} className="text-[#D4A574] shrink-0 mt-0.5" />
                <p className="font-body text-sm text-[rgba(251,247,243,0.9)]">
                  <span className="font-medium text-[#D4A574]">FamilyBridge：</span>
                  &ldquo;两种观点都源于爱。当前AAP指南建议纯母乳/配方奶至6个月。这里有个折中方案：奶奶可以在6个月后准备米汤，而在此之前，专注于摇篮曲——研究显示这同样有效地增进亲子纽带。&rdquo;
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── Section 6: Wisdom Preservation ─── */
function WisdomPreservationSection() {
  const steps = [
    {
      icon: <Mic size={48} className="text-[#A8B5A0]" />,
      title: '语音记录',
      desc: '祖父母自然讲述——讲故事、分享食谱、回忆育儿往事。无需打字，无需学习。只需按下说话。',
    },
    {
      icon: <Sparkles size={48} className="text-[#A8B5A0]" />,
      title: 'AI整理',
      desc: '带方言支持的语音转文字。AI按主题组织："睡眠智慧""喂养传统""家族故事"。去重留真。',
    },
    {
      icon: <BookMarked size={48} className="text-[#A8B5A0]" />,
      title: '家庭之书',
      desc: '自动生成的数字书，包含照片、语音片段和精选文字。可打印版用于家庭聚会。可与大家庭分享。',
    },
    {
      icon: <InfinityIcon size={48} className="text-[#A8B5A0]" />,
      title: '永恒传承',
      desc: '永久性家庭档案。孙辈将听到曾祖母的声音。育儿智慧超越世代——以家庭自己的语言保存。',
    },
  ]

  return (
    <section className="w-full bg-[#F5EDE6] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <p className="text-overline text-[#A8B5A0] mb-3">智慧传承</p>
          <h2 className="font-display text-h2 text-[#2D2422]">
            每位奶奶的故事，永存不朽
          </h2>
        </FadeIn>

        {/* Vertical Steps */}
        <div className="max-w-[640px] mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="font-body text-xl font-semibold text-[#2D2422] mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-body text-[#6B5E5A] max-w-[480px]">
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <ChevronDown size={28} className="text-[#A8B5A0] my-4 opacity-50" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 7: Technology ─── */
function TechnologySection() {
  const techs = [
    {
      icon: <Languages size={40} className="text-[#A8B5A0]" />,
      title: '方言识别',
      desc: '普通话 + 7大方言：粤语、上海话、四川话、湖南话、闽南语、客家话、东北话。针对老年人优化的语音识别模式。',
    },
    {
      icon: <Scale size={40} className="text-[#D4A574]" />,
      title: '冲突检测与调解',
      desc: '基于NLP的分歧模式识别。循证建议引擎，基于儿科指南训练。用于升级检测的情绪分析。',
    },
    {
      icon: <MessageCircle size={40} className="text-[#C9A9A1]" />,
      title: '微信小程序',
      desc: '零下载门槛。祖父母已在用微信。父母每日使用。在家庭已沟通的生态系统中获客成本低。',
    },
  ]

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <p className="text-overline text-[#A8B5A0] mb-3">技术</p>
          <h2 className="font-display text-h2 text-[#2D2422] mb-10">
            为祖父母的沟通方式而建
          </h2>
        </FadeIn>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techs.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.15}>
              <div className="bg-white rounded-[24px] p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="mb-4">{t.icon}</div>
                <h3 className="font-body text-lg font-semibold text-[#2D2422] mb-2">
                  {t.title}
                </h3>
                <p className="font-body text-sm text-[#6B5E5A] leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 8: Business Model ─── */
function BusinessModelSection() {
  const b2bPaths = [
    { title: '月子中心', desc: '家庭协调服务延伸' },
    { title: '社区养老', desc: '数字化家庭连接项目' },
    { title: '幼儿园', desc: '家校连续性平台' },
  ]

  return (
    <section className="w-full bg-[#F5EDE6] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-10">
          <p className="text-overline text-[#A8B5A0] mb-3">商业模式</p>
          <h2 className="font-display text-h2 text-[#2D2422]">按家庭，按月</h2>
        </FadeIn>

        {/* Pricing Card */}
        <FadeIn delay={0.1} className="flex justify-center mb-10">
          <motion.div
            className="bg-white rounded-[32px] p-8 shadow-lg max-w-[450px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number],
            }}
          >
            <p className="font-mono text-[clamp(2rem,4vw,3rem)] font-bold text-[#A8B5A0] text-center">
              &yen;29-49<span className="text-lg">/月</span>
            </p>
            <p className="font-body text-base font-medium text-[#2D2422] text-center mb-6">
              每家庭账号，成员不限
            </p>

            <div className="border-t border-[rgba(201,169,161,0.2)] pt-5">
              <p className="font-body text-sm font-medium text-[#2D2422] mb-3">包含：</p>
              <ul className="space-y-2 mb-5">
                {[
                  '3个终端（祖父母 + 父母 + 孩子）',
                  '无限照片存储',
                  '基础调解（10次/月）',
                  '智慧记录（100分钟/月）',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check size={16} className="text-[#A8B5A0] mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-[#6B5E5A]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#F5EDE6] rounded-[16px] p-4">
                <p className="font-body text-sm font-semibold text-[#D4A574] mb-1">
                  高级版（&yen;49）
                </p>
                <p className="font-body text-xs text-[#6B5E5A]">
                  无限调解 + 无限智慧记录 + 优先方言支持 + 可打印家庭之书
                </p>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        {/* B2B Paths */}
        <FadeIn delay={0.2}>
          <p className="text-center text-overline text-[#A8B5A0] mb-4">B2B路径</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {b2bPaths.map((p, i) => (
            <FadeIn key={p.title} delay={0.3 + i * 0.1}>
              <div className="bg-white rounded-[24px] p-6 shadow-sm text-center">
                <h4 className="font-body text-base font-semibold text-[#2D2422] mb-1">
                  {p.title}
                </h4>
                <p className="font-body text-sm text-[#6B5E5A]">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 9: MVP Roadmap ─── */
function MVPRoadmapSection() {
  const phases = [
    {
      badge: '第一阶段',
      badgeColor: 'bg-[#C9A9A1]',
      title: '微信小程序（第1-6个月）',
      desc: '多用户相册 + 语音消息 + 基础知识推送',
    },
    {
      badge: '第二阶段',
      badgeColor: 'bg-[#A8B5A0]',
      title: 'AI功能（第7-12个月）',
      desc: '冲突检测 + 调解建议 + 智慧整理',
    },
    {
      badge: '第三阶段',
      badgeColor: 'bg-[#D4A574]',
      title: '完整平台（第13-18个月）',
      desc: '专用祖父母终端 + 方言ASR + 家庭之书生成 + B2B合作',
    },
  ]

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <p className="text-overline text-[#A8B5A0] mb-3">MVP路线图</p>
          <h2 className="font-display text-h2 text-[#2D2422] mb-6">
            18个月实现家庭和谐
          </h2>
        </FadeIn>

        {/* Priority Note */}
        <FadeIn delay={0.1}>
          <div className="bg-[#D4DBD0] rounded-[16px] p-4 mb-10 max-w-[800px]">
            <p className="font-body text-body text-[#2D2422]">
              FamilyBridge 是 #5 优先项目（长期），因为它需要用户基础
              和多边协调。然而，其网络效应和TAM使其成为最有价值的长期平台。
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="space-y-6 max-w-[800px]">
          {phases.map((phase, i) => (
            <FadeIn key={phase.title} delay={0.2 + i * 0.15}>
              <div className="flex items-start gap-4 bg-white rounded-[24px] p-6 shadow-md">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-white text-xs font-semibold shrink-0 ${phase.badgeColor}`}
                >
                  {phase.badge}
                </span>
                <div>
                  <h3 className="font-body text-lg font-semibold text-[#2D2422] mb-1">
                    {phase.title}
                  </h3>
                  <p className="font-body text-sm text-[#6B5E5A]">{phase.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Main Page Component ─── */
export default function FamilyBridge() {
  return (
    <main className="w-full">
      <HeroSection />
      <CoreInsightSection />
      <ThreeTerminalsSection />
      <CoreFunctionsSection />
      <AIMediationSection />
      <WisdomPreservationSection />
      <TechnologySection />
      <BusinessModelSection />
      <MVPRoadmapSection />
    </main>
  )
}
