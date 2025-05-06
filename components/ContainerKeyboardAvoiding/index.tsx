import { theme } from '@/theme'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Footer } from '../Footer'

interface ContainerKeyboardAvoidingProps {
  children: React.ReactNode
}

export const ContainerKeyboardAvoiding = ({ children }: ContainerKeyboardAvoidingProps) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height'

  return (
    <KeyboardAvoidingView behavior={behavior} style={style.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={style.content} edges={['left', 'right', 'bottom']}>
          {children}
          <Footer />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue700,
  },

  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
