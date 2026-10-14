import React, { useEffect, useRef, useState } from 'react'
import { BackgroundCard, CharacterVoiceCard, ScriptCard, VoiceCard, StickerCard, SCRIPT_MAX_LENGTH } from './components/figma-cards/Cards'
import type { AssetAction, BackgroundState, CharacterState, ScriptState, VoiceState, StickerState } from './components/figma-cards/Cards'
import { assets } from './components/figma-cards/assets'
import './component-preview.less'

const backgroundStates: BackgroundState[] = ['默认', 'hover', '已上传', '删除上传图片']
const voiceStates: VoiceState[] = ['默认', '上传中', '已上传']
const characterStates: CharacterState[] = ['默认', '人物hover']
const scriptStates: ScriptState[] = ['Empty', 'Variant2', 'Generating', 'Variant3', 'Default', 'Variant4']
const scriptLabels = ['无内容 · 收起', '无内容 · 展开', '生成中 · 收起', '生成中 · 展开', '生成完成 · 收起', '生成完成 · 展开']
const scriptSizes = ['798 × 305', '800 × 679.49', '798 × 305', '800 × 668.49', '798 × 305', '800 × 662.49']
const stickerStates: StickerState[] = ['默认', '左右滚动中间态', '左右滚动最右态']
function States<T extends string>({ values, value, onChange, labels }: { values: T[]; value: T; onChange: (v: T) => void; labels?: string[] }) {
  return <div className="showcase-states" aria-label="组件状态">{values.map((v, i) => <button key={v} aria-pressed={value === v} onClick={() => onChange(v)}>{labels?.[i] ?? v}</button>)}</div>
}
export default function Preview() {
  const [background, setBackground] = useState<BackgroundState>('默认')
  const [voice, setVoice] = useState<VoiceState>('默认')
  const [character, setCharacter] = useState<CharacterState>('默认')
  const [script, setScript] = useState<ScriptState>('Default')
  const [all, setAll] = useState(new URLSearchParams(location.search).has('all'))
  const [surface, setSurface] = useState('gray')
  const [sticker, setSticker] = useState<StickerState>('默认')
  const [text, setText] = useState('')
  const [image, setImage] = useState<string>()
  const [portrait, setPortrait] = useState<string>()
  const [vehicle, setVehicle] = useState<string>()
  const [audio, setAudio] = useState<string>()
  const [audioName, setAudioName] = useState('清透年轻女声')
  const [notice, setNotice] = useState('')
  const [library, setLibrary] = useState(false)
  const file = useRef<HTMLInputElement>(null)
  const target = useRef<'background' | 'character' | 'vehicle' | 'voice' | 'script'>('background')
  const urls = useRef<string[]>([])
  useEffect(() => () => urls.current.forEach(url => URL.revokeObjectURL(url)), [])
  const chooseFile = (kind: typeof target.current) => { target.current = kind; if (file.current) { file.current.accept = kind === 'voice' ? '.mp3,.wav,.m4a' : kind === 'script' ? '.txt,.md' : 'image/*'; file.current.click() } }
  const action = (kind: 'background' | 'character', a: AssetAction) => {
    if (a === 'upload') chooseFile(kind)
    else if (a === 'library' && kind === 'background') setLibrary(true)
    else setNotice(a === 'generate' ? '此处展示 AI 生成入口，尚未接入生成服务。可使用本地上传预览素材。' : '此处展示资产库入口。可使用本地上传选择人物图片。')
  }
  const upload: React.ChangeEventHandler<HTMLInputElement> = async e => {
    const selected = e.target.files?.[0]; if (!selected) return
    const kind = target.current
    if (kind === 'script') { const content = await selected.text(); setText(content.slice(0, SCRIPT_MAX_LENGTH)); setScript('Variant2'); if (content.length > SCRIPT_MAX_LENGTH) setNotice(`已导入前 ${SCRIPT_MAX_LENGTH} 字，超出组件字数限制的部分未导入。`) }
    else {
      if (!(kind === 'voice' ? /\.(mp3|wav|m4a)$/i.test(selected.name) : selected.type.startsWith('image/'))) { setNotice(kind === 'voice' ? '仅支持 MP3、WAV、M4A 格式的音频文件。' : '文件类型不匹配，请重新选择。'); e.target.value = ''; return }
      const url = URL.createObjectURL(selected); urls.current.push(url)
      if (kind === 'background') { setImage(url); setBackground('已上传') }
      if (kind === 'character') setPortrait(url)
      if (kind === 'vehicle') setVehicle(url)
      if (kind === 'voice') { setAudio(url); setAudioName(selected.name); setVoice('已上传') }
    }
    e.target.value = ''
  }
  return <div className={`showcase showcase--${surface}`}>
    <header className="showcase-toolbar"><div><a href="/">菠萝直播</a><span>/</span><strong>组件预览</strong><small>React + Less</small></div><div className="showcase-options"><label>画布<select aria-label="画布背景" value={surface} onChange={e => setSurface(e.target.value)}><option value="white">白色</option><option value="gray">浅灰</option><option value="lavender">淡紫</option></select></label><button aria-pressed={all} onClick={() => setAll(!all)}>{all ? '交互预览' : '查看全部 18 个变体'}</button></div></header>
    <main><div className="showcase-intro"><h1>创作组件</h1><p>背景场景、人物音色、脚本内容与贴纸。按设计原尺寸展示，支持状态切换。</p></div>
      {all ? <div className="showcase-all">
        <section><h2>背景场景卡片</h2>{backgroundStates.map(state => <figure key={state}><figcaption>{state} <span>460 × 305</span></figcaption><BackgroundCard state={state}/></figure>)}</section>
        <section><h2>音色卡片</h2>{voiceStates.map(state => <figure key={state}><figcaption>{state} <span>241 × 68</span></figcaption><VoiceCard state={state}/></figure>)}<h2>人物音色卡片</h2>{characterStates.map(state => <figure key={state}><figcaption>{state} <span>275 × 396</span></figcaption><CharacterVoiceCard state={state}/></figure>)}</section>
        <section><h2>脚本卡片</h2>{scriptStates.map((state, i) => <figure key={state}><figcaption>{scriptLabels[i]} · {state} <span>{scriptSizes[i]}</span></figcaption><ScriptCard state={state}/></figure>)}</section>
      <section><h2>贴纸卡片</h2>{stickerStates.map(state => <figure key={state}><figcaption>{state} <span>765 × 226</span></figcaption><StickerCard state={state}/></figure>)}</section>
      </div> : <div className="showcase-live">
        <section className="showcase-section"><h2>背景场景卡片 <span>460 × 305</span></h2><States values={backgroundStates} value={background} onChange={setBackground}/><BackgroundCard state={background} onStateChange={setBackground} imageUrl={image} vehicleImageUrl={vehicle} onAction={a => action('background', a)} onVehicleAction={a => a === 'upload' ? chooseFile('vehicle') : setNotice('产品素材库和 AI 服务尚未接入，可使用本地上传预览。')}/></section>
        <section className="showcase-section"><h2>人物音色卡片 <span>275 × 396</span></h2><States values={characterStates} value={character} onChange={setCharacter}/><CharacterVoiceCard state={character} voiceState={voice} onVoiceStateChange={setVoice} imageUrl={portrait} audioUrl={audio} onAction={a => action('character', a)} onVoiceUpload={() => chooseFile('voice')} onVoiceLibrary={() => setNotice('音色库尚未接入。上传本地音频后可试听、暂停和拖动进度。')}/></section>
        <section className="showcase-section"><h2>音色卡片 <span>241 × 68</span></h2><States values={voiceStates} value={voice} onChange={setVoice}/><VoiceCard state={voice} onStateChange={setVoice} audioUrl={audio} name={audioName} onUpload={() => chooseFile('voice')} onLibrary={() => setNotice('音色库尚未接入。上传本地音频后可试听、暂停和拖动进度。')}/></section>
        <section className="showcase-section showcase-script"><h2>脚本卡片 <span>6 个变体</span></h2><States values={scriptStates} labels={scriptLabels} value={script} onChange={setScript}/><ScriptCard state={script} onStateChange={setScript} value={text} onChange={setText} onUpload={() => chooseFile('script')} onGenerate={() => { setScript('Variant3'); setNotice('正在展示「信息分析中」设计状态，尚未调用 AI 服务。可点击「生成完成」查看富文本设计示例。') }}/></section>
        <section className="showcase-section showcase-script"><h2>贴纸卡片 <span>765 × 226</span></h2><States values={stickerStates} value={sticker} onChange={setSticker}/><StickerCard state={sticker} onStateChange={setSticker} onMore={() => setNotice('贴纸库入口尚未接入服务，当前展示 Figma 中的示例素材。')}/></section>
      </div>}
    </main>
    <input className="showcase-file" type="file" ref={file} onChange={upload} tabIndex={-1}/>
    {notice && <div className="showcase-notice" role="status">{notice}<button aria-label="关闭提示" onClick={() => setNotice('')}>×</button></div>}
    {library && <div className="showcase-backdrop" onClick={() => setLibrary(false)}><section className="showcase-dialog" role="dialog" aria-modal="true" aria-label="背景资产库" onClick={e => e.stopPropagation()}><h2>背景资产库</h2><p>设计稿中的原始背景素材</p><button className="showcase-library-image" onClick={() => { setImage(assets.room); setBackground('已上传'); setLibrary(false) }}><img src={assets.room} alt="选择室内场景"/></button><button onClick={() => setLibrary(false)}>关闭</button></section></div>}
  </div>
}
