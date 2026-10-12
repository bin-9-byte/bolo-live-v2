import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { Group, Panel, Separator } from 'motion-panels/react'
import {
  ArrowRight, AtSign, Bot, Check, ChevronDown, CircleAlert,
  Clock3, Expand, FileText, Image, Mic2, MoreHorizontal,
  GripHorizontal, GripVertical, PanelLeftClose, PanelLeftOpen, Play, Send, Sparkles, UserRound, WandSparkles, X,
} from 'lucide-react'
import { initialMessages, initialSteps } from './data'
import type { Message, Step, StepId, StepStatus } from './types'
import livePreviewImage from './assets/live-preview.png'

const stepIcons = { brief: FileText, script: FileText, voice: Mic2, avatar: UserRound, scene: Image }
const statusLabel: Record<StepStatus, string> = { idle: '未开始', running: '生成中', review: '待确认', ready: '已完成', attention: '需处理' }
const cardDetails: Record<StepId, { label: string, value: string }[]> = {
  brief: [{ label: '目标', value: '新客种草' }, { label: '人群', value: '25–35 岁女性' }, { label: '商品', value: '轻户外夹克' }],
  script: [{ label: '结构', value: '6 个章节' }, { label: '时长', value: '约 24 分钟' }, { label: '待处理', value: '开场确认' }],
  voice: [{ label: '音色', value: '清屿' }, { label: '语速', value: '1.05×' }, { label: '情绪', value: '自然亲和' }],
  avatar: [{ label: '形象', value: '林夏' }, { label: '景别', value: '半身' }, { label: '驱动', value: '自动匹配' }],
  scene: [{ label: '背景', value: '城市露台' }, { label: '商品卡', value: '3 个' }, { label: '字幕', value: '品牌样式' }],
}

function usePrototype() {
  const [steps, setSteps] = useState(initialSteps)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [focused, setFocused] = useState<StepId | null>(null)
  const [input, setInput] = useState('')
  const [moduleDrafts, setModuleDrafts] = useState<Partial<Record<StepId, string>>>({})
  const [draftOwner, setDraftOwner] = useState<StepId | null>(null)
  const [composerFocusToken, setComposerFocusToken] = useState(0)
  const [running, setRunning] = useState<StepId[]>([])
  const [switching, setSwitching] = useState(false)
  const [changeReady, setChangeReady] = useState(false)
  const timer = useRef<number | null>(null)
  const focusTimer = useRef<number | null>(null)

  const send = (preset?: string) => {
    const text = preset ?? input.trim()
    if (!text || running.length || switching) return
    const targets: StepId[] = []
    if (text.includes('脚本') || text.includes('开场')) targets.push('script')
    if (text.includes('音色') || text.includes('声音')) targets.push('voice')
    if (text.includes('场景') || text.includes('背景')) targets.push('scene')
    if (!targets.length) targets.push(focused ?? 'script')
    setInput('')
    if (draftOwner) setModuleDrafts((drafts) => ({ ...drafts, [draftOwner]: undefined }))
    setDraftOwner(targets.length === 1 ? targets[0] : null)
    setChangeReady(false)
    setMessages((m) => [...m, { id: Date.now(), role: 'user', text, targets }, { id: Date.now() + 1, role: 'system', text: `正在分析并修改 ${targets.map(t => initialSteps.find(s => s.id === t)?.title).join('、')}…`, targets }])
    const beginAdjustment = () => {
      setSwitching(false)
      setFocused(targets.length === 1 ? targets[0] : null)
      setRunning(targets)
      setSteps((all) => all.map((s) => targets.includes(s.id) ? { ...s, status: 'running', progress: 32 } : s))
      timer.current = window.setTimeout(() => {
        setRunning([])
        setChangeReady(true)
        setSteps((all) => all.map((s) => targets.includes(s.id) ? { ...s, status: 'review', progress: undefined } : s))
        const targetNames = targets.map((target) => initialSteps.find((step) => step.id === target)?.title).join('、')
        setMessages((m) => [...m.filter(x => x.role !== 'system'), { id: Date.now() + 2, role: 'ai', text: `${targetNames}调整完成，修改还没有应用到最终版本。`, targets }])
      }, 1800)
    }
    const needsFocusSwitch = Boolean(focused && (targets.length !== 1 || targets[0] !== focused))
    if (needsFocusSwitch) {
      setSwitching(true)
      setFocused(null)
      focusTimer.current = window.setTimeout(beginAdjustment, 360)
    } else {
      beginAdjustment()
    }
  }

  const apply = () => {
    setChangeReady(false)
    setSteps((all) => all.map((s) => s.status === 'review' ? { ...s, status: 'ready' as const, summary: s.id === 'script' ? '6 个章节 · 约 23 分钟 · 开场 28 秒' : s.summary } : s))
    setMessages((m) => [...m, { id: Date.now(), role: 'ai', text: '修改已应用，完整预览和生产检查已同步更新。' }])
  }

  const focusModule = (id: StepId) => {
    if (running.length || switching) return
    const title = steps.find((step) => step.id === id)?.title
    setFocused(id)
    if (title && draftOwner !== id) {
      if (draftOwner) setModuleDrafts((drafts) => ({ ...drafts, [draftOwner]: input.trim() ? input : undefined }))
      const savedDraft = moduleDrafts[id]
      const nextDraft = savedDraft !== undefined
        ? savedDraft
        : !draftOwner && input.trim()
          ? `@${title} ${input.trimStart()}`
          : `@${title} `
      setInput(nextDraft)
      setDraftOwner(id)
    }
    setComposerFocusToken((token) => token + 1)
  }

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
    if (focusTimer.current) clearTimeout(focusTimer.current)
  }, [])
  return { steps, messages, focused, setFocused, focusModule, input, setInput, composerFocusToken, running, switching, changeReady, send, apply }
}

