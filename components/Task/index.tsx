import { theme } from '@/theme'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { CheckIcon, EditIcon, TrashIcon } from '../Icons'

interface TaskProps {
  done: boolean
  title: string
  handleDone: () => void
  handleEdit: () => void
  handleDelete: () => void
}

export const Task = ({ done, title, handleDone, handleEdit, handleDelete }: TaskProps) => {
  return (
    <View style={[style.task, done && style.taskDone]}>
      <Pressable onPress={handleDone}>
        <CheckIcon checked={done} />
      </Pressable>

      <Text style={style.title}>{title}</Text>

      <Pressable onPress={handleEdit}>
        <EditIcon />
      </Pressable>

      <Pressable onPress={handleDelete}>
        <TrashIcon />
      </Pressable>
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
