import { Button, CloseIcon, ContainerKeyboardAvoiding, SaveIcon, TrashIcon } from '@/components'
import { TasksContext } from '@/context/tasks/context'
import { theme } from '@/theme'
import { router } from 'expo-router'
import { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function AddTask() {
  const [title, setTitle] = useState('')
  const { addTask } = useContext(TasksContext)

  const handleTask = () => {
    addTask(title)
    setTitle('')
    router.navigate('/tasks')
  }

  return (
    <ContainerKeyboardAvoiding>
      <Text style={style.title}>Adicionar tarefa:</Text>

      <View style={style.taskContent}>
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
          <Button text="Cancelar" icon={<CloseIcon />} variant="text" onPress={() => {}} />
          <Button text="Deletar" icon={<TrashIcon />} variant="text" onPress={() => {}} />
          <Button text="Salvar" icon={<SaveIcon />} variant="text" onPress={handleTask} />
        </View>
      </View>
    </ContainerKeyboardAvoiding>
  )
}

const style = StyleSheet.create({
  title: {
    paddingHorizontal: 24,
    fontFamily: 'Unbounded_400Regular',
    fontSize: 26,
    lineHeight: 49,
    textAlign: 'center',
    color: theme.colors.white,
  },

  taskContent: {
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
