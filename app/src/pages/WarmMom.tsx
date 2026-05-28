import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Heart,
  MessageCircle,
  Smile,
  Watch,
  Users,
  Hospital,
  Activity,
  Moon,
  Brain,
  Stethoscope,
  Languages,
  ArrowRight,
} from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number]
const easeSpring = [0.175, 0.885, 0.32, 1.275] as [number, number, number, number]

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

/* ─── Section 1: Hero ─── */
function HeroSection() {
  return (
    <section
      className="w-full min-h-[70vh] flex items-center"
      style={{
        background: 'linear-gradient(135deg, #FBF7F3 0%, #F0E6E8 50%, #E8D5D0 100%)',
        paddingTop: '72px',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            className="flex-1 lg:flex-[55]"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerChild} className="flex items-center gap-2 mb-4">
              <Link to="/" className="font-body text-sm text-[#9A8E88] hover:text-[#A67E75] transition-colors">
                首页
              </Link>
              <ChevronRight size={14} className="text-[#9A8E88]" />
              <Link to="/solutions" className="font-body text-sm text-[#9A8E88] hover:text-[#A67E75] transition-colors">
                解决方案
              </Link>
              <ChevronRight size={14} className="text-[#9A8E88]" />
              <span className="font-body text-sm text-[#9A8E88]">WarmMom</span>
            </motion.div>

            <motion.div variants={staggerChild} className="mb-4">
              <span className="inline-flex items-center justify-center w-10 h-8 rounded-md bg-[#A67E75] text-white font-body text-sm font-semibold">
                04
              </span>
            </motion.div>

            <motion.h1
              variants={staggerChild}
              className="font-display text-h1 text-[#2D2422]"
            >
              WarmMom
            </motion.h1>
            <motion.p variants={staggerChild} className="font-body text-xl text-[#9A8E88] mt-1">
              暖妈
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="font-body text-body-lg font-medium mt-4"
              style={{ color: '#A67E75' }}
            >
              AI为母亲，而非仅为孩子。
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="font-body text-body text-[#6B5E5A] mt-4 max-w-[480px]"
            >
              产后抑郁影响17.98%的新妈妈——在中国每年就有150万至200万女性。
              然而每一款母婴AI产品都只关注宝宝。WarmMom是首款为母亲心理健康设计的AI伴侣：
              基于CBT的对话、被动情绪监测、必要时专业转介。
            </motion.p>

            <motion.div
              variants={staggerChild}
              className="flex flex-wrap gap-6 mt-6"
            >
              {[
                { value: '17.98%', label: '产后抑郁率' },
                { value: '150-200万', label: '每年患病妈妈' },
                { value: '43-130万', label: '治疗师缺口' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-mono text-2xl font-bold text-[#A67E75]">{stat.value}</span>
                  <span className="font-body text-xs text-[#6B5E5A]">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={staggerChild} className="mt-8">
              <a
                href="#therapy"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#A67E75] text-white font-body font-medium hover:bg-[#E8D5D0] hover:scale-[1.02] transition-all duration-200"
              >
                看看如何疗愈
                <ChevronRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 lg:flex-[45]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeSpring, delay: 0.3 }}
          >
            <div
              className="relative rounded-[32px] overflow-hidden shadow-xl"
              style={{ boxShadow: '0 24px 60px rgba(45,36,34,0.10), 0 0 80px rgba(166,126,117,0.2)' }}
            >
              <img
                src="/warmmom-hero.jpg"
                alt="宁静的母亲享受属于自己的时刻"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <motion.div
                className="absolute inset-0 rounded-[32px] pointer-events-none"
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  boxShadow: 'inset 0 0 80px rgba(166,126,117,0.2)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2: Core Insight ─── */
function CoreInsightSection() {
  return (
    <section className="w-full bg-[#FBF7F3]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="text-overline text-[#A67E75]">核心洞察</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">
            宝宝有100个应用。妈妈一个都没有。
          </h2>
        </motion.div>

        {/* 3 Crisis Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0 }}
          >
            <span className="font-mono text-data text-[#C97B7B]">17.98%</span>
            <p className="font-body text-body text-[#6B5E5A] mt-2">
              产后抑郁发病率
            </p>
            <p className="font-body text-sm text-[#9A8E88] mt-2">
              中国每年150-200万新妈妈受影响
            </p>
            <p className="font-body text-[0.9375rem] font-medium text-[#A67E75] mt-3">
              这相当于每年一个爱沙尼亚的人口。
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
          >
            <span className="font-mono text-data text-[#D4A574]">43-130万</span>
            <p className="font-body text-body text-[#6B5E5A] mt-2">
              心理治疗师缺口
            </p>
            <p className="font-body text-sm text-[#9A8E88] mt-2">
              合格专业人员 vs 需求差距
            </p>
            <p className="font-body text-[0.9375rem] font-medium text-[#A67E75] mt-3">
              即使寻求帮助的妈妈，往往也找不到治疗师。
            </p>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
          >
            <span className="font-mono text-data text-[#A67E75]">0</span>
            <p className="font-body text-body text-[#6B5E5A] mt-2">
              专用于母亲心理健康的AI产品
            </p>
            <p className="font-body text-sm text-[#9A8E88] mt-2">
              而市场上有4300+款专注宝宝的产品
            </p>
            <p className="font-body text-[0.9375rem] font-medium text-[#A67E75] mt-3">
              这不仅是市场机遇，更是道德责任。
            </p>
          </motion.div>
        </div>

        {/* Woebot Validation Card */}
        <motion.div
          className="mt-12 bg-[#F5EDE6] rounded-[24px] p-6 lg:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
        >
          <h3 className="font-body text-xl font-semibold text-[#8BA88A] mb-3">
            临床验证：AI治疗有效
          </h3>
          <p className="font-body text-body text-[#6B5E5A]">
            Woebot的产后抑郁RCT（随机对照试验）显示EPDS评分降低5分以上。
            AI递送的CBT不是人类治疗师的替代——它是可规模化的第一道防线，
            触达那些否则将默默承受的母亲。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#A8B5A0] text-white font-body text-xs font-semibold">
              EPDS ↓5+分
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#A8B5A0] text-white font-body text-xs font-semibold">
              RCT验证
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 3: Product Design (5 Layers) ─── */
function ProductDesignSection() {
  const layers = [
    {
      icon: MessageCircle,
      title: '语音CBT对话',
      desc: 'AI引导的认知行为治疗，通过语音进行。每日签到、情绪追踪、思维记录练习。永远在场，永远无评判。',
    },
    {
      icon: Smile,
      title: '情绪监测',
      desc: '语音情绪识别 + 自然语言理解。追踪数周情绪趋势，而非单点瞬间。识别自我报告无法发现的模式。',
    },
    {
      icon: Watch,
      title: '被动可穿戴监测',
      desc: '来自可穿戴设备的心率变异性、睡眠质量和活动水平。早期预警系统：当生理指标与抑郁风险对齐时，主动提醒。',
    },
    {
      icon: Users,
      title: '同伴社区',
      desc: '有管理的同伴支持小组。"同期妈妈"匹配。匿名分享，专业监督。减少孤立——产后抑郁的关键风险因素。',
    },
    {
      icon: Hospital,
      title: '专业转介',
      desc: '当EPDS评分或生理指标越过阈值时，自动转介至合作医院/临床医生。从AI到人类关怀的无缝升级。',
    },
  ]

  const pyramidLevels = [
    { label: '每日AI陪伴', color: '#D4DBD0', width: '100%' },
    { label: '情绪追踪', color: '#A8B5A0', width: '85%' },
    { label: '可穿戴监测', color: '#E8D5D0', width: '70%' },
    { label: '社区支持', color: '#C9A9A1', width: '55%' },
    { label: '专业照护', color: '#A67E75', width: '40%' },
  ]

  return (
    <section className="w-full bg-[#F5EDE6] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="text-overline text-[#A67E75]">产品设计</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">五层关怀体系</h2>
        </motion.div>

        {/* Layer Cards */}
        <div className="max-w-[800px] mx-auto space-y-3">
          {layers.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-[24px] p-5 shadow-sm flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, ease: easeOut, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#F5EDE6] flex items-center justify-center shrink-0">
                <Icon size={20} className="text-[#A67E75]" />
              </div>
              <div>
                <h3 className="font-body text-base font-semibold text-[#2D2422]">{title}</h3>
                <p className="font-body text-sm text-[#6B5E5A] mt-1 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Intervention Pyramid */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
        >
          <div className="flex flex-col items-center gap-1.5">
            {pyramidLevels.map(({ label, color, width }, i) => (
              <motion.div
                key={label}
                className="flex items-center justify-center rounded-lg py-2 px-4 text-white font-body text-sm font-medium"
                style={{ backgroundColor: color, width }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: easeOut, delay: i * 0.1 }}
              >
                {label}
              </motion.div>
            ))}
          </div>
          <span
            className="hidden md:block font-body text-xs text-[#9A8E88] tracking-wider"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            干预升级
          </span>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 4: Therapy Experience ─── */
function TherapyExperienceSection() {
  const moments = [
    {
      time: '8:00',
      title: '晨间签到',
      desc: '温暖语音问候。"睡得好吗？"AI倾听，记录情绪分，如睡眠质量差则建议2分钟呼吸练习。',
      duration: '2分钟',
      color: '#E8D5D0',
    },
    {
      time: '12:00',
      title: '午间情绪脉搏',
      desc: '快速语音记录："能量值1-10分。"如比昨天低2分+，AI启动温和CBT思维记录练习。"今天有什么想法让你感到沉重？"',
      duration: '3分钟',
      color: '#C9A9A1',
    },
    {
      time: '21:00',
      title: '晚间放松',
      desc: '引导正念课程，5-10分钟。基于当日情绪数据个性化。如HRV数据显示压力升高，课程延长并加入渐进式肌肉放松。',
      duration: '5-10分钟',
      color: '#A67E75',
    },
    {
      time: '周日',
      title: '周总结',
      desc: '可视化情绪趋势报告。"本周焦虑降低23%。"庆祝进步，正常化 setbacks。标记任何令人担忧的趋势以提供可选的专业咨询。',
      duration: '5分钟',
      color: '#A67E75',
    },
  ]

  return (
    <section id="therapy" className="w-full bg-[#FBF7F3] py-16 lg:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="text-overline text-[#A67E75]">治疗体验</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">与WarmMom共度的一天</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-[23px] top-8 bottom-8 w-[2px] hidden md:block"
            style={{
              background: 'linear-gradient(180deg, #E8D5D0 0%, #A67E75 100%)',
            }}
          />

          <div className="space-y-8">
            {moments.map(({ time, title, desc, duration, color }, i) => (
              <motion.div
                key={time}
                className="flex items-start gap-4 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-body text-xs font-semibold shrink-0 z-10"
                  style={{ backgroundColor: color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: easeSpring, delay: i * 0.1 + 0.1 }}
                >
                  {time.split(' ')[0]}
                </motion.div>
                <div className="flex-1 pb-4">
                  <h3 className="font-body text-lg font-semibold text-[#2D2422]">{title}</h3>
                  <p className="font-body text-body text-[#6B5E5A] mt-1">{desc}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-[#F5EDE6] font-body text-xs text-[#9A8E88]">
                    {duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 5: Passive Monitoring ─── */
function PassiveMonitoringSection() {
  const sensors = [
    {
      icon: Heart,
      title: '心率变异性',
      desc: 'HRV下降是抑郁最早出现的生理指标之一。我们的系统追踪趋势而非单点。持续15% HRV下降触发早期预警。',
      trigger: '-15% HRV → 早期预警',
      triggerColor: '#C9A9A1',
    },
    {
      icon: Moon,
      title: '睡眠质量追踪',
      desc: '睡眠中断先于情绪下降。追踪入睡时间、醒来频率、REM百分比。睡眠质量突然下降标志新发抑郁风险。',
      trigger: '睡眠分<40 → 提醒',
      triggerColor: '#A8B5A0',
    },
    {
      icon: Activity,
      title: '体力活动水平',
      desc: '活动退缩是产后抑郁的典型症状。步数、活跃分钟、运动模式检测母亲自己可能未注意到的行为变化。',
      trigger: '活动-30% → 检查',
      triggerColor: '#D4A574',
    },
  ]

  const flowSteps = [
    { label: '传感器', color: '#A8B5A0' },
    { label: 'AI分析', color: '#C9A9A1' },
    { label: '风险评分', color: '#D4A574' },
    { label: '行动', color: '#A67E75' },
  ]

  const riskLevels = [
    { label: '无风险', color: '#8BA88A', action: '继续每日陪伴' },
    { label: '升高', color: '#D4A574', action: '增加签到频率' },
    { label: '高风险', color: '#C97B7B', action: '推荐专业咨询' },
  ]

  return (
    <section className="w-full gradient-dark py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="text-overline text-[rgba(251,247,243,0.5)]">被动监测</span>
          <h2 className="font-display text-h2 text-white mt-3">
            身体先于意识发出信号
          </h2>
        </motion.div>

        {/* Sensor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sensors.map(({ icon: Icon, title, desc, trigger, triggerColor }, i) => (
            <motion.div
              key={title}
              className="rounded-[24px] p-6 border border-[rgba(251,247,243,0.1)]"
              style={{ backgroundColor: 'rgba(251, 247, 243, 0.05)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.15 }}
            >
              <Icon size={40} style={{ color: triggerColor }} />
              <h3 className="font-body text-lg font-semibold text-white mt-4">{title}</h3>
              <p className="font-body text-sm text-[rgba(251,247,243,0.7)] mt-3 leading-relaxed">
                {desc}
              </p>
              <div className="mt-4 pt-4 border-t border-[rgba(251,247,243,0.1)]">
                <span className="font-mono text-sm font-bold" style={{ color: triggerColor }}>
                  {trigger}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Flow */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
        >
          {/* Flow steps */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {flowSteps.map(({ label, color }, i) => (
              <div key={label} className="flex items-center gap-2">
                <span
                  className="px-4 py-2 rounded-full font-body text-sm font-medium text-white"
                  style={{ backgroundColor: color }}
                >
                  {label}
                </span>
                {i < flowSteps.length - 1 && (
                  <ArrowRight size={16} className="text-[rgba(251,247,243,0.4)]" />
                )}
              </div>
            ))}
          </div>

          {/* Risk paths */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[700px] mx-auto">
            {riskLevels.map(({ label, color, action }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-[rgba(251,247,243,0.08)]"
                style={{ backgroundColor: 'rgba(251, 247, 243, 0.03)' }}
              >
                <span className="font-body text-sm font-semibold" style={{ color }}>
                  {label}
                </span>
                <ArrowRight size={14} className="text-[rgba(251,247,243,0.3)] rotate-90 md:rotate-0" />
                <span className="font-body text-xs text-[rgba(251,247,243,0.7)] text-center">
                  {action}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 6: Clinical Validation ─── */
function ClinicalValidationSection() {
  const evidenceCards = [
    {
      badge: 'RCT证据',
      badgeColor: '#A8B5A0',
      title: 'Woebot RCT',
      desc: 'Woebot产后抑郁随机对照试验显示EPDS评分降低5分以上。这具有临床显著性——相当于入门级人类治疗。',
      value: 'EPDS ↓5+分',
      valueColor: '#A8B5A0',
    },
    {
      badge: '市场现实',
      badgeColor: '#D4A574',
      title: '治疗师缺口',
      desc: '中国认证心理治疗师缺口：4.3万-13万人。每年150-200万新发产后抑郁病例，AI规模化不是可选项——是必选项。',
      value: '43-130万缺口',
      valueColor: '#D4A574',
    },
    {
      badge: '政策东风',
      badgeColor: '#C9A9A1',
      title: '医保覆盖',
      desc: '数字治疗纳入医保：广东和海南已开始报销。全国推广预计2-3年内。',
      value: '2省已启动',
      valueColor: '#C9A9A1',
    },
  ]

  const hospitalFlow = [
    '妇产科',
    '数字分诊',
    'WarmMom陪伴',
    'EPDS监测',
    '临床升级',
  ]

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="text-overline text-[#A67E75]">临床路径</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">
            从AI伴侣到临床工具
          </h2>
        </motion.div>

        {/* Evidence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {evidenceCards.map(({ badge, badgeColor, title, desc, value, valueColor }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-[24px] p-6 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.15 }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-white font-body text-xs font-semibold mb-3"
                style={{ backgroundColor: badgeColor }}
              >
                {badge}
              </span>
              <h3 className="font-body text-lg font-semibold text-[#2D2422]">{title}</h3>
              <p className="font-body text-body text-[#6B5E5A] mt-2">{desc}</p>
              <span
                className="inline-block mt-4 font-mono text-2xl font-bold"
                style={{ color: valueColor }}
              >
                {value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Hospital Integration Path */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
        >
          <p className="font-body text-sm font-medium text-center text-[#6B5E5A] mb-6">
            B2B2医院整合流程
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {hospitalFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-4 py-2 rounded-xl bg-[#F5EDE6] font-body text-sm font-medium text-[#2D2422] border border-[rgba(201,169,161,0.2)]">
                  {step}
                </span>
                {i < hospitalFlow.length - 1 && (
                  <ArrowRight size={14} className="text-[#A67E75]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 7: Technology ─── */
function TechnologySection() {
  const cards = [
    {
      icon: Brain,
      iconColor: '#A67E75',
      title: '多模态情绪AI',
      desc: '语音情绪识别（音调、语速、犹豫）。自然语言理解（情绪、关键词）。长期情绪趋势分析。语音优先——情绪激动时无需打字。',
    },
    {
      icon: Stethoscope,
      iconColor: '#A8B5A0',
      title: '循证CBT框架',
      desc: '思维记录、认知重构、行为激活、正念练习——全部针对产后场景适配。内容由临床心理学家审核。',
    },
    {
      icon: Languages,
      iconColor: '#D4A574',
      title: '文化适配中文大模型',
      desc: '基于中文母婴心理健康文献微调。理解文化语境：家庭动态、社会期望、传统月子习俗。',
    },
  ]

  return (
    <section className="w-full bg-[#F5EDE6] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="text-overline text-[#A67E75]">技术</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">
            情感智能，临床根基
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, iconColor, title, desc }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-[24px] p-6 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.15 }}
            >
              <Icon size={40} style={{ color: iconColor }} />
              <h3 className="font-body text-lg font-semibold text-[#2D2422] mt-4">{title}</h3>
              <p className="font-body text-sm text-[#6B5E5A] mt-3 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 8: Business Model ─── */
function BusinessModelSection() {
  const paths = [
    {
      title: 'B2B2医院',
      borderColor: '#C9A9A1',
      desc: '与妇产科合作产后数字护理包。医院品牌部署。医保报销路径。',
      value: '\u00A550-200/患者包',
      valueColor: '#C9A9A1',
    },
    {
      title: 'B2B2企业EAP',
      borderColor: '#A8B5A0',
      desc: '企业员工援助计划。产假心理健康支持。降低企业产假相关流失率。',
      value: '\u00A530-100/员工/年',
      valueColor: '#A8B5A0',
    },
    {
      title: 'B2C直销',
      borderColor: '#D4A574',
      desc: '免费：每日AI陪伴 + 基础情绪追踪。付费（\u00A5199-499/月）：CBT疗程 + 可穿戴集成 + 专业转介。',
      value: '\u00A5199-499/月',
      valueColor: '#D4A574',
    },
  ]

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="text-overline text-[#A67E75]">商业模式</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">三条触达母亲的路径</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map(({ title, borderColor, desc, value, valueColor }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-[24px] p-6 shadow-md"
              style={{ borderTop: `4px solid ${borderColor}` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.15 }}
            >
              <h3 className="font-body text-xl font-semibold text-[#2D2422]">{title}</h3>
              <p className="font-body text-body text-[#6B5E5A] mt-3">{desc}</p>
              <span className="inline-block mt-4 font-mono text-lg font-bold" style={{ color: valueColor }}>
                {value}
              </span>
            </motion.div>
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
      title: 'AI对话小程序（第1-2个月）',
      badgeColor: '#A67E75',
      items: ['基础CBT对话 + 情绪追踪 + EPDS问卷', '目标：1000用户，验证参与意愿'],
    },
    {
      title: '情绪追踪（第3个月）',
      badgeColor: '#C9A9A1',
      items: ['语音情绪识别 + 趋势分析 + 周报告'],
    },
    {
      title: '医院合作（第4-5个月）',
      badgeColor: '#A8B5A0',
      items: ['2-3家试点医院，临床验证研究，EPDS追踪'],
    },
    {
      title: '可穿戴集成（第6个月+）',
      badgeColor: '#D4A574',
      items: ['HRV + 睡眠 + 活动被动监测 + 早期预警系统'],
    },
  ]

  return (
    <section className="w-full bg-[#F5EDE6] py-16 lg:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="text-overline text-[#A67E75]">MVP路线图</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">
            6个月触达第一批需要帮助的母亲
          </h2>
        </motion.div>

        {/* Priority Callout */}
        <motion.div
          className="bg-white rounded-[24px] p-6 mb-10 border-l-4 border-[#A67E75]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <p className="font-body text-body font-medium text-[#A67E75]">
            WarmMom 是短期落地的 #1 优先项目。技术门槛最低，B2B付费路径最清晰，
            且人类需求最紧迫。
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col gap-6">
          {phases.map(({ title, badgeColor, items }, i) => (
            <motion.div
              key={title}
              className="relative pl-8 border-l-2 border-[#E8D5D0]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.15 }}
            >
              <div
                className="absolute left-[-9px] top-0 w-4 h-4 rounded-full"
                style={{ backgroundColor: badgeColor }}
              />
              <div className="bg-white rounded-[24px] p-5 shadow-sm">
                <span
                  className="inline-block px-3 py-1 rounded-full text-white font-body text-xs font-semibold mb-3"
                  style={{ backgroundColor: badgeColor }}
                >
                  阶段 {i + 1}
                </span>
                <h3 className="font-body text-lg font-semibold text-[#2D2422]">{title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C9A9A1] mt-2 shrink-0" />
                      <span className="font-body text-sm text-[#6B5E5A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Main Page Component ─── */
export default function WarmMom() {
  return (
    <main className="w-full">
      <HeroSection />
      <CoreInsightSection />
      <ProductDesignSection />
      <TherapyExperienceSection />
      <PassiveMonitoringSection />
      <ClinicalValidationSection />
      <TechnologySection />
      <BusinessModelSection />
      <MVPRoadmapSection />
    </main>
  )
}
