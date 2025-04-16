import { theme } from '@/theme'
import { useRef, useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export const PlayButton = () => {
  const [played, setPlayed] = useState(false)
  const playedRef = useRef<undefined | NodeJS.Timeout>(undefined)

  const togglePlay = () => {
    if (played) {
      clearInterval(playedRef.current)
      setPlayed(false)
      return
    }

    const id = setInterval(() => console.log('tick'), 1000)
    playedRef.current = id
    setPlayed(true)
  }

  return (
    <Pressable style={style.playButton} onPress={togglePlay}>
      <Text style={style.playButtonText}>{played ? 'Pausar' : 'Começar'}</Text>
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