type PrototypeState = ReturnType<typeof usePrototype>

function Header({ variant }: { variant: string }) {
  return <header className="topbar">
    <div className="brand"><span className="brand-mark"><Sparkles size={15}/></span><strong>菠萝直播</strong><span className="prototype-tag">PROTOTYPE</span></div>
    <div className="project-title"><span className="live-dot"/>秋季轻户外夹克直播素材 <ChevronDown size={14}/></div>
    <div className="header-actions"><button className="quiet">保存于 14:32</button><button className="icon-btn"><MoreHorizontal size={17}/></button><button className="dark-btn"><Play size={14} fill="currentColor"/>开始生产</button></div>
  </header>
}

function AIConversation({ p, compact = false, onCollapse }: { p: PrototypeState, compact?: boolean, onCollapse?: () => void }) {
  const suggestions = ['@脚本 把开场缩短到30秒', '@音色 调得更亲和一些', '@脚本 @场景 突出防风卖点']
  const [mentionIndex, setMentionIndex] = useState(0)
  const composerRef = useRef<HTMLTextAreaElement>(null)
  const mentionMatch = p.input.match(/@([^@\s]*)$/)
  const mentionQuery = mentionMatch?.[1] ?? ''
  const mentionOptions = mentionMatch ? p.steps.filter((step) => `${step.title}${step.subtitle}`.includes(mentionQuery)) : []
  const chooseMention = (step: Step) => {
    const atIndex = p.input.lastIndexOf('@')
    p.setInput(`${p.input.slice(0, atIndex)}@${step.title} `)
    setMentionIndex(0)
    requestAnimationFrame(() => composerRef.current?.focus())
  }
  const openMention = () => {
    const separator = p.input && !p.input.endsWith(' ') ? ' ' : ''
    p.setInput(`${p.input}${separator}@`)
    requestAnimationFrame(() => composerRef.current?.focus())
  }
  useEffect(() => {
    if (p.composerFocusToken > 0) requestAnimationFrame(() => composerRef.current?.focus())
  }, [p.composerFocusToken])
  return <section className={`ai-panel ${compact ? 'compact' : ''}`}>
    <div className="panel-head"><div><span className="eyebrow"><Sparkles size={12}/> AI COPILOT</span><h2>和 AI 一起完成</h2></div><button className="icon-btn" onClick={onCollapse} aria-label="收起 AI 对话栏" title="收起 AI 对话栏"><PanelLeftClose size={16}/></button></div>
    <div className="conversation">
      {p.messages.map((m) => <div key={m.id} className={`message ${m.role}`}>
        {m.role === 'ai' && <span className="avatar-mini"><Bot size={14}/></span>}
        <div><p>{m.text}</p>{m.targets && <div className="target-list">{m.targets.map(t => <span key={t}>@{initialSteps.find(s => s.id === t)?.title}</span>)}</div>}</div>
      </div>)}
      {(p.running.length > 0 || p.switching) && <div className="thinking"><span/><span/><span/> {p.switching ? '正在切换生产模块' : 'AI 正在生成并校验上下文'}</div>}
      {p.changeReady && <div className="change-card">
        <div className="change-head"><span><WandSparkles size={14}/> 2 项修改待应用</span><span>刚刚</span></div>
        <div className="diff"><del>欢迎来到直播间，今天给大家带来...</del><ins>通勤怕冷、户外嫌重？先看这件...</ins></div>
        <div className="change-actions"><button onClick={() => p.send('继续调整脚本')}>继续调整</button><button className="primary" onClick={p.apply}><Check size={14}/>应用修改</button></div>
      </div>}
    </div>
    <div className="composer-wrap">
      <div className="suggestions">{suggestions.map(s => <button key={s} onClick={() => p.send(s)}>{s}</button>)}</div>
      {mentionMatch && <div className="mention-menu" role="listbox" aria-label="选择生产模块">
        <div className="mention-menu-head"><span>指定生产模块</span><kbd>↑↓ 选择 · Enter 确认</kbd></div>
        {mentionOptions.length ? mentionOptions.map((step, index) => {
          const Icon = stepIcons[step.id]
          return <button key={step.id} className={index === mentionIndex ? 'active' : ''} onMouseDown={(event) => event.preventDefault()} onClick={() => chooseMention(step)} role="option" aria-selected={index === mentionIndex}>
            <span className="mention-icon"><Icon size={15}/></span><span className="mention-copy"><strong>{step.title}</strong><small>{step.subtitle}</small></span><StatusPill status={step.status}/>
          </button>
        }) : <div className="mention-empty">没有匹配的模块</div>}
      </div>}
      <div className="composer"><textarea ref={composerRef} value={p.input} onChange={e => { p.setInput(e.target.value); setMentionIndex(0) }} placeholder="描述修改，输入 @ 指定生产对象" onKeyDown={e => {
        if (mentionMatch && mentionOptions.length) {
          if (e.key === 'ArrowDown') { e.preventDefault(); setMentionIndex((index) => (index + 1) % mentionOptions.length); return }
          if (e.key === 'ArrowUp') { e.preventDefault(); setMentionIndex((index) => (index - 1 + mentionOptions.length) % mentionOptions.length); return }
          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); chooseMention(mentionOptions[Math.min(mentionIndex, mentionOptions.length - 1)]); return }
        }
        if (e.key === 'Escape' && mentionMatch) { e.preventDefault(); p.setInput(p.input.slice(0, p.input.lastIndexOf('@'))); return }
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); p.send() }
      }}/><div className="composer-tools"><div><button onClick={openMention} aria-label="选择生产模块"><AtSign size={16}/></button><button><WandSparkles size={16}/></button></div><button className="send" onClick={() => p.send()} disabled={!p.input.trim()}><Send size={15}/></button></div></div>
      <div className="ai-note">AI 可能会出错，重要内容请确认</div>
    </div>
  </section>
}

