import { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'
import { LoadingIcon } from '../LoadingIcon'

export const AnimatedLoadingIcon = () => {
  // cria um valor animado que começa em 0
  const spinValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // cria uma animação de loop
    const spin = Animated.loop(
      // faz o spinValue mudar de 0 para 1, em 1 segundo
      Animated.timing(spinValue, { toValue: 1, duration: 1000, easing: Easing.linear, useNativeDriver: true })
    )

    // inicia a animação
    spin.start()

    // limpa a animação se o componente desmontar
    return () => spin.stop()
  }, [])

  // interpola o spinValue para um valor entre 0deg e 360deg
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <LoadingIcon />
    </Animated.View>
  )
}
