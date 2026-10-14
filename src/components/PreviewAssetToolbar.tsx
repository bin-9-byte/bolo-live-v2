import type { ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Check, Plus } from 'lucide-react'

export type PreviewAssetKind = 'character' | 'background' | 'vehicle'
const items: { kind: PreviewAssetKind; label: string }[] = [
  { kind: 'character', label: '人物' },
  { kind: 'background', label: '背景' },
  { kind: 'vehicle', label: '产品' },
]

export function PreviewAssetToolbar({ media, loading, composing, ready, screenReady, children, onCompose }: {
  media: Partial<Record<PreviewAssetKind, string>>
  loading: Partial<Record<PreviewAssetKind, boolean>>
  composing: boolean
  ready: boolean
  screenReady: boolean
  children: ReactNode
  onCompose: () => void
}) {
  const reduced = useReducedMotion()
  const complete = !!media.character && !!media.background && !items.some(({ kind }) => loading[kind])
  const transition = { duration: reduced ? 0 : 0.18 }
  return <div className="studio-preview-assets" role="group" aria-label="预览素材与合成">
    <div className={`studio-screen ${screenReady ? 'studio-screen--ready' : ''}`}>{children}</div>
    <div className="studio-preview-compose-shell">
    <div className="studio-preview-asset-chips">
      {items.map(({ kind, label }) => {
        const image = media[kind]
        const busy = !!loading[kind]
        const state = busy ? 'loading' : image ? 'uploaded' : 'empty'
        const description = `${label}${kind === 'vehicle' ? '（可选）' : ''}：${busy ? '上传中' : image ? '已上传' : '未上传'}`
        return <motion.div layout key={kind} transition={transition} className="studio-preview-asset-chip" data-state={state} role="status" aria-label={description} title={description}>
          <span className="studio-preview-asset-label">{label}</span>
          <span className="studio-preview-asset-separator" aria-hidden="true">·</span>
          <span className="studio-preview-asset-symbol" aria-hidden="true">
            <AnimatePresence initial={false} mode="wait">
              <motion.span key={state} initial={{ opacity: 0, y: reduced ? 0 : 3, filter: reduced ? 'none' : 'blur(2px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: reduced ? 0 : -3 }} transition={transition}>
                {busy ? <span className="studio-preview-asset-spinner"/> : image ? <Check size={13} strokeWidth={1.8}/> : <Plus size={13} strokeWidth={1.8}/>}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>
      })}
    </div>

    <motion.button layout transition={transition} className="studio-preview-compose" data-state={composing ? 'loading' : complete ? 'ready' : 'disabled'} disabled={!complete || composing} onClick={onCompose} aria-label={composing ? '正在合成预览' : ready ? '重新合成人物与场景' : '合成人物与场景'}>
      <Plus size={15} strokeWidth={1.8} aria-hidden="true"/>
      <AnimatePresence initial={false} mode="wait"><motion.span key={composing ? 'busy' : ready ? 'again' : 'compose'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>{composing ? '合成中' : ready ? '重新合成' : '合成人物与场景'}</motion.span></AnimatePresence>
    </motion.button>
    </div>
  </div>
}
