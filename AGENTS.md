# AGENTS.md — Business Insight Hub 工程记忆

AI 工具和开发者二次开发时的完整上下文。读完本文件再动手。

---

## 项目概览

| 项 | 值 |
|---|---|
| 项目名 | Business Insight Hub / NurtureLink |
| 性质 | 纯静态 React SPA，无后端，无数据库 |
| 生产 URL | https://business.lute-tlz-dddd.top |
| GitHub | https://github.com/zjgulai/business-insight-hub |
| 本地路径 | `/Users/pray/project/business_insight_hub` |
| 前端目录 | `app/` |
| SSH Key | `ai_video.pem`（根目录，已加入 .gitignore，不提交） |

---

## 部署拓扑

```
本地 app/dist/
    │
    │ rsync -avz --delete
    ▼
服务器 /opt/business-insight-hub/html/   ← 宿主机目录
    │
    │ Docker volume mount (只读)
    ▼
容器 ai_video_nginx:/var/www/business-insight-hub
    │
    │ nginx server block (business.lute-tlz-dddd.top)
    ▼
https://business.lute-tlz-dddd.top
```

**关键文件（服务器）**

| 文件 | 作用 |
|---|---|
| `/opt/ai-video/deploy/lighthouse/nginx.conf` | 主 nginx 配置，含 business server 块 |
| `/opt/ai-video/deploy/lighthouse/docker-compose.prod.yml` | nginx 容器定义，含 volume 挂载 |
| `/opt/business-insight-hub/html/` | 静态文件目录 |

**SSL 证书**：Let's Encrypt 通配符证书，路径 `/etc/letsencrypt/live/lute-tlz-dddd.top/`，由 `ai_video_nginx` 容器挂载，已覆盖 `business.lute-tlz-dddd.top`。

**nginx 缓存策略**

| 资源类型 | Cache-Control |
|---|---|
| `*.html` | `public, max-age=300, must-revalidate` |
| `*.js / *.css / 图片` | `public, max-age=604800, immutable` |

---

## 发布 SOP（每次更新后执行）

```bash
# 1. 构建
cd /Users/pray/project/business_insight_hub/app
npm run build

# 2. 上传（无需重启 nginx，文件更新即时生效）
rsync -avz --delete \
  -e "ssh -i ../ai_video.pem -o StrictHostKeyChecking=no" \
  dist/ \
  ubuntu@101.34.52.232:/opt/business-insight-hub/html/

# 3. 验证
curl -sI https://business.lute-tlz-dddd.top/ | grep HTTP
```

**nginx 配置变更时**（新增 server 块、修改路由等）需要重建容器：

```bash
ssh -i ai_video.pem ubuntu@101.34.52.232 \
  'cd /opt/ai-video/deploy/lighthouse && \
   docker compose -f docker-compose.prod.yml up -d --no-deps --force-recreate nginx'
```

---

## 服务器环境

| 项 | 值 |
|---|---|
| 服务器 IP | 101.34.52.232 |
| 系统 | Ubuntu 22.04 LTS |
| 用户 | ubuntu |
| Docker | 26.1.3 |
| Docker Compose | v2.27.1 |
| 磁盘 | 178G 总量，~51G 已用 |

**同机其他应用**（不要污染）

| 容器 | 域名 | 说明 |
|---|---|---|
| `ai_video_nginx` | — | 统一反向代理，所有域名共用 |
| `ai_video_frontend` | video.lute-tlz-dddd.top | AI 视频平台前端 |
| `ai_video_backend` | — | AI 视频平台后端 |
| `voc_superset` | voc.lute-tlz-dddd.top | VOC 数据分析 |
| `voc_bi_pg` | — | PostgreSQL |

**隔离原则**：本项目是纯静态文件，通过宿主机目录挂载到现有 nginx 容器，不新建任何容器，不修改其他应用配置。

---

## 前端工程

### 技术栈版本

| 技术 | 版本 |
|---|---|
| Node.js | 20 |
| React | 19.2 |
| TypeScript | 5.9.3 |
| Vite | 7.3 |
| Tailwind CSS | 3.4.19 |
| React Router | 7.6 |
| Framer Motion | 12.40 |
| GSAP | 3.15 |
| Recharts | 2.15 |

