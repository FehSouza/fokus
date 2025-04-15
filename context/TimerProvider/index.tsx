import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface TimerProps {
  id: string
  label: string
  image: any
  time: number
}

interface TimerContextProps {
  timerActive: TimerProps
  setTimerActive: Dispatch<SetStateAction<TimerProps>>
}

interface TimerProviderProps {
  children: React.ReactNode
}

export const TIMERS: TimerProps[] = [
  { id: 'focus', label: 'Foco', image: require('@/assets/images/focus.png'), time: 25 },
  { id: 'short', label: 'Pausa curta', image: require('@/assets/images/short.png'), time: 5 },
  { id: 'long', label: 'Pausa longa', image: require('@/assets/images/long.png'), time: 15 },
]

export const TimerContext = createContext<TimerContextProps | undefined>(undefined)

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [timerActive, setTimerActive] = useState(TIMERS[0])

  return <TimerContext.Provider value={{ timerActive, setTimerActive }}>{children}</TimerContext.Provider>
}
