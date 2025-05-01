import { theme } from '@/theme'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Footer } from '../Footer'

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <SafeAreaView style={style.container} edges={['left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={style.content}>
        <View>{children}</View>
        <Footer />
      </ScrollView>
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