### 路径别名

`@/` → `app/src/`（在 `vite.config.ts` 和 `tsconfig.json` 中均已配置）

### 构建产物

`npm run build` = `tsc -b && vite build`，输出到 `app/dist/`。

**分包结果**（lazy import，9 个页面独立 chunk）：

| Chunk | 大小（gzip） |
|---|---|
| `index-*.js`（vendor） | ~125 KB |
| `Market-*.js` | ~164 KB（含 Recharts + GSAP） |
| `Solutions-*.js` | ~25 KB |
| 其余页面 | 7–9 KB 各 |

`base: './'` — 支持非根路径部署，资源用相对路径引用。

### 开发服务器

```bash
cd app && npm run dev   # http://localhost:3000
```

### Lint / 类型检查

```bash
cd app
./node_modules/.bin/eslint src   # 0 errors 为合格
./node_modules/.bin/tsc -b       # 0 errors 为合格
```

---

## 设计系统

### 调色板（NurtureLink Warm Palette）

| Token | 值 | 用途 |
|---|---|---|
| `cream` / `#FBF7F3` | 主背景 |
| `cream-dark` / `#F5EDE6` | 次级背景、卡片背景 |
| `rose` / `#C9A9A1` | 主强调色（心跳茧） |
| `rose-dark` / `#A67E75` | 深强调色、链接、CTA |
| `rose-light` / `#E8D5D0` | 浅强调色、hover 背景 |
| `sage` / `#A8B5A0` | 安心盒主题色 |
| `warm.gold` / `#D4A574` | 爸任务主题色 |
| `charcoal` / `#2D2422` | 主文字色、深色背景 |
| `charcoal-light` / `#6B5E5A` | 次级文字 |
| `charcoal-muted` / `#9A8E88` | 辅助文字 |

各方案专属色：

| 方案 | 主色 |
|---|---|
| 心跳茧 Heartbeat Cocoon | `#C9A9A1` |
| 爸任务 DadQuest | `#D4A574` |
| 安心盒 SafeBox | `#A8B5A0` |
| 暖妈 WarmMom | `#A67E75` |
| 家桥 FamilyBridge | `#8BA88A` |

### 字体

| 变量 | 字体 | 用途 |
|---|---|---|
| `font-display` | Playfair Display | 标题、品牌名 |
| `font-body` | Inter | 正文、UI |
| `font-mono` | IBM Plex Mono | 数据、数字 |

### 背景渐变类

```css
.gradient-hero   /* 浅暖色渐变，用于产品页 Hero */
.gradient-dark   /* 深色渐变 #2D2422，用于 Cases Hero */
```

### 动画

| 类名 | 效果 |
|---|---|
| `animate-blob-drift` | 20s 有机漂浮（背景装饰 blob） |
| `animate-float` | 3s 上下浮动 |
| `animate-shimmer` | 15s 光泽扫过 |

---

## 页面结构速查

| 路由 | 文件 | 特殊依赖 |
|---|---|---|
| `/` | `Home.tsx` | TypewriterText, MagneticButton, TiltCard, CountUp |
| `/market` | `Market.tsx` | GSAP ScrollTrigger, Recharts AreaChart/BarChart |
| `/solutions` | `Solutions.tsx` | Accordion（shadcn） |
| `/solutions/heartbeat` | `HeartbeatCocoon.tsx` | CountUp |
| `/solutions/dadquest` | `DadQuest.tsx` | CountUp |
| `/solutions/safebox` | `SafeBox.tsx` | — |
| `/solutions/warmmom` | `WarmMom.tsx` | — |
| `/solutions/familybridge` | `FamilyBridge.tsx` | — |
| `/cases` | `Cases.tsx` | — |

**导航栏链接**（`Navbar.tsx`）：市场洞察 `/market`、创新方案 `/solutions`、行业案例 `/cases`、洞察框架 `/market#frameworks`

---

## 自定义组件

