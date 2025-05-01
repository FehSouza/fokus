import { theme } from '@/theme'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  icon?: JSX.Element
  text: string
  outline?: boolean
  onPress: () => void
}

export const Button = ({ icon, text, outline, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[style.container, outline && style.containerOutline]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {icon}
      <Text style={[style.text, outline && style.textOutline]}>{text}</Text>
    </TouchableOpacity>
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
