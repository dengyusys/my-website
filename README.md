# My Website

个人主页，使用 Vue 3、TypeScript 和原生 CSS 开发，通过 Vite 构建。

## 技术栈

- Vue 3 + Vue Router 4
- TypeScript
- 原生 CSS（CSS 变量主题 + 语义类名）
- Vite 8（Rolldown）
- pnpm
- ESLint 9 + Prettier 3（husky + lint-staged 提交前检查）

## 环境要求

- Node.js 22.23.2（见 `.nvmrc` 与 `engines` 字段）
- pnpm 11.18.0

## 开始使用

安装依赖：

```bash
pnpm install
```

启动开发服务器：

```bash
pnpm dev
```

构建生产版本：

```bash
pnpm build
```

本地预览生产构建：

```bash
pnpm preview
```

## 代码检查

```bash
pnpm lint          # ESLint 检查
pnpm format        # Prettier 格式化
pnpm format:check  # Prettier 格式检查
pnpm typecheck     # vue-tsc 类型检查
pnpm check         # 依次执行 format:check、lint、typecheck
```

提交代码时 husky 会自动对暂存文件执行 ESLint 修复与 Prettier 格式化。

## 项目结构

```text
.
├─ .husky/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ AppHeader.vue
│  │  ├─ SiteFooter.vue
│  │  └─ ThemeToggle.vue
│  ├─ composables/
│  │  └─ use-theme.ts
│  ├─ pages/
│  │  └─ HomePage.vue
│  ├─ router/
│  │  └─ index.ts
│  ├─ styles/
│  │  ├─ base.css
│  │  ├─ main.css
│  │  ├─ page.css
│  │  └─ theme.css
│  ├─ App.vue
│  └─ main.ts
├─ eslint.config.js
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ tsconfig.json
└─ vite.config.ts
```

## 打包部署

安装锁文件指定的依赖并执行生产构建：

```bash
pnpm install --frozen-lockfile
pnpm build
```

生产文件将生成在 `dist/`：

```text
dist/
├─ css/
├─ js/
├─ favicon.svg
└─ index.html
```

将 `dist/` 目录中的全部内容上传至网站根目录即可完成部署。静态服务器需要满足：

- 默认入口文件为 `index.html`
- 正确返回 JavaScript、CSS 和 SVG 的 MIME 类型
- 网站部署在域名根路径 `/`
- 后续新增子路由页面时，需配置 SPA 回退到 `index.html`

部署前可以在本地检查生产版本：

```bash
pnpm preview
```
