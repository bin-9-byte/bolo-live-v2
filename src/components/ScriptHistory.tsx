import { useEffect, useRef, useState } from 'react'

type Version = { id: string; text: string; source: string; time: number; used: boolean }
const storageKey = 'bolo-studio-script-versions-v1'
function loadVersions(): Version[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(storageKey) || '[]')
    return Array.isArray(value) ? value.filter((v): v is Version => v && typeof v.id === 'string' && typeof v.text === 'string' && typeof v.source === 'string' && Number.isFinite(v.time) && typeof v.used === 'boolean') : []
  } catch { return [] }
}

export function useScriptVersions(onError: (message: string) => void) {
  const [versions, setVersions] = useState(loadVersions)
  const current = useRef(versions)
  const error = useRef(onError)
  error.current = onError
  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(versions)) }
    catch { error.current('脚本历史暂时无法保存到浏览器，当前会话仍可查看') }
  }, [versions])
  const record = (text: string, source: string, used = false) => {
    if (!text.trim()) return
    const existing = current.current.find(v => v.text === text)
    const next = existing
      ? current.current.map(v => v.id === existing.id && used ? { ...v, used: true } : v)
      : [...current.current, { id: crypto.randomUUID(), text, source, time: Date.now(), used }]
    current.current = next
    setVersions(next)
  }
  return { versions, record }
}

export function ScriptHistory({ versions, currentText, initialText, onUse, onClose }: {
  versions: Version[]; currentText: string; initialText?: string; onUse: (text: string) => void; onClose: () => void
}) {
  const [selectedId, setSelectedId] = useState(versions.find(v => v.text === initialText)?.id ?? versions.at(-1)?.id)
  const selected = versions.find(v => v.id === selectedId) ?? versions.at(-1)
  return <div className="studio-script-history">
    <header><strong>脚本历史</strong><button onClick={onClose} aria-label="关闭脚本历史">返回脚本</button></header>
    {!versions.length ? <p className="studio-script-history-empty">暂无历史版本，生成脚本或确认内容后会自动保留。</p> : <div className="studio-script-history-content">
      <div className="studio-script-version-list" aria-label="历史版本">{[...versions].reverse().map((v, i) => <button key={v.id} aria-pressed={v.id === selected?.id} onClick={() => setSelectedId(v.id)}>
        <strong>V{versions.length - i} · {v.source}</strong><span>{new Date(v.time).toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</span>
        <small>{v.text === currentText ? '当前使用' : v.used ? '历史版本' : '待使用'}</small>
      </button>)}</div>
      {selected && <div className="studio-script-version-preview"><pre>{selected.text}</pre><footer><button disabled={selected.text === currentText} onClick={() => onUse(selected.text)}>{selected.text === currentText ? '当前使用中' : '使用此版本'}</button></footer></div>}
    </div>}
  </div>
}