function StatusPill({ status }: { status: StepStatus }) {
  return <span className={`status ${status}`}>{status === 'running' ? <Clock3 size={11}/> : status === 'attention' ? <CircleAlert size={11}/> : status === 'ready' ? <Check size={11}/> : null}{statusLabel[status]}</span>
}

function InlineWorkbench({ step, p }: { step: Step, p: PrototypeState }) {
  if (step.id === 'script') return <div className="inline-workbench script-workbench">
    <div className="workbench-toolbar"><span>章节结构</span><button onClick={() => p.setInput('@脚本 ')}><Sparkles size={12}/>交给 AI</button></div>
    <div className="chapter-strip"><button className="active"><b>01</b><span>开场破题</span><em>00:28</em></button><button><b>02</b><span>痛点展开</span><em>02:10</em></button><button><b>03</b><span>核心卖点</span><em>04:40</em></button></div>
    <div className="inline-document"><span className="line-no">01</span><p>通勤怕冷、户外嫌重？先看这件只有 <mark>420g</mark> 的轻户外夹克。</p><span className="ai-cursor"><Sparkles size={10}/>AI 已优化</span></div>
  </div>
  if (step.id === 'voice') return <div className="inline-workbench voice-workbench">
    <div className="voice-orb"><span/><button><Play size={13} fill="currentColor"/></button></div><div className="voice-settings"><strong>清屿 · 知性女声</strong><p>自然、清晰，适合服饰与生活方式内容</p><div className="wave">{Array.from({length:22}).map((_,i)=><i key={i} style={{height:`${8+(i*7)%22}px`}}/>)}</div><div className="micro-controls"><span>语速 1.05×</span><span>情绪 自然亲和</span></div></div>
  </div>
  if (step.id === 'avatar') return <div className="inline-workbench avatar-workbench"><div className="avatar-choice selected"><div className="mini-person"/><span>林夏</span></div><div className="avatar-choice"><div className="mini-person alt"/><span>安然</span></div><div className="avatar-choice"><div className="mini-person dark"/><span>自定义</span></div><div className="object-note">动作与口型由系统自动匹配，无需设置</div></div>
  if (step.id === 'scene') return <div className="inline-workbench scene-workbench"><div className="mini-stage"><span className="mini-copy">轻一点<br/>走远一点</span><div className="mini-product"/></div><div className="layer-list"><span><i/>城市露台背景</span><span><i/>品牌标题</span><span><i/>商品卡 × 3</span><span><i/>字幕样式</span></div></div>
  return <div className="inline-workbench brief-workbench"><div><span>直播目标</span><strong>秋季新品种草</strong></div><div><span>目标人群</span><strong>25–35 岁城市女性</strong></div><div><span>核心产品</span><strong>轻户外防风夹克</strong></div><button onClick={() => p.setInput('@基础信息 ')}><Sparkles size={12}/>补充信息</button></div>
}

