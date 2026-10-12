export type StepId = 'brief' | 'script' | 'voice' | 'avatar' | 'scene'
export type StepStatus = 'idle' | 'running' | 'review' | 'ready' | 'attention'

export type Step = {
  id: StepId
  index: string
  title: string
  subtitle: string
  summary: string
  status: StepStatus
  progress?: number
}

export type Message = {
  id: number
  role: 'ai' | 'user' | 'system'
  text: string
  targets?: StepId[]
}
