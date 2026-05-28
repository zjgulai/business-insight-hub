# Business Insight Hub

母婴赛道 AI 消费产品洞察平台。基于深度市场研究，呈现五大反直觉创新方案。

## 产品定位

品牌名 **NurtureLink**，面向中国母婴 AI 消费市场（2025 年 566 亿元，预计 2035 年达 4200 亿元）。核心洞察：60% 的市场投资正流向错误方向——平台通过数据揭示真实机会。

## 五大创新方案

| 方案 | 中文名 | 目标用户 | 定价 | MVP 周期 |
|---|---|---|---|---|
| Heartbeat Cocoon | 心跳茧 | 母亲 + 婴儿 | ¥399–599 一次性 | 12 个月 |
| DadQuest | 爸任务 | 父亲 | 免费增值 ¥19–49/月 | 3–6 个月 |
| SafeBox | 安心盒 | 注重隐私的父母 | ¥499–699 一次性 | 12 个月 |
| WarmMom | 暖妈 | 新手妈妈 | ¥199–499/月 | 6 个月 |
| FamilyBridge | 家桥 | 三代家庭 | ¥29–49/家庭/月 | 18 个月 |

### 方案简介

**心跳茧** — 母亲心跳同步手环 + 婴儿安抚玩偶。通过生理机制（触觉心跳同步）而非技术堆叠解决分离焦虑。无语音、无屏幕、无云端。NICU 研究证实心跳音频可降低婴儿压力指标 40%。

**爸任务** — 专为父亲设计的游戏化 AI 育儿平台。语音优先、任务驱动、竞争性社交。针对 4300:10 的育儿 App 供需失衡（母亲 App vs 父亲 App），67.8% 父亲日活育儿 App，TGI 付费意愿 >120。

**安心盒** — 本地边缘 AI 育儿设备。所有处理在家中完成，零云端。针对 68.6% 家长担忧儿童数据隐私、COPPA 2025 单童罚款 $51,744 的监管趋势。边缘 AI 芯片已低于 $1（TI MSPM0G5187）。

**暖妈** — 母亲 AI 心理健康伴侣。基于 CBT、情绪监测、需要时转介专业帮助。针对 17.98% 产后抑郁率（每年 150–200 万新妈妈受影响）。

**家桥** — 跨代育儿协调平台。化解冲突、传承智慧、弥合数字鸿沟。针对 82.6% 祖辈照护率（0–3 岁儿童）。

## 实施路线图

- **0–6 个月**：暖妈 + 爸任务（AI 小程序，技术门槛最低）
- **6–12 个月**：心跳茧手环原型 + 安心盒本地 AI 设备
- **12–18 个月**：家桥完整平台（需多方协调和网络效应）

## 六大洞察框架

1. **减法设计** — 战略性减法比功能堆叠创造更强连接（LOVOT 无语音 90% 三年留存）
2. **生理连接** — 母亲心跳是婴儿最强大的分离安抚（NICU 研究降低压力 40%）
3. **父亲蓝海** — 4300+ App 瞄准母亲，不到 10 个瞄准父亲
4. **催化剂原则** — AI 增强人类关系而非替代（Moxie $8000 万失败教训）
5. **隐私优先** — 云端优先时代终结，本地处理成竞争壁垒
6. **代际协调** — 82.6% 祖辈照护率创造三代协调需求

## 行业案例参考

Owlet 智能袜、LOVOT 情感机器人、小天才手表、Hello Kitty、亲宝宝 App

## 页面路由

| 路径 | 内容 |
|---|---|
| `/` | 首页 |
| `/market` | 市场洞察（数据图表 + 六大框架） |
| `/solutions` | 五大方案总览 |
| `/solutions/heartbeat` | 心跳茧详情 |
| `/solutions/dadquest` | 爸任务详情 |
| `/solutions/safebox` | 安心盒详情 |
| `/solutions/warmmom` | 暖妈详情 |
| `/solutions/familybridge` | 家桥详情 |
| `/cases` | 行业案例 |

## 技术栈

- React 19 + TypeScript 5.9
- Vite 7（页面级 lazy import 分包）
- Tailwind CSS v3 + shadcn/ui（40+ 组件）
- Framer Motion（页面过渡 + 滚动动画）
- GSAP + ScrollTrigger（Market 页数据动画）
- Recharts（市场规模图表）
- React Router v7

## 目录结构

```
business_insight_hub/
├── app/                  # React 前端应用
│   ├── src/
│   │   ├── pages/        # 9 个页面（全部 lazy loaded）
│   │   ├── components/   # Layout、Navbar、动效组件
│   │   └── components/ui/ # shadcn/ui 组件库
│   └── public/           # 产品图片资源
├── docs/                 # 研究报告（7 章节 + research/ 维度拆解）
└── assets/
    └── diagrams/         # 市场分析图表（9 张 PNG）
```

## 本地开发

```bash
cd app
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint 检查（0 errors 为合格）
```

## 构建

```bash
cd app
npm run build   # tsc + vite build，输出到 app/dist/
```

## 部署

**生产地址**：https://business.lute-tlz-dddd.top

纯静态 SPA，通过 rsync 上传到腾讯云服务器（101.34.52.232），挂载到现有 `ai_video_nginx` 容器提供服务。

```bash
# 构建 + 上传（一次完成）
cd app && npm run build
rsync -avz --delete \
  -e "ssh -i ../ai_video.pem -o StrictHostKeyChecking=no" \
  dist/ \
  ubuntu@101.34.52.232:/opt/business-insight-hub/html/
```

上传后无需重启 nginx，文件即时生效（HTML 缓存 5 分钟，JS/CSS/图片缓存 7 天 immutable）。

详细部署架构、nginx 配置、服务器环境见 [AGENTS.md](./AGENTS.md)。
