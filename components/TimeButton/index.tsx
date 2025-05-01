import { theme } from '@/theme'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface TimeButtonProps {
  id: string
  label: string
  isActive: boolean
  onPress: (id: string) => void
}

export const TimeButton = ({ id, label, isActive, onPress }: TimeButtonProps) => {
  return (
    <TouchableOpacity
      style={[style.container, isActive && style.active]}
      activeOpacity={0.7}
      onPress={() => onPress(id)}
    >
      <Text style={style.text}>{label}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
  },

  active: {
    backgroundColor: theme.colors.blue500,
  },

  text: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
    color: theme.colors.white,
    textAlign: 'center',
  },
})
