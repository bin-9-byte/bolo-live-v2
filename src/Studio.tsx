import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, CSSProperties } from 'react'
import { BackgroundCard, CharacterVoiceCard, ScriptCard, StickerCard, SCRIPT_MAX_LENGTH } from './components/figma-cards'
import type { AssetAction, BackgroundState, ScriptPhase, VoiceState } from './components/figma-cards'
import { TooltipHelp } from './components/figma-cards/Tooltip'
import './studio.less'
import { PreviewAssetToolbar } from './components/PreviewAssetToolbar'
import { ScriptHistory, useScriptVersions } from './components/ScriptHistory'

const asset = (file: string) => `/figma-components/${file}`
function Glyph({ file, className = '' }: { file: string; className?: string }) {
  return <span className={`studio-glyph ${className}`} aria-hidden="true"><img src={asset(file)} alt="" draggable={false}/></span>
}
const questions = ['1.您想制作什么类型的视频？', '2.视频的主要用途是什么？', '3.您希望视频呈现什么风格？']
const choices = [['产品推广/广告', '知识科普/教程', '品牌形象/企业故事', '生活分享/日常vlog'], ['产品推广/广告', '知识科普/教程', '品牌形象/企业故事', '生活分享/日常vlog'], ['温馨治愈', '时尚潮流', '专业商务', '轻松活泼']]
type Draft = { title: string; script: string; answers: string[]; custom: string[] }
const initialDraft: Draft = { title: '数字人生成视频', script: '', answers: choices.map(c => c[0]), custom: ['', '', ''] }
type MediaKind = 'background' | 'vehicle' | 'character' | 'voice' | 'script' | 'attachment' | 'sticker'
type ComposerAttachment = { id: number; name: string; size: number; preview?: string; extension: string }
type PreviewStatus = 'idle' | 'generating' | 'ready' | 'error'
type GenerationTarget = 'script' | 'character' | 'background' | 'vehicle'
type ComposerTarget = 'global' | GenerationTarget
type ComposerPromptMode = 'structured' | 'free'
type GenerationTask = { id: number; target: GenerationTarget; status: 'draft' | 'generating' | 'ready'; candidate: string; prompt: string }
type ChatMessage =
  | { kind: 'user'; id: number; text: string; attachments?: ComposerAttachment[] }
  | { kind: 'generation'; id: number; target: GenerationTarget; status: 'generating' | 'ready' | 'applied' | 'discarded'; candidate: string }
  | { kind: 'submission'; id: number; answers: string[]; phase: 'thinking' | 'reply' | 'generating' | 'done'; expanded: boolean }
const generationNames: Record<GenerationTarget, string> = { script: '脚本内容', character: '人物形象', background: '背景场景', vehicle: '产品素材' }
const composerTargetNames: Record<ComposerTarget, string> = { global: '全局需求', ...generationNames }
const composerTargets: { value: ComposerTarget; label: string }[] = [
  { value: 'global', label: '全局' }, { value: 'script', label: '脚本' }, { value: 'character', label: '人物' }, { value: 'background', label: '背景' }, { value: 'vehicle', label: '产品' },
]
const demoImages: Record<Exclude<GenerationTarget, 'script'>, string> = {
  character: asset('165da.png'), background: asset('13e93.png'), vehicle: asset('demo-vehicle.svg'),
}
type DialogKind = 'publish' | 'produce' | 'history' | 'library' | null
const libraryFiles = ['fdcc8', 'bdb97', '323ee', '0c82d', '37413', 'b48f0', 'a0538', 'c59b9', 'fce27', '6e728', 'ec386', '79f3c', '7cf69']
const libraryCategories = ['全部', '商品1', '商品2', '角色', '素材'] as const
const libraryCategoryForItem = (index: number) => libraryCategories[1 + index % 4]
const libraryImage = (file: string) => asset(`asset-library-${file}.png`)
const demoVoices = ['清透年轻女声', '温暖叙述', '沉稳男声', '活力讲解', '专业播报', '亲切陪伴']
type VoiceSettings = { speed: number; volume: number }
type StickerFields = { title: string; detail: string }
type LibrarySelection = { asset: string; voiceSettings?: VoiceSettings; stickerFields?: StickerFields }

