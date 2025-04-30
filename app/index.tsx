import { Button, Container, Logo } from '@/components'
import { Image } from '@/components/Image'
import { theme } from '@/theme'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function Index() {
  const router = useRouter()

  return (
    <Container>
      <View style={style.logoContent}>
        <Logo />
      </View>

      <View style={style.textContent}>
        <Text style={style.text}>
          Otimize sua{'\n'}produtividade,{'\n'}
          <Text style={[style.text, style.thickerText]}>mergulhe no{'\n'}que importa</Text>
        </Text>
      </View>

      <View style={style.imageContent}>
        <Image image={require('@/assets/images/home.png')} />
      </View>

      <View style={style.buttonContent}>
        <Button text="Quero iniciar!" onPress={() => router.replace('/pomodoro')} />
      </View>
    </Container>
  )
}

const style = StyleSheet.create({
  logoContent: {
    alignItems: 'center',
    marginTop: 32,
  },

  textContent: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  text: {
    fontFamily: 'Unbounded_200ExtraLight',
    fontSize: 26,
    lineHeight: 38,
    textAlign: 'center',
    color: theme.colors.white,
  },

  thickerText: {
    fontFamily: 'Unbounded_400Regular',
  },

  imageContent: {
    marginTop: 16,
    paddingHorizontal: 24,
  },

  buttonContent: {
    width: '100%',
    maxWidth: 528,
    marginTop: 16,
    marginHorizontal: 'auto',
    paddingHorizontal: 48,
  },
})
