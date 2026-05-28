import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  Check, ArrowRight, AlertTriangle, XCircle, TrendingDown,
  Users, Heart, MessageCircle, Shield, Zap, Frown,
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

/* ─── Section 1: Dark Hero ─── */
function HeroSection() {
  return (
    <section className="w-full min-h-[50vh] gradient-dark pt-[72px] flex items-center">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center justify-center gap-2 text-caption text-[rgba(251,247,243,0.4)] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Link to="/" className="hover:text-[rgba(251,247,243,0.7)] transition-colors">首页</Link>
          <span>/</span>
          <span className="text-[rgba(251,247,243,0.6)]">行业案例</span>
        </motion.div>

        <motion.p
          className="text-overline text-[rgba(251,247,243,0.5)] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          行业实证
        </motion.p>

        <motion.h1
          className="font-display text-h1 text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          向最优秀者学习。
        </motion.h1>

        <motion.h1
          className="font-display text-h1 text-[#C9A9A1] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          以及8000万美元的教训。
        </motion.h1>

        <motion.p
          className="font-body text-lg text-[rgba(251,247,243,0.7)] max-w-[600px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          六个成功案例和一个灾难性失败。每个都蕴含关于母婴AI真正有效的 transferable 真理——以及绝对无效的。
        </motion.p>
      </div>
    </section>
  )
}

