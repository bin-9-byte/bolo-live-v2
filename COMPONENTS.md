# Figma 组件实现

更新日期：2026-10-08，共 5 组、18 个变体。

设计来源：菠萝直播 → 方案-ui → 组件（437:40859）。React + TypeScript + Less，无 Tailwind 依赖。

## 预览

```sh
npm install
npm run prototype -- --host 127.0.0.1 --port 5173
```

访问 http://127.0.0.1:5173/components.html 。点击「查看全部 18 个变体」查看设计状态全集，或直接访问 `/components.html?all`。原有原型仍在 `/`。

## 使用

```tsx
import { useState } from 'react'
import { BackgroundCard, ScriptCard } from './components/figma-cards'
import type { BackgroundState, ScriptState } from './components/figma-cards'

function Example() {
  const [background, setBackground] = useState<BackgroundState>('默认')
  const [script, setScript] = useState<ScriptState>('Variant2')
  const [text, setText] = useState('')
  return <>
    <BackgroundCard state={background} onStateChange={setBackground}
      onAction={action => console.log(action)} />
    <ScriptCard state={script} onStateChange={setScript}
      value={text} onChange={setText} />
  </>
}
```

组件使用受控 `state` 属性，对应 Figma 变体；Less 随组件入口导入。`onAction` 分发 upload / library / generate，调用方接入真实服务。背景和车型使用独立图片及回调；人物组件可传 `imageUrl`，音色组件可传 `audioUrl` 和 `name`。

| 组件 | 变体 | 设计尺寸 |
| --- | --- | --- |
| BackgroundCard | 默认 / hover / 已上传 / 删除上传图片 | 460 × 305 |
| VoiceCard | 默认 / 上传中 / 已上传 | 241 × 68 |
| CharacterVoiceCard | 默认 / 人物hover | 275 × 396 |
| ScriptCard | Empty / Variant2（无内容收起/展开） | 798 × 305 / 800 × 679.49 |
| ScriptCard | Generating / Variant3（生成中收起/展开） | 798 × 305 / 800 × 668.49 |
| ScriptCard | Default / Variant4（生成完成收起/展开） | 798 × 305 / 800 × 662.49 |
| StickerCard | 默认 / 左右滚动中间态 / 左右滚动最右态 | 765 × 226 |

## 范围与验证

- 按原始尺寸、圆角、透明填充、边框、间距、字重与行高实现；图标和图片来自 Figma 原始导出，素材已下载到 `public/figma-components`。
- 预览支持全部变体、三种画布背景、本地图片和音频选择、音频播放/暂停/进度、脚本输入与 1000 字计数、TXT/Markdown 导入、背景删除、展开/收起、贴纸选择和连续横向滚动。
- 本地文件仅通过浏览器读取，不上传服务器。AI、远程资产库尚未接入后端；生成完成的富文本是设计稿示例，页面明确提示演示状态。
- 已通过 TypeScript + Vite 生产构建，并在浏览器核对全部 18 个变体外框尺寸和素材加载。完成视觉检查及文本保留、状态切换、背景删除、贴纸切换的交互检查。
- 固定尺寸组件在窄屏横向滚动，未对原稿做响应式缩放。字体优先 SF Pro、PingFang SC、Inter、Manrope；未分发授权字体文件，缺少字体时采用系统回退，可能有细微字形与换行差异。未宣称跨平台逐像素完全一致。
- `design-reference` 保存 Figma 返回的参考布局，仅用于追溯，不参与构建。实现入口为 `src/components/figma-cards/index.ts`，样式为 `cards.less`。
