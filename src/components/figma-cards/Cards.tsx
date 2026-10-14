import { useId, useLayoutEffect, useRef, useState } from 'react'
import type { ChangeEvent, ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { HTMLMotionProps } from 'motion/react'
import { assets } from './assets'
import { TooltipHelp } from './Tooltip'
import type { TooltipGuide } from './Tooltip'
import './cards.less'

export type BackgroundState = '默认' | 'hover' | '已上传' | '删除上传图片'
export type VoiceState = '默认' | '上传中' | '已上传'
export type CharacterState = '默认' | '人物hover'
export type ScriptState = 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Empty' | 'Generating'
export type ScriptPhase = 'empty' | 'generating' | 'ready' | 'editing' | 'uploading' | 'error'
export const SCRIPT_MAX_LENGTH = 10000
export type StickerState = '默认' | '左右滚动中间态' | '左右滚动最右态'
export type AssetAction = 'upload' | 'library' | 'generate'
const assetActionIcons = { upload: 'upload', generate: 'magic', library: 'files' } as const

function AssetActionIcon({ action }: { action: AssetAction }) {
  return <Icon name={assetActionIcons[action]} className="fc-asset-action-icon"/>
}

function CardSurface(props: HTMLMotionProps<'section'>) {
  const reduced = useReducedMotion()
  return <motion.section {...props} layout={props.layout ?? "position"} transition={{ layout: { duration: reduced ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] } }}/>
}

function Icon({ name, className = '' }: { name: keyof typeof assets; className?: string }) {
  return <span className={`fc-icon fc-icon--${name} ${className}`} aria-hidden="true"><img src={assets[name]} alt="" draggable={false}/></span>
}

function Header({ title, badge, guide, expanded = false, actions = false, actionsDisabled = false, onAction, onToggle, toggleLabel, onHistory }: {
  onHistory?: () => void;
  title: string; badge?: string; guide?: TooltipGuide; expanded?: boolean; actions?: boolean; actionsDisabled?: boolean; onAction?: (action: AssetAction | 'edit') => void; onToggle?: () => void; toggleLabel?: string
}) {
  return <header className={`fc-header ${guide ? 'fc-header--with-help' : ''}`}>
    {!guide && <button className="fc-collapse" aria-label={toggleLabel ?? `切换${title}`} onClick={onToggle}><Icon name="panel"/></button>}
    <div className="fc-heading">{guide && onToggle ? <button className="fc-heading-toggle" aria-label={toggleLabel ?? `切换${title}`} onClick={onToggle}><h2>{title}</h2></button> : <h2>{title}</h2>}{guide && <TooltipHelp text={guide.text} label={`${title}创作指南`} guide={guide}/>} {badge && <span className="fc-confirmed-tag">{badge}</span>}</div>
    {actions && <div className="fc-actions">
      {onHistory && <button className="fc-round" aria-label="脚本历史" title="脚本历史" onClick={onHistory}><Icon name="history"/></button>}
      <button className="fc-round" aria-label={`上传${title}`} disabled={actionsDisabled} onClick={() => onAction?.('upload')}><Icon name="upload"/></button>
      <button className="fc-round" aria-label={`AI生成${title}`} disabled={actionsDisabled} onClick={() => onAction?.('generate')}><Icon name="magic"/></button>
      <button className="fc-round fc-size-toggle" aria-label={`${expanded ? '收起' : '展开'}${title}`} onClick={onToggle}><Icon name={expanded ? 'collapse' : 'expand'}/></button>
    </div>}
  </header>
}

