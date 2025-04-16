import { theme } from '@/theme'
import { Pressable, StyleSheet, Text } from 'react-native'

interface TimeButtonProps {
  id: string
  label: string
  isActive: boolean
  onPress: (id: string) => void
}

export const TimeButton = ({ id, label, isActive, onPress }: TimeButtonProps) => {
  return (
    <Pressable style={[style.container, isActive && style.active]} onPress={() => onPress(id)}>
      <Text style={[style.text, isActive && style.textActive]}>{label}</Text>
    </Pressable>
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
    color: theme.colors.white,
    fontSize: 12,
  },

  textActive: {
    fontWeight: 'bold',
  },
})
