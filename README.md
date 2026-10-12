# Bolo Live

AI 数字人直播素材生产的纯前端交互演示。AI 对话与生产流程使用模拟数据，不连接真实生成服务。

## 本地运行

```sh
npm ci
npm run prototype
```

## 生产构建

```sh
npm run build
```

## Vercel 部署

将此项目作为 GitHub 仓库根目录上传，然后在 Vercel 导入私有仓库。

- Framework Preset: Vite
- Root Directory: 仓库根目录
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm ci
- 无需环境变量

当前三栏演示入口：`/?variant=A`。
