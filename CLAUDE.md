- 无论我使用什么语言，请始终使用「简体中文」回答我的问题, 包括 Todo 和 思考内容

## 项目介绍

Super Chat - 主流大语言模型聊天入口

## 技术栈

- **框架**: Next.js 15.5.2 (App Router)
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4.1.12
- **图标**: React Icons + Lucide React
- **包管理器**: pnpm
- **构建工具**: Turbopack

## 开发范式

### 1. SEO 优先
- 优先使用服务端组件（RSC），避免不必要的客户端组件
- 完善的 metadata 配置，包括中文 SEO 关键词
- 语义化 HTML 结构
- 静态预渲染页面

### 2. 组件开发规范
- 组件放置在 `app/components/` 目录
- 优先使用 Next.js 内置组件（Link, Image 等）
- 保持组件简洁，单一职责
- 使用 TypeScript 进行类型安全

### 3. 样式和 UI
- 使用 Tailwind CSS 进行样式开发
- 响应式设计优先
- 可选择性集成 Magic UI 组件库增强视觉效果
- 保持设计简洁现代

### 4. 版本管理
- 使用语义化版本号
- 每个版本完成后及时提交代码
- 提交信息包含版本功能说明
- 包含 Claude Code 生成标识

### 5. 性能优化
- 启用 Turbopack 构建优化
- 静态资源优化
- 代码分割和懒加载
- 最小化 Bundle 大小

### 6. 开发流程
1. 理解需求文档（通过 Notion MCP）
2. 创建 Todo 任务列表
3. 逐步完成开发任务
4. 构建验证功能
5. 提交代码并推送

## 项目结构

```
app/
├── components/          # 组件目录
│   ├── Header.tsx      # 头部组件
│   └── Footer.tsx      # 底部组件
├── globals.css         # 全局样式
├── layout.tsx          # 根布局
└── page.tsx           # 首页
```

## 版本历史

- V0.0.1: 项目初始化
- V0.0.2: 集成主流大语言模型的聊天入口（Header + Footer）

