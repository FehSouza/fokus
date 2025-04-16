import { theme } from '@/theme'
import { StyleSheet, Text } from 'react-native'

interface TimerDisplayProps {
  time: number
}

export const TimerDisplay = ({ time }: TimerDisplayProps) => {
  const date = new Date(time * 60 * 1000)
  const minutes = date.getMinutes()
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return <Text style={style.timer}>{`${minutes}:${seconds}`}</Text>
}

const style = StyleSheet.create({
  timer: {
    color: theme.colors.white,
    fontSize: 54,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
})
