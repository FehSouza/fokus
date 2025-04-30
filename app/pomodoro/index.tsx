import { Button, Container, PauseIcon, PlayIcon, TimeButton, TimeDisplay } from '@/components'
import { Image } from '@/components/Image'
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

export default function Pomodoro() {
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
    <Container>
      <View style={style.imageContent}>
        <Image image={timeActivated.image} />
      </View>

      <View style={style.timeContent}>
        <View style={style.timeWrapper}>
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
          <Button
            icon={played ? <PauseIcon /> : <PlayIcon />}
            text={played ? 'Pausar' : 'Começar'}
            onPress={handleTogglePlay}
          />
        </View>
      </View>
    </Container>
  )
}

const style = StyleSheet.create({
  imageContent: {
    paddingHorizontal: 24,
  },

  timeContent: {
    width: '100%',
    maxWidth: 480,
    marginTop: 32,
    marginHorizontal: 'auto',
    paddingHorizontal: 24,
  },

  timeWrapper: {
    gap: 32,
    padding: 24,
    backgroundColor: theme.colors.blue500trans,
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
