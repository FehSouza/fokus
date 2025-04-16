import { PlayButton, TimeButton, TimeDisplay } from '@/components'
import { TimeImage } from '@/components/TimeImage'
import { theme } from '@/theme'
import { useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'

interface TimerProps {
  id: string
  label: string
  image: number
  time: number
}

const TIMERS: TimerProps[] = [
  { id: 'focus', label: 'Foco', image: require('@/assets/images/focus.png'), time: 25 * 60 },
  { id: 'short', label: 'Pausa curta', image: require('@/assets/images/short.png'), time: 5 * 60 },
  { id: 'long', label: 'Pausa longa', image: require('@/assets/images/long.png'), time: 15 * 60 },
]

export default function () {
  const [timeActivated, setTimeActivated] = useState(TIMERS[0])
  const [time, setTime] = useState(timeActivated.time)
  const [played, setPlayed] = useState(false)

  const playedRef = useRef<undefined | NodeJS.Timeout>(undefined)

  const clean = () => {
    clearInterval(playedRef.current)
    playedRef.current = undefined
    setPlayed(false)
  }

  const handleChangeTime = (id: string) => {
    const selected = TIMERS?.find((timer) => timer.id === id)

    if (selected) {
      clean()
      setTimeActivated(selected)
      setTime(selected.time)
    }
  }

  const handleTogglePlay = () => {
    if (played) return clean()

    const id = setInterval(() => {
      setTime((prev) => {
        if (prev !== 0) return prev - 1
        clean()
        return timeActivated.time
      })
    }, 1000)

    playedRef.current = id
    setPlayed(true)
  }

  return (
    <>
      <TimeImage image={timeActivated.image} />

      <View style={style.timeContainer}>
        <View style={style.buttonsContent}>
          {TIMERS?.map((timer) => (
            <TimeButton
              key={timer.id}
              id={timer.id}
              label={timer.label}
              isActive={timer.id === timeActivated.id}
              onPress={handleChangeTime}
            />
          ))}
        </View>
        <TimeDisplay time={time} />
        <PlayButton onPress={handleTogglePlay} played={played} />
      </View>
    </>
  )
}

const style = StyleSheet.create({
  timeContainer: {
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
