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
