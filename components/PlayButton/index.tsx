import { theme } from '@/theme'
import { Pressable, StyleSheet, Text } from 'react-native'
import { PauseIcon, PlayIcon } from '../Icons'

interface PlayButtonProps {
  onPress: () => void
  played: boolean
}

export const PlayButton = ({ onPress, played }: PlayButtonProps) => {
  return (
    <Pressable style={style.container} onPress={onPress}>
      {played ? <PauseIcon /> : <PlayIcon />}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  text: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    color: theme.colors.blue700,
  },
})