function AssetSlot({ label, hover = false, removable = false, loading = false, image, onAction, onRemove, character = false, libraryOnly = false, allowGenerate = true }: {
  label: string; hover?: boolean; removable?: boolean; loading?: boolean; image?: string; onAction?: (action: AssetAction) => void; onRemove?: () => void; character?: boolean; libraryOnly?: boolean; allowGenerate?: boolean
}) {
  return <div className={`fc-slot ${hover ? 'fc-slot--hover' : ''} ${image ? 'fc-slot--image' : ''} ${loading ? 'fc-slot--loading' : ''} ${removable ? 'fc-slot--remove-visible' : ''} ${character ? 'fc-slot--character' : ''}`} aria-busy={loading}>
    {image ? <img className="fc-uploaded-image" src={image} alt={`${label}素材`}/> : !loading && <button className="fc-add" aria-label={`添加${label}`} onClick={() => onAction?.('upload')}><Icon name="add"/></button>}
    <span className="fc-material-label">{label}</span>
    {!image && !loading && <div className="fc-slot-menu">
      {!libraryOnly && <span className="fc-slot-upload-wrap"><button onClick={() => onAction?.('upload')}><AssetActionIcon action="upload"/>本地上传</button><TooltipHelp text="支持 PNG、JPG、WebP、GIF 等浏览器可读取的图片格式" label={`${label}图片上传格式限制`}/></span>}
      {!libraryOnly && allowGenerate && <button onClick={() => onAction?.('generate')}><AssetActionIcon action="generate"/>AI生成</button>}
      <button onClick={() => onAction?.('library')}><AssetActionIcon action="library"/>资产库</button>
    </div>}
    {loading && <div className="fc-slot-loading" role="status"><span className="fc-slot-spinner"/>图片加载中...</div>}
    {image && !loading && <div className="fc-image-actions" style={{ width: 8 + 30 * (1 + Number(!libraryOnly) + Number(!libraryOnly && allowGenerate) + Number(!!onRemove)) }} role="group" aria-label={`${label}图片操作`}>
      {!libraryOnly && <button type="button" aria-label={`替换${label}图片`} title="替换" onClick={() => onAction?.('upload')}>
        <AssetActionIcon action="upload"/>
      </button>}
      {!libraryOnly && allowGenerate && <button type="button" aria-label={`AI生成${label}`} title="AI 生成" onClick={() => onAction?.('generate')}>
        <AssetActionIcon action="generate"/>
      </button>}
      <button type="button" aria-label={`打开${label}资产库`} title="资产库" onClick={() => onAction?.('library')}>
        <AssetActionIcon action="library"/>
      </button>
      {onRemove && <button type="button" aria-label={`删除${label}图片`} title="删除" onClick={onRemove}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 6h18M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M5 6l1 14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1l1-14M10 10v7m4-7v7"/></svg>
      </button>}
    </div>}
  </div>
}

