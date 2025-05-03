import { theme } from '@/theme'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Footer } from '../Footer'

interface ContainerKeyboardAvoidingProps {
  children: React.ReactNode
}

export const ContainerKeyboardAvoiding = ({ children }: ContainerKeyboardAvoidingProps) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height'

  return (
    <KeyboardAvoidingView behavior={behavior} style={style.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.content}>
          {children}
          <Footer />
        </View>
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
