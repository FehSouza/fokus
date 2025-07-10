import { Button, Container, PlusIcon, Task } from '@/components'
import { TasksContext } from '@/context/tasks/context'
import { theme } from '@/theme'
import { router } from 'expo-router'
import { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Tasks() {
  const { tasks, toggleTaskDone, deleteTask } = useContext(TasksContext)

  return (
    <Container scrollable={false}>
      <Text style={style.title}>Lista de tarefas:</Text>

      <View style={style.tasksContent}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              title={item.title}
              done={item.done}
              handleDone={() => toggleTaskDone(item.id)}
              handleEdit={() => router.navigate(`/editTask/${item.id}`)}
              handleDelete={() => deleteTask(item.id)}
            />
          )}
          keyExtractor={(item) => `item-${item.id}`}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          ListEmptyComponent={() => (
            <Text style={style.text}>Ainda não há tarefas na sua lista,{'\n'}que tal adicionar?</Text>
          )}
        />
      </View>

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

  tasksContent: {
    maxHeight: 376,
    marginTop: 32,
    paddingHorizontal: 24,
  },

  text: {
    paddingHorizontal: 24,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    color: theme.colors.gray,
  },

  buttonContent: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
})
