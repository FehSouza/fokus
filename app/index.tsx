import { Footer } from '@/components'
import { theme } from '@/theme'
import { StatusBar, StyleSheet, View } from 'react-native'
import Main from './main'

export default function Index() {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={theme.colors.blue700} barStyle="light-content" translucent />
      <Main />
      <Footer />
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
})
