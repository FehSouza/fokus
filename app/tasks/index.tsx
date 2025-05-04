import { Button, Container, PlusIcon, Task } from '@/components'
import { TasksContext } from '@/context/tasks/context'
import { theme } from '@/theme'
import { router } from 'expo-router'
import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Tasks() {
  const { tasks } = useContext(TasksContext)

  return (
    <Container>
      <Text style={style.title}>Lista de tarefas:</Text>

      {!tasks?.length && <Text style={style.text}>Ainda não há tarefas na sua lista,{'\n'}que tal adicionar?</Text>}

      {!!tasks?.length && (
        <View style={style.tasksContent}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              done={task.done}
              handleDone={() => console.log('done')}
              handleEdit={() => console.log('edit')}
              handleDelete={() => console.log('delete')}
            />
          ))}
        </View>
      )}

      <View style={style.buttonContent}>
        <Button
          text="Adicionar nova tarefa"
          icon={<PlusIcon />}
          variant="outlined"
          onPress={() => router.navigate('/addTask')}
        />
      </View>
    </Container>
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

  text: {
    paddingHorizontal: 24,
    marginTop: 32,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    color: theme.colors.gray,
  },

  tasksContent: {
    gap: 8,
    marginTop: 32,
    paddingHorizontal: 24,
  },

  buttonContent: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
})
