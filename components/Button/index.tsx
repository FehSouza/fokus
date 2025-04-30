import { theme } from '@/theme'
import { Pressable, StyleSheet, Text } from 'react-native'

interface ButtonProps {
  icon?: JSX.Element
  text: string
  outline?: boolean
  onPress: () => void
}

export const Button = ({ icon, text, outline, onPress }: ButtonProps) => {
  return (
    <Pressable style={[style.container, outline && style.containerOutline]} onPress={onPress}>
      {icon}
      <Text style={[style.text, outline && style.textOutline]}>{text}</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.lilac,
    borderRadius: 32,
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  containerOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.colors.lilac,
  },

  text: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    color: theme.colors.blue700,
  },

  textOutline: {
    color: theme.colors.lilac,
  },
})