export function BackgroundCard({ state = '默认', onStateChange, imageUrl, vehicleImageUrl, loadingBackground = false, loadingVehicle = false, onAction, onVehicleAction, onRemoveBackground, onRemoveVehicle }: {
  state?: BackgroundState; onStateChange?: (state: BackgroundState) => void; imageUrl?: string; vehicleImageUrl?: string; loadingBackground?: boolean; loadingVehicle?: boolean; onAction?: (action: AssetAction) => void; onVehicleAction?: (action: AssetAction) => void; onRemoveBackground?: () => void; onRemoveVehicle?: () => void
}) {
  const [collapsed, setCollapsed] = useState(false)
  const [productType, setProductType] = useState('')
  const [productTypeOpen, setProductTypeOpen] = useState(false)
  const uploaded = state === '已上传' || state === '删除上传图片'
  return <CardSurface className={`fc-card fc-background ${collapsed ? 'fc-card--collapsed' : ''}`} data-component="background" data-state={state}>
    <Header title="背景场景" guide={{ title: '背景场景', text: '上传与人物风格一致的清晰场景图片；如果需要展示商品，可在产品区域补充素材，并检查画面中的主体是否清楚。', cover: assets.room }} toggleLabel={`${collapsed ? '展开' : '收起'}背景场景`} onToggle={() => setCollapsed(!collapsed)}/>
    {!collapsed && <div className={`fc-background-body ${state === 'hover' ? 'fc-background-body--hover' : ''}`}>
      <AssetSlot label="背景" hover={state === 'hover'} image={uploaded ? imageUrl || assets.room : undefined} loading={loadingBackground} removable={state === '删除上传图片'} onAction={onAction} onRemove={() => { onRemoveBackground?.(); onStateChange?.('默认') }}/>
      <div className={`fc-product-column ${vehicleImageUrl ? 'fc-product-column--filled' : ''}`}>
        <AssetSlot label="产品" image={vehicleImageUrl} loading={loadingVehicle} onAction={onVehicleAction} onRemove={onRemoveVehicle}/>
        {vehicleImageUrl && <div className="fc-product-type-control" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setProductTypeOpen(false) }}>
          <button type="button" className={`fc-product-type-trigger ${productType ? 'fc-product-type-trigger--selected' : ''} ${productTypeOpen ? 'fc-product-type-trigger--open' : ''}`} aria-label="产品类型" aria-haspopup="listbox" aria-expanded={productTypeOpen} onClick={() => setProductTypeOpen(!productTypeOpen)}>
            <span>{productType || (productTypeOpen ? '产品类型' : '请选择产品类型')}</span><span className="fc-product-type-chevron" aria-hidden="true"/>
          </button>
          {productTypeOpen && <div className="fc-product-type-menu" role="listbox" aria-label="产品类型">
            {['服饰鞋包', '美妆个护', '食品饮料', '家居日用', '数码家电', '其他商品'].map(type => <button type="button" key={type} role="option" aria-selected={productType === type} onClick={() => { setProductType(type); setProductTypeOpen(false) }}><span className="fc-product-type-radio" aria-hidden="true">{productType === type && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M0.728516 5.46677L3.98309 8.72135C4.21557 8.95382 4.60528 8.90251 4.76966 8.61779L9.27379 0.816406" stroke="black" strokeWidth="1.2" strokeLinecap="round"/></svg>}</span>{type}</button>)}
          </div>}
        </div>}
      </div>
    </div>}
  </CardSurface>
}

export function VoiceCard({ state = '默认', onStateChange, onUpload, onLibrary, audioUrl, legacyIcons = false, name = '清透年轻女声' }: {
  state?: VoiceState; onStateChange?: (state: VoiceState) => void; onUpload?: () => void; onLibrary?: () => void; audioUrl?: string; legacyIcons?: boolean; name?: string
}) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(28)
  const [error, setError] = useState('')
  const audio = useRef<HTMLAudioElement>(null)
  const togglePlayback = async () => {
    if (!audio.current) { setError('请先上传音频以试听'); return }
    try { if (playing) audio.current.pause(); else await audio.current.play(); setPlaying(!playing); setError('') } catch { setError('此音频无法播放，请换一个文件') }
  }
  return <div className="fc-voice" data-component="voice" data-state={state}>
    <span className="fc-voice-heading"><span className="fc-material-label fc-voice-label">音色</span><TooltipHelp text="选择与人物形象和脚本语气相符的音色。上传的音频建议人声清晰、背景噪声少，上传后可试听效果。" label="音色创作指南" guide={{ title: '数字人音色', text: '选择与人物形象和脚本语气相符的音色。上传的音频建议人声清晰、背景噪声少，上传后可试听效果。', cover: '/figma-components/character-guide-cover.jpg' }}/></span>
    {state === '默认' ? <div className="fc-voice-options">
      <span className="fc-voice-upload-action"><button onClick={onUpload} aria-label="上传音色"><Icon name={legacyIcons ? "voiceUpload" : "voiceUploadNew"}/><span className="fc-voice-action-text">上传音色</span></button><TooltipHelp text="支持 MP3、WAV、M4A 格式的音频文件" label="音色上传格式限制"/></span><button onClick={onLibrary} aria-label="打开音色库" title="音色库"><Icon name={legacyIcons ? "wave" : "waveNew"}/><span className="fc-voice-action-text">音色库</span></button>
    </div> : <div className={`fc-voice-content ${state === '上传中' ? 'fc-voice-content--loading' : ''}`}>
      <button className="fc-voice-close" aria-label="移除音色" onClick={() => { audio.current?.pause(); setPlaying(false); setError(''); onStateChange?.('默认') }}><Icon name="delete"/></button>
      {state === '上传中' ? <><span className="fc-voice-avatar"><Icon name="audioNew"/></span><span className="fc-voice-loading" role="status">音色上传中...</span></> : <>
        <button className="fc-voice-avatar" aria-label={playing ? '暂停音色' : '播放音色'} onClick={togglePlayback}>{playing ? <span className="fc-pause">Ⅱ</span> : <Icon name="play"/>}</button>
        <div className="fc-voice-track"><span title={name}>{name}</span><div className="fc-progress"><div className="fc-progress-fill" style={{ width: `${progress}%` }}/><img className="fc-progress-thumb" src={assets.thumb} alt="" style={{ left: `${progress}%` }}/><input aria-label="音色播放进度" type="range" min="0" max="100" value={progress} onChange={e => { const p = +e.target.value; setProgress(p); if (audio.current && Number.isFinite(audio.current.duration)) audio.current.currentTime = p / 100 * audio.current.duration }}/></div></div>
      </>}
    </div>}
    {audioUrl && <audio ref={audio} src={audioUrl} onTimeUpdate={e => { if (Number.isFinite(e.currentTarget.duration)) setProgress(e.currentTarget.currentTime / e.currentTarget.duration * 100) }} onEnded={() => setPlaying(false)}/>}
    {error && <span className="fc-audio-message" role="status">{error}</span>}
  </div>
}

