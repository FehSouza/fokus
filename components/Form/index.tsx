import { TasksContext } from '@/context/tasks/context'
import { theme } from '@/theme'
import { router } from 'expo-router'
import { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from '../Button'
import { CloseIcon, SaveIcon } from '../Icons'

interface FormProps {
  id?: string
}

export const Form = ({ id }: FormProps) => {
  const [title, setTitle] = useState('')
  const { tasks, addTask, updateTask } = useContext(TasksContext)

  useEffect(() => {
    if (!id) return
    const task = tasks.find((task) => task.id === Number(id))
    if (task) setTitle(task.title)
  }, [id, tasks])

  const handleAddTask = () => {
    if (!title) return

    !id ? addTask(title) : updateTask(Number(id), title)
    setTitle('')
    router.navigate('/tasks')
  }

  const handleBack = () => {
    setTitle('')
    router.navigate('/tasks')
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>Em que você está trabalhando?</Text>

      <TextInput
        style={style.input}
        placeholder="Digite aqui..."
        placeholderTextColor={theme.colors.gray}
        multiline
        numberOfLines={5}
        value={title}
        onChangeText={setTitle}
      />

      <View style={style.buttonsWrapper}>
        <Button text="Cancelar" icon={<CloseIcon />} variant="text" onPress={handleBack} />
        <Button text="Salvar" icon={<SaveIcon />} variant="text" onPress={handleAddTask} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    gap: 32,
    marginTop: 32,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: theme.colors.gray,
    borderRadius: 8,
  },

  text: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    lineHeight: 27,
    color: theme.colors.blue700,
  },

  input: {
    minHeight: 120,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    lineHeight: 24,
    padding: 16,
  },

  buttonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})