function StepCard({ step, expanded, onClick, p }: { step: Step, expanded: boolean, onClick: () => void, p: PrototypeState }) {
  const Icon = stepIcons[step.id]
  return <motion.article layout transition={{layout:{duration:.34,ease:[.22,1,.36,1]}}} className={`step-card object-${step.id} ${expanded ? 'expanded' : ''} ${step.status}`}>
    <button className="card-surface" onClick={onClick} aria-label={`${expanded ? '收起' : '展开'}${step.title}`}>
      <div className="card-top"><span className="step-index">{step.index}</span><StatusPill status={step.status}/></div>
      <div className="object-heading"><div className="step-icon"><Icon size={19}/></div><div><h3>{step.title}</h3><p className="subtitle">{step.subtitle}</p></div><Expand size={14} className="expand-symbol"/></div>
      {!expanded && <p className="summary">{step.summary}</p>}
      {!expanded && <div className="card-details">{cardDetails[step.id].map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div>}
    </button>
    {step.status === 'running' && <div className="progress"><span style={{ width: `${step.progress ?? 32}%` }}/></div>}
    {expanded && <motion.div className="workbench-reveal" initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:.18,ease:'easeOut',delay:.1}}><InlineWorkbench step={step} p={p}/><div className="inline-actions"><button onClick={() => p.setInput(`@${step.title} `)}><Sparkles size={13}/>用 AI 调整</button><button className="primary" onClick={onClick}><Check size={13}/>收起并保留</button></div></motion.div>}
  </motion.article>
}

