import { theme } from '@/theme'
import { Pressable, StyleSheet, Text } from 'react-native'

export const PlayButton = () => {
  return (
    <Pressable style={style.playButton}>
      <Text style={style.playButtonText}>Começar</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  playButton: {
    width: '100%',
    backgroundColor: theme.colors.lilac,
    borderRadius: 32,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  playButtonText: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: theme.colors.blue700,
  },
})