function AssetLibraryContent({ kind, onClose, onConfirm, initialVoiceSettings, initialStickerFields }: { kind: MediaKind; onClose: () => void; onConfirm: (selection: LibrarySelection) => void; initialVoiceSettings: VoiceSettings; initialStickerFields: StickerFields }) {
  const [category, setCategory] = useState<(typeof libraryCategories)[number]>('全部')
  const [selected, setSelected] = useState<number | null>(null)
  const [voiceSettings, setVoiceSettings] = useState(initialVoiceSettings)
  const [playingVoice, setPlayingVoice] = useState<number | null>(null)
  const [voiceProgress, setVoiceProgress] = useState(() => demoVoices.map(() => 0))
  const [stickerFields, setStickerFields] = useState(initialStickerFields)
  const [fieldError, setFieldError] = useState(false)
  const hasSettings = kind === 'voice' || kind === 'attachment' || kind === 'sticker'
  const isSticker = kind === 'attachment' || kind === 'sticker'
  const stickerHasDetail = selected !== null && selected % 2 === 0
  const stickerValid = !isSticker || (!!stickerFields.title.trim() && (!stickerHasDetail || !!stickerFields.detail.trim()))
  const title = kind === 'character' ? '人物资产库' : kind === 'voice' ? '音色资产库' : kind === 'background' ? '背景资产库' : kind === 'vehicle' ? '产品资产库' : '贴纸资产库'
  const libraryHelp = kind === 'voice' ? '选择音色后，可调整语速与音量，并试听当前参数下的效果。' : isSticker ? '选择一个贴纸模板，再填写模板对应的主文案与补充文案。' : ''
  const choose = (index: number) => { setSelected(index); setFieldError(false); if (isSticker) setStickerFields({ title: '', detail: '' }) }
  useEffect(() => {
    if (playingVoice === null) return
    const timer = window.setInterval(() => setVoiceProgress(current => current.map((progress, index) => {
      if (index !== playingVoice) return progress
      if (progress >= 100) { setPlayingVoice(null); return 0 }
      return Math.min(100, progress + .8 * voiceSettings.speed)
    })), 120)
    return () => window.clearInterval(timer)
  }, [playingVoice, voiceSettings.speed])
  return <div className={`studio-library ${hasSettings ? 'studio-library--configurable' : ''}`}>
    <header className="studio-library-header"><div className="studio-library-title"><h2>{title}</h2>{libraryHelp && <TooltipHelp text={libraryHelp} label={`${title}使用说明`} withinLayer/>}</div><button className="studio-library-close" aria-label="关闭资产库" autoFocus onClick={onClose}><img src={asset('asset-library-ac691.svg')} alt=""/></button></header>
    <div className="studio-library-body"><div className="studio-library-content">
      {!hasSettings && <nav className="studio-library-categories" aria-label="素材分类">{libraryCategories.map(item => <button key={item} aria-pressed={category === item} onClick={() => { setCategory(item); setSelected(null) }}>{item}</button>)}</nav>}
      <div className="studio-library-scroll"><div className="studio-library-grid">
        {(kind === 'voice' ? demoVoices : libraryFiles).map((file, index) => (hasSettings || category === '全部' || libraryCategoryForItem(index) === category) && (kind === 'voice' ? <div className={`studio-library-item studio-library-voice-card ${selected === index ? 'studio-library-item--selected' : ''}`} key={file}>
          <button className="studio-library-voice-select" type="button" aria-label={`选择音色 ${file}`} aria-pressed={selected === index} onClick={() => choose(index)}/>
          <button className="studio-library-voice-play" type="button" aria-label={playingVoice === index ? `暂停${file}` : `播放${file}`} onClick={event => { event.stopPropagation(); setPlayingVoice(current => current === index ? null : index) }}>{playingVoice === index ? <span aria-hidden="true">Ⅱ</span> : <img src={asset('4ab24.svg')} alt=""/>}</button>
          <span className="studio-library-voice-info"><span className="studio-library-voice-name">{file}</span><span className="studio-library-voice-track"><span style={{ width: `${voiceProgress[index]}%` }}/><img src={asset('41848.svg')} alt="" style={{ left: `${voiceProgress[index]}%` }}/><input aria-label={`${file}试听进度`} type="range" min="0" max="100" value={voiceProgress[index]} onClick={event => event.stopPropagation()} onChange={event => { const progress = Number(event.target.value); setVoiceProgress(current => current.map((value, itemIndex) => itemIndex === index ? progress : value)) }}/></span></span>
        </div> : <button className={`studio-library-item ${selected === index ? 'studio-library-item--selected' : ''}`} key={file} aria-label={`选择素材 ${index + 1}`} aria-pressed={selected === index} onClick={() => choose(index)}><span className="studio-library-thumb"><img className={index === 1 ? 'studio-library-thumb--wide' : ''} src={libraryImage(file)} alt=""/></span><span className="studio-library-item-meta"><strong>{isSticker ? `模板 ${String(index + 1).padStart(2, '0')}` : '03'}</strong><span>{isSticker ? '可编辑' : '--:--'}</span></span></button>))}
      </div></div>
    </div>{hasSettings && <aside className={`studio-library-settings ${kind === 'voice' ? 'studio-library-settings--voice' : ''}`} aria-label={kind === 'voice' ? '音色参数' : '贴纸字段'}>
      <h3>{kind === 'voice' ? '音色设置' : '贴纸设置'}</h3>
      {kind === 'voice' ? <>
        {selected === null ? <div className="studio-library-item studio-library-voice-card studio-library-picked studio-library-voice-empty" role="status">请选择音色</div> : <div className="studio-library-item studio-library-voice-card studio-library-picked" aria-label={`当前音色 ${demoVoices[selected]}`}>
          <button className="studio-library-voice-play" type="button" aria-label={playingVoice === selected ? `暂停调整后的${demoVoices[selected]}` : `播放调整后的${demoVoices[selected]}`} onClick={() => setPlayingVoice(current => current === selected ? null : selected)}>{playingVoice === selected ? <span aria-hidden="true">Ⅱ</span> : <img src={asset('4ab24.svg')} alt=""/>}</button>
          <span className="studio-library-voice-info"><span className="studio-library-voice-name">{demoVoices[selected]}</span><span className="studio-library-voice-track"><span style={{ width: `${voiceProgress[selected]}%` }}/><img src={asset('41848.svg')} alt="" style={{ left: `${voiceProgress[selected]}%` }}/><input aria-label={`${demoVoices[selected]}调整后试听进度`} type="range" min="0" max="100" value={voiceProgress[selected]} onChange={event => { const progress = Number(event.target.value); setVoiceProgress(current => current.map((value, itemIndex) => itemIndex === selected ? progress : value)) }}/></span></span>
        </div>}
        <p className="studio-library-settings-note">{selected === null ? '选择音色后，可播放当前参数下的试听效果。' : '播放当前语速与音量参数下的试听效果。'}</p>
        <label className="studio-library-range"><span>语速 <span className="studio-library-range-value"><input aria-label="语速数值" type="number" min="0.5" max="1.5" step="0.01" value={voiceSettings.speed} onChange={event => { const value = Number(event.target.value); if (Number.isFinite(value)) setVoiceSettings(current => ({ ...current, speed: Math.min(1.5, Math.max(.5, value)) })) }}/><b>×</b></span></span><input className="studio-library-range-slider" type="range" min="0.5" max="1.5" step="0.01" value={voiceSettings.speed} style={{ '--range-progress': `${(voiceSettings.speed - .5) * 100}%` } as CSSProperties} onChange={event => setVoiceSettings(current => ({ ...current, speed: Number(event.target.value) }))}/><small className="studio-library-range-labels studio-library-range-labels--speed"><span>慢速</span><span>正常</span><span>快速</span></small></label>
        <label className="studio-library-range"><span>音量 <span className="studio-library-range-value"><input aria-label="音量数值" type="number" min="0" max="100" step="1" value={voiceSettings.volume} onChange={event => { const value = Number(event.target.value); if (Number.isFinite(value)) setVoiceSettings(current => ({ ...current, volume: Math.min(100, Math.max(0, Math.round(value))) })) }}/><b>%</b></span></span><input className="studio-library-range-slider" type="range" min="0" max="100" step="1" value={voiceSettings.volume} style={{ '--range-progress': `${voiceSettings.volume}%` } as CSSProperties} onChange={event => setVoiceSettings(current => ({ ...current, volume: Number(event.target.value) }))}/><small className="studio-library-range-labels"><span>轻声</span><span>适中</span><span>响亮</span></small></label>
      </> : selected === null ? <p className="studio-library-settings-empty">先从左侧选择贴纸模板，再编辑文案。</p> : <>
        <div className="studio-library-sticker-preview"><img src={libraryImage(libraryFiles[selected])} alt={`贴纸模板 ${selected + 1} 预览`}/></div>
        <p className="studio-library-settings-note">模板 {String(selected + 1).padStart(2, '0')} · 文案将在合成时填入对应位置</p>
        <label className="studio-library-field">主文案 <span>{stickerFields.title.length}/20</span><input type="text" maxLength={20} placeholder="输入贴纸主文案" value={stickerFields.title} aria-invalid={fieldError && !stickerFields.title.trim()} onChange={event => { setStickerFields(current => ({ ...current, title: event.target.value })); setFieldError(false) }}/></label>
        {stickerHasDetail && <label className="studio-library-field">补充文案 <span>{stickerFields.detail.length}/30</span><input type="text" maxLength={30} placeholder="输入补充说明" value={stickerFields.detail} aria-invalid={fieldError && !stickerFields.detail.trim()} onChange={event => { setStickerFields(current => ({ ...current, detail: event.target.value })); setFieldError(false) }}/></label>}
        {fieldError && !stickerValid && <p className="studio-library-field-error" role="alert">请填写当前模板的必填文案</p>}
      </>}
    </aside>}</div>
    <footer className="studio-library-footer"><button onClick={onClose}>取消</button><button disabled={selected === null} onClick={() => { if (selected === null) return; if (!stickerValid) { setFieldError(true); return } onConfirm({ asset: kind === 'voice' ? demoVoices[selected] : libraryImage(libraryFiles[selected]), voiceSettings: kind === 'voice' ? voiceSettings : undefined, stickerFields: isSticker ? { ...stickerFields, detail: stickerHasDetail ? stickerFields.detail : '' } : undefined }) }}>确认选择</button></footer>
  </div>
}

