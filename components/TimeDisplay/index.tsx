import { theme } from '@/theme'
import { StyleSheet, Text } from 'react-native'

interface TimeDisplayProps {
  time: number
}

export const TimeDisplay = ({ time }: TimeDisplayProps) => {
  const date = new Date(time * 1000)
  const minutes = date.getMinutes()
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return <Text style={style.text}>{`${minutes}:${seconds}`}</Text>
}

const style = StyleSheet.create({
  text: {
    fontFamily: 'Unbounded_600SemiBold',
    fontSize: 54,
    color: theme.colors.white,
    textAlign: 'center',
  },
})
