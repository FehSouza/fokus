import { TimerButton } from '@/components/TimerButton'
import { TimerContext, TIMERS } from '@/context/TimerProvider'
import { theme } from '@/theme'
import { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const Main = () => {
  const { timerActive } = useContext(TimerContext) || {}
  if (!timerActive) return null

  const date = new Date(timerActive.time * 60 * 1000)
  const minutes = date.getMinutes()
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return (
    <>
      <View style={style.imageContainer}>
        <Image style={style.image} resizeMode="contain" fadeDuration={500} source={timerActive.image} />
      </View>

      <View style={style.timerContainer}>
        <View style={style.buttonsContent}>
          {TIMERS?.map((timer) => (
            <TimerButton key={timer.id} id={timer.id} label={timer.label} isActive={timer.id === timerActive.id} />
          ))}
        </View>

        <Text style={style.timer}>{`${minutes}:${seconds}`}</Text>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  imageContainer: {
    width: '100%',
    maxHeight: 422,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    maxWidth: '100%',
  },

  timerContainer: {
    width: '100%',
    marginTop: 32,
    padding: 24,
    gap: 32,
    backgroundColor: theme.colors.blue50,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: theme.colors.blue500,
  },

  buttonsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  timer: {
    color: theme.colors.white,
    fontSize: 54,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
})
