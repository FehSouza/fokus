import { theme } from '@/theme'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CheckIcon, EditIcon } from '../Icons'

interface TaskProps {
  done: boolean
  title: string
  handleDone: () => void
  handleEdit: () => void
}

export const Task = ({ done, title, handleDone, handleEdit }: TaskProps) => {
  return (
    <View style={[style.task, done && style.taskDone]}>
      <TouchableOpacity activeOpacity={0.7} onPress={handleDone}>
        <CheckIcon checked={done} />
      </TouchableOpacity>

      <Text style={style.title}>{title}</Text>

      <TouchableOpacity activeOpacity={0.7} onPress={handleEdit}>
        <EditIcon />
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: theme.colors.gray,
    borderRadius: 8,
  },

  taskDone: {
    backgroundColor: theme.colors.green700,
  },

  title: {
    flex: 1,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    lineHeight: 27,
    color: theme.colors.blue700,
  },
})