export function CharacterVoiceCard({ state = '默认', voiceState = '默认', onVoiceStateChange, onAction, imageUrl, audioUrl, loadingImage = false, onRemoveImage, onVoiceUpload, onVoiceLibrary }: {
  state?: CharacterState; voiceState?: VoiceState; onVoiceStateChange?: (state: VoiceState) => void; onAction?: (action: AssetAction) => void; imageUrl?: string; audioUrl?: string; loadingImage?: boolean; onRemoveImage?: () => void; onVoiceUpload?: () => void; onVoiceLibrary?: () => void
}) {
  return <CardSurface className="fc-card fc-character" data-component="character" data-state={state}>
    <Header title="人物与音色" guide={{ title: '数字人人物形象', text: '上传清晰的单人正面照片，保持面部无遮挡、光线均匀；音色建议选择与人物形象和视频风格相符的清晰音频。', cover: '/figma-components/character-guide-cover.jpg' }}/>
    <div className="fc-character-body"><AssetSlot label="人物" character hover={state === '人物hover'} image={imageUrl} loading={loadingImage} onAction={onAction} onRemove={onRemoveImage}/><VoiceCard legacyIcons={state === '人物hover'} state={voiceState} onStateChange={onVoiceStateChange} onUpload={onVoiceUpload} onLibrary={onVoiceLibrary} audioUrl={audioUrl}/></div>
  </CardSurface>
}

