import type { Message, Step } from './types'

export const initialSteps: Step[] = [
  { id: 'brief', index: '01', title: '基础信息', subtitle: '直播目标与产品信息', summary: '秋季轻户外夹克 · 新客种草 · 25–35 岁城市女性', status: 'ready' },
  { id: 'script', index: '02', title: '脚本', subtitle: '结构、话术与商品卖点', summary: '6 个章节 · 约 24 分钟 · 开场需要确认', status: 'review' },
  { id: 'voice', index: '03', title: '音色', subtitle: '声音、语速与情绪', summary: '知性女声「清屿」· 1.05× · 自然亲和', status: 'ready' },
  { id: 'avatar', index: '04', title: '数字人', subtitle: '形象与出镜方式', summary: '林夏 · 半身出镜 · 自动口型与动作', status: 'ready' },
  { id: 'scene', index: '05', title: '场景装修', subtitle: '背景、商品与字幕', summary: '城市露台 · 3 个商品卡 · 品牌字幕', status: 'ready' },
]

export const initialMessages: Message[] = [
  { id: 1, role: 'ai', text: '我已经根据「秋季轻户外夹克」整理了一版直播素材。脚本开场目前是 52 秒，可能稍长。' },
  { id: 2, role: 'ai', text: '你可以直接告诉我想改什么，或用 @ 指定一个生产对象。' },
]