function SplitHandle({ direction, onDelta }: { direction: 'vertical' | 'horizontal', onDelta: (delta: number) => void }) {
  const start = (event: React.PointerEvent<HTMLButtonElement>) => {
    event.preventDefault()
    let previous = direction === 'vertical' ? event.clientX : event.clientY
    const move = (moveEvent: PointerEvent) => {
      const current = direction === 'vertical' ? moveEvent.clientX : moveEvent.clientY
      onDelta(current - previous)
      previous = current
    }
    const stop = () => {
      document.body.classList.remove('resizing-layout')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', stop)
    }
    document.body.classList.add('resizing-layout')
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', stop, { once: true })
  }
  return <button className={`split-handle ${direction}`} onPointerDown={start} aria-label={direction === 'vertical' ? '拖动调整左右区域' : '拖动调整上下区域'}>{direction === 'vertical' ? <GripVertical size={14}/> : <GripHorizontal size={14}/>}</button>
}

function OverviewLayout({ p, focused }: { p: PrototypeState, focused: StepId | null }) {
  const [rowWidths, setRowWidths] = useState([[34, 66], [25, 25, 50]])
  const [rowHeights, setRowHeights] = useState([38, 62])
  const byId = (id: StepId) => p.steps.find((step) => step.id === id)!
  const location: Record<StepId, [number, number]> = { brief: [0, 0], script: [0, 1], voice: [1, 0], avatar: [1, 1], scene: [1, 2] }
  const emphasize = (values: number[], index: number, target: number, minimum: number) => {
    if (index < 0 || values[index] >= target) return values
    const next = [...values]
    const gain = Math.min(target - next[index], values.reduce((sum, value, itemIndex) => itemIndex === index ? sum : sum + Math.max(0, value - minimum), 0))
    const available = values.reduce((sum, value, itemIndex) => itemIndex === index ? sum : sum + Math.max(0, value - minimum), 0)
    if (!available) return values
    values.forEach((value, itemIndex) => {
      if (itemIndex !== index) next[itemIndex] -= gain * Math.max(0, value - minimum) / available
    })
    next[index] += gain
    return next
  }
  const focusLocation = focused ? location[focused] : null
  const displayedWidths = rowWidths.map((widths, rowIndex) => focusLocation?.[0] === rowIndex ? emphasize(widths, focusLocation[1], widths.length === 2 ? 76 : 64, 18) : widths)
  const displayedHeights = focusLocation ? emphasize(rowHeights, focusLocation[0], 76, 20) : rowHeights
  const resizeColumns = (row: number, divider: number, delta: number, width: number) => {
    setRowWidths((current) => {
      const next = current.map((values) => [...values])
      const amount = delta / Math.max(width, 1) * 100
      const left = next[row][divider]
      const right = next[row][divider + 1]
      const applied = Math.max(18 - left, Math.min(right - 18, amount))
      next[row][divider] = left + applied
      next[row][divider + 1] = right - applied
      return next
    })
  }
  const resizeRows = (divider: number, delta: number, height: number) => {
    setRowHeights((current) => {
      const next = [...current]
      const amount = delta / Math.max(height, 1) * 100
      const applied = Math.max(20 - next[divider], Math.min(next[divider + 1] - 20, amount))
      next[divider] += applied
      next[divider + 1] -= applied
      return next
    })
  }
  const card = (id: StepId) => <StepCard step={byId(id)} expanded={focused === id} onClick={() => focused === id ? p.setFocused(null) : p.focusModule(id)} p={p}/>
  return <div className={`overview-split-layout ${focused ? 'has-focus' : ''}`}>
    <div className="overview-row" style={{ flexBasis: `${displayedHeights[0]}%` }}>
      <div style={{ flexBasis: `${displayedWidths[0][0]}%` }}>{card('brief')}</div>
      {!focused && <SplitHandle direction="vertical" onDelta={(delta) => resizeColumns(0, 0, delta, document.querySelector('.overview-row')?.clientWidth ?? 1)}/>}
      <div style={{ flexBasis: `${displayedWidths[0][1]}%` }}>{card('script')}</div>
    </div>
    {!focused && <SplitHandle direction="horizontal" onDelta={(delta) => resizeRows(0, delta, document.querySelector('.overview-split-layout')?.clientHeight ?? 1)}/>} 
    <div className="overview-row" style={{ flexBasis: `${displayedHeights[1]}%` }}>
      <div style={{ flexBasis: `${displayedWidths[1][0]}%` }}>{card('voice')}</div>
      {!focused && <SplitHandle direction="vertical" onDelta={(delta) => resizeColumns(1, 0, delta, document.querySelectorAll('.overview-row')[1]?.clientWidth ?? 1)}/>}
      <div style={{ flexBasis: `${displayedWidths[1][1]}%` }}>{card('avatar')}</div>
      {!focused && <SplitHandle direction="vertical" onDelta={(delta) => resizeColumns(1, 1, delta, document.querySelectorAll('.overview-row')[1]?.clientWidth ?? 1)}/>}
      <div style={{ flexBasis: `${displayedWidths[1][2]}%` }}>{card('scene')}</div>
    </div>
  </div>
}