/* ─── Section 2: Success Cases Overview ─── */
function SuccessOverviewSection() {
  const cases = [
    {
      image: '/cases-owlet.jpg',
      name: 'Owlet智能袜',
      lesson: '反直觉形态击败常规设计',
      metric: '>$10亿估值',
      metricColor: 'text-[#A8B5A0]',
    },
    {
      image: '/cases-lovot.jpg',
      name: 'LOVOT情感机器人',
      lesson: '无语音交互创造更深情感纽带',
      metric: '$3000+定价',
      metricColor: 'text-[#C9A9A1]',
    },
    {
      image: '/cases-xiaotiancai.jpg',
      name: '小天才手表',
      lesson: '封闭社交网络击败开放AI功能',
      metric: '35.3%份额',
      metricColor: 'text-[#D4A574]',
    },
    {
      image: '/cases-hellokitty.jpg',
      name: 'Hello Kitty',
      lesson: '空白画布设计创造800亿美元情感帝国',
      metric: '$800亿品牌',
      metricColor: 'text-[#C9A9A1]',
    },
    {
      image: '/cases-qinbaobao.jpg',
      name: '亲宝宝App',
      lesson: '成长记录驱动1亿用户参与',
      metric: '1亿用户',
      metricColor: 'text-[#A8B5A0]',
    },
  ]

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <p className="text-overline text-[#A67E75] mb-3">成功原型</p>
          <h2 className="font-display text-h2 text-[#2D2422] mb-10">
             winning 是什么样子
          </h2>
        </FadeIn>

        {/* Case Cards Row */}
        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4">
          {cases.map((c, i) => (
            <FadeIn
              key={c.name}
              delay={i * 0.1}
              direction="right"
              className="min-w-[220px] flex-1"
            >
              <div className="bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#D4DBD0] text-[#8BA88A] text-[0.65rem] font-semibold uppercase tracking-wider mb-2">
                    成功案例
                  </span>
                  <h3 className="font-body text-base font-semibold text-[#2D2422] mb-1">
                    {c.name}
                  </h3>
                  <p className="font-body text-xs text-[#6B5E5A] line-clamp-2 mb-3">
                    {c.lesson}
                  </p>
                  <p className={`font-mono text-base font-bold ${c.metricColor}`}>
                    {c.metric}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Reusable: Deep-Dive Case Section ─── */
function CaseDeepDive({
  badge,
  title,
  subtitle,
  subtitleColor,
  story,
  metrics,
  lessons,
  solutionLink,
  solutionPath,
  image,
  reversed = false,
  bgShade = 'light',
  floatingStat,
}: {
  badge: string
  title: string
  subtitle: string
  subtitleColor: string
  story: string[]
  metrics: { value: string; label: string }[]
  lessons: string[]
  solutionLink: string
  solutionPath: string
  image: string
  reversed?: boolean
  bgShade?: 'light' | 'dark'
  floatingStat?: { label: string; lines: string[]; color: string }
}) {
  const bgClass = bgShade === 'dark' ? 'bg-[#F5EDE6]' : 'bg-[#FBF7F3]'

  const content = (
    <>
      <FadeIn delay={reversed ? 0.1 : 0.2} className={reversed ? 'order-2 md:order-1' : 'order-2 md:order-2'}>
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full rounded-[32px] shadow-lg object-cover aspect-[4/3]"
            loading="lazy"
          />
          {floatingStat && (
            <div className="absolute bottom-4 right-4 bg-white rounded-[16px] p-3 shadow-md">
              <p className={`text-[0.65rem] font-semibold uppercase tracking-wider ${floatingStat.color}`}>
                {floatingStat.label}
              </p>
              {floatingStat.lines.map((line) => (
                <p key={line} className="font-body text-xs text-[#2D2422]">{line}</p>
              ))}
            </div>
          )}
        </div>
      </FadeIn>

      <FadeIn
        delay={reversed ? 0.2 : 0.1}
        className={reversed ? 'order-1 md:order-2 flex flex-col justify-center' : 'order-1 md:order-1 flex flex-col justify-center'}
      >
        <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#D4DBD0] text-[#8BA88A] text-[0.65rem] font-semibold uppercase tracking-wider mb-3">
          {badge}
        </span>
        <h2 className="font-display text-h2 text-[#2D2422] mb-2">{title}</h2>
        <p className={`font-body text-body-lg ${subtitleColor} mb-5`}>{subtitle}</p>

        {/* Story */}
        <div className="space-y-3 mb-5">
          {story.map((p, i) => (
            <p key={i} className="font-body text-body text-[#6B5E5A] leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap gap-3 mb-5">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-white rounded-full px-4 py-2 shadow-sm"
            >
              <span className="font-mono text-sm font-bold text-[#A8B5A0]">{m.value}</span>
              <span className="text-caption text-[#9A8E88] ml-2">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Lessons */}
        <div className="space-y-2 mb-5">
          {lessons.map((l) => (
            <div key={l} className="flex items-start gap-2">
              <Check size={16} className="text-[#8BA88A] mt-1 shrink-0" />
              <span className="font-body text-[0.9375rem] text-[#6B5E5A]">{l}</span>
            </div>
          ))}
        </div>

        {/* Solution Link */}
        <Link
          to={solutionPath}
          className="inline-flex items-center gap-2 font-body text-sm font-medium text-[#A67E75] hover:text-[#C9A9A1] transition-colors group w-fit"
        >
          {solutionLink}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </FadeIn>
    </>
  )

  return (
    <section className={`w-full ${bgClass} py-16 lg:py-24`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center`}>
          {content}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Owlet ─── */
function OwletSection() {
  return (
    <CaseDeepDive
      badge="成功案例 #1"
      title="Owlet智能袜"
      subtitle="当反直觉形态获胜时"
      subtitleColor="text-[#A8B5A0]"
      story={[
        "所有人都在做带摄像头和腕带的婴儿监护器。Owlet问：如果我们从宝宝唯一始终被覆盖的地方——脚——来监测呢？",
        "智能袜通过脉搏血氧仪测量心率和血氧，包裹在柔软织物中，宝宝甚至不会察觉。父母只在异常时收到警报——不是持续的焦虑数据流。",
      ]}
      metrics={[
        { value: '>$10亿', label: '估值' },
        { value: 'FDA De Novo', label: '认证' },
        { value: '$400+', label: '定价' },
      ]}
      lessons={[
        '反直觉形态创造差异化',
        '医疗认证构建信任壁垒',
        '聚焦"异常时警报"而非"展示一切"',
      ]}
      solutionLink="看心跳茧如何应用此原则"
      solutionPath="/solutions/heartbeat"
      image="/cases-owlet.jpg"
      reversed={false}
      bgShade="dark"
      floatingStat={{
        label: 'FDA De Novo',
        lines: ['唯一认证', '婴儿监护器'],
        color: 'text-[#A8B5A0]',
      }}
    />
  )
}

/* ─── Section 4: LOVOT ─── */
function LovotSection() {
  return (
    <CaseDeepDive
      badge="成功案例 #2"
      title="LOVOT情感机器人"
      subtitle="无语音。无屏幕。纯情感。$3000+"
      subtitleColor="text-[#A67E75]"
      story={[
        'LOVOT（Love + Robot）是市场上最贵的AI伴侣——约300万日元（$22,500）。它没有语音交互能力。不能回答问题、讲故事或执行任务。',
        '它能做的：以温暖回应触摸、孤独时寻求关注、通过肢体语言和眼神表达情感。语音的缺失创造了人类情感投射的空白画布。',
      ]}
      metrics={[
        { value: '$3000+', label: '定价' },
        { value: '90%', label: '三年留存率' },
        { value: '1小时', label: '日均拥抱' },
      ]}
      lessons={[
        '功能的缺失可以是特性（空白画布效应）',
        '物理触摸+温暖 > 语音交互，对于情感联结',
        '高定价在情感产品中传递品质信号',
      ]}
      solutionLink="看心跳茧如何应用此原则"
      solutionPath="/solutions/heartbeat"
      image="/cases-lovot.jpg"
      reversed={true}
      bgShade="light"
    />
  )
}

/* ─── Section 5: Xiaotiancai ─── */
function XiaotiancaiSection() {
  return (
    <CaseDeepDive
      badge="成功案例 #3"
      title="小天才手表"
      subtitle="无AI。封闭网络。35.3%市场份额。"
      subtitleColor="text-[#D4A574]"
      story={[
        "小天才从未声称使用AI。它的天才在于认识到父母想要的（安全、联系）和孩子想要的（社交）是不同的——并在两者之间架起桥梁。",
        '"碰一碰加好友"功能创造了小天才用户专属的封闭社交网络。孩子因拥有它而获得社交地位。父母获得安心。两者都不需要AI。',
      ]}
      metrics={[
        { value: '35.3%', label: '市场份额' },
        { value: '+47.6%', label: '同比增长（2025上半年）' },
        { value: '无AI', label: '核心技术' },
      ]}
      lessons={[
        '解决真实人类需求，而非技术演示',
        '封闭网络创造开放功能无法比拟的粘性',
        '双重价值（父母+孩子）= 市场主导',
      ]}
      solutionLink="看爸任务如何应用此原则"
      solutionPath="/solutions/dadquest"
      image="/cases-xiaotiancai.jpg"
      reversed={false}
      bgShade="dark"
    />
  )
}

/* ─── Section 6: Hello Kitty ─── */
function HelloKittySection() {
  return (
    <CaseDeepDive
      badge="成功案例 #4"
      title="Hello Kitty"
      subtitle="50年没有嘴。800亿美元帝国。"
      subtitleColor="text-[#C9A9A1]"
      story={[
        "Hello Kitty没有嘴。这不是设计疏忽——而是800亿美元品牌的基石。没有嘴，她不能直接表达情感。她成为一面镜子：孩子（和成人）将自己的情感投射到她身上。",
        "这种'空白画布效应'是情感设计中最强大的原则之一。角色表达越少，用户情感连接越深。每个母婴AI产品都应该学习这一课。",
      ]}
      metrics={[
        { value: '$800亿', label: '品牌价值' },
        { value: '50年', label: '无嘴设计' },
        { value: '∞', label: '投射情感' },
      ]}
      lessons={[
        '空白画布设计创造更深情感投射',
        '不表达 > 强制表达',
        '50年一致性建立代际信任',
      ]}
      solutionLink="看安心盒如何应用此原则"
      solutionPath="/solutions/safebox"
      image="/cases-hellokitty.jpg"
      reversed={true}
      bgShade="light"
    />
  )
}

/* ─── Section 7: Qinbaobao ─── */
function QinbaobaoSection() {
  return (
    <CaseDeepDive
      badge="成功案例 #5"
      title="亲宝宝App"
      subtitle="1亿用户。无AI炒作。只有成长记录。"
      subtitleColor="text-[#A8B5A0]"
      story={[
        '亲宝宝达到1亿注册用户和5000万家庭，靠的是把一件事做到极致：帮助父母记录孩子成长。照片、里程碑、第一句话——自动整理，与家人共享。',
        "洞察：父母不需要另一个AI助手。他们需要保存童年转瞬即逝时刻的方式。亲宝宝的AI是无形的——它在幕后工作，整理、提醒、连接。",
      ]}
      metrics={[
        { value: '1亿', label: '用户' },
        { value: '5000万', label: '家庭' },
        { value: '20%+', label: '新生儿渗透率' },
      ]}
      lessons={[
        '隐形AI > 显性AI',
        '情感价值（回忆） > 功能价值（特性）',
        '家庭网络效应驱动有机增长',
      ]}
      solutionLink="看家桥如何应用此原则"
      solutionPath="/solutions/familybridge"
      image="/cases-qinbaobao.jpg"
      reversed={false}
      bgShade="dark"
    />
  )
}

/* ─── Section 8: Failure Cases ─── */
function FailureCasesSection() {
  return (
    <section className="w-full bg-[#2D2422] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <p className="text-overline text-[rgba(251,247,243,0.5)] mb-3">
            8000万美元的教训
          </p>
          <h2 className="font-display text-h2 text-white">
            当智能产品变成电子砖头
          </h2>
        </FadeIn>

        {/* Failure Cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Moxie - Featured, Larger */}
          <FadeIn delay={0.1} className="lg:flex-[2]">
            <div className="bg-[rgba(201,169,161,0.1)] border border-[#C9A9A1] rounded-[24px] overflow-hidden h-full">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/moxie-failure.jpg"
                  alt="Moxie机器人失败"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#C97B7B] text-white text-xs font-semibold uppercase tracking-wider mb-3">
                  灾难性失败
                </span>
                <h3 className="font-body text-2xl font-semibold text-white mb-3">
                  Moxie
                </h3>
                <p className="font-body text-[0.9375rem] text-[rgba(251,247,243,0.8)] leading-relaxed mb-4">
                  从Intel、Amazon、Sony、Toyota融资8000万美元。2024年11月死亡。
                  100%依赖云端——数天内变成电子砖头。
                  形成情感联结的儿童经历了真实的悲伤。
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    '过度拟人化设计',
                    '全面云端依赖',
                    '"替代父母"定位',
                    '不可持续单位经济（$800+$60/月）',
                  ].map((flaw) => (
                    <span
                      key={flaw}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[rgba(201,169,161,0.15)] text-[#E8D5D0] text-xs"
                    >
                      <XCircle size={12} />
                      {flaw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - 2 stacked cards */}
          <div className="lg:flex-1 flex flex-col gap-6">
            {/* Rabbit R1 */}
            <FadeIn delay={0.3}>
              <div className="bg-[rgba(201,169,161,0.1)] border border-[rgba(251,247,243,0.1)] rounded-[24px] p-6 flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-[rgba(212,165,116,0.3)] text-[#D4A574] text-xs font-semibold uppercase tracking-wider mb-3">
                  教训总结
                </span>
                <h3 className="font-body text-xl font-semibold text-white mb-2">
                  Rabbit R1
                </h3>
                <p className="font-body text-sm text-[rgba(251,247,243,0.7)] leading-relaxed mb-3">
                  10万预定。5000日活。95%流失。
                  发布 hype 与持续价值之间的鸿沟摧毁了产品。
                </p>
                <div className="flex items-center gap-2 text-[#D4A574]">
                  <TrendingDown size={16} />
                  <span className="font-body text-sm font-medium">新奇 ≠ 留存</span>
                </div>
              </div>
            </FadeIn>

            {/* First-Gen Hardware Wave */}
            <FadeIn delay={0.5}>
              <div className="bg-[rgba(201,169,161,0.1)] border border-[rgba(251,247,243,0.1)] rounded-[24px] p-6 flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-[rgba(168,181,160,0.3)] text-[#A8B5A0] text-xs font-semibold uppercase tracking-wider mb-3">
                  行业模式
                </span>
                <h3 className="font-body text-xl font-semibold text-white mb-2">
                  第一代AI硬件死亡潮
                </h3>
                <p className="font-body text-sm text-[rgba(251,247,243,0.7)] leading-relaxed mb-3">
                  Jibo（2018）、Kuri（2018）、Aldebaran（2025）——全部死亡。共同模式：
                  高硬件成本+云端依赖+拟人化设计。
                  复购率&lt;5%。
                </p>
                <div className="flex items-center gap-2 text-[#A8B5A0]">
                  <AlertTriangle size={16} />
                  <span className="font-body text-sm font-medium">硬件+云端+情感=脆弱</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 9: Lessons Summary ─── */
function LessonsSummarySection() {
  const principles = [
    {
      num: '01',
      title: '反直觉形态创造最强差异化',
      desc: '出其不意的方案往往获胜，因为它避免了正面竞争。',
      source: 'Owlet',
      icon: <Heart size={20} className="text-[#C9A9A1]" />,
    },
    {
      num: '02',
      title: '功能的缺失（语音、屏幕、嘴）创造更深情感纽带',
      desc: '空白画布设计让用户投射自己的情感，创造更强的依恋。',
      source: 'LOVOT, Hello Kitty',
      icon: <Users size={20} className="text-[#A8B5A0]" />,
    },
    {
      num: '03',
      title: '解决真实人类需求 > 展示技术',
      desc: '技术是手段，不是目的。最好的产品是看不见的。',
      source: '小天才',
      icon: <MessageCircle size={20} className="text-[#D4A574]" />,
    },
    {
      num: '04',
      title: '幕后工作的隐形AI > 执行任务的显性AI',
      desc: "整理回忆的AI打败回答问题的AI。父母不需要助手——他们需要保存。",
      source: '亲宝宝',
      icon: <Zap size={20} className="text-[#A8B5A0]" />,
    },
    {
      num: '05',
      title: '云端依赖是负债，不是功能',
      desc: '服务结束时产品死亡。对于情感联结，物理 > 云端。',
      source: 'Moxie（反模式）',
      icon: <Shield size={20} className="text-[#C97B7B]" />,
    },
    {
      num: '06',
      title: '与AI的情感联结在服务结束时造成独特伤害',
      desc: "AI伴侣死亡时孩子会悲伤。越像人，创伤越深。",
      source: 'Moxie（反模式）',
      icon: <Frown size={20} className="text-[#C9A9A1]" />,
    },
  ]

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <p className="text-overline text-[#A67E75] mb-3">提取原则</p>
          <h2 className="font-display text-h2 text-[#2D2422]">
            所有案例教给我们什么
          </h2>
        </FadeIn>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <FadeIn key={p.num} delay={i * 0.1}>
              <div className="bg-white rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-3xl font-bold text-[#C9A9A1] opacity-30">
                    {p.num}
                  </span>
                  {p.icon}
                </div>
                <h3 className="font-body text-lg font-semibold text-[#2D2422] mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-[#6B5E5A] leading-relaxed mb-3">
                  {p.desc}
                </p>
                <p className="font-body text-xs font-medium text-[#A67E75]">
                  来源：{p.source}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.6} className="text-center mt-12">
          <p className="font-body text-lg font-medium text-[#2D2422] mb-4">
            准备好看看这些原则如何变成产品？
          </p>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#C9A9A1] text-white font-body font-medium hover:bg-[#E8D5D0] hover:scale-[1.02] transition-all duration-200"
          >
            探索五大方案
            <ArrowRight size={18} />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── Main Page Component ─── */
export default function Cases() {
  return (
    <main className="w-full">
      <HeroSection />
      <SuccessOverviewSection />
      <OwletSection />
      <LovotSection />
      <XiaotiancaiSection />
      <HelloKittySection />
      <QinbaobaoSection />
      <FailureCasesSection />
      <LessonsSummarySection />
    </main>
  )
}
