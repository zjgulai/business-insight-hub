# NurtureLink — 前端应用

母婴赛道 AI 消费产品洞察平台的 React 前端。

## 开发

```bash
npm install
npm run dev      # 启动开发服务器
npm run build    # 生产构建（tsc + vite build）
npm run lint     # ESLint 检查
npm run preview  # 预览生产构建
```

## 项目结构

```
src/
├── App.tsx                  # 路由入口（9 个页面全部 lazy loaded）
├── main.tsx                 # React 挂载点
├── index.css                # 全局样式 + CSS 变量
├── pages/
│   ├── Home.tsx             # 首页
│   ├── Market.tsx           # 市场洞察（GSAP + Recharts）
│   ├── Solutions.tsx        # 五大方案总览
│   ├── HeartbeatCocoon.tsx  # 心跳茧详情
│   ├── DadQuest.tsx         # 爸任务详情
│   ├── SafeBox.tsx          # 安心盒详情
│   ├── WarmMom.tsx          # 暖妈详情
│   ├── FamilyBridge.tsx     # 家桥详情
│   └── Cases.tsx            # 行业案例
├── components/
│   ├── Layout.tsx           # 页面布局容器
│   ├── Navbar.tsx           # 顶部导航（响应式 + 移动端抽屉）
│   ├── Footer.tsx           # 页脚
│   ├── ScrollProgressBar.tsx
│   ├── TypewriterText.tsx
│   ├── MagneticButton.tsx
│   ├── TiltCard.tsx
│   ├── ParallaxImage.tsx
│   ├── RippleButton.tsx
│   └── ui/                  # shadcn/ui 组件库（40+ 组件）
├── hooks/
│   ├── use-mobile.ts
│   └── useParallax.ts
└── lib/
    └── utils.ts             # cn() 工具函数
```

## 关键依赖

| 依赖 | 用途 |
|---|---|
| `framer-motion` | 页面过渡、滚动动画、视差 |
| `gsap` + `ScrollTrigger` | Market 页复杂数据动画 |
| `recharts` | 市场规模折线图、赛道柱状图 |
| `react-countup` | 数字滚动动效 |
| `lenis` | 平滑滚动 |
| `react-router-dom` v7 | 客户端路由 |
| `shadcn/ui` | UI 组件（基于 Radix UI + Tailwind） |