function ProductionCanvas({ p, mode = 'grid' }: { p: PrototypeState, mode?: 'grid' | 'orbit' | 'rail' }) {
  const activeIds = p.running.length > 1 ? p.running : p.focused ? [p.focused] : p.running.length ? p.running : p.changeReady ? p.steps.filter(s => s.status === 'review').map(s => s.id) : []
  const spatialMode = p.running.length > 1 ? 'collab' : activeIds.length === 1 ? 'single' : p.changeReady ? 'review' : 'overview'
  const readyCount = p.steps.filter((step) => step.status === 'ready').length
  const completion = Math.round(readyCount / p.steps.length * 100)
  return <main className={`canvas mode-${mode}`}>
    <div className="canvas-head"><div><span className="eyebrow">ADAPTIVE PRODUCTION SPACE</span><h1>{spatialMode === 'overview' ? '直播素材生产' : spatialMode === 'collab' ? '多对象协同生成' : spatialMode === 'review' ? '审阅本轮修改' : `${p.steps.find(s => s.id === activeIds[0])?.title}正在展开`}</h1><p>{spatialMode === 'overview' ? '五个生产对象会根据任务关系和可用空间自动组织' : '当前对象在原位展开，周围对象随可用空间自适应调整'}</p></div><div className="completion"><div className="ring" style={{ background: `conic-gradient(var(--blue) 0 ${completion}%,#e5e8eb ${completion}%)` }}>{completion}%</div><div><strong>{readyCount} / 5 项已完成</strong><span>{readyCount === 5 ? '等待生产检查' : '仍有配置待确认'}</span></div></div></div>
    <div className={`adaptive-space layout-${spatialMode}`}>
      <div className="space-axis"><span>需求定义</span><i/><span>内容生成</span><i/><span>呈现配置</span></div>
      {spatialMode === 'overview' || (spatialMode === 'single' && p.focused) ? <OverviewLayout p={p} focused={p.focused}/> : p.steps.map(s => <StepCard key={s.id} step={s} expanded={activeIds.includes(s.id)} onClick={() => p.focused === s.id ? p.setFocused(null) : p.focusModule(s.id)} p={p}/>) }
    </div>
  </main>
}

