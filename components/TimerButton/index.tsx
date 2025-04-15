import { TimerContext, TIMERS } from '@/context/TimerProvider'
import { theme } from '@/theme'
import { useContext } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface TimerButtonProps {
  id: string
  label: string
  isActive: boolean
}

export const TimerButton = ({ id, label, isActive }: TimerButtonProps) => {
  const { setTimerActive } = useContext(TimerContext) || {}
  if (!setTimerActive) return null

  const handleTimerChange = (id: string) => {
    const selected = TIMERS?.find((timer) => timer.id === id)
    if (selected) setTimerActive(selected)
  }

  return (
    <Pressable style={[style.container, isActive && style.active]} onPress={() => handleTimerChange(id)}>
      <Text style={[style.label, isActive && style.labelActive]}>{label}</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
  },

  active: {
    backgroundColor: theme.colors.blue500,
  },

  label: {
    color: theme.colors.white,
    fontSize: 12,
  },

  labelActive: {
    fontWeight: 'bold',
  },
})
