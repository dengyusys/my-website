# My Website

个人主页，使用原生 HTML、CSS 和 JavaScript 开发，通过 Vite 构建。

## 技术栈

- Vite 8
- Rolldown
- 原生 HTML、CSS、JavaScript
- pnpm

## 环境要求

- Node.js 22.12 或更高版本
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

## 项目结构

```text
.
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ main.js
│  ├─ styles.css
│  └─ theme.js
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
└─ vite.config.js
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

部署前可以在本地检查生产版本：

```bash
pnpm preview
```
