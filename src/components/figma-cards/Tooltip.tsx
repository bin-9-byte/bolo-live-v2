import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './tooltip.less'

export type TooltipGuide = { title: string; text: string; cover: string }

export function TooltipButton({ text, label, children, ...buttonProps }: {
  text: string
  label: string
  children: ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'>) {
  const id = useId()
  const trigger = useRef<HTMLButtonElement>(null)
  const bubble = useRef<HTMLSpanElement>(null)
  const [open, setOpen] = useState(false)
  const [rendered, setRendered] = useState(false)
  const [position, setPosition] = useState({ left: 0, top: 0, above: true })

  useLayoutEffect(() => {
    if (!rendered) return
    const place = () => {
      const rect = trigger.current?.getBoundingClientRect()
      const bubbleRect = bubble.current?.getBoundingClientRect()
      if (!rect || !bubbleRect) return
      const halfWidth = bubbleRect.width / 2
      const above = rect.top >= bubbleRect.height + 8
      setPosition({
        left: Math.min(Math.max(rect.left + rect.width / 2, halfWidth + 16), window.innerWidth - halfWidth - 16),
        top: above ? rect.top : rect.bottom,
        above,
      })
    }
    place()
    window.addEventListener('scroll', place, true)
    window.addEventListener('resize', place)
    return () => {
      window.removeEventListener('scroll', place, true)
      window.removeEventListener('resize', place)
    }
  }, [rendered])

  useEffect(() => {
    if (open || !rendered) return
    const timeout = window.setTimeout(() => setRendered(false), 140)
    return () => window.clearTimeout(timeout)
  }, [open, rendered])

  const show = () => {
    if (buttonProps.disabled) return
    setRendered(true)
    setOpen(true)
  }

  return <>
    <button {...buttonProps} ref={trigger} type={buttonProps.type ?? 'button'} aria-label={label} aria-describedby={open ? id : undefined}
      onMouseEnter={event => { buttonProps.onMouseEnter?.(event); show() }}
      onMouseLeave={event => { buttonProps.onMouseLeave?.(event); setOpen(false) }}
      onFocus={event => { buttonProps.onFocus?.(event); show() }}
      onBlur={event => { buttonProps.onBlur?.(event); setOpen(false) }}>
      {children}
    </button>
    {rendered && createPortal(
      <span ref={bubble} id={id} role="tooltip" className={`fc-tooltip ${position.above ? '' : 'fc-tooltip--below'} ${open ? 'fc-tooltip--open' : ''}`} style={{ left: position.left, top: position.top }}>{text}</span>,
      document.body,
    )}
  </>
}

export function TooltipHelp({ text, label, guide, withinLayer = false }: { text: string; label: string; guide?: TooltipGuide; withinLayer?: boolean }) {
  const variant = guide ? 'card' : 'bubble'
  const id = useId()
  const trigger = useRef<HTMLButtonElement>(null)
  const bubble = useRef<HTMLSpanElement>(null)
  const [open, setOpen] = useState(false)
  const [rendered, setRendered] = useState(false)
  const [position, setPosition] = useState({ left: 0, top: 0, above: false })

  useLayoutEffect(() => {
    if (!rendered) return
    if (withinLayer && bubble.current && !bubble.current.matches(':popover-open')) {
      try { bubble.current.showPopover() } catch { /* The tooltip may already be closing. */ }
    }
    const place = () => {
      const rect = trigger.current?.getBoundingClientRect()
      if (!rect) return
      const bubbleRect = bubble.current?.getBoundingClientRect()
      const halfWidth = (bubbleRect?.width ?? 0) / 2
      const cardHeight = bubbleRect?.height ?? 274
      const above = (withinLayer || variant === 'card') && rect.top >= cardHeight + 8
      setPosition({ left: Math.min(Math.max(rect.left + rect.width / 2, halfWidth + 16), window.innerWidth - halfWidth - 16), top: !above && (withinLayer || variant === 'card') ? rect.bottom : rect.top, above })
    }
    place()
    window.addEventListener('scroll', place, true)
    window.addEventListener('resize', place)
    return () => { window.removeEventListener('scroll', place, true); window.removeEventListener('resize', place) }
  }, [rendered, variant, withinLayer])

  useEffect(() => {
    if (open || !rendered) return
    const timeout = window.setTimeout(() => setRendered(false), 140)
    return () => window.clearTimeout(timeout)
  }, [open, rendered])

  const show = () => { setRendered(true); setOpen(true) }
  const hide = () => setOpen(false)

  return <>
    <button ref={trigger} type="button" className={`fc-tooltip-help fc-tooltip-help--${variant}`} aria-label={label} aria-describedby={open ? id : undefined}
      onMouseEnter={withinLayer ? undefined : show} onPointerMove={withinLayer ? show : undefined} onMouseLeave={hide} onFocus={withinLayer ? undefined : show} onBlur={hide}
      onClick={event => { event.stopPropagation(); if (withinLayer) { if (open) hide(); else show() } }}>
      <span className="fc-tooltip-help-icon" aria-hidden="true"/>
    </button>
    {rendered && (withinLayer ? (guide ?
      <span ref={bubble} id={id} role="tooltip" popover="manual" className={`fc-tooltip-card ${position.above ? 'fc-tooltip-card--above' : ''} ${open ? 'fc-tooltip--open' : ''}`} style={{ left: position.left, top: position.top }}>
        <span className="fc-tooltip-card-cover"><img src={guide.cover} alt=""/></span>
        <span className="fc-tooltip-card-content">
          <span className="fc-tooltip-card-title"><span>{guide.title}</span><i aria-hidden="true"/><span>创作指南</span></span>
          <span className="fc-tooltip-card-description">{text}</span>
        </span>
      </span> :
      <span ref={bubble} id={id} role="tooltip" popover="manual" className={`fc-tooltip ${position.above ? '' : 'fc-tooltip--below'} ${open ? 'fc-tooltip--open' : ''}`} style={{ left: position.left, top: position.top }}>{text}</span>) : createPortal(guide ?
      <span ref={bubble} id={id} role="tooltip" className={`fc-tooltip-card ${position.above ? 'fc-tooltip-card--above' : ''} ${open ? 'fc-tooltip--open' : ''}`} style={{ left: position.left, top: position.top }}>
        <span className="fc-tooltip-card-cover"><img src={guide.cover} alt=""/></span>
        <span className="fc-tooltip-card-content">
          <span className="fc-tooltip-card-title"><span>{guide.title}</span><i aria-hidden="true"/><span>创作指南</span></span>
          <span className="fc-tooltip-card-description">{text}</span>
        </span>
      </span> :
      <span ref={bubble} id={id} role="tooltip" className={`fc-tooltip ${open ? 'fc-tooltip--open' : ''}`} style={{ left: position.left, top: position.top }}>{text}</span>, document.body))}
  </>
}
