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
    color: theme.colors.white,
    fontSize: 54,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
})
