import { AnimatedLoadingIcon, Footer } from '@/components'
import { theme } from '@/theme'
import { Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Unbounded_600SemiBold, useFonts } from '@expo-google-fonts/unbounded'
import { StatusBar, StyleSheet, View } from 'react-native'
import Main from './main'

export default function Index() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Unbounded_600SemiBold,
  })

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={theme.colors.blue700} barStyle="light-content" translucent />

      {!fontsLoaded && <AnimatedLoadingIcon />}

      {!!fontsLoaded && (
        <>
          <Main />
          <Footer />
        </>
      )}
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
