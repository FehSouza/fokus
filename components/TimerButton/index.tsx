import { theme } from '@/theme'
import { Pressable, StyleSheet, Text } from 'react-native'

interface TimerButtonProps {
  id: string
  label: string
  isActive: boolean
  onPress: (id: string) => void
}

export const TimerButton = ({ id, label, isActive, onPress }: TimerButtonProps) => {
  return (
    <Pressable style={[style.container, isActive && style.active]} onPress={() => onPress(id)}>
      <Text style={[style.label, isActive && style.activeLabel]}>{label}</Text>
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

  label: {
    color: theme.colors.white,
    fontSize: 12,
  },

  activeLabel: {
    fontWeight: 'bold',
  },
})
