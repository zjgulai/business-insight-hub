import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Lock,
  WifiOff,
  Clock,
  Scale,
  Scissors,
  ChevronRight,
  Cpu,
  Baby,
  Music,
  Smartphone,
  ArrowDown,
  CheckCircle2,
  Zap,
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
      className="w-full min-h-[70vh] flex items-center gradient-hero"
      style={{ paddingTop: '72px' }}
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
              <span className="font-body text-sm text-[#9A8E88]">SafeBox</span>
            </motion.div>

            <motion.div variants={staggerChild} className="mb-4">
              <span className="inline-flex items-center justify-center w-10 h-8 rounded-md bg-[#A8B5A0] text-white font-body text-sm font-semibold">
                03
              </span>
            </motion.div>

            <motion.h1
              variants={staggerChild}
              className="font-display text-h1 text-[#2D2422]"
            >
              SafeBox
            </motion.h1>
            <motion.p variants={staggerChild} className="font-body text-xl text-[#9A8E88] mt-1">
              安心盒
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="font-body text-body-lg font-medium mt-4"
              style={{ color: '#A8B5A0' }}
            >
              您孩子的数据永不触碰云端。
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="font-body text-body text-[#6B5E5A] mt-4 max-w-[480px]"
            >
              一台小巧优雅的边缘AI设备，在您的家中全程监护、分析并响应孩子的需求——无需云端，无需上传，零隐私风险。
              让您的数据永远属于您，这份安心才是无价之宝。
            </motion.p>

            <motion.div
              variants={staggerChild}
              className="flex flex-wrap gap-6 mt-6"
            >
              {[
                { value: '$1', label: '边缘AI芯片' },
                { value: '1.8GB', label: '本地大模型' },
                { value: '\u00A5499-699', label: '目标售价' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-mono text-2xl font-bold text-[#A8B5A0]">{stat.value}</span>
                  <span className="font-body text-xs text-[#6B5E5A]">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={staggerChild} className="mt-8">
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#A8B5A0] text-white font-body font-medium hover:bg-[#D4DBD0] hover:scale-[1.02] transition-all duration-200"
              >
                了解架构
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
              style={{ boxShadow: '0 24px 60px rgba(45,36,34,0.10), 0 0 60px rgba(168,181,160,0.3)' }}
            >
              <img
                src="/safebox-hero.jpg"
                alt="SafeBox设备置于婴儿房书架"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <motion.div
                className="absolute inset-0 rounded-[32px] pointer-events-none"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  boxShadow: 'inset 0 0 60px rgba(168,181,160,0.3)',
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
          <span className="text-overline text-[#A8B5A0]">核心洞察</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">
            云端是特性。直到它不再是。
          </h2>
        </motion.div>

        {/* Moxie Warning Card */}
        <motion.div
          className="mt-8 rounded-[24px] p-6 lg:p-8 border"
          style={{
            backgroundColor: 'rgba(201,123,123,0.05)',
            borderColor: 'rgba(201,123,123,0.2)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
        >
          <h3 className="font-body text-xl font-semibold text-[#C97B7B] mb-3">
            8000万美元的警示
          </h3>
          <p className="font-body text-body text-[#6B5E5A]">
            Moxie 从 Intel Capital、Amazon、Sony、Toyota 融资8000万美元。当 Embodied 于2024年11月关停时，
            每台 Moxie 在数天内变成了电子砖头。那些与机器人建立了情感联结的孩子们经历了真实的悲痛——
            尤其是依赖 Moxie 支持的自闭症儿童。
          </p>
          <p className="font-body text-[0.9375rem] font-medium text-[#2D2422] mt-4">
            FTC发现：184款受审智能设备中，89%未披露软件支持期限。
          </p>
        </motion.div>

        {/* Two-column data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-10">
          {/* Left - Parent Privacy Anxiety */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
          >
            <span className="font-mono text-data text-[#A8B5A0]">68.6%</span>
            <p className="font-body text-body text-[#6B5E5A] mt-2">
              中国家长担忧孩子在社交网络上的照片/视频隐私
            </p>
            <div className="mt-4 space-y-2">
              {[
                '58.7% 担忧网络环境安全',
                '94.5% 将儿童安全置于首位',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8B5A0] mt-2 shrink-0" />
                  <span className="font-body text-[0.9375rem] text-[#6B5E5A]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Regulatory Pressure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.4 }}
          >
            <span className="font-mono text-data text-[#C97B7B]">$51,744</span>
            <p className="font-body text-body text-[#6B5E5A] mt-2">
              COPPA 2025 单儿童罚款。2025年6月生效。
            </p>
            <div className="mt-4 space-y-2">
              {[
                '第三方广告同意必须与主要功能同意分开',
                '生物特征数据（声音、面部）现归类为个人信息',
                '数据最小化成为法律要求',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C97B7B] mt-2 shrink-0" />
                  <span className="font-body text-[0.9375rem] text-[#6B5E5A]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Architecture ─── */
function ArchitectureSection() {
  const layers = [
    {
      label: '设备层',
      title: '设备层（绝对隐私）',
      bg: 'rgba(168, 181, 160, 0.15)',
      border: 'rgba(168, 181, 160, 0.3)',
      labelColor: '#A8B5A0',
      items: [
        '唤醒词检测',
        '音频预处理与降噪',
        '哭声检测与分类',
        '基础情绪识别',
        '本地内容缓存',
      ],
      note: '零网络依赖。零数据传输。所有敏感数据留在设备内。',
    },
    {
      label: '家庭网关',
      title: '家庭网关层（网络边界）',
      bg: 'rgba(168, 181, 160, 0.1)',
      border: 'rgba(168, 181, 160, 0.2)',
      labelColor: '#A8B5A0',
      items: [
        '大模型推理（Phi-3 Mini 3.8B）',
        '个性化内容生成',
        '多模态融合分析',
      ],
      note: '基于RK3588芯片（6 TOPS NPU）。数据不离开家庭网络边界。',
    },
    {
      label: '云端（可选）',
      title: '云端层（可选，仅主动开启）',
      bg: 'rgba(201, 169, 161, 0.08)',
      border: 'rgba(201, 169, 161, 0.2)',
      labelColor: '#E8D5D0',
      items: [
        '仅下载模型更新包',
        '推送新内容包',
        '零儿童个人数据接收',
      ],
      note: "仅聚合匿名统计数据（如'v3模型误报率'）。需明确选择加入。",
      badge: '可完全禁用',
    },
  ]

  return (
    <section id="architecture" className="w-full gradient-dark py-16 lg:py-24">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="text-overline text-[rgba(251,247,243,0.5)]">架构</span>
          <h2 className="font-display text-h2 text-white mt-3">三层架构。绝对隐私。</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.2 }}
            >
              <div
                className="rounded-[24px] p-5 lg:p-6 border relative"
                style={{ backgroundColor: layer.bg, borderColor: layer.border }}
              >
                <span className="text-overline text-xs" style={{ color: layer.labelColor }}>
                  {layer.label}
                </span>
                <h3 className="font-body text-lg font-semibold text-white mt-2">{layer.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#A8B5A0] mt-2 shrink-0" />
                      <span className="font-body text-sm text-[rgba(251,247,243,0.8)]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm font-medium text-[rgba(251,247,243,0.8)] mt-3 border-t border-[rgba(251,247,243,0.1)] pt-3">
                  {layer.note}
                </p>
                {layer.badge && (
                  <span className="inline-block mt-3 px-3 py-1 rounded-full bg-[#A8B5A0] text-white font-body text-xs font-semibold">
                    {layer.badge}
                  </span>
                )}
              </div>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown size={20} className="text-[#A8B5A0]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 4: Product Design ─── */
function ProductDesignSection() {
  const features = [
    { icon: Lock, text: '硬件隐私开关——物理切断麦克风' },
    { icon: Cpu, text: 'RK3588芯片（6 TOPS NPU）——全本地推理' },
    { icon: Baby, text: '哭声类型分析：饿了/不舒服/困了' },
    { icon: Music, text: '自动响应：白噪音/摇篮曲/小夜灯' },
    { icon: WifiOff, text: '全离线运行——飞机、汽车、偏远地区均可使用' },
  ]

  const steps = [
    { icon: Baby, label: '宝宝哭了' },
    { icon: Cpu, label: '本地AI分析哭声类型' },
    { icon: Music, label: '自动响应触发' },
    { icon: Smartphone, label: '家长收到通知（可选）' },
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
          <span className="text-overline text-[#A8B5A0]">产品设计</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">
            安全看得见——也摸得着。
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-10">
          {/* Left - Device Features */}
          <motion.div
            className="bg-[#F5EDE6] rounded-[32px] p-6 lg:p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <p className="font-body text-body text-[#6B5E5A]">
              圆角柔边的小巧设备，如同一个小音箱。自然融入婴儿房书架或床头柜。
              标志性设计：物理隐私开关，用电学方式切断麦克风——不是软件静音，是物理切断。
            </p>
            <div className="mt-6 space-y-3">
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4DBD0] flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#A8B5A0]" />
                  </div>
                  <span className="font-body text-[0.9375rem] text-[#6B5E5A] pt-1">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - UX Flow */}
          <motion.div
            className="flex flex-col justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="space-y-4">
              {steps.map(({ icon: Icon, label }, i) => (
                <motion.div key={label} className="flex items-center" variants={staggerChild}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#A8B5A0] flex items-center justify-center">
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="font-body text-[0.9375rem] text-[#2D2422]">{label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block ml-8 h-8 w-[1px] bg-[#A8B5A0] opacity-30 self-end mb-[-24px]" />
                  )}
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-8 p-4 rounded-2xl bg-[#D4DBD0] inline-flex items-center gap-3"
              variants={staggerChild}
            >
              <Zap size={20} className="text-[#A8B5A0]" />
              <span className="font-mono text-lg font-bold text-[#A8B5A0]">300ms</span>
              <span className="font-body text-sm text-[#6B5E5A]">快于云端方案</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 5: Privacy Promise ─── */
function PrivacyPromiseSection() {
  const promises = [
    {
      icon: Lock,
      title: '零上传',
      desc: '音频、视频或行为数据永远不会离开您的设备。不是加密——是根本不传输。',
    },
    {
      icon: Scissors,
      title: '物理断开',
      desc: '硬件隐私开关用电学方式切断麦克风电源。不是软件。不是信任。是物理。',
    },
    {
      icon: WifiOff,
      title: '离线优先',
      desc: '无需任何网络连接即可工作。飞机、汽车、偏远地区——始终可用。',
    },
    {
      icon: Clock,
      title: '终身独立',
      desc: '产品寿命 = 硬件寿命。不绑定公司存亡。无需订阅。',
    },
    {
      icon: Scale,
      title: '合规内置',
      desc: 'COPPA、GDPR-K、中国儿童数据保护——本地优先架构消除了大部分合规负担。',
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
          <span className="text-overline text-[#A8B5A0]">隐私承诺</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">5项承诺。零妥协。</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {promises.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-[24px] p-5 shadow-sm border border-transparent hover:border-[rgba(168,181,160,0.3)] transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#D4DBD0] flex items-center justify-center">
                <Icon size={24} className="text-[#A8B5A0]" />
              </div>
              <h3 className="font-body text-base font-semibold text-[#2D2422] mt-4">{title}</h3>
              <p className="font-body text-[0.8125rem] text-[#6B5E5A] mt-2 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 6: Compliance ─── */
function ComplianceSection() {
  const rows = [
    {
      req: 'COPPA 2025 合规',
      cloud: '复杂的 opt-in 流程、数据保护官、法律审计',
      safebox: '极简——无儿童数据传输',
    },
    {
      req: '跨境数据传输',
      cloud: '需合规评估',
      safebox: '不适用——数据不离开设备',
    },
    {
      req: '第三方数据共享',
      cloud: '复杂协议、责任链条',
      safebox: '不适用——零第三方共享',
    },
    {
      req: '家长同意管理',
      cloud: '每种数据用途需单独同意',
      safebox: '简化——无需细粒度同意',
    },
    {
      req: '数据泄露责任',
      cloud: '高——云存储 = 攻击面',
      safebox: '接近零——无数据可泄露',
    },
    {
      req: 'COPPA罚款风险',
      cloud: '每名儿童最高$51,744',
      safebox: '接近零',
    },
  ]

  const badges = ['COPPA 2025 就绪', 'GDPR-K 合规', 'UNICEF AI 指南对齐', '中国儿童数据保护兼容']

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="text-overline text-[#A8B5A0]">合规优势</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">
            监管是我们的东风
          </h2>
        </motion.div>

        {/* Table */}
        <motion.div
          className="mt-10 overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-[#A8B5A0]">
                <th className="text-left font-body text-sm font-semibold text-white p-4 rounded-tl-xl">
                  合规要求
                </th>
                <th className="text-left font-body text-sm font-semibold text-white p-4">
                  云端优先产品
                </th>
                <th className="text-left font-body text-sm font-semibold text-white p-4 rounded-tr-xl">
                  SafeBox（本地优先）
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ req, cloud, safebox }, i) => (
                <motion.tr
                  key={req}
                  className="border-b border-[rgba(201,169,161,0.15)]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <td className="font-body text-sm font-medium text-[#2D2422] p-4">{req}</td>
                  <td className="font-body text-sm text-[#6B5E5A] p-4 bg-[rgba(201,123,123,0.04)]">
                    {cloud}
                  </td>
                  <td className="font-body text-sm text-[#6B5E5A] p-4 bg-[rgba(168,181,160,0.08)]">
                    <span className="font-medium text-[#2D2422]">{safebox}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap gap-3 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.5 }}
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4DBD0] text-[#2D2422] font-body text-xs font-semibold"
            >
              <CheckCircle2 size={14} className="text-[#A8B5A0]" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 7: Technology ─── */
function TechnologySection() {
  const cards = [
    {
      title: '边缘AI芯片',
      desc: 'TI MSPM0G5187：批量 <$1。首款集成NPU的Arm Cortex-M0+。RK3588：$15-25，6 TOPS NPU，可运行10B参数模型。',
      spec: '<$1 - $25',
      label: '芯片价格区间',
    },
    {
      title: '端侧大模型',
      desc: 'Phi-3 Mini 3.8B：4位量化 = 1.8GB存储。iPhone 14 运行速度12 token/秒。性能≈GPT-3.5。Qwen2-1.5B针对中文优化。',
      spec: '1.8GB',
      label: '所需存储',
    },
    {
      title: '响应延迟',
      desc: '端到端本地推理：~50ms。云端往返：300ms+。对于哭泣的婴儿，250ms是安抚升级级的差距。',
      spec: '~50ms',
      label: '本地推理',
    },
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
          <span className="text-overline text-[rgba(251,247,243,0.5)]">技术</span>
          <h2 className="font-display text-h2 text-white mt-3">
            本地智能，全球标准
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ title, desc, spec, label }, i) => (
            <motion.div
              key={title}
              className="rounded-[24px] p-6 border border-[rgba(251,247,243,0.1)]"
              style={{ backgroundColor: 'rgba(251, 247, 243, 0.05)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.15 }}
            >
              <h3 className="font-body text-lg font-semibold text-white">{title}</h3>
              <p className="font-body text-sm text-[rgba(251,247,243,0.7)] mt-3 leading-relaxed">
                {desc}
              </p>
              <div className="mt-6 pt-4 border-t border-[rgba(251,247,243,0.1)]">
                <span className="font-mono text-2xl font-bold text-[#A8B5A0]">{spec}</span>
                <span className="font-body text-xs text-[rgba(251,247,243,0.5)] ml-2">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 8: Business Model ─── */
function BusinessModelSection() {
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
          <span className="text-overline text-[#A8B5A0]">商业模式</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">
            隐私是标配，不是溢价
          </h2>
        </motion.div>

        <motion.div
          className="max-w-[500px] mx-auto bg-white rounded-[32px] p-6 lg:p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeSpring }}
        >
          <div className="text-center">
            <span className="font-mono text-[clamp(2rem,4vw,3rem)] font-bold text-[#A8B5A0]">
              &yen;499-699
            </span>
            <p className="font-body text-base font-medium text-[#2D2422] mt-2">
              一次性购买。零订阅。
            </p>
          </div>

          <div className="my-6 border-t border-[rgba(201,169,161,0.2)]" />

          <div className="text-center">
            <span className="font-body text-[0.9375rem] font-medium text-[#A8B5A0]">
              比云端竞品贵 20-30%
            </span>
            <p className="font-body text-sm text-[#6B5E5A] mt-1">
              家长愿为隐私支付的"溢价"
            </p>
          </div>

          <div className="my-6 border-t border-[rgba(201,169,161,0.2)]" />

          <div className="space-y-2">
            <p className="font-body text-sm font-medium text-[#2D2422]">配件：</p>
            {[
              '内容SD卡（新摇篮曲、故事）：\u00A529-49',
              '便携电池包：\u00A559',
              '智能小夜灯联动套件：\u00A579',
            ].map((item) => (
              <p key={item} className="font-body text-sm text-[#6B5E5A]">
                {item}
              </p>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-[#D4DBD0]">
            <p className="font-body text-sm font-medium text-[#A8B5A0] text-center">
              首次购买即交付完整价值。功能不会随时间降级。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 9: MVP Roadmap ─── */
function MVPRoadmapSection() {
  const phases = [
    {
      title: '哭声检测原型（第1-3个月）',
      badgeColor: '#A8B5A0',
      items: [
        'RK3588 + TinyML 哭声检测模型',
        '目标：100个种子家庭，验证"本地AI满足育儿需求"',
      ],
    },
    {
      title: '多模态本地AI（第4-8个月）',
      badgeColor: '#D4A574',
      items: [
        '集成Phi-3 Mini 3.8B 或 Qwen2-1.5B 用于问答和情感对话',
        '睡眠分析、个性化内容生成',
      ],
    },
    {
      title: '完整产品上市（第9-12个月）',
      badgeColor: '#C9A9A1',
      items: [
        '工业设计定稿，量产',
        '第三方安全审计 + 隐私认证',
        '开源核心代码（Mycroft模式）供公众审计',
        '联邦学习opt-in："不上传原始数据改进AI"',
      ],
    },
  ]

  return (
    <section className="w-full bg-[#FBF7F3] py-16 lg:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="text-overline text-[#A8B5A0]">MVP路线图</span>
          <h2 className="font-display text-h2 text-[#2D2422] mt-3">
            从哭声检测到完整本地AI
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {phases.map(({ title, badgeColor, items }, i) => (
            <motion.div
              key={title}
              className="relative pl-8 border-l-2 border-[#D4DBD0]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.15 }}
            >
              <div
                className="absolute left-[-9px] top-0 w-4 h-4 rounded-full"
                style={{ backgroundColor: badgeColor }}
              />
              <div className="bg-white rounded-[24px] p-5 lg:p-6 shadow-sm">
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
                      <span className="w-1 h-1 rounded-full bg-[#A8B5A0] mt-2 shrink-0" />
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
export default function SafeBox() {
  return (
    <main className="w-full">
      <HeroSection />
      <CoreInsightSection />
      <ArchitectureSection />
      <ProductDesignSection />
      <PrivacyPromiseSection />
      <ComplianceSection />
      <TechnologySection />
      <BusinessModelSection />
      <MVPRoadmapSection />
    </main>
  )
}