const paragraph = 'Paragraph-14px-22px-400. ' + 'Paragraph 1 content. '.repeat(11)
function RichTextExample() {
  const quoteId = useId()
  return <div className="fc-rich-example">
    <div className="fc-rich-section"><h3>H1-Title-18px-26px-700</h3><div className="fc-rich-divider"/><h4>H2-Title2-16px-24px-700</h4><p>{paragraph}</p><h5>H3-Title3-14px-22px-700</h5><p>{paragraph}</p><ul><li><strong>Point-13px-22px-700 :</strong> Here is content-13px-22px-400.</li></ul><ul><li><strong>Point 2:</strong> Here is <a href={`#${quoteId}`}>LINK LINK LINK</a></li></ul></div>
    {[0, 1].map(i => <div className="fc-rich-section" key={i} id={i === 0 ? quoteId : undefined}><h3>Title-18px-26px-700</h3><blockquote>
      <p><strong>Quote content-12px-20px-400.</strong> Quote content Quote content <strong>Quote content</strong> Quote content Quote content Quote content Quote content Quote content Quote content Quote content Quote content .</p>
      <p>Quote content-12px-20px-400. Quote content <strong>Quote content</strong> Quote content Quote content Quote content Quote content Quote content Quote content</p>
      <p>Quote content-12px-20px-400. Quote content Quote content Quote content <strong>Quote content</strong>  content Quote content Quote content Quote content Quote content</p>
      <p>Quote content-12px-20px-400. Quote content Quote content Quote content Quote content <strong>Quote content</strong>  Quote content Quote content Quote content</p>
    </blockquote><p>{paragraph}</p></div>)}
  </div>
}
export function ScriptCard({ state = 'Default', phase, expanded: expandedProp, confirmed = false, onStateChange, onExpandedChange, value, onChange, onUpload, onGenerate, onEdit, onConfirm, onCancel, onRetry, fileName, error, onHistory, historyPanel }: {
  onHistory?: () => void; historyPanel?: ReactNode;
  state?: ScriptState; phase?: ScriptPhase; expanded?: boolean; confirmed?: boolean; onStateChange?: (state: ScriptState) => void; onExpandedChange?: (expanded: boolean) => void; value?: string; onChange?: (text: string) => void; onUpload?: () => void; onGenerate?: () => void; onEdit?: () => void; onConfirm?: () => void; onCancel?: () => void; onRetry?: () => void; fileName?: string; error?: string
}) {
  const [localText, setLocalText] = useState('')
  const editor = useRef<HTMLTextAreaElement>(null)
  const text = value ?? localText
  const id = useId()
  const legacyExpanded = ['Variant2', 'Variant3', 'Variant4'].includes(state)
  const expanded = expandedProp ?? legacyExpanded
  const currentPhase = phase ?? (state === 'Empty' || state === 'Variant2' ? 'empty' : state === 'Generating' || state === 'Variant3' ? 'generating' : 'ready')
  const busy = currentPhase === 'uploading' || currentPhase === 'generating'
  const editable = currentPhase === 'empty' || currentPhase === 'editing' || (phase !== undefined && currentPhase === 'ready')
  const toggle = () => {
    if (onExpandedChange) onExpandedChange(!expanded)
    else onStateChange?.(editable ? (expanded ? 'Empty' : 'Variant2') : currentPhase === 'generating' ? (expanded ? 'Generating' : 'Variant3') : (expanded ? 'Default' : 'Variant4'))
  }
  const confirm = () => { editor.current?.blur(); onConfirm?.() }
  return <CardSurface className={`fc-card fc-script fc-script--${state} fc-script--phase-${currentPhase} ${expanded ? 'fc-script--expanded' : ''}`} data-component="script" data-state={phase ?? state} data-expanded={expanded} data-confirmed={confirmed}>
    <Header title="脚本内容" guide={{ title: '脚本内容', text: '先写清视频主题、目标受众和关键卖点，再按段落组织内容。确认脚本后仍可继续修改，也可以从历史版本恢复。', cover: '/figma-components/character-guide-cover.jpg' }} badge={confirmed ? '已确认' : undefined} expanded={expanded} actions actionsDisabled={busy} onHistory={onHistory} onToggle={toggle} onAction={action => { if (action === 'upload') onUpload?.(); else if (action === 'generate') onGenerate?.() }}/>
    {historyPanel ?? (editable ? <div className="fc-editor-body"><div className="fc-editor"><textarea ref={editor} id={id} aria-label="脚本内容" placeholder="输入脚本内容" autoFocus={currentPhase === 'editing' && phase !== undefined} maxLength={SCRIPT_MAX_LENGTH} value={text} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setLocalText(e.target.value); onChange?.(e.target.value) }}/><div className={`fc-editor-footer ${onConfirm ? 'fc-editor-footer--actions' : ''}`}><span className="fc-counter">{text.length} / {SCRIPT_MAX_LENGTH}</span>{onConfirm && <div className="fc-script-controls"><button className="fc-script-primary" aria-pressed={confirmed} disabled={!text.trim()} onClick={confirm}>确认脚本内容</button></div>}</div></div></div>
    : currentPhase === 'generating' ? <div className="fc-analysis" role="status"><Icon name="loading"/><div className="fc-analysis-label">信息分析中</div><div className="fc-analysis-caption" aria-label="正在整理脚本内容，预估等待耗时1至5分钟"><span/><span/></div></div>
    : currentPhase === 'uploading' ? <div className="fc-script-feedback" role="status"><span className="fc-slot-spinner"/><strong>正在读取脚本</strong><span title={fileName}>{fileName}</span></div>
    : currentPhase === 'error' ? <div className="fc-script-feedback" role="alert"><strong>脚本处理未完成</strong><span>{error}</span><div className="fc-script-controls"><button onClick={onCancel}>返回脚本</button><button className="fc-script-primary" onClick={onRetry}>重试</button></div></div>
    : <div className="fc-rich-body"><div className="fc-rich-panel">{(onEdit || onConfirm) && <div className="fc-script-ready-actions">{onEdit && <button className="fc-script-edit" onClick={onEdit}>编辑</button>}{onConfirm && <button className="fc-script-confirm" aria-pressed={confirmed} disabled={!text.trim()} onClick={confirm}>确认脚本内容</button>}</div>}<div className="fc-rich-scroll" tabIndex={0} aria-label="已完成的脚本内容">{phase ? <div className="fc-user-script">{text}</div> : text ? <div className="fc-user-script">{text}</div> : <RichTextExample/>}</div></div></div>)}
  </CardSurface>
}

