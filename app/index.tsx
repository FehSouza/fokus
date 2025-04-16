import { TimerProvider } from '@/context/TimerProvider'
import { theme } from '@/theme'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Main from './main'

export default function Index() {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={theme.colors.blue700} barStyle="light-content" translucent />

      <TimerProvider>
        <Main />
      </TimerProvider>

      <View style={style.footer}>
        <Text style={style.textFooter}>Projeto fictício e sem fins comerciais.</Text>
        <Text style={style.textFooter}>Desenvolvido por Alura.</Text>
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

  footer: {
    marginTop: 32,
  },

  textFooter: {
    color: theme.colors.gray,
    fontSize: 12,
    textAlign: 'center',
  },
})
