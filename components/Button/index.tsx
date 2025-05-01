import { theme } from '@/theme'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  text: string
  icon?: JSX.Element
  variant?: 'text' | 'outlined' | 'contained'
  onPress: () => void
}

export const Button = ({ text, icon, variant = 'contained', onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        style.container,
        variant === 'outlined' && style.containerOutline,
        variant === 'text' && style.containerText,
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {icon}
      <Text style={[style.label, variant === 'outlined' && style.labelOutline, variant === 'text' && style.labelText]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
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

  containerText: {
    minHeight: 40,
    gap: 4,
    backgroundColor: 'transparent',
    borderRadius: 0,
  },

  label: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    color: theme.colors.blue700,
  },

  labelOutline: {
    color: theme.colors.lilac,
  },

  labelText: {
    fontSize: 12,
  },
})