export function StickerCard({ state = '默认', onStateChange, onMore, selectedSticker, onStickerChange, previewReady = false, compact = false, onUpload, loading = false }: { onUpload?: () => void; loading?: boolean; compact?: boolean; state?: StickerState; onStateChange?: (state: StickerState) => void; onMore?: () => void; selectedSticker?: string | null; onStickerChange?: (image: string | null) => void; previewReady?: boolean }) {
  const surface = useRef<HTMLElement>(null)
  const previousWidth = useRef<number | null>(null)
  const widthAnimation = useRef<Animation | null>(null)
  const reduced = useReducedMotion()
  useLayoutEffect(() => {
    const element = surface.current
    if (!element) return
    const visibleWidth = element.getBoundingClientRect().width
    const interrupted = widthAnimation.current?.playState === 'running'
    widthAnimation.current?.cancel()
    const width = element.getBoundingClientRect().width
    const from = interrupted ? visibleWidth : previousWidth.current
    previousWidth.current = width
    if (!reduced && from !== null && Math.abs(from - width) > 1) {
      widthAnimation.current = element.animate([{ width: `${from}px` }, { width: `${width}px` }], { duration: 220, easing: 'cubic-bezier(.22,1,.36,1)' })
    }
  }, [compact, reduced])
  useLayoutEffect(() => () => widthAnimation.current?.cancel(), [])
  const [current, setCurrent] = useState<StickerState>(state)
  const [localSticker, setLocalSticker] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const chosenSticker = selectedSticker === undefined ? localSticker : selectedSticker
  const chooseSticker = (image: string | null, index: number | null = null) => { setLocalSticker(image); setSelectedIndex(index); onStickerChange?.(image) }
  const [canScroll, setCanScroll] = useState(true)
  const [collapsed, setCollapsed] = useState(false)
  const clips = useRef<HTMLDivElement>(null)
  const currentRef = useRef<StickerState>(state)
  const emittedState = useRef<StickerState | null>(null)
  const drag = useRef<{ x: number; left: number } | null>(null)
  const dragged = useRef(false)
  const end = current === '左右滚动最右态'
  const updateFromScroll = () => {
    const element = clips.current
    if (!element) return
    const max = Math.max(0, element.scrollWidth - element.clientWidth)
    setCanScroll(max > 1)
    const next: StickerState = max <= 1 || element.scrollLeft <= 1 ? '默认' : max - element.scrollLeft <= 1 ? '左右滚动最右态' : '左右滚动中间态'
    if (next !== currentRef.current) {
      currentRef.current = next
      setCurrent(next)
      emittedState.current = next
      onStateChange?.(next)
    }
  }
  useLayoutEffect(() => {
    const element = clips.current
    if (!element || emittedState.current === state) { emittedState.current = null; return }
    const max = Math.max(0, element.scrollWidth - element.clientWidth)
    element.scrollLeft = state === '默认' ? 0 : state === '左右滚动最右态' ? max : max / 2
    updateFromScroll()
  }, [state, collapsed])
  useLayoutEffect(() => {
    const element = clips.current
    if (!element) return
    const observer = new ResizeObserver(() => updateFromScroll())
    observer.observe(element)
    return () => observer.disconnect()
  }, [collapsed])
  const scrollByCard = (direction: -1 | 1) => {
    const element = clips.current
    if (element) element.scrollTo({ left: Math.max(0, Math.min(element.scrollWidth - element.clientWidth, element.scrollLeft + direction * 104)), behavior: 'smooth' })
  }
  return <CardSurface ref={surface} layout={false} className={`fc-card fc-sticker ${collapsed ? 'fc-card--collapsed' : ''}`} data-component="sticker" data-state={current}>
    <Header title="贴纸" guide={{ title: '贴纸素材', text: '贴纸适合突出画面中的重点信息。上传或选择贴纸后，合成预览并检查它的位置、大小和对人物的遮挡。', cover: assets.stickerPhone }} badge={chosenSticker ? previewReady ? '预览中' : '合成后预览' : undefined} onToggle={() => setCollapsed(!collapsed)}/>
    {!collapsed && <div className="fc-sticker-body">
      <div className="fc-sticker-current"><AssetSlot label="当前贴纸" allowGenerate={false} libraryOnly={!onUpload} loading={loading} image={chosenSticker ?? undefined} onAction={action => action === 'upload' && onUpload ? onUpload() : onMore?.()} onRemove={() => chooseSticker(null)}/></div>
      <div className={`fc-sticker-list ${end ? 'fc-sticker-list--end' : ''}`}>
        <div className="fc-sticker-clips" ref={clips} tabIndex={0} aria-label="贴纸列表" onScroll={updateFromScroll} onDragStart={event => event.preventDefault()}
          onWheel={event => { const element = clips.current; if (!element || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return; const max = element.scrollWidth - element.clientWidth; if ((event.deltaY > 0 && element.scrollLeft < max) || (event.deltaY < 0 && element.scrollLeft > 0)) { event.preventDefault(); element.scrollLeft += event.deltaY } }}
          onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); scrollByCard(event.key === 'ArrowRight' ? 1 : -1) } else if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); clips.current?.scrollTo({ left: event.key === 'Home' ? 0 : clips.current.scrollWidth, behavior: 'smooth' }) } }}
          onPointerDown={event => { if (event.pointerType !== 'mouse' || event.button !== 0) return; drag.current = { x: event.clientX, left: event.currentTarget.scrollLeft }; dragged.current = false }}
          onPointerMove={event => { if (!drag.current) return; const distance = event.clientX - drag.current.x; if (Math.abs(distance) > 4 && !dragged.current) { dragged.current = true; event.currentTarget.setPointerCapture(event.pointerId) } if (dragged.current) event.currentTarget.scrollLeft = drag.current.left - distance }}
          onPointerLeave={() => { if (!dragged.current) drag.current = null }}
          onPointerUp={event => { drag.current = null; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); setTimeout(() => { dragged.current = false }, 0) }}
          onPointerCancel={() => { drag.current = null; dragged.current = false }}
          style={{ maskImage: `url(${end ? assets.stickerMaskEnd : current === '默认' ? assets.stickerMaskStart : assets.stickerMaskMiddle})` }}>
          {Array.from({length: 10}, (_,i) => <button className="fc-sticker-item" key={i} aria-label={`选择贴纸${i+1}`} aria-pressed={chosenSticker === localSticker && chosenSticker !== null && selectedIndex === i} onClick={() => { if (!dragged.current) chooseSticker(assets.stickerPhone, i) }}><img src={assets.stickerPhone} alt="手机贴纸"/></button>)}
          <div className="fc-sticker-item fc-sticker-stack"><div className="fc-sticker-back"><img src={assets.stickerPhone} alt=""/><img src={assets.stickerBack} alt=""/></div><img className="fc-sticker-front" src={assets.stickerFront} alt="更多贴纸预览"/></div>
        </div>
        {current !== '默认' && <button className="fc-sticker-arrow fc-sticker-arrow--left" aria-label="向左滚动贴纸" onClick={() => scrollByCard(-1)}><Icon name="arrowRight"/></button>}
        {canScroll && <button className="fc-sticker-arrow fc-sticker-arrow--right" aria-label={end ? '查看更多贴纸' : '向右滚动贴纸'} onClick={() => end ? onMore?.() : scrollByCard(1)}><span className="fc-sticker-arrow-label" aria-hidden="true">查看更多</span><Icon name="arrowRight"/></button>}
      </div>
    </div>}
  </CardSurface>
}
