import { theme } from '@/theme'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Footer } from '../Footer'

interface ContainerProps {
  children: React.ReactNode
  scrollable?: boolean
}

export const Container = ({ children, scrollable = true }: ContainerProps) => {
  return (
    <SafeAreaView style={style.container} edges={['left', 'right', 'bottom']}>
      {scrollable && (
        <ScrollView contentContainerStyle={style.content}>
          <View>{children}</View>
          <Footer />
        </ScrollView>
      )}

      {!scrollable && (
        <View style={style.content}>
          <View>{children}</View>
          <Footer />
        </View>
      )}
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue700,
  },

  content: {
    flexGrow: 1,
    gap: 32,
  },
})