function Preview({ p, large = false }: { p: PrototypeState, large?: boolean }) {
  const readyCount = p.steps.filter((step) => step.status === 'ready').length
  const blockers = p.steps.filter((step) => step.status !== 'ready')
  const checking = p.running.length > 0 || p.switching
  const ready = blockers.length === 0 && !checking
  const checkState = checking ? 'checking' : ready ? 'passed' : 'waiting'
  return <aside className={`preview-panel ${large ? 'large' : ''}`}>
    <div className="panel-head"><div><span className="eyebrow">LIVE PREVIEW</span><h2>完整预览</h2></div><button className="icon-btn"><Expand size={16}/></button></div>
    <div className="preview-stage">
      <img src={livePreviewImage} alt="少儿艺术培养数字人直播间预览"/>
      {p.running.length > 0 && <div className="preview-updating"><Sparkles size={18}/>正在同步 {p.running.map(t => initialSteps.find(s => s.id === t)?.title).join('、')}</div>}
    </div>
    <div className="preview-meta"><div><span>数字人</span><strong>林夏 · 半身</strong></div><div><span>音色</span><strong>清屿 · 1.05×</strong></div><div><span>画面</span><strong>9:16 · 1080P</strong></div></div>
    <section className={`production-check ${checkState}`}>
      <div className="production-check-head"><div><span className="eyebrow">PRODUCTION CHECK</span><strong>{checking ? '正在同步并检查' : ready ? '生产检查通过' : '等待配置完成'}</strong></div><span className="check-state">{checking ? <Clock3 size={12}/> : ready ? <Check size={12}/> : <CircleAlert size={12}/>} {checking ? '检查中' : ready ? '已通过' : `${readyCount}/5`}</span></div>
      <div className="check-list">
        <div><span>{readyCount === 5 ? <Check size={12}/> : <Clock3 size={12}/>}五项生产配置</span><strong>{readyCount}/5</strong></div>
        <div><span>{ready ? <Check size={12}/> : <Clock3 size={12}/>}音画与口型时长</span><strong>{ready ? '匹配' : '待检查'}</strong></div>
        <div><span>{ready ? <Check size={12}/> : <Clock3 size={12}/>}字幕安全区与输出规格</span><strong>{ready ? '通过' : '待检查'}</strong></div>
      </div>
      {!checking && blockers.length > 0 && <div className="check-blockers">{blockers.map((step) => <button key={step.id} onClick={() => p.focusModule(step.id)}><span><CircleAlert size={12}/>{step.title}{step.status === 'review' ? '待确认' : '尚未完成'}</span><ArrowRight size={13}/></button>)}</div>}
    </section>
    <div className="production-action"><div><strong>{ready ? '可以开始生产' : checking ? '正在更新生产检查' : '完成配置后自动检查'}</strong><span>{ready ? '预计生成 6 个直播素材片段' : checking ? '请稍候，结果将自动更新' : '处理右侧列出的阻塞项'}</span></div><button className="dark-btn" disabled={!ready}><Play size={14} fill="currentColor"/>开始生产</button></div>
  </aside>
}

function VariantA({ p }: { p: PrototypeState }) {
  const [aiSize, setAiSize] = useState(330)
  const [aiCollapsed, setAiCollapsed] = useState(false)
  const [previewSize, setPreviewSize] = useState(360)
  return <Group orientation="horizontal" className="workspace-group">
    <Panel minSize={aiCollapsed ? 48 : 280} maxSize={aiCollapsed ? 48 : 450} size={aiCollapsed ? 48 : aiSize} onSizeChange={(size) => { if (!aiCollapsed) setAiSize(size) }}>
      {aiCollapsed ? <aside className="ai-collapsed-rail"><button onClick={() => setAiCollapsed(false)} aria-label="展开 AI 对话栏" title="展开 AI 对话栏"><PanelLeftOpen size={17}/></button><span><Sparkles size={13}/> AI</span></aside> : <AIConversation p={p} onCollapse={() => setAiCollapsed(true)}/>} 
    </Panel><Separator className="separator"/>
    <Panel><ProductionCanvas p={p}/></Panel><Separator className="separator"/>
    <Panel minSize={320} maxSize={500} size={previewSize} onSizeChange={setPreviewSize}><Preview p={p}/></Panel>
  </Group>
}

function VariantB({ p }: { p: PrototypeState }) {
  return <div className="workspace-b"><ProductionCanvas p={p} mode="orbit"/><div className="floating-ai"><AIConversation p={p} compact/></div><Preview p={p}/></div>
}

function VariantC({ p }: { p: PrototypeState }) {
  return <div className="workspace-c"><div className="c-left"><AIConversation p={p} compact/><ProductionCanvas p={p} mode="rail"/></div><Preview p={p} large/></div>
}

export function App() {
  const p = usePrototype()
  const variant = useMemo(() => new URLSearchParams(location.search).get('variant')?.toUpperCase() || 'A', [])
  return <div className="app"><Header variant={variant}/><div className="workspace">{variant === 'B' ? <VariantB p={p}/> : variant === 'C' ? <VariantC p={p}/> : <VariantA p={p}/>}</div></div>
}