export function Studio() {
  const [draft, setDraft] = useState<Draft>(initialDraft)
  const [past, setPast] = useState<Draft[]>([])
  const [future, setFuture] = useState<Draft[]>([])
  const [saved, setSaved] = useState(true)
  const [scriptPhase, setScriptPhase] = useState<ScriptPhase>('empty')
  const [scriptExpanded, setScriptExpanded] = useState(false)
  const [scriptConfirmed, setScriptConfirmed] = useState(false)
  const [scriptEditText, setScriptEditText] = useState('')
  const [scriptFileName, setScriptFileName] = useState('')
  const [scriptError, setScriptError] = useState('')
  const [generationTask, setGenerationTask] = useState<GenerationTask | null>(null)
  const generationOperation = useRef(0)
  const scriptOperation = useRef(0)
  const scriptReturnState = useRef<{ phase: ScriptPhase; text: string }>({ phase: 'empty', text: '' })
  const scriptEditOrigin = useRef('')
  const scriptEditHistoryAdded = useRef(false)
  const [backgroundState, setBackgroundState] = useState<BackgroundState>('默认')
  const [voiceState, setVoiceState] = useState<VoiceState>('默认')
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>({ speed: 1, volume: 50 })
  const [stickerFields, setStickerFields] = useState<StickerFields>({ title: '', detail: '' })
  const [media, setMedia] = useState<Partial<Record<MediaKind, string>>>({})
  const [stickerImage, setStickerImage] = useState<string | null>(null)
  const [imageLoading, setImageLoading] = useState<Partial<Record<MediaKind, boolean>>>({})
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const chatMessageId = useRef(0)
  const submissionOperation = useRef(0)
  const [informationSubmitted, setInformationSubmitted] = useState(false)
  const [submissionGenerating, setSubmissionGenerating] = useState(false)
  const [expandedScripts, setExpandedScripts] = useState<Set<number>>(new Set())
  const [message, setMessage] = useState('')
  const [composerPromptMode, setComposerPromptMode] = useState<ComposerPromptMode>('free')
  const [composerTarget, setComposerTarget] = useState<ComposerTarget>('global')
  const [composerMenu, setComposerMenu] = useState<'target' | null>(null)
  const [attachments, setAttachments] = useState<ComposerAttachment[]>([])
  const attachmentId = useRef(0)
  const [tab, setTab] = useState('edit')
  const [thinking, setThinking] = useState(false)
  const [editingTitle, setEditingTitle] = useState(false)
  const [previewStatus, setPreviewStatus] = useState<PreviewStatus>('idle')
  const [previewSource, setPreviewSource] = useState('')
  const previewOperation = useRef(0)
  const previewInputRef = useRef('')
  const studioEditor = useRef<HTMLElement>(null)
  const [dialog, setDialog] = useState<DialogKind>(null)
  const [notice, setNotice] = useState('')
  const { versions, record: recordScript } = useScriptVersions(setNotice)
  const [scriptHistoryOpen, setScriptHistoryOpen] = useState(false)
  const [historyText, setHistoryText] = useState<string>()
  const [libraryTarget, setLibraryTarget] = useState<MediaKind>('background')
  const fileInput = useRef<HTMLInputElement>(null)
  const attachmentFileInput = useRef<HTMLInputElement>(null)
  const fileKind = useRef<MediaKind>('background')
  const composer = useRef<HTMLTextAreaElement>(null)
  const composerControls = useRef<HTMLDivElement>(null)
  const chatBody = useRef<HTMLDivElement>(null)
  const stickerOperation = useRef(0)
  const objectUrls = useRef<string[]>([])
  const dialogRef = useRef<HTMLDialogElement>(null)
  const changed = (next: Draft) => { setPast(p => [...p.slice(-29), draft]); setFuture([]); setDraft(next); setSaved(false) }
  const syncScript = (text: string) => { scriptOperation.current++; setScriptEditText(text); setScriptConfirmed(false); setScriptPhase(text.trim() ? 'ready' : 'empty') }
  const undo = () => { if (!past.length) return; setFuture(f => [draft, ...f]); const previous = past[past.length - 1]; setDraft(previous); syncScript(previous.script); setPast(p => p.slice(0, -1)); setSaved(false) }
  const redo = () => { if (!future.length) return; setPast(p => [...p, draft]); const next = future[0]; setDraft(next); syncScript(next.script); setFuture(f => f.slice(1)); setSaved(false) }
  const save = () => { try { localStorage.setItem('pineapple-studio-draft', JSON.stringify(draft)); setSaved(true); setNotice('已保存到此浏览器'); } catch { setNotice('浏览器存储不可用，请导出配置保存'); } }
  const showScriptEditor = () => {
    setScriptHistoryOpen(false)
    setScriptExpanded(true)
    setTab('edit')
    requestAnimationFrame(() => studioEditor.current?.scrollTo({ top: 0 }))
  }
  const startScriptEdit = () => { scriptOperation.current++; scriptEditOrigin.current = draft.script; scriptEditHistoryAdded.current = false; setScriptEditText(draft.script); setScriptPhase('editing'); showScriptEditor() }
  const updateScriptText = (text: string) => {
    if (scriptPhase === 'empty') { scriptEditOrigin.current = draft.script; scriptEditHistoryAdded.current = false; setScriptPhase('editing') }
    if (!scriptEditHistoryAdded.current) { setPast(p => [...p.slice(-29), draft]); setFuture([]); scriptEditHistoryAdded.current = true }
    setDraft(current => ({ ...current, script: text })); setScriptEditText(text); setScriptConfirmed(false); setSaved(false)
  }
  const confirmScript = () => { if (!draft.script.trim()) return; recordScript(draft.script, '手动编辑', true); scriptEditHistoryAdded.current = false; setScriptConfirmed(true); if (scriptExpanded) { studioEditor.current?.scrollTo({ top: 0 }); setScriptExpanded(false) } }
  const openScriptHistory = (text?: string) => {
    setHistoryText(text)
    setScriptHistoryOpen(true)
    setScriptExpanded(true)
    setTab('edit')
    requestAnimationFrame(() => studioEditor.current?.scrollTo({ top: 0 }))
  }
  const restoreScript = (text: string) => {
    recordScript(draft.script, '手动编辑', true)
    recordScript(text, '历史恢复', true)
    changed({ ...draft, script: text })
    syncScript(text)
    setScriptPhase('editing')
    scriptEditOrigin.current = text
    scriptEditHistoryAdded.current = false
    showScriptEditor()
    setNotice('已恢复脚本版本，请确认脚本内容')
  }
  const cancelScriptEdit = () => {
    scriptOperation.current++
    const previous = scriptPhase === 'error' ? scriptReturnState.current : { phase: scriptEditOrigin.current.trim() ? 'ready' : 'empty' as ScriptPhase, text: scriptEditOrigin.current }
    if (scriptPhase === 'editing') setDraft(current => ({ ...current, script: previous.text }))
    scriptEditHistoryAdded.current = false
    setScriptEditText(previous.text); setScriptPhase(previous.phase); setScriptError('')
  }
  const structuredPrompt = (target: ComposerTarget) => [
      target === 'global' ? '请协助完善【数字人视频工作流】' : `请生成【${generationNames[target]}】`,
      `项目：${draft.title || '数字人视频'}`,
      target === 'global' ? `视频类型：${draft.custom[0] || draft.answers[0]}` : target === 'script' ? `主题：${draft.custom[0] || draft.answers[0]}` : target === 'character' ? '人物设定：适合当前视频主题的数字人形象' : target === 'background' ? '场景描述：适合当前视频主题的背景空间' : '产品要求：适合当前视频主题的产品素材',
      `用途：${draft.custom[1] || draft.answers[1]}`,
      `风格：${draft.custom[2] || draft.answers[2]}`,
      '补充要求：',
    ].join('\n')
  const prepareGeneration = (target: GenerationTarget) => {
    const operation = ++generationOperation.current
    if (generationTask?.status !== 'draft') setMessages(current => current.map(item => item.kind === 'generation' && item.id === generationTask?.id ? { ...item, status: 'discarded' } : item))
    setComposerTarget(target)
    setComposerPromptMode('structured')
    setGenerationTask({ id: operation, target, status: 'draft', candidate: '', prompt: '' })
    setMessage(structuredPrompt(target))
    setTab('chat')
    requestAnimationFrame(() => composer.current?.focus())
  }
  const beginGeneration = (target: GenerationTarget, prompt: string) => {
    const operation = ++generationOperation.current
    setTab('chat')
    if (generationTask?.status !== 'draft') setMessages(current => current.map(item => item.kind === 'generation' && item.id === generationTask?.id ? { ...item, status: 'discarded' } : item))
    setGenerationTask({ id: operation, target, status: 'generating', candidate: '', prompt })
    setMessages(current => [...current, { kind: 'generation', id: operation, target, status: 'generating', candidate: '' }])
    window.setTimeout(() => {
      if (generationOperation.current !== operation) return
      const topic = prompt.match(/主题：([^\n]+)/)?.[1]?.trim() || draft.custom[0].trim() || draft.answers[0]
      const candidate = target === 'script'
        ? `【${draft.title || '数字人视频'}】\n\n【开场白】\n大家好，欢迎来到我们的直播间！今天我们要聊的话题是${topic}，相信很多朋友对这个领域既好奇又困惑，今天我就用最直白的方式，帮大家彻底搞清楚。\n\n【痛点引入】\n在日常生活中，很多人都会遇到这样的问题：不知道从哪里入手，信息太多反而不知道该信什么。其实这很正常，因为这个领域发展太快，今天我们就来帮你理清思路。\n\n【核心内容】\n首先，我们来了解一下${topic}最核心的价值所在。它真正解决的是什么问题？简单来说，就是让事情变得更简单、更高效、更可靠。\n\n接下来我们看三个最重要的应用场景：第一个场景是日常使用，第二个场景是专业进阶，第三个场景是团队协作。每个场景都有它独特的优势。\n\n【产品亮点】\n说到亮点，我们重点介绍以下几点：操作简便，上手快；效果显著，反馈好；性价比高，值得投入。这三点是用户最关心的，也是我们最有信心的地方。\n\n【行动引导】\n如果你也有类似的需求，欢迎在评论区告诉我你最想了解哪个方向，我们下期专门针对大家的问题来深入讲解。记得点赞收藏，方便之后回看！`
        : demoImages[target]
      setGenerationTask({ id: operation, target, status: 'ready', candidate, prompt })
      if (target === 'script') recordScript(candidate, 'AI 生成')
      setMessages(current => current.map(item => item.kind === 'generation' && item.id === operation ? { ...item, status: 'ready', candidate } : item))
    }, 1200)
  }
  const discardGeneration = () => {
    generationOperation.current++
    if (generationTask?.status === 'draft') setMessage('')
    else if (generationTask) setMessages(current => current.map(item => item.kind === 'generation' && item.id === generationTask.id ? { ...item, status: 'discarded' } : item))
    setGenerationTask(null)
  }
  const applyGeneration = () => {
    if (generationTask?.status !== 'ready') return
    const { target, candidate } = generationTask
    if (target === 'script') {
      recordScript(draft.script, '手动编辑', true)
      recordScript(candidate, 'AI 生成', true)
      changed({ ...draft, script: candidate })
      setScriptEditText(candidate); setScriptPhase('editing'); setScriptConfirmed(false)
      showScriptEditor()
    } else {
      setMedia(current => ({ ...current, [target]: candidate }))
      if (target === 'background') setBackgroundState('已上传')
      setSaved(false)
    }
    setMessages(current => current.map(item => item.kind === 'generation' && item.id === generationTask.id ? { ...item, status: 'applied' } : item))
    generationOperation.current++
    setGenerationTask(null)
    setNotice(`已将示例结果回填至${generationNames[target]}`)
  }
  const exportDraft = () => {
    const blob = new Blob([JSON.stringify({ ...draft, assets: Object.keys(media), sticker: stickerImage, previewStatus }, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `${draft.title || '数字人视频'}.json`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  useEffect(() => { if (!notice) return; const t = setTimeout(() => setNotice(''), 4000); return () => clearTimeout(t) }, [notice])
  useEffect(() => {
    const textarea = composer.current
    if (!textarea) return
    textarea.style.height = '0px'
    const nextHeight = Math.min(Math.max(textarea.scrollHeight, 44), 144)
    textarea.style.height = `${nextHeight}px`
    textarea.style.overflowY = textarea.scrollHeight > 144 ? 'auto' : 'hidden'
  }, [message])
  useEffect(() => {
    if (!composerMenu) return
    const close = (event: PointerEvent) => { if (!composerControls.current?.contains(event.target as Node)) setComposerMenu(null) }
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setComposerMenu(null) }
    document.addEventListener('pointerdown', close); document.addEventListener('keydown', escape)
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', escape) }
  }, [composerMenu])
  useEffect(() => { if (dialog) dialogRef.current?.showModal(); else dialogRef.current?.close() }, [dialog])
  useEffect(() => {
    const el = chatBody.current; if (!el) return
    const scroll = () => { el.scrollTop = el.scrollHeight }
    scroll(); const observer = new ResizeObserver(scroll)
    observer.observe(el)
    const conversation = el.querySelector('.studio-conversation')
    if (conversation) observer.observe(conversation)
    return () => observer.disconnect()
  }, [messages, thinking])
  useEffect(() => () => { stickerOperation.current++; scriptOperation.current++; generationOperation.current++; previewOperation.current++; submissionOperation.current++; objectUrls.current.forEach(u => URL.revokeObjectURL(u)) }, [])
  const upload = (kind: MediaKind) => { fileKind.current = kind; if (kind === 'attachment') { attachmentFileInput.current?.click(); return } const input = fileInput.current; if (!input) return; input.accept = kind === 'voice' ? '.mp3,.wav,.m4a' : kind === 'script' ? '.txt,.md' : 'image/*'; input.click() }
  const readFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return
    const kind = fileKind.current
    if (kind === 'attachment') {
      const next = Array.from(e.target.files ?? []).map(item => {
        const preview = item.type.startsWith('image/') ? URL.createObjectURL(item) : undefined
        if (preview) objectUrls.current.push(preview)
        return { id: ++attachmentId.current, name: item.name, size: item.size, preview, extension: item.name.split('.').pop()?.toUpperCase() || '文件' }
      })
      setAttachments(current => [...current, ...next])
      e.target.value = ''
      return
    }
    const stickerRequest = kind === 'sticker' ? ++stickerOperation.current : 0
    if (kind === 'script') {
      if (scriptPhase !== 'error') scriptReturnState.current = { phase: scriptPhase, text: scriptEditText }
      const operation = ++scriptOperation.current
      setScriptFileName(file.name); setScriptError(''); setScriptPhase('uploading')
      try {
        const [text] = await Promise.all([file.text(), new Promise(resolve => setTimeout(resolve, 450))])
        if (scriptOperation.current === operation) {
          if (text.length > SCRIPT_MAX_LENGTH) throw new Error(`文件共有 ${text.length} 字，超过 ${SCRIPT_MAX_LENGTH} 字限制。请缩短后重新上传。`)
          if (!text.trim()) throw new Error('文件没有可用的脚本内容，请选择其他文件。')
          recordScript(draft.script, '手动编辑', true); recordScript(text, '文件上传', true)
          changed({ ...draft, script: text }); setScriptEditText(text); setScriptConfirmed(false); setScriptPhase('editing')
          showScriptEditor()
        }
      } catch (error) { if (scriptOperation.current === operation) { setScriptError(error instanceof Error ? error.message : '文件读取失败，请重新上传。'); setScriptPhase('error') } }
    }
    else if (kind === 'voice') { if (!/\.(mp3|wav|m4a)$/i.test(file.name)) { setNotice('仅支持 MP3、WAV、M4A 格式的音频文件'); e.target.value = ''; return } const url = URL.createObjectURL(file); objectUrls.current.push(url); setVoiceState('上传中'); await new Promise(resolve => setTimeout(resolve, 450)); setMedia(m => ({ ...m, voice: url })); setVoiceState('已上传'); setSaved(false) }
    else {
      const url = URL.createObjectURL(file)
      setImageLoading(current => ({ ...current, [kind]: true }))
      try {
        const image = new Image(); image.src = url
        await Promise.all([image.decode(), new Promise(resolve => setTimeout(resolve, 450))])
        if (kind === 'sticker' && stickerRequest !== stickerOperation.current) { URL.revokeObjectURL(url); return }
        objectUrls.current.push(url)
        if (kind === 'sticker') setStickerImage(url)
        else setMedia(current => ({ ...current, [kind]: url }))
        if (kind === 'background') setBackgroundState('已上传')
        setSaved(false)
      } catch { URL.revokeObjectURL(url); setNotice('图片无法加载，请选择其他文件') }
      finally { if (kind !== 'sticker' || stickerRequest === stickerOperation.current) setImageLoading(current => ({ ...current, [kind]: false })) }
    }
    e.target.value = ''
  }
  const removeImage = (kind: 'character' | 'background' | 'vehicle') => {
    const previous = media[kind]
    if (previous?.startsWith('blob:')) { URL.revokeObjectURL(previous); objectUrls.current = objectUrls.current.filter(url => url !== previous) }
    setMedia(current => ({ ...current, [kind]: undefined }))
    if (kind === 'background') setBackgroundState('默认')
    setSaved(false)
  }
  const action = (kind: MediaKind, intent: AssetAction) => {
    if (intent === 'upload') upload(kind)
    else if (intent === 'library') { setLibraryTarget(kind); setDialog('library') }
    else if (kind === 'character' || kind === 'background' || kind === 'vehicle') prepareGeneration(kind)
  }
  const confirmLibrary = ({ asset: image, voiceSettings: nextVoiceSettings, stickerFields: nextStickerFields }: LibrarySelection) => {
    if (libraryTarget === 'voice') { if (nextVoiceSettings) setVoiceSettings(nextVoiceSettings); setVoiceState('已上传'); setNotice('已选择示例音色并保存参数；试听音频尚未接入') }
    else if (libraryTarget === 'attachment' || libraryTarget === 'sticker') { stickerOperation.current++; setImageLoading(current => ({ ...current, sticker: false })); setStickerImage(image); if (nextStickerFields) setStickerFields(nextStickerFields) }
    else { setMedia(m => ({ ...m, [libraryTarget]: image })); if (libraryTarget === 'background') setBackgroundState('已上传') }
    setSaved(false)
    setDialog(null)
  }
  const send = () => { if (!message.trim() && !attachments.length) return; const prompt = message.trim(); const sentAttachments = attachments.map(item => ({ ...item })); setMessages(m => [...m, { kind: 'user', id: ++chatMessageId.current, text: prompt, attachments: sentAttachments }]); setMessage(''); setAttachments([]); const target = generationTask?.target ?? composerTarget; if (prompt && target !== 'global') beginGeneration(target, prompt); else setNotice(prompt ? '全局需求已保留；AI 对话服务尚未连接' : '附件已保留；AI 生成服务尚未连接') }
  const submit = () => {
    if (informationSubmitted) return
    const answers = questions.map((_, index) => draft.custom[index].trim() || draft.answers[index])
    const id = ++chatMessageId.current
    const operation = ++submissionOperation.current
    setInformationSubmitted(true)
    setTab('chat')
    setMessages(current => [...current, { kind: 'submission', id, answers, phase: 'thinking', expanded: false }])
    window.setTimeout(() => { if (submissionOperation.current === operation) setMessages(current => current.map(item => item.kind === 'submission' && item.id === id ? { ...item, phase: 'reply' as const } : item)) }, 800)
    window.setTimeout(() => {
      if (submissionOperation.current !== operation) return
      setMessages(current => current.map(item => item.kind === 'submission' && item.id === id ? { ...item, phase: 'generating' as const } : item))
      setScriptPhase('generating')
      setSubmissionGenerating(true)
    }, 1900)
    window.setTimeout(() => {
      if (submissionOperation.current !== operation) return
      const topic = draft.custom[0].trim() || draft.answers[0]
      const candidate = `【${draft.title || '数字人视频'}】\n\n【开场白】\n大家好，欢迎来到我们的直播间！今天我们要聊的话题是${topic}，相信很多朋友对这个领域既好奇又困惑，今天我就用最直白的方式，帮大家彻底搞清楚。\n\n【痛点引入】\n在日常生活中，很多人都会遇到这样的问题：不知道从哪里入手，信息太多反而不知道该信什么。其实这很正常，因为这个领域发展太快，今天我们就来帮你理清思路。\n\n【核心内容】\n首先，我们来了解一下${topic}最核心的价值所在。它真正解决的是什么问题？简单来说，就是让事情变得更简单、更高效、更可靠。\n\n接下来我们看三个最重要的应用场景：第一个场景是日常使用，第二个场景是专业进阶，第三个场景是团队协作。每个场景都有它独特的优势。\n\n【产品亮点】\n说到亮点，我们重点介绍以下几点：操作简便，上手快；效果显著，反馈好；性价比高，值得投入。这三点是用户最关心的，也是我们最有信心的地方。\n\n【行动引导】\n如果你也有类似的需求，欢迎在评论区告诉我你最想了解哪个方向，我们下期专门针对大家的问题来深入讲解。记得点赞收藏，方便之后回看！`
      const genId = ++chatMessageId.current
      recordScript(candidate, 'AI 生成')
      setPast(p => [...p.slice(-29), draft])
      setFuture([])
      setDraft(current => ({ ...current, script: candidate }))
      setSaved(false)
      setScriptEditText(candidate)
      setScriptPhase('editing')
      setScriptConfirmed(false)
      setMessages(msgs => [
        ...msgs.map(item => item.kind === 'submission' && item.id === id ? { ...item, phase: 'done' as const } : item),
        { kind: 'generation', id: genId, target: 'script' as GenerationTarget, status: 'applied' as const, candidate }
      ])
      setSubmissionGenerating(false)
    }, 3500)
  }
  const hasPreviewAssets = !!media.character && !!media.background && !imageLoading.character && !imageLoading.background && !imageLoading.vehicle
  const previewInputKey = [media.character || '', media.background || '', media.vehicle || ''].join('|')
  previewInputRef.current = previewInputKey
  const previewCurrent = hasPreviewAssets && previewStatus === 'ready' && previewSource === previewInputKey
  const previewStale = previewStatus === 'ready' && !previewCurrent
  const productionReady = previewCurrent && scriptConfirmed && voiceState === '已上传'
  const missingPreviewAssets = [!media.character && '人物', !media.background && '背景'].filter(Boolean).join('、')
  const previewAssetsLoading = !!imageLoading.character || !!imageLoading.background || !!imageLoading.vehicle
  const missingProductionItems = [!previewCurrent && '合成画面', !scriptConfirmed && '确认脚本', voiceState !== '已上传' && '选择音色'].filter(Boolean).join('、')
  const startPreviewComposition = () => {
    if (!hasPreviewAssets) return
    const operation = ++previewOperation.current
    const source = previewInputKey
    setPreviewSource(source)
    setPreviewStatus('generating')
    window.setTimeout(() => {
      if (previewOperation.current === operation && previewInputRef.current === source) setPreviewStatus('ready')
    }, 1200)
  }
  useEffect(() => {
    if (previewStatus === 'generating' && previewSource !== previewInputKey) {
      previewOperation.current++
      setPreviewStatus('idle')
    }
  }, [previewInputKey, previewSource, previewStatus])
  const expanded = scriptExpanded
  return <div className="studio">
    <header className="studio-topbar">
      <div className="studio-project"><span className="studio-logo"><Glyph file="2749b.svg"/><span className="studio-logo-zero"><Glyph file="bffbe.svg"/></span></span><div>
        <div className="studio-title">{editingTitle ? <input aria-label="项目名称" autoFocus maxLength={40} value={draft.title} onChange={e => changed({ ...draft, title: e.target.value })} onBlur={() => setEditingTitle(false)} onKeyDown={e => e.key === 'Enter' && setEditingTitle(false)}/> : <span>{draft.title}</span>}<button aria-label="重命名项目" onClick={() => setEditingTitle(true)}><Glyph file="0044f.svg"/></button></div><span className="studio-save-state">{saved ? '已保存' : '未保存'}</span>
      </div></div>
      <div className="studio-toolbar">
        <button className="studio-tool" aria-label="历史记录" onClick={() => setDialog('history')}><Glyph file="e0f3c.svg"/></button>
        <button className="studio-tool" aria-label="保存项目" onClick={save}><Glyph file="b765b.svg"/></button>
        <button className="studio-tool" aria-label="撤销" disabled={!past.length} onClick={undo}><Glyph file="45bce.svg"/></button>
        <button className="studio-tool" aria-label="重做" disabled={!future.length} onClick={redo}><Glyph file="4bc7a.svg" className="studio-flip"/></button>
        <button className="studio-tool" aria-label="检查生产配置" onClick={() => setDialog('produce')}><Glyph file="b088e.svg"/></button>
        <button className="studio-publish" onClick={() => setDialog('publish')}><Glyph file="28c81.svg"/>发布</button>
        <button className="studio-produce" onClick={() => setDialog('produce')}><Glyph file="5d7b8.svg"/>执行生产</button>
      </div>
    </header>
    <nav className="studio-mobile-nav" aria-label="工作区域">{[['chat', '对话'], ['edit', '编辑'], ['preview', '预览']].map(([key, label]) => <button key={key} aria-pressed={tab === key} onClick={() => setTab(key)}>{label}</button>)}</nav>
    <main className={`studio-workspace studio-view-${tab}`}>
      <aside className="studio-chat studio-panel" aria-label="AI 对话">
        <header className="studio-chat-header"><button onClick={() => setDialog('history')}>未命名对话<Glyph file="8530c.svg"/></button></header>
        <div className="studio-chat-scroll" ref={chatBody}><div className="studio-conversation">
          <div className="studio-user-bubble">帮我生成一个小红书图文工作流，可以一键发布小红书的那种</div>
          <div className="studio-assistant"><button className="studio-thinking" aria-expanded={thinking} onClick={() => setThinking(!thinking)}>已完成思考<Glyph file="0a566.svg" className={thinking ? '' : 'studio-turn'}/></button>{thinking && <p>先确认视频类型、用途和风格，再补充人物、音色、场景与脚本。</p>}
            <p>好的，以收集到基础行业信心，补充一下信息，我将为您产出更完善的法律个债行业的直播脚本。</p>
            {informationSubmitted ? <section className="studio-confirmed-summary" aria-label="已确认的需求信息">
              <header><strong>需求信息</strong><span><svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 8 3 3 7-7"/></svg>已确认</span></header>
              <dl>{['视频类型', '主要用途', '呈现风格'].map((label, i) => <div key={label}><dt>{label}</dt><dd>{messages.find(m => m.kind === 'submission')?.answers[i]}</dd></div>)}</dl>
            </section> : <div className="studio-questionnaire">{questions.map((q, i) => <fieldset key={q}><legend>{q}</legend><div className="studio-choices">{choices[i].map(c => <button key={c} aria-pressed={draft.answers[i] === c && !draft.custom[i]} onClick={() => changed({ ...draft, answers: draft.answers.map((v, j) => j === i ? c : v), custom: draft.custom.map((v, j) => j === i ? '' : v) })}>{c}</button>)}</div><label className="studio-other"><Glyph file="f22e1.svg"/><input aria-label={`问题${i + 1}的其他想法`} placeholder="我有其他想法" value={draft.custom[i]} onChange={e => changed({ ...draft, custom: draft.custom.map((v, j) => j === i ? e.target.value : v) })}/></label></fieldset>)}</div>}
            {!informationSubmitted && <button className="studio-submit" onClick={submit}>提交信息</button>}
          </div>
          {messages.map(m => m.kind === 'user' ? <article className="studio-user-message" key={`user-${m.id}`} aria-label="已发送的需求">
            {!!m.attachments?.length && <div className="studio-user-attachments">{m.attachments.map(item => item.preview ? <img key={item.id} src={item.preview} alt={item.name} title={item.name}/> : <div className="studio-user-file" key={item.id} title={item.name}><span>{item.extension.slice(0, 3)}</span><strong>{item.name}</strong></div>)}</div>}
            {m.text && <div className="studio-user-bubble">{m.text}</div>}
          </article> : m.kind === 'submission' ? <article className="studio-submission-flow" key={`submission-${m.id}`} aria-label="信息确认后的生成进度">
            {m.phase === 'thinking' ? <div className="studio-submission-thinking" role="status">正在思考<span className="studio-submission-dots" aria-hidden="true">···</span></div> : <button className="studio-thinking" aria-expanded={m.expanded} onClick={() => setMessages(current => current.map(item => item.kind === 'submission' && item.id === m.id ? { ...item, expanded: !item.expanded } : item))}>已完成思考<Glyph file="0a566.svg" className={m.expanded ? '' : 'studio-turn'}/></button>}
            {m.expanded && <p className="studio-submission-thought">已根据视频类型、用途和风格整理脚本方向。</p>}
            {m.phase !== 'thinking' && <div className="studio-submission-reply"><p>已收到需求，开始生成脚本。</p></div>}
            {m.phase === 'generating' && <div className="studio-submission-progress" role="status"><span>脚本大纲生成中</span><span className="studio-submission-spinner" aria-hidden="true"/></div>}
          </article> : <article className="studio-generated-message" key={`generation-${m.id}`} aria-label={`${generationNames[m.target]}生成内容`}>
            <div className="studio-generated-meta"><strong>{generationNames[m.target]}</strong><div className="studio-generated-actions"><span>{m.status === 'generating' ? '生成中' : m.status === 'ready' ? '待确认' : m.status === 'applied' ? '已回填' : '未使用'}</span>{m.status === 'ready' && generationTask?.id === m.id && <><button aria-label="确认回填" title="确认回填" onClick={applyGeneration}><svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path d="m4.5 10 3.5 3.5 7.5-7.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></button><button aria-label="放弃生成结果" title="放弃生成结果" onClick={discardGeneration}><svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg></button></>}</div></div>
            {m.status === 'generating' ? <p className="studio-generated-loading">正在准备本地示例结果…</p> : !m.candidate ? <p className="studio-generated-loading">已取消生成</p> : <>{m.target === 'script' ? <><div className={`studio-generated-text-wrap ${expandedScripts.has(m.id) ? 'studio-generated-text-wrap--expanded' : ''}`}><p className="studio-generated-text">{m.candidate}</p></div><button className="studio-generated-expand" onClick={() => setExpandedScripts(prev => { const next = new Set(prev); next.has(m.id) ? next.delete(m.id) : next.add(m.id); return next })}>{expandedScripts.has(m.id) ? '收起' : '查看更多'}</button></> : <img className="studio-generated-image" src={m.candidate} alt={`${generationNames[m.target]}示例预览`}/>}</>}
          </article>)}
        </div></div>
        <div className={`studio-composer ${generationTask?.status === 'draft' ? 'studio-composer--prompt' : ''} ${attachments.length ? 'studio-composer--attached' : ''}`}>
          {attachments.length > 0 && <div className="studio-attachments" aria-label="已上传附件">
            {attachments.map(item => <div className={`studio-attachment ${item.preview ? 'studio-attachment--image' : 'studio-attachment--file'}`} key={item.id}>
              {item.preview ? <img src={item.preview} alt={item.name}/> : <><span className="studio-attachment-file" aria-hidden="true">{item.extension.slice(0, 3)}</span><span className="studio-attachment-info"><span title={item.name}>{item.name}</span><small>{item.extension} · {(item.size / 1024 / 1024).toFixed(1)}MB</small></span></>}
              <button type="button" aria-label={`移除附件 ${item.name}`} onClick={() => { if (item.preview) URL.revokeObjectURL(item.preview); setAttachments(current => current.filter(attachment => attachment.id !== item.id)) }}>×</button>
            </div>)}
          </div>}
          <textarea ref={composer} aria-label="对话需求" placeholder={composerPromptMode === 'structured' ? `描述${composerTargetNames[composerTarget]}，或从结构化模板开始` : `自由输入${composerTargetNames[composerTarget]}`} value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing && generationTask?.status !== 'draft') { e.preventDefault(); send() } }}/>
          <div className="studio-compose-actions"><div ref={composerControls}>
            <button aria-label="添加附件" onClick={() => upload('attachment')}><Glyph file="dcc27.svg"/></button>
            <button className={`studio-prompt-toggle ${composerPromptMode === 'structured' ? 'studio-prompt-toggle--active' : ''}`} aria-label={composerPromptMode === 'structured' ? '取消结构化提示词' : '激活结构化提示词'} aria-pressed={composerPromptMode === 'structured'} title={composerPromptMode === 'structured' ? '结构化提示词已激活' : '自由输入，点击激活结构化提示词'} onClick={() => { const structured = composerPromptMode !== 'structured'; setComposerPromptMode(structured ? 'structured' : 'free'); if (structured) setMessage(structuredPrompt(composerTarget)); else { if (message.startsWith('请生成【') || message.startsWith('请协助完善【')) setMessage(''); if (generationTask?.status === 'draft') setGenerationTask(null) } requestAnimationFrame(() => composer.current?.focus()) }}><Glyph file="05e6b.svg"/></button>
            <span className="studio-compose-control">
              <button className="studio-mode" aria-label={`生成模块：${composerTargets.find(item => item.value === composerTarget)?.label}`} aria-haspopup="menu" aria-expanded={composerMenu === 'target'} onClick={() => setComposerMenu(current => current === 'target' ? null : 'target')}><Glyph file="c6d65.svg"/>{composerTargets.find(item => item.value === composerTarget)?.label}<Glyph file="b5034.svg"/></button>
              {composerMenu === 'target' && <span className="studio-compose-menu studio-compose-menu--target" role="menu" aria-label="选择生成模块">
                {composerTargets.map(item => <button key={item.value} role="menuitemradio" aria-checked={composerTarget === item.value} onClick={() => { setComposerTarget(item.value); if (composerPromptMode === 'structured') setMessage(structuredPrompt(item.value)); if (generationTask?.status === 'draft') setGenerationTask(current => item.value === 'global' ? null : current ? { ...current, target: item.value } : current); setComposerMenu(null); requestAnimationFrame(() => composer.current?.focus()) }}>{item.label}<span aria-hidden="true">{composerTarget === item.value ? '✓' : ''}</span></button>)}
              </span>}
            </span>
          </div><button className={`studio-send ${message.trim() || attachments.length ? 'studio-send--ready' : ''}`} aria-label="发送需求" disabled={!message.trim() && !attachments.length} onClick={send}><svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true"><path d="M16 23V9m0 0-6 6m6-6 6 6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button></div>
        </div>
      </aside>
      <section ref={studioEditor} className={`studio-editor ${expanded ? 'studio-editor--expanded' : ''}`} aria-label="创作编辑区"><div className="studio-editor-flow">
        <ScriptCard onHistory={() => scriptHistoryOpen ? setScriptHistoryOpen(false) : openScriptHistory()} historyPanel={scriptHistoryOpen ? <ScriptHistory key={historyText ?? 'latest'} initialText={historyText} versions={versions} currentText={draft.script} onUse={restoreScript} onClose={() => setScriptHistoryOpen(false)}/> : undefined} phase={scriptPhase} expanded={scriptExpanded} confirmed={scriptConfirmed} onExpandedChange={setScriptExpanded} value={draft.script} onChange={updateScriptText} onEdit={startScriptEdit} onConfirm={confirmScript} onCancel={cancelScriptEdit} onUpload={() => upload('script')} onGenerate={() => prepareGeneration('script')} onRetry={() => upload('script')} fileName={scriptFileName} error={scriptError}/>
        <div className="studio-supporting-modules">
        <div className="studio-assets-row"><CharacterVoiceCard imageUrl={media.character} loadingImage={!!imageLoading.character} onRemoveImage={() => removeImage('character')} audioUrl={media.voice} voiceState={voiceState} onVoiceStateChange={setVoiceState} onAction={intent => action('character', intent)} onVoiceUpload={() => upload('voice')} onVoiceLibrary={() => { setLibraryTarget('voice'); setDialog('library') }}/><BackgroundCard state={backgroundState} onStateChange={setBackgroundState} imageUrl={media.background} loadingBackground={!!imageLoading.background} onRemoveBackground={() => removeImage('background')} vehicleImageUrl={media.vehicle} loadingVehicle={!!imageLoading.vehicle} onRemoveVehicle={() => removeImage('vehicle')} onAction={intent => action('background', intent)} onVehicleAction={intent => action('vehicle', intent)}/></div>
        <StickerCard onUpload={() => upload('sticker')} loading={!!imageLoading.sticker} compact={expanded} selectedSticker={stickerImage} onStickerChange={image => { stickerOperation.current++; setImageLoading(current => ({ ...current, sticker: false })); setStickerImage(image); setSaved(false) }} previewReady={previewCurrent} onMore={() => { setLibraryTarget('attachment'); setDialog('library') }}/>
        </div>
      </div></section>
      <aside className="studio-preview studio-panel" aria-label="视频预览"><div className="studio-preview-main">
        <PreviewAssetToolbar media={media} loading={imageLoading} composing={previewStatus === 'generating'} ready={previewCurrent || previewStale} screenReady={previewCurrent} onCompose={startPreviewComposition}>
          {previewCurrent ? <><img className="studio-composite-image" src={asset('b6415.png')} alt="合成画面本地示例" onError={() => setPreviewStatus('error')}/>{stickerImage && <img className="studio-preview-sticker" src={stickerImage} alt="已叠加贴纸"/>}</> : <div className="studio-preview-placeholder" role="status">
            {previewStatus === 'generating' && previewSource === previewInputKey ? <><span className="studio-preview-spinner" aria-hidden="true"/><strong>正在合成预览画面</strong></>
              : <><Glyph file="34d8a.svg"/><strong>{previewAssetsLoading ? '正在准备素材' : previewStale ? '素材已更新，请重新合成' : previewStatus === 'error' ? '画面加载失败，请重试' : hasPreviewAssets ? '素材已就绪，可以开始合成' : `请先添加${missingPreviewAssets}`}</strong></>}
          </div>}
        </PreviewAssetToolbar>
      </div><div className="studio-preview-footer"><p>{productionReady ? '画面、脚本与音色已就绪' : `还需${missingProductionItems}`}</p><button disabled={!productionReady} onClick={() => setDialog('produce')}>执行生产</button></div></aside>
    </main>
    <input type="file" ref={fileInput} hidden onChange={readFile}/>
    <input type="file" ref={attachmentFileInput} hidden multiple accept="image/*,.txt,.md,.pdf" onChange={readFile}/>
    {notice && <div className="studio-toast" role="status">{notice}</div>}
    <dialog ref={dialogRef} className={`studio-dialog ${dialog === 'library' ? `studio-dialog--library ${libraryTarget === 'voice' || libraryTarget === 'attachment' || libraryTarget === 'sticker' ? 'studio-dialog--library-configurable' : ''}` : ''}`} onCancel={() => setDialog(null)} onClick={e => { if (e.target === e.currentTarget) setDialog(null) }}>
      {dialog === 'library' ? <AssetLibraryContent kind={libraryTarget} onClose={() => setDialog(null)} onConfirm={confirmLibrary} initialVoiceSettings={voiceSettings} initialStickerFields={stickerFields}/> : <><button className="studio-dialog-close" aria-label="关闭弹窗" onClick={() => setDialog(null)}>×</button><h2>{dialog === 'history' ? '项目记录' : dialog === 'publish' ? '发布视频' : '生产配置'}</h2>
      {dialog === 'history' ? <><p>当前会话有 {past.length} 次可撤销修改。</p><button onClick={() => { try { const data = JSON.parse(localStorage.getItem('pineapple-studio-draft') || 'null'); if (data && typeof data.title === 'string' && typeof data.script === 'string' && Array.isArray(data.answers) && data.answers.length === 3 && data.answers.every((v: unknown) => typeof v === 'string') && Array.isArray(data.custom) && data.custom.length === 3 && data.custom.every((v: unknown) => typeof v === 'string')) { changed(data); syncScript(data.script); setDialog(null); setNotice('已恢复本地保存的文字配置') } else setNotice('暂无本地保存记录') } catch { setNotice('无法读取保存记录') } }}>恢复本地保存</button></> : <><p>当前为本地编辑预览，视频生成与发布服务尚未连接。</p><ul><li>人物：{media.character ? '已选择' : '未选择'}</li><li>音色：{voiceState === '已上传' ? '已选择' : '未选择'}</li><li>脚本：{draft.script ? `${draft.script.length} 字` : '未填写'}</li><li>背景：{media.background ? '已选择' : '默认场景'}</li></ul><button onClick={exportDraft}>导出当前配置</button></>}</>}
    </dialog>
  </div>
}
