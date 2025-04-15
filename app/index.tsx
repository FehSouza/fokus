import { TimerButton } from '@/components/TimerButton'
import { theme } from '@/theme'
import { useState } from 'react'
import { Image, StatusBar, StyleSheet, View } from 'react-native'

const TIMERS = [
  { id: 'focus', label: 'Foco', image: require('../assets/images/focus.png'), time: 25 },
  { id: 'short', label: 'Pausa curta', image: require('../assets/images/short.png'), time: 5 },
  { id: 'long', label: 'Pausa longa', image: require('../assets/images/long.png'), time: 15 },
]

export default function Index() {
  const [timerActive, setTimerActive] = useState(TIMERS[0])

  const handleTimerChange = (id: string) => {
    const selected = TIMERS.find((timer) => timer.id === id)
    if (selected) setTimerActive(selected)
  }

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={theme.colors.blue700} barStyle="light-content" translucent />

      <View style={style.imageContainer}>
        <Image style={style.image} resizeMode="contain" fadeDuration={500} source={timerActive.image} />
      </View>

      <View style={style.timerContainer}>
        <View style={style.buttonsContent}>
          {TIMERS?.map((timer) => (
            <TimerButton
              key={timer.id}
              id={timer.id}
              label={timer.label}
              isActive={timer.id === timerActive.id}
              onPress={handleTimerChange}
            />
          ))}
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blue700,
    paddingHorizontal: 24,
  },

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
})
