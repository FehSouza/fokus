import { theme } from '@/theme'
import { Pressable, StyleSheet, Text } from 'react-native'

interface PlayButtonProps {
  onPress: () => void
  played: boolean
}

export const PlayButton = ({ onPress, played }: PlayButtonProps) => {
  return (
    <Pressable style={style.container} onPress={onPress}>
      <Text style={style.text}>{played ? 'Pausar' : 'Começar'}</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.lilac,
    borderRadius: 32,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  text: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: theme.colors.blue700,
  },
})