| 组件 | 说明 |
|---|---|
| `TypewriterText` | 视口进入后逐字打印，支持 delay、speed、onComplete |
| `MagneticButton` | 鼠标磁吸效果按钮 |
| `TiltCard` | 鼠标悬停 3D 倾斜卡片 |
| `ParallaxImage` | 滚动视差图片 |
| `RippleButton` | 点击水波纹按钮 |
| `ScrollProgressBar` | 顶部滚动进度条（framer-motion useScroll） |
| `NewsletterCTA` | 邮件订阅 CTA 组件 |

---

## 常见二次开发任务

### 新增一个方案页面

1. 在 `app/src/pages/` 新建 `NewSolution.tsx`
2. 在 `App.tsx` 追加 lazy import 和 Route：
   ```tsx
   const NewSolution = lazy(() => import('./pages/NewSolution'))
   <Route path="/solutions/newsolution" element={<NewSolution />} />
   ```
3. 在 `Solutions.tsx` 的 `solutions` 数组追加方案数据（含 `nameEn`、`nameCn`、`tagline`、`description`、`price`、`accent`、`path`）
4. 在 `public/` 放入对应图片

### 修改市场数据

`Market.tsx` 顶部的 `const` 数据块：
- `marketSizeData` — 市场规模折线图数据
- `trackChartData` — 赛道对比柱状图数据
- `dataGridStats` — 8 个关键数据格
- `frameworks` — 六大洞察框架内容

### 修改导航

`app/src/components/Navbar.tsx` 第 6–11 行 `navLinks` 数组。

### 更新 landing 页卡片

服务器文件：`/opt/ai-video/deploy/lighthouse/landing/index.html`

本地编辑后 scp 上传（无需重启 nginx）：
```bash
scp -i ai_video.pem landing/index.html \
  ubuntu@101.34.52.232:/opt/ai-video/deploy/lighthouse/landing/index.html
```

---

## 目录结构

```
business_insight_hub/
├── AGENTS.md                        # 本文件，工程记忆
├── README.md                        # 产品文档
├── .gitignore
├── ai_video.pem                     # SSH 私钥（不提交）
├── app/                             # React 前端
│   ├── src/
│   │   ├── App.tsx                  # 路由入口（lazy loaded）
│   │   ├── main.tsx
│   │   ├── index.css                # 全局样式 + CSS 变量
│   │   ├── pages/                   # 9 个页面
│   │   ├── components/              # 自定义组件
│   │   │   └── ui/                  # shadcn/ui（40+ 组件）
│   │   ├── hooks/
│   │   └── lib/utils.ts
│   ├── public/                      # 静态图片（产品图、案例图）
│   ├── dist/                        # 构建产物（不提交）
│   ├── package.json
│   ├── vite.config.ts               # base: './', port: 3000
│   ├── tailwind.config.js           # NurtureLink 调色板 + 动画
│   ├── tsconfig.json                # @/ 路径别名
│   └── eslint.config.js
├── docs/                            # 研究报告
│   ├── motherbaby_ai_sec01–07.md    # 7 章节主报告
│   ├── motherbaby_ai.agent.final.md # 完整 agent 输出
│   ├── motherbaby_ai.agent.outline.md
│   ├── info.md
│   └── research/                   # 维度拆解（dim01–10, wide01–05）
└── assets/
    └── diagrams/                   # 市场分析图表（9 张 PNG）
```

---

## 注意事项

- `ai_video.pem` 在根目录，已加入 `.gitignore`，**永远不要提交**
- `iter1-dist/` 是旧版构建产物，已加入 `.gitignore`，不需要处理
- shadcn/ui 组件在 `app/src/components/ui/`，混合导出文件顶部有 `/* eslint-disable react-refresh/only-export-components */`，这是正常的
- `Market.tsx` 的 bundle 较大（~545KB 未压缩），因为包含 Recharts + GSAP，这是预期行为
- React Router v7 使用 `<BrowserRouter>` 包裹，nginx 已配置 `try_files $uri $uri/ /index.html` 支持客户端路由刷新
